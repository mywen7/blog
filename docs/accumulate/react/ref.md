# ref
在DOM元素上定义ref时，要在class组件中的constructor中定义一个React.createRef()
```javascript
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创造一个 textInput DOM 元素的 ref
    this.textInput = React.createRef();
  }
  render() {
  // 使用 `ref` 回调函数以在实例的一个变量中存储文本输入 DOM 元素
  //（比如，this.textInput）。
    return (
      <input
        type="text"
        ref={this.textInput}
      />
    );
  }
}
```