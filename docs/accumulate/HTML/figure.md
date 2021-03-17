# \<figure>标签
一般给文档中插图用的  
+ 会缩进  
+ 图片会自动换行  
+ 文字后的图片会自动换到新的一行  

例：  
```HTML
<figure>
  <span>黄浦江上的的卢浦大桥</span>
  <span>拍摄者：W3School 项目组，拍摄时间：2010 年 10 月</span>
  <img src="/i/shanghai_lupu_bridge.jpg" width="350" height="234" />
  <img src="/i/shanghai_lupu_bridge.jpg" width="350" height="234" />
</figure>
```
![image](./assets/figure-1.png)

```HTML
<span>黄浦江上的的卢浦大桥</span>
<span>拍摄者：W3School 项目组，拍摄时间：2010 年 10 月</span>
<img src="/i/shanghai_lupu_bridge.jpg" width="350" height="234" />
<img src="/i/shanghai_lupu_bridge.jpg" width="350" height="234" />
```

![image](./assets/figure-2.png)  

### \<figcaption> 标签定义 figure 元素的标题（caption）。

"figcaption" 元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。