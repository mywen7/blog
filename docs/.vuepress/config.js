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
      { text: '工具', link: '/tool/' },
      { text: '交接', link: '/project/' },
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
            '/accumulate/es/迭代器',
            '/accumulate/es/Iterator遍历器',
            '/accumulate/es/扩展运算符',
            '/accumulate/es/padStart-padEnd',
            '/accumulate/es/解构赋值',
            '/accumulate/es/数组from-of',
            '/accumulate/es/Map-Set',
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
            '/accumulate/vue/2-响应式的缺陷',
            '/accumulate/vue/2-批量注册全局组件',
            '/accumulate/vue/2-slot',
            '/accumulate/vue/2-指令的动态参数',
            '/accumulate/vue/2-v-on',
            '/accumulate/vue/2-v-model',
            '/accumulate/vue/v-if-v-show',
            '/accumulate/vue/v-for',
            '/accumulate/vue/2-动态组件',
            '/accumulate/vue/3-reactive',
            '/accumulate/vue/compositionApi',
            '/accumulate/vue/函数组件',
            
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
          title: 'react',
          path: '/accumulate/react/',
          collapsable: true,
          children: [
            '/accumulate/react/vue与react的区别',
            '/accumulate/react/redux与vuex的差别',
            '/accumulate/react/注意',
            '/accumulate/react/JSX',
            '/accumulate/react/列表',
            '/accumulate/react/判断语句',
            '/accumulate/react/props.children',
            '/accumulate/react/生命周期',
            '/accumulate/react/函数组件',
            '/accumulate/react/ref',
            '/accumulate/react/context',
            '/accumulate/react/Fragment',
            '/accumulate/react/useRef',
            '/accumulate/react/rn-style',
          ]
        },
        {
          title: 'HTML',
          path: '/accumulate/HTML/',
          collapsable: true,
          children: [
            '/accumulate/HTML/Html标签属性',
            '/accumulate/HTML/fieldset',
            '/accumulate/HTML/figure',
          ]
        },
        {
          title: '杂乱的',
          path: '/accumulate/other/',
          collapsable: true,
          children: [
            '/accumulate/other/正则表达式',
            '/accumulate/other/泛型',
            '/accumulate/other/html',
            '/accumulate/other/window.history',
            '/accumulate/other/柯里化',
            '/accumulate/other/纯函数',
            '/accumulate/other/高阶函数',
            '/accumulate/other/回调地狱图例',
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
            '/accumulate/other/vue2自定义指令',
            '/accumulate/other/vue2过滤器',
            '/accumulate/other/递归组件产生编译错误',
            '/accumulate/other/让子组件纯净',
            '/accumulate/other/弹窗添加路由方式',
            '/accumulate/other/window事件',
            '/accumulate/other/异步方法',
            '/accumulate/other/2-动画',
            '/accumulate/other/常用英文',
          ]
        },
        {
          title: '小妙招',
          path: '/accumulate/method/',
          collapsable: true,
          children: [
            '/accumulate/method/找bug与解决方法',
            '/accumulate/method/明确的思路',
            '/accumulate/method/高端的思路',
            '/accumulate/method/交给子组件去处理',
            '/accumulate/method/高架空逻辑',
            '/accumulate/method/使用token登录',
            '/accumulate/method/闭包与匿名函数',
            '/accumulate/method/元素不存在时点击',
            '/accumulate/method/获取一个数组中不重复的元素',
          ]
        },
        {
          title: '第三方组件库',
          path: '/accumulate/three/',
          collapsable: true,
          children: [
            '/accumulate/three/el-progress',
            '/accumulate/three/el-tabs',
            '/accumulate/three/vant-list中的load方法'
          ],
        },
        {
          title: 'CSS',
          path: '/accumulate/css/',
          collapsable: true,
          children: [
            '/accumulate/css/绝对定位居中偏移',
            '/accumulate/css/居中',
            '/accumulate/css/怪异盒子模型',
            '/accumulate/css/高度塌陷',
            '/accumulate/css/滚动条样式',
            '/accumulate/css/宽度高度',
            '/accumulate/css/显示',
          ],
        },
        {
          title: 'node',
          path: '/accumulate/node/',
          collapsable: true,
          children: [
            '/accumulate/node/CommonJs跟EsModule',
          ],
        },
        {
          title: '测试',
          path: '/accumulate/test/',
          collapsable: true,
          children: [
            '/accumulate/test/单元测试常用断言词',
          ],
        },
        {
          title: '频繁错误警告',
          path: '/accumulate/warning/',
          collapsable: true,
          children: [
            '/accumulate/warning/错误捕获',
            '/accumulate/warning/计算机能够解析的',
            '/accumulate/warning/经常犯的智障错误',
          ],
        },
      ],
      '/algorithm/': [
        {
          title: '算法',
          collapsable: false,
          children: [
            '有关数学',
            '时间复杂度',
            '空间复杂度',
            '冒泡排序',
          ]
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
      ],
      '/tool/': [
        {
          title: '工具安装与使用教程',
          collapsable: false,
          children: [
            'nodejs到vue',
            'node安装软件遇见的问题',
            'git',
            '使用git遇到的错误',
            'git的一些命令',
            'github',
            'github访问失败解决'
          ]
        }
      ],
    },
  },
};