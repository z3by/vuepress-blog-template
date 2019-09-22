module.exports = {
  title: "Vuepress blog template",
  description: "vuepress blog template",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Archive",
        link: "/archive/"
      },
      {
        text: "Tags",
        link: "/tag/"
      },
      {
        text: "About",
        link: "/pages/about/"
      }
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/z3by/"
        },
        {
          type: "instagram",
          link: "https://instagram.com/z3bya/"
        },
        {
          type: "facebook",
          link: "https://facebook.com/ahmad.mostafa.z3by/"
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/z3by/"
        },
        {
          type: "twitter",
          link: "https://twitter.com/ahmad_mostafa10/"
        }
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: `MIT Licensed | Copyright © ${new Date().getFullYear()}-present`,
          link: ""
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
            layout: "IndexPost",
            itemLayout: "Post",
            itemPermalink: "/:year/:month/:day/:slug",
            pagination: {
              perPagePosts: 5
            }
          },
          {
            id: "archive",
            dirname: "_archive",
            path: "/archive/",
            layout: "IndexArchive",
            itemLayout: "Post",
            itemPermalink: "/archive/:year/:month/:day/:slug",
            pagination: {
              perPagePosts: 5
            }
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tags",
            frontmatter: { title: "Tags" },
            itemlayout: "Tag",
            pagination: {
              perPagePosts: 5
            }
          }
        ]
      }
    ],
    ["@vuepress/back-to-top"]
  ]
};
