# vue3中的对象响应式声明

vue3实现响应式其实是将raw对象（原始对象）包装了一层，产生了一个新的对象。这两个对象是不相等的。也就是说，可能会存在原始对象占用内存并且无法释放的问题，所以建议在将一个对象声明为响应式的时候，尽量不要让任何的变量去引用原始对象，而应该直接将对象放入reactive中。  

实例：  
```vue
//不推荐做法

<script>
import { reactive } from 'vue';
export default {
    setup() {
        const obj = {name: '张三', age: 23};
        const person = reactive(obj);
        return {
            person
        }
    }
}
</script>

// 推荐做法

<script>
import { reactive } from 'vue';
export default {
    setup() {
        const person = reactive({name: '张三', age; 23});
        return {
            person
        }
    }
}
</script>

```
