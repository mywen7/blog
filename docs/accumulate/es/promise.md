# Promise

### 1、promise捕获错误的catch也会返回一个promise实例，因此catch之后会继续执行之后的then，如下：
```javascript
<script>
  console.log('here we go...');
  new Promise(resolve => {
    setTimeout(() => {
      resolve('here is callback...');
    },2000)
  }) 
  .then(res => {
    console.log('look here,', res);
    throw new Error('test error'); // then里面抛出的错误
  })
  .catch(err => {
    console.log('now look me', err);
  })
  .then(() => {
    console.log('i`m here');
  })
  .then(() => {
    console.log('... and here');
  })
  .catch(() => {
    console.log('this is error');
  })
</script>
```
上述代码执行结果：
```javascript
// here wo go...
// look here, here is callback...
// now look me test error
// i`m here
// ... and here
```

### 2、catch里面抛出的错误就是一个reject，相当于一个promise状态变成了reject，就是直接被下一个catch捕获的，不会执行中间的所有then。
如下例：
```javascript
<script>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('let`s go');
    },2000);
  })
  .then((res) => {
    console.log('look me')
    throw new Error('I`m a error');
  })
  .catch((e) => {
    console.log('look here:', e);
    throw new Error('another error');
  })
  .then(() => {
    console.log('hahhahahah');
  })
  .catch((error) => {
    console.log('i catch: ', error);
  })
</script>
```

上述事件的执行结果：
```javascript
// let`s go
// look me
// look here:I`m a error
// i catch another error
```
### Promise.all([p1, p2, p3])
Promise.all([p1, p2, p3])用于将多个promise实例，包装成一个新的Promise实例，返回的实例就是普通的promise它接收一个数组作为参数数组里可以是Promise对象，也可以是别的值，只有Promise会等待状态改变当所有的子Promise都完成，该Promise完成，返回值是全部值得数组有任何一个失败，该Promise失败，返回值是第一个失败的子Promise结果

### promise.race() 类似于Promise.all() ，区别在于它有任意一个完成就算完成