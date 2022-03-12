export const siteData = {
  "base": "/JintaoYang-LearningVuePress/",
  "lang": "en-US",
  "title": "Yang's Learning VuePress",
  "description": "fun",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "./images/logo2.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
