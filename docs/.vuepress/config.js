module.exports = {
  title: 'wu qian yun',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },      //   默认新建窗口 target="_blank" rel="noopener noreferrer"
      // {                               //   target:'_self', rel:''
      //   text: 'Qian', 
      //   ariaLabel: 'Language Menu',
      //   items:[
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }, 
      // { text: 'Yun', link: 'https://google.com' },
    ],
    navbar:true,     //是否禁用导航栏
    sidebar: [
      {
        title: '基础部分',   // 必要的
        path: null,      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title:"html",
            children:[['../guide/foundation/html/first.md',"html"]]
          },
          {
            title:"css",
            children:[['../guide/foundation/html/first.md',"html"]]
          },
          {
            title:"js",
            children:[['../guide/foundation/js/concept.md',"一些概念"]]
          }
        ]
      },
      
      ['../guide/codeRecord/demo.md','代码&问题--记录'],
      
      {
        title:"命令与工具相关",
        path:null,
        collapsable:false
      },
      {
        title:"vue",
        path:null,
        collapsable:false,
        children:[['../guide/vue/valueTransist.md',"组件传值"]]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../guide'
      }
    }
  },
  base: '/learn-front-end/',
}