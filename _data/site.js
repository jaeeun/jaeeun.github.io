// Global site config (ported from _config.yml).
// Available in templates as `site.*`.
//
// `url` is empty by default so all `{{ site.url }}/...` links are root-relative
// and work on localhost. For a production build, set SITE_URL:
//   SITE_URL=https://jaeeun.github.io npm run build
module.exports = {
  name: "Jaeeun (Jalen) Yang",
  title: "Senior Software Engineer | 14+ Years Experience | 5 US Patents",
  bio: "Senior Software Engineer | 14+ Years Experience | 5 US Patents",
  description: "",
  reading_time: true,
  words_per_minute: 200,
  logo: "Site/assets/profile/sydney_with_son.jpg",
  background: "Site/assets/img/placeholder-big.jpg",
  icon: "Site/assets/img/favicons/apple-icon-72x72.png",
  tiled_bg: false,
  locale: "en_US",
  url: process.env.SITE_URL || "",

  mathjax: true,

  // Social (underscore keys — Liquid can't read hyphenated names)
  email: "yangtkboy@gmail.com",
  github_url: "jaeeun",
  linkedin: "jaeeunyang",
  instagram: "yangtkboy",
  phone: "+1-437-933-1212",
  website: "jaeeun.github.io",
};
