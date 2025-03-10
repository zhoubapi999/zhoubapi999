
const songs = require('./js/songs');
module.exports = {
  "title": "Fish",
  "description": "春日雨，夏蝉鸣，明天是个好天气。",
  "dest": "public",
  "base": "/zhoubapi999/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/imgs/yu.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/zhoubapi999",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次修改",
    "author": "fish",
    "authorAvatar": "/imgs/avatar.jpg",
    "record": "",
    "startYear": "2020",
    "subSidebar": "auto",
    "noFoundPageByTencent": true,
    // "valineConfig": {
    //   "appId": "6BPjxfc5azBJBNXe6Wgrklab-gzGzoHsz",// your appId
    //   "appKey": "KlP9KGHW0RyKbblr81LKa1kp", // your appKey
    // },
    // "codeTheme": "solarizedlight", // 代码主题
  },
  "markdown": {
    "lineNumbers": true
  },
  // 插件
  plugins: [
    // [
    //   "@vuepress-reco/vuepress-plugin-bgm-player", // BGM播放器
    //   {
    //     audios: songs,
    //     autoShrink: true
    //   },
    // ],
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }],
    ['meting', {
      //metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        server: "netease",
        type: "playlist",
        mid: "5481081624",
      },
      aplayer: {
        fixed: true,
        mini: true,
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        theme: '#f9bcdd',
        order: 'random',
        volume: 0.5,
        // 歌词显示（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
        lrcType: 0
      },
      mobile: {
        cover: true,
      }
    }]
  ],
}