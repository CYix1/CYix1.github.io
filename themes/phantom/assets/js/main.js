(function () {
  var body = document.body;

  /* Menu */
  var openBtn = document.getElementById('menu-open');
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    openBtn.setAttribute('aria-expanded', open);
  }
  openBtn.addEventListener('click', function () { setMenu(true); });
  document.getElementById('menu-close').addEventListener('click', function () { setMenu(false); });
  document.getElementById('menu-backdrop').addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* Dark mode */
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* Code copy buttons */
  document.querySelectorAll('.prose pre').forEach(function (pre) {
    var host = pre.closest('.highlight') || pre;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'copy-btn'; b.textContent = 'Copy';
    b.addEventListener('click', function () {
      navigator.clipboard.writeText(pre.innerText).then(function () {
        b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1500);
      });
    });
    host.style.position = 'relative';
    host.appendChild(b);
  });

  /* Search */
  var box = document.getElementById('q');
  if (!box) return;
  var out = document.getElementById('results');
  var status = document.getElementById('search-status');
  var data = null;

  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function re(terms) { return new RegExp('(' + terms.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')', 'gi'); }

  function load() {
    if (data) return Promise.resolve(data);
    return fetch(box.dataset.index).then(function (r) { return r.json(); }).then(function (d) {
      d.forEach(function (p) {
        p._t = p.title.toLowerCase();
        p._g = (p.tags || []).join(' ').toLowerCase();
        p._c = (p.content || '').toLowerCase();
      });
      return (data = d);
    });
  }

  function snippet(p, terms) {
    var text = p.content || p.summary || '';
    var i = text.toLowerCase().indexOf(terms[0]);
    var start = Math.max(0, i - 60);
    var s = text.slice(start, start + 200).replace(/\s+/g, ' ');
    return (start > 0 ? '…' : '') + esc(s).replace(re(terms.map(esc)), '<mark>$1</mark>') + '…';
  }

  function run() {
    var q = box.value.trim().toLowerCase();
    history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname);
    if (!q) { out.innerHTML = ''; status.textContent = ''; return; }
    var terms = q.split(/\s+/);
    load().then(function (d) {
      var hits = [];
      d.forEach(function (p) {
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          var t = terms[i], s = 0;
          if (p._t.indexOf(t) > -1) s += 10;
          if (p._g.indexOf(t) > -1) s += 5;
          if (p._c.indexOf(t) > -1) s += 1;
          if (!s) return;          // every term must match somewhere
          score += s;
        }
        hits.push({ p: p, score: score });
      });
      hits.sort(function (a, b) { return b.score - a.score; });
      status.textContent = hits.length + (hits.length === 1 ? ' result' : ' results');
      out.innerHTML = hits.slice(0, 50).map(function (h) {
        return '<li><a href="' + esc(h.p.url) + '">' + esc(h.p.title) + '</a><span class="sec">' + esc(h.p.section || '') + '</span><p>' + snippet(h.p, terms) + '</p></li>';
      }).join('');
    });
  }

  box.addEventListener('input', run);
  var init = new URLSearchParams(location.search).get('q');
  if (init) { box.value = init; run(); }
})();
