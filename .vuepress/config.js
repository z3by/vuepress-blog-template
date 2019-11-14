module.exports = {
  title: "VuePress Blog Example",
  description: "This is a blog example built by VuePress",
  theme: 'modern-blog',
  themeConfig: {
    summary: true,
    summaryLength: 400,
    heroImage: "https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2293&q=80", // this is the default value you can override it.
    head: [ // this will be embedded to the <head /> section.
      ['link', { rel: "shortcut icon", href: "/favicon.png" }]
    ],
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "el-icon-house"
      },
      {
        text: "Projects",
        link: "/pages/projects/",
        icon: "el-icon-folder"
      },
      {
        text: "About",
        link: "/pages/about/",
        icon: "el-icon-user"
      },
    ],
    sitemap: true, // enables sitemap plugin
    hostname: "https://yourdomain.com/", // required for sitemap
    disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    socialShare: true, // enables social share
    socialShareNetworks: ["facebook", "twitter"], // required for social share plugin
    googleAnalytics: "", // Google Analytics tracking ID
    about: {
      fullName: "Ahmad Mostafa",
      bio: "I am a passionate Software Engineer, I love Vue.js ♥ ...",
      // image: "/images/image.png" / refers to the public directory
      image: "https://www.ahmadmostafa.com/images/bg_1.png"
    },
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/z3by"
        },
        {
          type: "instagram",
          link: "#"
        },
        {
          type: "linkedin",
          link: "#"
        },
        {
          type: "twitter",
          link: "#"
        },
        {
          type: "youtube",
          link: "#"
        }
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: ""
        }
      ]
    }
  }
};
