# Yixis Playground

Hugo site with a custom Phantom-style theme (themes/phantom), published to https://cyix1.github.io/ by GitHub Actions.

## Publish a post (the normal workflow)

1. Create the file (or just copy `content/posts/example-post.md`):

   ```powershell
   hugo new posts/my-first-post.md
   ```

2. Edit `content/posts/my-first-post.md`. The top block is the front matter:

   ```markdown
   ---
   title: "My first post"
   date: 2026-11-26
   draft: false            # drafts (true) are NOT published
   tags: ["python", "notes"]
   categories: ["dev"]
   summary: "One line shown in the post list."
   ---
   Your Markdown here...
   ```

3. (Optional) preview locally at http://localhost:1313 :

   ```powershell
   hugo server -D
   ```

4. Publish. This is the "one button":

   ```powershell
   git add .
   git commit -m "post: my first post"
   git push
   ```

   GitHub Actions builds the site and deploys it in about a minute. Watch it in the repo's **Actions** tab.

You can also create or edit `.md` files directly on github.com (pencil icon, then Commit). That triggers the same deploy, with no local tools needed.

## Rules of thumb

- Posts go in `content/posts/`. Only these show on the home page.
- Images go in `static/images/` and are used as `![alt](/images/name.png)`.
- Tags are just the `tags: [...]` list. Pages `/tags/` and `/tags/<name>/` are generated automatically.
- Never commit `public/` or `resources/`. They are build output, and `.gitignore` excludes them.
- The PCG notes (`content/PCGBook`, `Algorithms_Concepts`, `PCGWiki`) are plain notes. A new note needs at least `title:` front matter. Notes without it still build, but their titles come from the filename.

## One-time setup (already done, for reference)

- GitHub repo, then **Settings, Pages, Source: GitHub Actions**.
- The theme is the git submodule `themes/PaperMod`, pinned to a commit that works with Hugo 0.145. After a fresh clone run `git submodule update --init`.
- Hugo version used in CI: `HUGO_VERSION` in `.github/workflows/hugo.yaml`. Keep it in sync with the version you run locally (`hugo version`).
