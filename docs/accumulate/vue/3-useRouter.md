# useRouter(3)
useRouter必须写在没有上下文的环境中。如果写在：  
```javascript
const XXX = （） => {
  useRouter()//写在这里会报错。
}；
```
所以把useRouter写在setup中是可以的。