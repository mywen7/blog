# script标签

### defer
 <font color="red">只对外部脚本文件才有效</font>  
 告诉浏览器立即下载，但延迟执行。（在浏览器解析到结束的html标签后才会执行，且在 DOMContentLoaded 事件之前执行）；  
 <font color="red" >
 但是在实际当中，推迟执行的脚本不一定总会按顺序执行或者在DOMContentLoaded事件之前执行，因此最好只包含一个这样的脚本</font>

### async 
只适用于外部脚本，与defer类似。  
告诉浏览器立即开始下载，不过，与 defer 不同的是，标记为 async 的脚本并不保证能按照它们出现的次序执行。  
<font color="red">
属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到<b><em>该异步脚本下载和执行后再加载其他脚本</em></b>
</font>

### 动态加载脚本
```javascript
    let script = document.createElement('script');
    script.src = 'gibberish.js';
    document.head.appendChild(script);
```
默认情况下，以这种方式创建的元素是以异步方式加载的，
<font color="red">
相当于添加了 async 属性。但不是所有浏览器都支持 async 属性。
</font>
所以，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载：
```javascript
  let script = document.createElement('script');
  script.src = 'gibberish.js';
  script.async = false;
  document.head.appendChild(script);
```
以这种方式获取的资源对浏览器预加载器是不可见的，所以这种方式可能会严重影响性能，所以，要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：

```javascript
<link rel="preload" href="gibberish.js">
```