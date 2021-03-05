# v-for
可以用of  也可以用in，二者有区别，  
后面的数据可以是<font color="red">数组</font>，可以是<font color="red">对象</font>可以是数字，需要改变时可以是计算属性，可以是方法  
<font color="red">数字</font>：为数字时，从1开始；  
<font color="red">计算属性</font>：（原数组不能改变）  
![image](./assets/for-1.png)  

<font color="red">一个方法</font>：（下面的set是sets中的数，不能用计算属性，那么便可以试试用方法，原数组不可改变）    
![image](./assets/for-2.png)  

<font color="red">对象</font>：  
&emsp;&emsp;只有<font color="red">一个参数</font>时表示property的值（也就是
<font color="red">Value</font>）  
![image](./assets/for-3.png)  
![image](./assets/for-4.png)  

result：  
![image](./assets/for-5.png)  

有<font color="red">两个参数</font>时，第二个表示property的名称（也就是<font color="red">Key</font>）  
![image](./assets/for-6.png)  
![image](./assets/for-7.png)  

第<font color="red">三个参数</font>是索引  
![image](./assets/for-8.png)  
![image](./assets/for-9.png)   

<font color="red">为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 。</font>