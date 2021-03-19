# Fragment
就是每次渲染出的好多个元素节点必须包裹在一个元素中(得有一个顶层元素包裹着)

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
\<React.Fragment>可以简写为\<>

```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```