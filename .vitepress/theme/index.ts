// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useData, useRoute } from 'vitepress';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'; // 导入方法
import 'vitepress-plugin-codeblocks-fold/style/index.scss'; // 导入样式

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    // 注册全局组件，如果你不想使用也可以不添加
    ctx.app.component('vImageViewer', vImageViewer);
    // ...
  },
  setup() {
    // 获取路由
    const route = useRoute();
    // 使用
    imageViewer(route);

    // 获取前言和路由
    const { frontmatter } = useData();
    // 基础使用
    codeblocksFold({ route, frontmatter }, true, 400);
  }

  //   // 评论组件 - https://giscus.app/
  //   giscusTalk({
  //     repo: '你的仓库地址',
  //     repoId: '你的仓库id',
  //     category: '你选择的分类', // 默认: `General`
  //     categoryId: '你的分类id',
  //     mapping: 'pathname', // 默认: `pathname`
  //     inputPosition: 'top', // 默认: `top`
  //     lang: 'zh-CN', // 默认: `zh-CN`
  //     lightTheme: 'light', // 默认: `light`
  //     darkTheme: 'transparent_dark', // 默认: `transparent_dark`
  //     // ...
  // }, {
  //     frontmatter, route
  // },
  //     // 是否全部页面启动评论区。
  //     // 默认为 true，表示启用，此参数可忽略；
  //     // 如果为 false，表示不启用。
  //     // 可以在页面使用 `comment: true` 前言单独启用
  //     true
  // );
} satisfies Theme

