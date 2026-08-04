// Directory data: applies to every markdown file under _posts/
module.exports = {
  layout: "post.html",
  comments: true,
  eleventyComputed: {
    // Normalize the various Jekyll taxonomies (`tag:`, `categories:`) into
    // Eleventy `tags`, plus a "post" marker so `collections.post` = all posts.
    tags: (data) => {
      const out = new Set(["post"]);
      const add = (v) => {
        if (!v) return;
        (Array.isArray(v) ? v : [v]).forEach((x) => {
          if (x != null && String(x).trim()) out.add(String(x).trim());
        });
      };
      add(data.tag);
      add(data.categories);
      return [...out];
    },
    // Match Jekyll's `permalink: /:title/` (slug derived from the filename).
    permalink: (data) => `/${data.page.fileSlug}/`,
  },
};
