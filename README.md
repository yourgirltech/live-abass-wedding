# Live & Abass — Wedding Website

A premium, editorial-style wedding website built with **React + Vite**. Ivory, champagne and
soft-white palette, Cormorant Garamond + Jost typography, subtle scroll animations.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Building for deployment

```bash
npm run build
```

This outputs a static site to `dist/` — upload that folder's contents to any static host
(Netlify, Vercel, GitHub Pages, your own server, etc).

## Where to edit things

Almost everything editable lives in **`src/data/content.js`**:

- `RSVP_LINK` — paste your WithJoy (or other) RSVP URL here once it's ready. Every "RSVP Now"
  button across the site (nav, hero, RSVP section) updates automatically. Leave it as `''` and
  the buttons quietly link to the RSVP section instead.
- `WEDDING_DATETIME_ISO` / `WEDDING_END_DATETIME_ISO` — drives the homepage countdown and the
  "Add to Calendar" download.
- `VENUE`, `HOTEL`, `CONTACT` — venue/address, hotel, and contact details.
- `timeline` — the "Our Story" milestones.
- `galleryItems` — gallery placeholder labels/categories.
- `faqItems` — FAQ questions and answers.

### Photos

Every photo in the site is currently an elegant placeholder (camera/heart icon + label). To drop
in real photography:

- **Our Story / Gallery**: open `src/components/OurStory.jsx` or `src/components/Gallery.jsx`
  and replace the `<div className="photo-placeholder">...</div>` block for a given item with
  `<img src="/assets/your-photo.jpg" alt="..." />`. Add your image files to `public/assets/`.
- **Hero video**: already wired up — it uses `public/assets/hero-video.mp4` (with
  `hero-poster.jpg` as a fallback poster frame). Swap those files to replace it.

### Welcome video

Open `src/components/WelcomeVideo.jsx` and replace the placeholder block (marked with a comment)
with your embed code, e.g. a YouTube/Vimeo `<iframe>`.

### Google Maps

Open `src/components/WeddingDetails.jsx` and replace the `.map-placeholder` block (marked with a
comment) with a live Google Maps `<iframe>` embed. The "Get Directions" and "Open Map" buttons
already link to a working Google Maps search for the venue address, so they work as-is.

### Social links

Open `src/components/Footer.jsx` and replace the `href="#"` placeholders on the Instagram and
Facebook icons with your real links.

## Project structure

```
src/
  data/content.js       Central config — RSVP link, dates, copy, lists
  hooks/                 useCountdown, useReveal (scroll animations)
  components/            One file per section (Hero, OurStory, Gallery, FAQ, etc.)
  index.css              Full design system (palette, type, layout, responsive)
public/assets/           Hero video, poster image
```
