---
title: "Example post: how publishing works"
date: 2026-11-26
draft: false
tags: ["meta", "hugo"]
categories: ["notes"]
summary: "A sample post showing front matter, tags, code, images and a table."
---

This is a normal Markdown post. Everything between the `---` lines above is **front matter**: it controls the title, date, tags and whether the post is published.

## Formatting

- **bold**, *italic*, `inline code`
- [Links](https://gohugo.io/) work as usual

```python
def hello():
    print("hello from the blog")
```

| Thing | Where it goes |
|---|---|
| Posts | `content/posts/` |
| Images | `static/images/` |

> Quotes work too.

## Images

Put `photo.png` into `static/images/` and reference it like this:

```markdown
![alt text](/images/photo.png)
```
