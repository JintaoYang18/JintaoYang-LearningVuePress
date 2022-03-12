---
sidebar: auto
next: /config/cop
---

# 指南


## 介绍 📘

> VuePress 是尤雨溪(vue.js 框架作者)4月12日发布的一个全新的基于 vue 的静态网站生成器,实际上就是一个 vue 的 spa 应用,内置 webpack,可以用来写文档。
> VuePress 是一个以 Markdown 为中心的静态网站生成器,可以使用 Markdown 来书写内容（如文档、博客等）。

![学习VuePress](./assets/hero.png)

学习 VuePress。


## 快速开始 🔛

接下来简单介绍如何手动将默认博客主题添加到新项目中。

### 依赖 🕹️
- Node.js v12+
- Yarn 

### 安装 🔩
```bash
# 1.在项目目录中安装
yarn add -D vuepress@next

# 2. 新建 markdown 文件
echo '# Hello VuePress' > README.md

# 3. 开始写作
yarn docs:dev  # 或者 yarn vuepress dev

# 4. 构建静态文件
yarn docs:build  # 或者 yarn vuepress build
```

### 写作 📝
注意在 `docs\.vuepress\config.js` 中编写目录结构，logo等信息。

### 部署到GitHub 📢
前置条件：Markdown 源文件放置在项目的 docs 目录；使用的是默认的构建输出目录 (.vuepress/dist) ；使用 Yarn classic 作为包管理器。

VuePress 作为项目依赖安装，并在 `package.json` 中配置了如下脚本：
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:deploy": "bash deploy.sh"
  }
}
```
并在 `package.json` 中配置`"repository"、"homepage"`链接。

**工作流**

1. 设置 `base`（在 `docs\.vuepress\config.js` 中）。

    如果发布到 `https://<USERNAME>.github.io/` ，可以省略这一步。

    如果发布到 `https://<USERNAME>.github.io/<REPO>/` ，则将 `base` 设置为 `"/<REPO>/"`。

2. 配置GitHub Actions。

    创建 `.github/workflows/docs.yml` 文件来配置工作流。

```yml
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: '14'

      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
## 最后 🔚
现在，在 `localhost:8080` 上查看博客，如果一切正常，恭喜！

<!-- ## 快速开始

接下来讲的是如何手动将默认博客主题添加到新项目中。

```bash
mkdir blog && cd blog # Create an empty directory and go into it

yarn add vuepress @vuepress/theme-blog -D # Install the dependencies
# OR npm install vuepress @vuepress/theme-blog -D
```
### Folder structure

Here's the recommended project structure:

**Required**:

- `blog/.vuepress/config.js`: Entry file of configuration, can also be `yml` or `toml`.
- `blog/_posts`: Stores your post content.

**Optional**:

- `blog/.vuepress/components`: The Vue components .


### Using @vuepress/theme-blog

You must add `@vuepress/theme-blog` as a theme in `.vuepress/config.js`.

```js
// .vuepress/config.js
module.exports = {
  title: 'VuePress Blog Example', // Title for the site. This will be displayed in the navbar.
}
```


From now on, you can run `yarn dev` or `npm run dev` and head `localhost:8080` to see your blog!

### Generating content

The `_posts` folder is where your blog posts live. You can simply write blog posts in Markdown.

All blog post files can begin with front matter. Only `title` is required, but we recommend you define all frontmatter variables as below. They'll be used to set the corresponding layout. Check out [frontmatter](config/front-matter) for more details.


### Blog tags

By default, Navigate to `/tag/`, you'll see the tag entry page.
You can set you own tags in front matter, and they'll automatically be classified:


### Summary

By default, summary will be extracted from source markdowns. If you need to override it, we present the following two approaches:

1. [Writing the summary manually in frontmatter](./front-matter.md#summary)



## Quick Start

Step 1: Scaffolding out a VuePress blog
```bash
yarn create vuepress [blogName]

cd [blogName] && yarn
```

Step 2: Develop & Build


By default, VuePress dev server is listening at `http://localhost:8080/`, whereas the built files will be in `.vuepress/dist`.

:::warning

However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.
:::

## Final

Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config) -->
