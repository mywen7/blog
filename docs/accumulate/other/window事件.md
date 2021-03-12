# window.open事件以及监听
```javascript
const router = this.$router.resolve({
    name: 'school-book',
    params: {id: homework.id}, 
    query: { 
        type: 3,
        sectionId: checkSubject.sectionId,
        subjectId: checkSubject.subjectId,
        testpaperId: this.testpaperId,
        chapterId: this.chapterId,
        textbookId: this.textbookId,
        materialId: this.materialId,
    },
})
const token = this.$route.query.token;
const popup = window.open(router.href + `${token ? '&token=' + token : ''}`, `school-book-${homework.id}`)
popup.addEventListener('message', (event) => {
    const data = event.data;
    if(data.type === 'refresh' && data.id === homework.id) {
        homework.title = data.title;
        homework.questionCount = data.count;
    }
    if(data.type === 'delete' && data.id === homework.id) {
        this.$emit('deletePaper')
    }
})
```
```javascript
const postMes = {
  count: paper.exercises.length,
  type: 'refresh',
  title: paper.title,
  id: paper.id,
};
window.postMessage(postMes, location.origin);
```
```javascript
// 定时器监听window.open打开的页面是否关闭
const timer = setInterval(() => {
    if (popup.closed) {
        window.sessionStorage.removeItem('squence');
        clearInterval(timer)
    }
}, 1000)
```