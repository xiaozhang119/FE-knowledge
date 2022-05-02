<!-- HTML4和HTML5的区别 -->

# 语法变化

## ContentType

- 文件扩展符保持不变，均支持 ".htm,.html"格式；
- 内容类型依然为"text/html";

## DOCTYPE 声明

- HTML5 中 DOCTYPE 声明不区分大小写，仅仅使用\<!DOCTYPE html\>声明即可;
- HTML4 中 DOCTYPE 声明则需要使用版本声明;

```html
<!DOCTYPE html PUBLIC "//W3C//DTDXHTML1.0Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1transitional.dtd">
```

## 指定字符编码

- HTML5 中只需要使用\<meta charset="UTF-8"\>进行声明就可以了;
- 在 HTML4 中则要通过 content="text/html;charset=UTF-8"来声明；
- 以上两种用法混合使用时在 HTML5 中则会报错；

## 标记省略

- 在 HTML5 中标记可以省略；具体可以分为“不写结束标记”、“可以省略结束标记”、“开始标记和结束标记全部可以省略”三种类型。
- 不允许写结束标记的元素: area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr；
- 可以省略结束标记的元素：li、dt、dd、p、rt、rp、optgroup、option、colgroup、thead、tbody、tfoot、tr、td、th;
- 可以同时省略开始结束标记的元素：html、head、body、colgroup、tbody;

## 属性值

- 属性值为 boolean 类型的属性，当值为 true 时只写属性不需要指定属性值；值为 false 直接不指定属性即可；
- 当属性值不包含"<"、">"、“=”、单引号、双引号等特殊字符时属性值的双引号可以省略；如：type=“text”可以以写成 type=text;

## 新增结构元素

- section 元素表示一个内容区块；
- article 元素，标记页面中一块与当前页面上下文不相关关的独立内容，如报纸中的一篇文章；
- aside 元素，表示 article 元素的内容之外的，与 article 元素内容相关的辅助信息；
- header 元素，表示整个页面的标题或者一个区块；
- footer 元素，表示页面或内容区的脚注；
- nav 元素表示页面中导航链接的部分；
- figure 元素，表示一段独立的内容流，一般表示文档主体流中的一个独立单元，可以用 figcaption 添加标题；
- main 元素，表示页面中的主要内容；

## 新增的其他元素

- video 元素，用于定义视频流；
- audio 元素，用于定义音频流；
- embed 元素，用来插入各种类型的多媒体内容；
- mark 元素，一般用来呈现突出显示或者高亮的内容；
- progress 元素，表示运行中的进程；如：下载进度条；
- meter 元素，用来显示给定范围的度量值；
- time 元素，用来表示时间或日期；
- ruby 元素，用来表示 ruby 注释(中文注音或字符);例如:

```html
<ruby>
  我
  <rt>wo</rt>
</ruby>
```

- rt 元素，表示字符的解释或发音；
- rp 元素，在 ruby 中使用以表示浏览器不支持 ruby 时的显示内容；
- wbr 元素，软换行，当视口或者父容器宽度足够时不进行换行；
- canvas 元素，表示图形比如图标和其他图像；
- details 元素，用来表示用户要求得到并且可以得到的细节信息。可以与 summary 元素配合使用；summary 元素为 details 元素的第一个子元素，表示可见的标题内容，用户点击时显示详细内容；
- datalist 元素，表示可选数据的列表；与 input 配合使用制作输入值的下拉列表；
- datagrid 元素，表示可选数据的列表(树形)；
- output 元素，表示不同类型的输出；
- source 元素，作为媒介元素为 video、audio 定义媒介资源；
- dialog 元素表示对话框；

## 新增的 input 元素类型

- email 类型，用来表示必须输入邮箱的输入框，实际 input 本身并不能校验输入的是否为邮箱；

```html
<input type="email" />
```
