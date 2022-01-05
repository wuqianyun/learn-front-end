## $mount
```js
switchCoreNode.appendChild(
  new Vue({
    render: (h) => h(
      "span",
      {class: "kui-switch__inner"},
      this.$refs.switch.checked
        ? this.innerActiveIconClass ? [h("i", {class: this.innerActiveIconClass})] : this.innerActiveText
        : this.innerInactiveIconClass ? [h("i", {class: this.innerInactiveIconClass})] : this.innerInactiveText
    )}
  ).$mount().$el
);
// 或者，在文档之外渲染并且随后挂载
var component = new MyComponent().$mount()
document.getElementById('app').appendChild(component.$el)
//  ======
document.getElementById('app').appendChild(new MyComponent().$mount().$el)
```

## 原生title属性

hover展示全部信息
```js
@mouseover="showChineseNumTitle"
...
showChineseNumTitle(e) {
  let target = e.target;
  let sw = target.scrollWidth;
  let w = parseInt(getStyle(target, "width"), 10);
  let text = this.getChineseNumber();
  if (sw > w) {
    target.setAttribute("title", text);
  } else {
    target.removeAttribute("title");
  }
},
```

## 正则匹配高亮

可以配合`v-html="str"`使用
```js
const reg = this.ishightLight ? new RegExp(this.filterValue,'g') : null
str.replace(reg,()=>{return `<span class="kui-highlight">${this.filterValue}</span>`})
```