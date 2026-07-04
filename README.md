# En Neelothi — Aashiq & Niveditha

A scrolling story-site chronicling a long-distance love story, from first photo to "4289.2 KM & counting."

## Structure

```
.
├── index.html      # Main page markup
├── style.css       # All styling (fonts, colors, layout, animations)
├── script.js       # Scroll-reveal animation + progress rail logic
├── favicon.ico     # Site favicon
├── images/         # All photos used throughout the page
│   ├── 01-our-first-photo-together.jpg
│   ├── 02-first-birthday-together.jpg
│   ├── 03-mumbai-diary.jpg
│   ├── 04-coldplay-concert.jpg
│   ├── 05-first-bangalore-pub.jpg
│   ├── 06-your-first-birthday-with-me.jpg
│   ├── 07-dehradun.jpg
│   ├── 08-mussoorie.jpg
│   ├── 09-my-comfort-place.jpg
│   ├── 10-random-day-at-chennai-beach.jpg
│   ├── 11-you-and-me-at-coimbatore.jpg
│   ├── 12-one-last-trip.jpg
│   ├── 13-getting-on-the-train-at-coimbatore.jpg
│   ├── 14-last-picture-before-exiting-india.jpg
│   └── 15-first-long-distance-birthday.jpg
└── README.md
```

## Notes

- Originally, all photos were embedded directly in the HTML as base64 data URIs. They've been extracted into the `images/` folder as standalone `.jpg` files, and the markup now references them via relative paths (`images/filename.jpg`).
- All inline `<style>` and `<script>` blocks have been split out into `style.css` and `script.js` respectively.
- Google Fonts (Playfair Display, Jost, IBM Plex Mono) are loaded via `<link>` tags in the `<head>`, same as the original.
- To view the site, just open `index.html` in a browser — no build step or server required (though a local server is recommended if your browser restricts `file://` image loading).

## Credits

Made with everything we've got, for Niveditha — from Aashiq.
