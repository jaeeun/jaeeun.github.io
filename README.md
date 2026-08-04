# jaeeun.github.io

[my blog](https://jaeeun.github.io)

Built with [Eleventy (11ty)](https://www.11ty.dev/) — an npm-based static site
generator. No Ruby / Jekyll required.

## Local development

```bash
npm install          # once
npm start            # build CSS + serve at http://localhost:8080 (live reload)
```

Other scripts:

```bash
npm run build        # one-off production build into _site/
npm run css          # compile SCSS -> Site/assets/css/*.css
npm run clean        # remove _site/
```

For a production build with absolute URLs (canonical / Open Graph tags):

```bash
SITE_URL=https://jaeeun.github.io npm run build
```

## Project layout

| Path | Purpose |
| --- | --- |
| `.eleventy.js` | Eleventy config (filters, collections, passthrough, YAML data support) |
| `_data/*.yml`, `_data/site.js` | Global data (resume data + site config) |
| `_layouts/` | Page layouts (home, post, page, category, project, resume, …) |
| `_includes/` | Partials (head, nav, scripts, 3D widgets, …) |
| `_posts/` | Blog posts (Markdown) |
| `Site/` | Pages + static assets (`Site/assets` is copied verbatim) |

Blog post URLs come from the filename slug (e.g. `_posts/Graphics/2023-05-11-BRDF.md`
→ `/BRDF/`), matching the old Jekyll `permalink: /:title/`.
