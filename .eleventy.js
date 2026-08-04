const markdownIt = require("markdown-it");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Eleventy doesn't parse YAML data files natively (Jekyll does) — register it
  // so `_data/*.yml` (experience, projects, education, patents, about, …) load.
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  // --- Markdown library (also exposed as a `markdownify` filter) ---
  const md = markdownIt({ html: true, breaks: false, linkify: true });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("markdownify", (str) =>
    str == null ? "" : md.render(String(str))
  );
  eleventyConfig.addFilter("markdownifyInline", (str) =>
    str == null ? "" : md.renderInline(String(str))
  );

  // --- Liquid: keep Jekyll-style includes ---
  //   `{% include foo.html %}` (no quotes) and `{% include foo.html x="y" %}`
  //   with params read via `{{ include.x }}` inside the partial.
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    jekyllInclude: true,
    strictFilters: false,
  });

  // --- Filters used by templates ---

  // Jekyll's `date_to_string` -> "07 May 2023"
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  eleventyConfig.addFilter("date_to_string", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    if (isNaN(d)) return "";
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${day} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });

  // Reading time from rendered HTML content
  eleventyConfig.addFilter("readingTime", (html, wpm = 200) => {
    const text = String(html || "").replace(/<[^>]*>/g, " ");
    const words = (text.match(/\S+/g) || []).length;
    const minutes = Math.max(1, Math.round(words / wpm));
    return minutes;
  });

  eleventyConfig.addFilter("striptags", (html) =>
    String(html || "").replace(/<[^>]*>/g, "")
  );

  // RFC-3339 timestamp for the Atom feed (e.g. 2023-05-11T00:00:00.000Z)
  eleventyConfig.addFilter("dateToRfc3339", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return isNaN(d) ? "" : d.toISOString();
  });

  eleventyConfig.addFilter("truncatewords", (str, n = 30) => {
    const words = String(str || "").trim().split(/\s+/);
    return words.length > n ? words.slice(0, n).join(" ") + " …" : words.join(" ");
  });

  // Filter a post list down to those carrying a given tag.
  eleventyConfig.addFilter("filterByTag", (posts, tag) =>
    (posts || []).filter((p) => (p.data.tags || []).includes(tag))
  );

  // Drop project write-ups — those have their own section, so the blog list and
  // its tag counts must agree on excluding them.
  eleventyConfig.addFilter("rejectProjects", (posts) =>
    (posts || []).filter((p) => !p.data.project)
  );

  // --- Collections ---
  // All blog posts (files under _posts get the "post" tag via directory data)
  eleventyConfig.addCollection("post", (api) =>
    api.getFilteredByTag("post").sort((a, b) => b.date - a.date)
  );

  // Sorted list of every tag (minus internal markers) for the tag archive page
  const EXCLUDED_TAGS = new Set(["post", "all"]);
  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    api.getAll().forEach((item) => {
      (item.data.tags || []).forEach((t) => {
        if (!EXCLUDED_TAGS.has(t)) tags.add(t);
      });
    });
    return [...tags].sort((a, b) => a.localeCompare(b));
  });

  // --- Passthrough copy of static assets (NOT the templated pages under Site/) ---
  eleventyConfig.addPassthroughCopy("Site/assets");
  eleventyConfig.addPassthroughCopy("Site/libs");
  eleventyConfig.addPassthroughCopy("Site/favicon.ico");
  eleventyConfig.addPassthroughCopy("Site/favicon.png");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["html", "md", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    pathPrefix: "/",
  };
};
