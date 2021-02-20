module.exports = {
  title: 'mywen\'s blog',
  description: '我的个人博客',
  head: [
    [ 'link',{ rel: 'icon', href: '/assets/logo.png' }]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: 'Github', link: 'https://baidu.com' },
    ],
    sidebar: {
      '/accumulate/':[         
        {
            title: '测试菜单1',
            collapsable: false,
            sidebarDepth: 1,
        },
      ],
    },
  },
};