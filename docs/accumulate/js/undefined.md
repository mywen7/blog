# undefined

反正记住经常使用<font color="red">？</font>  
数组如果返回的值有undefined，则使用<font color="red">？</font>  

<font color="red">?会先判断是否为null，之后再判断。。。看下面例子，具体真还没看懂</font>
```javascript
this.topic.answers.correct_state?.[0]

=> (相当于)

var _this$topic$answers$c;
(_this$topic$answers$c = (void 0).topic.answers.correct_state) === null || _this$topic$answers$c === void 0 ? void 0 : _this$topic$answers$c[0];
```