# splice(删除，添加，修改)

splice()的主要用途是向数组的中部插入项，但使用这种方法的方式则有如下 3 种。  
+ <b>删除：</b>可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。  

    &emsp;&emsp;&emsp;例如：splice(0,2)会删除数组中的前两项。
+ <b>插入：</b>可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、0（要删除的项数）和要插入的项。如果要插入多个项，可以再传入第四、第五，以至任意多个项。  

    &emsp;&emsp;&emsp;例如：splice(2,0,"red","green")会从当前数组的位置 2 开始插入字符串"red"和"green"。  

+ <b>替换：</b>可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。  

    &emsp;&emsp;&emsp;例如：splice (2,1,"red","green")会删除当前数组位置 2 的项，然后再从位置 2 开始插入字符串"red"和"green"。

<font color="red">splice()方法始终都会返回一个数组，</font>该数组中包含从原始数组中删除的项（如果没有删除任何项，则返回一个空数组）。下面的代码展示了上述 3 种使用 splice()方法的方式。

```javascript
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue
alert(removed); // red，返回的数组中只包含一项
removed = colors.splice(1, 0, "yellow", "orange"); // 从位置 1 开始插入两项
alert(colors); // green,yellow,orange,blue
alert(removed); // 返回的是一个空数组
removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，返回的数组中只包含一项
```