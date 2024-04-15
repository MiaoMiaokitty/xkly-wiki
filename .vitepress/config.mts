import { defineConfig } from 'vitepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import MiniSearch from 'minisearch'

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "星空领域-Online";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
  title: "星空领域-Online",
  description: "领域-Online群组服WIKI",
  lang: "zh",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/',
      text: '在GitHub上编辑此页面'
    },

    nav: [
      { text: '🏠主页', link: '/' },
      { text: '❌_小黑屋_❌', link: 'https://ban.mcxkly.cn/' },
      { text: '🏻皮肤站', link: 'https://pfz.mcxkly.cn/' },
      { text: '🙎在线玩家', link: 'https://info.mcxkly.cn/' }
    ],

    sidebar: [
      {
        text: '📍简介',
        // collapsed: false,
        items: [
          { text: '📢服务器介绍', link: './Basic_introduce.md' },
          { text: '📌服务器玩家规定', link: '/server_rule.md' },
          { text: '📋(QQ群/服内)聊天规定', link: '/chat_rule.md' },
          { text: '❓常见问题 ', link: '/problem.md' },
          { text: '💻管理组-成员 ', link: '/Administration.md' }
        ]
      },

      {
        text: '🔍教程',
        collapsed: true,
        items: [
          { text: '📼注册-皮肤站', link: './register.md' },
        ]
      },

      {
        items: [
          { text: "❌小黑屋", link: "https://ban.mcxkly.cn/" },
        ],
      }
    ],

    footer: {
      message: `${commitRef}`,
      copyright: "Copyright © 2024 MiaoMiao",
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
