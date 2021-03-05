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
            '/accumulate/js/原型',
            '/accumulate/js/setTimeout',
            '/accumulate/js/input的选中',
            '/accumulate/js/引用类型',
            '/accumulate/js/context',
            '/accumulate/js/函数的arguments',
            '/accumulate/js/操作符',
            '/accumulate/js/非操作符',
            '/accumulate/js/undefined',
            '/accumulate/js/call-apply',
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
            '/accumulate/es/splice',
            '/accumulate/es/slice',
            '/accumulate/es/sort',
            '/accumulate/es/isArray',
            '/accumulate/es/Iterator遍历器',
            '/accumulate/es/扩展运算符',
            '/accumulate/es/padStart-padEnd',
            '/accumulate/es/解构赋值',
          ]
        },
        {
          title: 'vue',
          path: '/accumulate/vue/',
          collapsable: true,
          children: [
            '/accumulate/vue/3-vue(mini)',
            '/accumulate/vue/3-suspense',
            '/accumulate/vue/3-useRouter',
            '/accumulate/vue/2-响应式原理',
            '/accumulate/vue/2-批量注册全局组件',
            '/accumulate/vue/2-slot',
            '/accumulate/vue/2-指令的动态参数',
            '/accumulate/vue/2-v-on',
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
          title: 'HTML',
          path: '/accumulate/HTML/',
          collapsable: true,
          children: [
            '/accumulate/HTML/Html标签属性',
          ]
        },
        {
          title: '杂乱的',
          path: '/accumulate/other/',
          collapsable: true,
          children: [
            '/accumulate/other/泛型',
            '/accumulate/other/html',
            '/accumulate/other/window.history',
            '/accumulate/other/短路',
            '/accumulate/other/js操作DOM事件',
            '/accumulate/other/查看是什么类型的HTMLElement',
            '/accumulate/other/mock数据',
            '/accumulate/other/嵌套数组变成扁平数组',
            '/accumulate/other/异常处理',
            '/accumulate/other/webpack打包文件',
            '/accumulate/other/nrm',
            '/accumulate/other/jQuery',
            '/accumulate/other/视口可见-滚动',
            '/accumulate/other/一个锢钉',
            '/accumulate/other/vue2与vue3的区别',
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