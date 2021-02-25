# setTimeout

setTimeout是异步执行的  
真正懂setTimeout执行的必须去看js运行机制。  
经典实例：  
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i))
}
```
输出结果为 3,3,3
因为i是var声明的，且setTimeout是异步执行的，for是同步执行的。所以最后是3,3,3  

### 解决方法
+ 1、es6之后使用let定义i；
+ 2、es5之前可以使用闭包的方式来解决。因为闭包可以拿到父级作用域里面的变量的值，且会让函数执行完毕之后，父级作用域里面的值也不销毁。