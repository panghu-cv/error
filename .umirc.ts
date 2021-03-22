import { defineConfig } from 'umi';
import routes from './config/routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '后台管理系统',
    locale: true,
    layout: 'side',
    logo:'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/w=400/sign=e513fcbab951f819f125024aeab54a76/503d269759ee3d6d89fafd5a4a166d224f4ade67.jpg'
  },
  dva: {
    immer: true,
    hmr: true,
  },
});
