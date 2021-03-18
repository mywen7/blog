# Context
相当于Vue中的provide/inject  

<b>React.createContext</b>：创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据  

```jsx
const {Provider, Consumer} = React.createContext(defaultValue);
```
<b>Provider(生产者)</b>: 和他的名字一样。用于生产共享数据的地方。生产什么呢？ 那就看value定义的是什么了。value:放置共享的数据。

```jsx
<Provider value={/*共享的数据*/}>
    /*里面可以渲染对应的内容*/
</Provider>
```

<b>Consumer(消费者)</b>:这个可以理解为消费者。 他是专门消费供应商(Provider 上面提到的)产生数据。Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue

```jsx
<Consumer>
  {value => /*根据上下文  进行渲染相应内容*/}
</Consumer>
```

### demo
1、App.js 父组件  

```jsx
//App.js
import React from 'react';
import Son from './son';//引入子组件
// 创建一个 theme Context,
export const {Provider,Consumer} = React.createContext("默认名称");
export default class App extends React.Component {
    render() {
        let name ="小人头"
        return (
            //Provider共享容器 接收一个name属性
            <Provider value={name}>
                <div style={{border:'1px solid red',width:'30%',margin:'50px auto',textAlign:'center'}}>
                    <p>父组件定义的值:{name}</p>
                    <Son />
                </div>
            </Provider>
        );
    }
}
```
2、son.js 子组件

```jsx
//son.js 子类
import React from 'react';
import { Consumer } from "./App.js";//引入父组件的Consumer容器
import Grandson from "./grandson.js";//引入子组件
function Son(props) {
    return (
        //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
        <Consumer>
            {( name ) =>
                <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                    <p>子组件。获取父组件的值:{name}</p>
                    {/* 孙组件内容 */}
                    <Grandson />
               </div>
            }
        </Consumer>
    );
}
export default Son;
```
3、grandson.js 孙组件

```jsx
//grandson.js 孙类
import React from 'react';
import { Consumer } from "./App.js";//引入父组件的Consumer容器
function Grandson(props) {
    return (
         //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
        <Consumer>
            {(name ) =>
                   <div style={{border:'1px solid green',width:'60%',margin:'50px auto',textAlign:'center'}}>
                   <p>孙组件。获取传递下来的值:{name}</p>
               </div>
            }
        </Consumer>
    );
}
export default Grandson;
```