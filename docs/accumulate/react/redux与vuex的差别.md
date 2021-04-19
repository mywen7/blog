# Redux
[Redux入门教学](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)  
[Redux的高级教学--中间件与异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)  
[React-Redux库的使用](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)  


### 总体概述
vuex中在Mutation中写函数来更改state中某个数据的值，但不可以直接调用其中函数，必须提交commit以此来提交修改。  
redux中，直接将一个修改state的函数写出来，作为一个reducer，然后将此reducer创建出一个store。想要改变store中state的值，则必须使用dispatch一个action来修改 。 
```js
// reducer 形式为 (state, action) => state 的纯函数
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}
// 创建store 存放应用的状态
// API 是 { subscribe, dispatch, getState }
let store = createStore(counter);

// 可以订阅更新
store.subscribe(() =>
    console.log(store.getState())
);
// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
```
### 记录
+ state可以是<font color="red">基本类型，数组，对象。</font>  甚至是 Immutable.js 生成的数据结构。惟一的要点是<font color="red">当 state 变化时需要返回全新的对象，而不是修改传入的参数。</font>

+ 你应该把要做的修改变成一个普通对象，这个对象被叫做 action，而不是直接修改 state。  
然后编写专门的函数来决定每个 action 如何改变应用的 state，这个函数被叫做 reducer。
    - <font color="red">根据不同action写不同的reducer（即一个store中将一个根reducer拆分为多个对应于action的小的reducer）非必需 ---也可一个reducer对应多个action，可以用switch判断不同的acton对应的不同操作是什么（但这样就跟根reducer操作action没什么区别了，判断也挺多的）</font>

+ redux只有一个单一的 store 和一个根级的 reduce 函数（reducer）。  
随着应用不断变大，你应该把根级的 reducer 拆成多个小的 reducers，分别独立地操作 state 树的不同部分，而不是添加新的 stores。

#### 生态
中间件  
+ redux-thunk —— 用最简单的方式搭建异步 action 构造器
+ redux-promise —— 遵从 FSA 的 promise 中间件
+ redux-rx —— 给 Redux 用的 RxJS 工具，包括观察变量的中间件
+ redux-logger —— 记录所有 Redux action 和下一次 state 的日志
+ redux-immutable-state-invariant —— 开发中的状态变更提醒

工具集  
+ reselect —— 受 NuclearJS 启发，有效派生数据的选择器
+ normalizr —— 通过内嵌 API 响应标准化，使 reducer 的处理更简便
+ redux-actions —— 在初始化 reducer 和 action 构造器时减少样板代码 (boilerplate)
+ redux-transducers —— Redux 的编译器工具
+ redux-immutablejs —— Redux 和 Immutable 的交互工具
+ redux-tcomb —— 在 Redux 中使用具有不可变特性、并经过类型检查的 state 和 action

### action
action是 store 数据的惟一来源。用法是通过 store.dispatch() 把 action 传到 store。<font color="red">只是描述了有事情发生了这一事实。</font>  
Action <font color="red">本质是 JavaScript 普通对象</font>。约定必须一个action里面使用一个type来做为一个标志。除了 type 字段外，action 对象的结构完全取决于自己。
### action创建函数
不要将action与action创建函数混淆。  
action创建函数 是 纯函数，它没有任何副作用，只是返回 action 对象而已。如下：
```js
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
```
所以使用时可以直接将action创建函数传给dispatch方法，就可实例化一个dispatch
```js
dispatch(addTodo(text));
dispatch(completeTodo(index));
```
或者创建一个 被绑定的 action 创建函数 来自动 dispatch
```js
const boundAddTodo = (text) => dispatch(addTodo(text));
const boundCompleteTodo = (index) => dispatch(CompleteTodo(index));
```
上述两个代码块中的代码是相同的。  


<b>store 里能直接通过 store.dispatch() 调用 dispatch() 方法，</b><font color="red">但是多数情况下你会使用 react-redux 提供的 connect() 帮助器来调用。bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上。</font>

### reducer
Action 只是描述了有事情发生了这一事实，指明应用如何更新 state，这是reducer要做的事。   
<font color="red">reducer 就是一个函数，接收旧的 state 和 action，返回新的 state。</font>


只需谨记 reducer 一定要保持纯净  
永远不要在 reducer 里做这些操作：  
+ 修改传入参数；
+ 执行有副作用的操作，如 API 请求和路由跳转。  

只要传入参数一样，返回必须一样。没有特殊情况、没有副作用，没有 API 请求、没有修改参数，单纯执行计算

使用Object.assign()进行对象复制时，时刻谨记永远不要在克隆 state 前修改它。现在经常使用的是扩展运算符（...)所以不需要考虑上述问题。如果使用Object.assign({}, ...state, {xxx: 'xxx', xxx: 'xxx'})这种方式修改state的话，<b>第一个参数一定要为空。</b>

#### 拆分reducer
```js
function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
      text: action.text,
      completed: false
    }];
  case COMPLETE_TODO:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
```
上述的todoApp可以使用combineReducers函数简写成下面这样：
```js
import { combineReducers } from 'redux';

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
```
注意上面的写法和下面完全等价：
```js
export default function todoApp(state, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
```
也可以给它们设置不同的 key，或者调用不同的函数。下面两种合成 reducer 方法完全等价：
```js
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
});
```
<font color="red">combineReducers() 所做的只是生成一个函数</font>，这个函数来调用你的一系列 reducer，每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，然后这个生成的函数所所有 reducer 的结果合并成一个大的对象。没有任何魔法。

## store
store是将action reducer state联系到一起的对象。  
Store 有以下职责：
+ 维持应用的 state；
+ 提供 getState() 方法获取 state；
+ 提供 dispatch(action) 方法更新 state；
+ 通过 subscribe(listener) 注册监听器。

假如应用中只有一个 todoApp 的 reducer，可以这样写：  
```js
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
```
为了提高可维护性，拆分成多个 reducer，这时需要使用 combineReducers() 来把它们组合起来。
```js
import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

let todoApp = combineReducers(reducers);
let store = createStore(todoApp);
```
<b>createStore() 的第二个参数可以设置初始状态。</b>这对开发同构应用时非常有用，可以用于把服务器端生成的 state 转变后在浏览器端传给应用。
```js
let store = createStore(todoApp, window.STATE_FROM_SERVER);
```
## 强调： Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。
尽管如此，Redux 还是和 React 和 Deku 这类框架搭配起来用最好，因为这类框架允许你以 state 函数的形式来描述界面，Redux 通过 action 的形式来发起 state 变化。

<font color="red">明智的做法是只在最顶层组件（如路由操作）里使用 Redux。内部组件应该像木偶一样保持“呆滞”，所有数据都通过 props 传入。</font>