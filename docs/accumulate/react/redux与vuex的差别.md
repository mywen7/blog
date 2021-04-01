# Redux与Vuex的差别
[Redux入门教学](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)  
[Redux的高级教学--中间件与异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)  
[React-Redux库的使用](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)  

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