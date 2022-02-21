import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 9,
  },
  antd: false,
  base: '/dblz/',
  publicPath: '/dblz/',
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  // headScripts: [{ src: '/dblz/swiper.min.js' }],
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.development.js',
        ]
      : [
          'https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.production.min.js',
        ],
  extraPostCSSPlugins: [
    require('postcss-import'),
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
});
