## hover grid
![../../img/hove.png](../../img/hover.png)
```css
  .ant-card-grid {
    box-shadow: 1px 0 0 0 #434343, 0 1px 0 0 #434343, 1px 1px 0 0 #434343, 1px 0 0 0 #434343 inset,0 1px 0 0 #434343 inset;
  }
  .card-grid-hoverable:hover {
    position: relative;
    z-index: 1;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 48%), 0 6px 16px 0 rgb(0 0 0 / 32%),0 9px 28px 8px rgb(0 0 0 / 20%);
  }
```

## 居中
```css
/* 1 */
.father{
  position:relative
}
.child{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

/* 2 */
.father{
  display:flex;
  justify-content:center;
  align-items:center;
}
```

## 两栏布局 => 左侧固定，右侧自适应
```css
/* 1 */
.left{
  float:left;
  width:200px;
}
.right{
  margin-left:200px
}

/* 2 */
.left{
  float:left;
  width:200px;
}
.right{
  overflow:hidden;
}

/* 3 */
.father{
  position:relative;
}
.left{
  width:200px;
}
.right{
  position:absolute;
  left:200px;
  top:0;
}

/* 4 */
.father{
  display:flex;
}
.left{
  width:200px;
  flex-shrink:0
}
.right{
  flex:1;
}
```
> - 
>  flex-grow 0 如果存在剩余空间，不放大
>  flex-shrink 1 如果空间不足，将缩小
>  flex-basis auto
>  flex auto (1 1 auto) 和 none (0 0 auto)