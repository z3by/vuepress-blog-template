# Vuepress Blog Template

a vuepress blog example

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ed35817-7428-4e82-85f8-fe85b6ae7b2c/deploy-status)](https://app.netlify.com/sites/loving-tereshkova-33863e/deploys)

## [Live Demo](https://vuepress-blog-template.z3by.com/)

## [Tutorial](https://www.ahmadmostafa.com/how-to-create-vuepress-blog/)
## Getting Started

to start create a vuepress blog using this template you need to :

- fork the repository
- clone your own fork

```bash
git clone https://github.com/<YOUR USERNAME>/vuepress-blog-template
```

- install it locally [installing](#installing)
- add some markdown posts to `_posts`, check the existing example
- deploy your blog, check [Deployment](#deployment)

### Installing

navigate to the repository directory

```bash
cd vuepress-blog-template
```

install dependencies

```bash
yarn install
```

run a development live server

```bash
yarn dev
```

## Deployment

1. generate the static files using:

```bash
yarn build
```

2. deploy the content of `.vuepress/dist` to any hosting service, or you can use [netlify](https://www.netlify.com/) for continues deployment.

## Built With

- [vuepress](https://vuepress.vuejs.org/)
- [@vuepress/theme-blog](https://vuepress-theme-blog.ulivz.com/)
- [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/)

## Authors

- **Ahmad Mostafa** - _Initial work_ - [z3by](https://github.com/z3by)

## License

This project is licensed under the MIT License
