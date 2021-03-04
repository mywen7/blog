# 创建HTML内容

![image](./assets/h-1.png)  
createElement仅只是创建完元素，还未添加到html中，所以一定要appendChild，或者insertBefore某个元素。  
如果是body元素，可以使用document.getElementByTagName('body')[0]或者document.body,二者皆可。  