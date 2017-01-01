# jquery.selectToDo.js

实现多个Checkbox全选，反选，取消选择功能的JQuery插件

[演示地址](https://elric.coding.me/jquery.selectToDo.js)

## 使用说明

```html
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="jquery.selectToDo.js" type="text/javascript" charset="utf-8"></script>
```
```html
<input type="checkbox" value="1" name="check">
<input type="checkbox" value="2" name="check">
<input type="checkbox" value="3" name="check">
<input type="checkbox" value="4" name="check">
<input type="checkbox" value="5" name="check">

<input type="button" value="Select All" id="selectAll">
<input type="button" value="Select None" id="selectNone">
<input type="button" value="Select Invert" id="selectInv">
<input type="button" value="Do something" id="actionButton">
```

```js
$(function(){
	var selectToDo = $("input[name='check']").selectToDo();
	$("#actionButton").bind("click",function(){
		alert(selectToDo.result());
	});
});
```

### 参数

```js
$("input[name='check']").selectToDo({
	"selectAllButton"    : $("#selectAll"),    //全选按钮
	"selectNoneButton"   : $("#selectNone"),   //取消选择按钮
	"selectInvertButton" : $("#selectInv")     //反选按钮
});
```

### 方法

```js
var selectToDo = $("input[name='check']").selectToDo();
selectToDo.result();         //返回选中的值组成的字符串，例如：1,2,3,4,5
selectToDo.selectAll();      //全选
selectToDo.selectNone();     //取消选择
selectToDo.selectInvert();   //反选
```

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).