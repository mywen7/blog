# Map与Set

## Map
ECMAScript 6 以前，在 JavaScript 中实现“键/值”式存储可以使用 Object 来方便高效地完成，也就是使用对象属性作为键，再使用属性来引用值。但Object 只能使用数值、字符串或符号作为键， Map 可以使用任何 JavaScript 数据类型作为键。  

Map常用五种方法  
+ set，
+ has，
+ get，
+ delete，
+ clear

```javascript
// 使用嵌套数组初始化映射
const m1 = new Map([ 
  ["key1", "val1"], 
  ["key2", "val2"], 
  ["key3", "val3"] 
]); 
alert(m1.size); // 3 
```
```javascript
// 映射期待的键/值对，无论是否提供
const m3 = new Map([[]]); 
alert(m3.has(undefined)); // true 
alert(m3.get(undefined)); // undefined 
```
```javascript
const m = new Map(); 
alert(m.has("firstName")); // false 
alert(m.get("firstName")); // undefined 
alert(m.size); // 0 

m.set("firstName", "Matt") 
 .set("lastName", "Frisbie"); 
alert(m.has("firstName")); // true 
alert(m.get("firstName")); // Matt 
alert(m.size); // 2 

m.delete("firstName"); // 只删除这一个键/值对
alert(m.has("firstName")); // false 
alert(m.has("lastName")); // true 
alert(m.size); // 1 

m.clear(); // 清除这个映射实例中的所有键/值对
alert(m.has("firstName")); // false 
alert(m.has("lastName")); // false 
alert(m.size); 
```

## WeakMap
'弱映射',它是Map的子集。WeakMap 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式。  
弱映射中的<font color="red">键只能是 Object 或者继承自 Object 的类型</font>，尝试使用非对象设置键会抛出TypeError。值的类型没有限制。  

```javascript
const key1 = {id: 1}, 
      key2 = {id: 2}, 
      key3 = {id: 3}; 
// 使用嵌套数组初始化弱映射
const wm1 = new WeakMap([ 
  [key1, "val1"], 
  [key2, "val2"], 
  [key3, "val3"] 
]); // 键只能是对象或者继承自对象的类型
alert(wm1.get(key1)); // val1 
alert(wm1.get(key2)); // val2 
alert(wm1.get(key3)); // val3 
```
<b>初始化之后可以使用set()再添加键/值对，可以使用 get()和 has()查询，还可以使用 delete()删除</b>  

WeakMap 中“weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用，不会阻止垃圾回收。就是说只要这些键没有被引用，那么就会被垃圾回收掉  
例：  
```javascript
const wm = new WeakMap(); 
wm.set({}, "val"); 
//set()方法初始化了一个新对象并将它用作一个字符串的键。因为没有指向这个对象的其他引用，
//所以当这行代码执行完成后，这个对象键就会被当作垃圾回收。
```
```javascript
const wm = new WeakMap(); 
const container = { 
  key: {} 
}; 
wm.set(container.key, "val"); 
function removeReference() { 
  container.key = null; 
} 
//这一次，container 对象维护着一个对弱映射键的引用，因此这个对象键不会成为垃圾回收的目
//标。不过，如果调用了 removeReference()，就会摧毁键对象的最后一个引用，垃圾回收程序就可以
//把这个键/值对清理掉。
```

## Set
集合 ，可以包含任何 JavaScript 数据类型作为值  

常用四种方法：
+ add
+ has
+ delete 
+ clear  

可以使用size查询元素数量  
```javascript
// 使用数组初始化集合 
const s1 = new Set(["val1", "val2", "val3"]); 
alert(s1.size); // 3 
```
```javascript
const s = new Set(); 
alert(s.has("Matt")); // false 
alert(s.size); // 0 

s.add("Matt") 
 .add("Frisbie"); 
alert(s.has("Matt")); // true 
alert(s.size); // 2 

s.delete("Matt"); 
alert(s.has("Matt")); // false 
alert(s.has("Frisbie")); // true 
alert(s.size); // 1 

s.clear(); // 销毁集合实例中的所有值
alert(s.has("Matt")); // false 
alert(s.has("Frisbie")); // false 
alert(s.size); // 0 
```

## WeakSet
WeakSet 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱集合”中值的方式。  
弱集合中的<font color="red">值只能是 Object 或者继承自 Object 的类型</font>，尝试使用非对象设置值会抛出 TypeError。

```javascript
const val1 = {id: 1}, 
      val2 = {id: 2}, 
      val3 = {id: 3}; 
// 使用数组初始化弱集合
const ws1 = new WeakSet([val1, val2, val3]); 
alert(ws1.has(val1)); // true 
alert(ws1.has(val2)); // true 
alert(ws1.has(val3)); // true
```
```javascript
// 原始值可以先包装成对象再用作值
const stringVal = new String("val1"); 
const ws3 = new WeakSet([stringVal]); 
alert(ws3.has(stringVal)); // true 
```
<b>初始化之后可以使用 add()再添加新值，可以使用 has()查询，还可以使用 delete()删除</b>  

WeakSet 中“weak”表示弱集合的值是“弱弱地拿着”的。意思就是，这些值不属于正式的引用，
不会阻止垃圾回收。