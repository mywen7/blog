# vue2过滤器

<font color="red">过滤器的第一个参数是定死的，为管道符前面的数据</font>  

![image](./assets/filter-1.png)  

通过管道符去找过滤器，红色框中的为过滤器名称，绿色框中的为可以传递的参数，可操作。  
<font color="red">也可以调用多个过滤器</font>  

![image](./assets/filter-2.png)   

上面的是全局过滤器，下面的是私有过滤器（私有过滤器加s）  

![image](./assets/filter-3.png)    
过滤器调用的时候，采用就近原则  