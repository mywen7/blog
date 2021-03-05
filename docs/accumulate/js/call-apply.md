# call/apply
call 和 apply 都是为了改变某个函数运行时的 context 即上下文而存在的，换句话说，就是为了改变函数体内部 this 的指向。因为 JavaScript 的函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。  
```javascript
function cat(){

}

cat.prototype={

  food:"fish",  

  say: function(  ){

    alert("I love "+this.food);

  }

}

var blackCat = new cat;

blackCat.say();
```
但是如果我们有一个对象whiteDog = {food:"bone"},我们不想对它重新定义say方法，那么我们可以通过call或apply用blackCat的say方法：blackCat.say.call(whiteDog);  

注：使用时都是；例如say（）方法，加上call（）时都是say.call（）这样使用，来改变上下文的this