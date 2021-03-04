# slice
<b>slice（）既是Array的方法也是String的方法。</b>  

是 slice()，Array中，它能够<font color="red">基于当前数组中的一或多个项创建一个新数组</font>。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下，slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。注意，<font color="red">slice()方法不会影响原始数组。请看下面的例子。</font>
```javascript
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2); //green,blue,yellow,purple
alert(colors3); //green,blue,yellow
```
如果 slice()方法的参数中有一个负数，则用<font color="red">数组长度加上该数</font>来确定相应的位置。例如，在一个包含 5 项的数组上调用slice(-2,-1)与调用slice(3,4)得到的结果相同。如果结束位置小于起始位置，则返回空数组。


String中，slice（）截取字符串，同substring，substr方法一样，都<font color="red">不会改变原字符串</font>。  

<b>三者的异同：</b>  

+ <b>一、1个参数时：起始位置</b>  
slice（），substring（），substr（）功能相同，皆从此位置开始截取到末尾。
+ <b>二、2个参数时：截止位置/返回的字符串个数</b>  
substr（）包含截取长度位置字符串。（因为他的第二个参数代表要返回的字符串个数）  
slice（），substring（）不包含截止位置数据。（因为他们的第二个参数代表截至位置）
+ <b>三、各位置参数为负数时：（相加：字符串长度+参数）</b>    
slice（相加，相加）；  
substr（相加，0）；此处0即为长度为0，所以返回为空字符串。  
substring（0, 0）；会自动将较小的位置数调到前面，例如substring(3,0)会自动调整为substring(0,3)。