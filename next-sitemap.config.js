/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://coloradoinsuranceservices.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Higher priority for main pages
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (
      path === "/about" ||
      path === "/contact" ||
      path === "/get-a-quote" ||
      path === "/insurance" ||
      path === "/blog"
    ) {
      priority = 0.9;
    } else if (
      path.startsWith("/insurance/personal/") ||
      path.startsWith("/insurance/commercial/")
    ) {
      priority = 0.8;
    } else if (path.startsWith("/blog/")) {
      priority = 0.7;
      changefreq = "monthly";
    } else if (path.match(/^\/[a-z]+-?[a-z]*\/[a-z]+-?[a-z-]*$/)) {
      // City + line combo pages
      priority = 0.6;
    } else if (path.startsWith("/resources/glossary/")) {
      priority = 0.5;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
