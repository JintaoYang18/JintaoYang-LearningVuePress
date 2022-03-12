export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "指南",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "next": "/config/cop"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "介绍 📘",
      "slug": "介绍-📘",
      "children": []
    },
    {
      "level": 2,
      "title": "快速开始 🔛",
      "slug": "快速开始-🔛",
      "children": [
        {
          "level": 3,
          "title": "依赖 🕹️",
          "slug": "依赖-🕹️",
          "children": []
        },
        {
          "level": 3,
          "title": "安装 🔩",
          "slug": "安装-🔩",
          "children": []
        },
        {
          "level": 3,
          "title": "写作 📝",
          "slug": "写作-📝",
          "children": []
        },
        {
          "level": 3,
          "title": "部署到GitHub 📢",
          "slug": "部署到github-📢",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "最后 🔚",
      "slug": "最后-🔚",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1647077576000,
    "contributors": [
      {
        "name": "JintaoYang18",
        "email": "colsonyang212@gmail.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
