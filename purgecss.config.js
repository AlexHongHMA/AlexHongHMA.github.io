module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // medium-zoom is loaded from a CDN and adds its classes at runtime, so they
  // appear nowhere in _site for purgecss to find. Without this, rules
  // targeting the opened lightbox are stripped from the deployed stylesheet
  // even though they build correctly.
  safelist: {
    standard: [/^medium-zoom/],
  },
};
