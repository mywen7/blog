# for (in/of)

二者都是遍历，但是遍历出来的对象不一样。  
for in遍历出来Key值，  
for of遍历出来Value值  

<b>
  <font color="red">对象</font>
  推荐使用for in循环。  
  <font color="red">数组</font>
  推荐使用for of循环。  
  这里使用的跟vue中的v-for=xx in XX，或v-for=xx of XX不太一样，所以不要弄混了。
</b>  
<br>
<br>

![image](./assets/for-1.png)  
### for in 
![image](./assets/for-2.png)  
### for of 
![image](./assets/for-3.png) 
### 给aa添加自定义属性name。
![image](./assets/for-4.png) 
### for in可以遍历出来自定义属性
![image](./assets/for-5.png) 
### <font color="red">for of是遍历value的，所以无法遍历出来新添加的属性</font>
![image](./assets/for-6.png) 
### 想要for of实现for in的能力，可以让for of联合Object.keys来实现
![image](./assets/for-7.png) 