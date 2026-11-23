# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal academic site for Htet Myat Aung (Alex), served at https://hmaung.com (`CNAME`). It is a fork of the **al-folio** Jekyll theme. The root `README.md`, `INSTALL.md`, `CUSTOMIZE.md` and `FAQ.md` are upstream al-folio docs, not documentation for this site. `.github/agents/*.agent.md` are upstream al-folio agent prompts. Use them as theme reference only.

## Commands

```bash
bundle install                     # gems go to vendor/bundle (.bundle/config); bundler lives in ~/.local/share/gem/ruby/*/bin, add it to PATH
bundle exec jekyll serve --livereload   # local dev at http://localhost:4000
bundle exec jekyll build           # one-off build into _site/
JEKYLL_ENV=production bundle exec jekyll build && npx purgecss -c purgecss.config.js   # reproduce the deployed CSS
npx prettier . --check             # CI fails on formatting (printWidth 150, Liquid plugin)
npx prettier --write <file>
docker compose up                  # alternative: prebuilt al-folio image on :8080
```

There are no tests. Check a change by building it and viewing it. Restart `jekyll serve` after editing `_config.yml` or anything in `_plugins/`, because neither reloads on its own.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`. It runs a production build, runs purgecss over `_site`, and pushes `_site` to the `gh-pages` branch. The workflow has path filters, so a new file type at the root may need adding there before it triggers a deploy.

## Where the site's content lives

- **Navbar pages** (`nav: true`): `_pages/aboutme.md` (`/about/`), `news.md`, `publications.md`, `cv.md`. The other pages in `_pages/` (blog, projects, teaching, books, repositories, profiles, dropdown, about_einstein) are leftover theme pages that are switched off.
- **Landing page** is `_pages/about.md` (`/`, `layout: about`). It uses front-matter keys that this fork added: `hero_name` and `eyebrow` (raw HTML allowed). `_layouts/about.liquid` renders them. `site.brand_name` and `site.contact_note` in `_config.yml` are also additions of this fork, used by `_includes/header.liquid`, `_includes/footer.liquid` and the about layout.
- **About timeline** (`aboutme.md`) is hand-written HTML: `.timeline` > `.timeline-item` with `.timeline-year`, `.timeline-body` and an optional `.timeline-media` > `.timeline-collage cols-N`. Images go through `{% include figure.liquid ... zoomable=true %}`. Entries run newest first.
- **News**: `_news/announcement_N.md`, `inline: true` for one-liners. Bib entries link to these by `award_url: /news/announcement_N/`.
- **Publications**: `_bibliography/papers.bib`, rendered by jekyll-scholar through `_layouts/bib.liquid`. On top of the standard al-folio fields (`abbr`, `selected`, `preview`, `google_scholar_id`, ...), the layout here also reads `award_name`, `award_url` (a relative path or a full URL) and `certificate`. Any new custom field must also be added to `filtered_bibtex_keywords` in `_config.yml`, or it shows up in the displayed BibTeX.
- **CV page**: `/cv/` is HTML rendered by `_layouts/cv.liquid` from `_data/cv.yml` (RenderCV-style YAML). There is deliberately no CV PDF and no RenderCV workflow. Sections render in YAML order after Education. The layout maps the custom section names `Research & Professional Experience`, `Leadership & Activities`, `Awards & Recognition` and `Technical Skills` to the `_includes/cv/*` renderers, so rename a section only together with that mapping. `assets/json/resume.json` (JSONResume) is published but unused.
- **Images**: `assets/img/` (portrait `prof_pic.jpg`), `assets/img/aboutme/`, `assets/img/news/`. `*:Zone.Identifier` files are Windows/WSL leftovers and are gitignored. Do not commit them.

## Styling

Almost all custom styling lives in `_sass/_base.scss`, in commented sections near the end of the file: hero, news feed, email popover, the shared timeline spine used by both About and Publications, the publication row grid, and the footer. Change those sections rather than adding new stylesheets. Theme colours are in `_sass/_themes.scss` and `_variables.scss`.

## Things that are easy to break

- **purgecss** (`purgecss.config.js`) runs only in production and strips CSS classes it can't find in `_site`. A class added only at runtime by JS (for example medium-zoom, loaded from a CDN) must go in `safelist`, or it works locally but disappears from the live site.
- **CSS cache-busting**: `_plugins/cache-bust-fix.rb` overrides the `jekyll-cache-bust` filter, because the gem hashed the wrong directory and the `main.css?v=` value never changed. The hash now covers `_sass/**`, `assets/css/*` and `purgecss.config.js`. If you add another input that affects the output CSS, add it to `SOURCES`.
- **The email address must never appear as text** anywhere in the repo or the built site: not in templates, `_data/`, JSON or PDFs, and not percent- or entity-encoded either. It was removed to stop scraper spam. It is published only as the images `assets/img/contact/contact-{light,dark}.png` (Inter, rendered with ImageMagick, `-strip`), through `_includes/email_image.liquid`, behind a `<details class="email-reveal">` envelope in the footer and the home hero. Never add a `mailto:` link. The same applies to the phone number and street address. After changing anything near contact details, grep `_site` for the address.
- Dimensions badges are turned off on purpose (they rendered broken). Altmetric and Google Scholar badges are on.
