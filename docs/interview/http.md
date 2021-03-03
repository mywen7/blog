# HTTP协议
## 前后端交互确定身份
cookie，sessionID，token，
## http缓存
<https://www.cnblogs.com/echolun/p/9419517.html>

### http缓存请求相应头
#### 1、Cache-Control
<font color="red">请求/响应头（就是请求标头与响应标头都可以有的）</font>  
缓存控制字段，可以说是http缓存的最高指令，要不要缓存也是它说了算  

它有一下常用值：  
1、no-store：所有内容都不缓存  
2、no-cache：缓存，但是浏览器使用缓存前，都会先去请求服务器判断缓存资源是否最新，它只用不过期的缓存（过期缓存不用）。  
3、max-age = x（单位秒）：请求缓存后的X秒内不再发起请求，与下方Expires类似，但是优先级比Expires高  
4、s-maxage = x（单位秒）：代理服务器请求资源站缓存后的X秒不再发起请求，只对CDN缓存有效  
5、public：客户端和代理服务器（CDN）都可缓存  
6、private：只有客户端可以缓存  

#### 2、Expires
<font color="red">响应头，</font>代表资源过期时间，由服务器返回提供，GMT格式日期，与max-age共存时候，优先级要低。

#### 3、if-Modified-Since
<font color="red">请求头，</font>资源最新修改时间，由浏览器告诉服务器（其实就是服务器上次给的Last-Modified，请求又还给服务器对比），和Last-Modified是一对，它两会进行对比。

#### 4、Last-Modified
<font color="red">响应头，</font>资源最新修改时间，由服务器告诉浏览器。

#### 5、if-None-Match
<font color="red">请求头，</font>缓存资源标志，由浏览器告诉服务器（其实就是上次服务器给的Etag），和Etag是一对，它两会进行对比。

#### 6、Etag
<font color="red">响应头，</font>缓存资源标志，由服务器告诉浏览器

max-age或者Expires过期了，就发起请求，带过去if-Modified-Since，跟if-None-Match，将服务器与浏览器的文件修改时间对比，文件内容标识对比，如果不一样，就是有变化，然后响应新数据。没变化，就返回304，让你用浏览器上的缓存文件。

## 缓存类型有

### 强缓存
不发起HTTP请求，直接使用本地缓存，比如浏览器地址栏回车，使用f5刷新，只要Expires，和max-age生效，那就都是强缓存。

### 协商性缓存（弱缓存）
在使用本地缓存之前先与服务器协商，核对缓存文件是否为最新，就是不管你做任何操作，都会先发起请求，然后服务器会对你做出反应。
Cache-Control：no-cache就是协商性缓存，它就是总是先发送请求，然后接收服务端发送回来的消息，如果是304就是用本地缓存，如果是有改变，就返回最新数据。这就是304状态码缓存