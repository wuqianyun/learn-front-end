## js单线程 -> 模拟多线程

轮转时间片

短时间之内轮流执行多个任务的片段

1、 任务1 任务2

2、 切分任务1 任务2 

3、 随机排列这些任务片段，组成队列

4、 按照这个队列顺序将这些任务片段送进JS进程

5、 JS线程执行一个又一个的任务片段

## 箭头函数
没有this，this 会作为变量一直向上级词法作用域查找，直至找到为止

## 数组方法
改变原数组：push() pop() shift() unshift() splice() sort() reverse()
不改变返回新数组：filter() concat() slice(）

## parseInt
`parseInt(string, [radix])`接受两个参数，第一个为字符串，第二个为字符串进制基数

第二个参数省略或者为`0`会被当作十进制处理，除`0x`开头当作十六进制处理

理论上基数 radix 应该为`大于等于 2，小于等于 36` 的数字，否则会被当作不合法，返回 NaN

当字符串第一个非空格字符不能转换为数字时，也会返回 NaN

```js
['1', '2', '3'].map(parseInt)
// [1, NaN, NaN]
```

## 深、浅拷贝
基本数据类型 (String, Number, Boolean, Null, Undefined，Symbol）

引用数据类型（统称为 Object 类型，细分的话有：Object 、Array 、Date 、RegExp、Function）

- 基本数据类型的特点：直接存储在`栈`中的数据
- 引用数据类型的特点：存储的是该对象在栈中引用，真实的数据存放在`堆`内存里
  
>- 浅拷贝：`Object.assign()`----对象只有一层时，属于深拷贝 `Array.prototype.concat()` `Array.prototype.slice()`

```js
// 遍历一个对象的所有自身属性
var buz = {
  fog: 'stack'
};

for (var name in buz) {  // for ... in 循环遍历可枚举属性
  if (buz.hasOwnProperty(name)) { // hasOwnProperty判断自身属性
    console.log('this is fog (' +
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else---排除继承属性
  }
}
```

Array的slice和concat方法不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组
>- 深拷贝：`JSON.parse(JSON.stringify())`

