# v-model(2)
v-model只在表单元素中有效：  
+ text和textarea为【：value与@input】
+ checkbox和radio为【：checked与@input】
+ select将value作为prop并将change作为事件。
    - Select标签中的option标签<font color="red">没有写value</font>之时，\<option>\</option>中间的文本就是v-model绑定的值：  
    <font color="red">单选时： </font>   
    ![image](./assets/model-1.png)  
    <font color="red">多选时：</font>   
    ![image](./assets/model-2.png)  
    
    - Select标签中的option标签上<font color="red">有value属性</font>时，v-model绑定的便是value的值：  
    ![image](./assets/model-3.png)   

input标签上type为checkbox，radio之时，当没有value是，v-model绑定的是布尔值（true/false）,有value之时，v-model绑定的是value的字符串：  
![image](./assets/model-4.png)   

#### 它含有三个修饰符： 
1、.lazy  
2、.number  
3、.trim  
