# insertAdjacentHTML

将指定的文本解析为Html或者XML，并将结果插入到DOM树中指定的位置。  

相当于替代了createElement，innerHtml，(appendChild/insertBefore)的所有功能，而且appendChild/insertBefore只支持createElement完成后的元素，不能直接将html字符串追加上去，但是insertAdjacentHTML是可以直接将html字符串追加到指定位置的。  

<br>

### 语法：
element.insertAdjacentHTML（position, text）;

### position有

+ 'beforebegin': 插入元素自身的前面；
+ ‘afterbegin’： 插入元素内部第一个子节点之前；
+ ‘beforeend’：插入元素内部的最后一个子节点之后；
+ ‘afterend’：元素自身后面；

### 例：

```javascript
const html = `<div>hahahhahah</div>`;
const div = document.getElementById('div');
div.insertAdjacentHTML('beforeend', html);
```