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
      { text: '面试', link: '/interview/' },
      { text: 'Github', link: 'https://baidu.com' },
    ],
    sidebar: {
      '/accumulate/':[         
        {
          title: 'js',
          path: '/accumulate/js/',
          collapsable: true, 
          children: [
            '/accumulate/js/箭头函数的优缺点',
            '/accumulate/js/回调函数',
            '/accumulate/js/js运行机制',
            '/accumulate/js/垃圾回收机制',
            '/accumulate/js/模板字符串',
            '/accumulate/js/typeof',
            '/accumulate/js/性能优化',
            '/accumulate/js/script标签',
            '/accumulate/js/构造函数与普通函数的区别',
            '/accumulate/js/setTimeout',
            '/accumulate/js/input的选中',
            '/accumulate/js/引用类型',
            '/accumulate/js/context'
          ]
        },
        {
          title: 'es6+',
          path: '/accumulate/es/',
          collapsable: true,
          children: [
            '/accumulate/es/insertAdjacentHTML',
            '/accumulate/es/for-in与for-of',
            '/accumulate/es/promise',
            '/accumulate/es/symbol',
          ]
        },
        {
          title: 'ts',
          path: '/accumulate/ts/',
          collapsable: true,
          children: [
            '/accumulate/ts/数据的定义',
          ]
        },
        {
          title: '杂乱的',
          path: '/accumulate/other/',
          collapsable: true,
          children: [
            '/accumulate/other/泛型',
          ]
        },
      ],
      '/algorithm/': [
        {
          title: '测试菜单二',
          collapsable: false,
          sidebarDepth: 1,
        }
      ],
      '/interview/': [
        {
          title: '面试问题总结记录',
          children: [
            'supplement',
            'js',
            'vue',
            'http',
          ]
        }
      ]
    },
  },
};