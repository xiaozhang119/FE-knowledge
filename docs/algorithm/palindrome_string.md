
###### 题目描述

字符串是否是回文字符串，例如“abcdadd”  输出 'abcda',“你说上海人在海上吗”  输出 '上海人在海上'


###### 需求分析

首先判断是否是回文字符， 他的本身去和他的最后位开始依次对比，如果找到且下标不等于他本身，则说明他是一个回文字符反之则不是回文字符


##### 实现代码

```javascript

const  palindrome = (str) => {
    if(str){
        for(let i = 0;  i <= str.length; i++){
            var  a = str.lastIndexOf(str[i]);
            if(a !== i){
                return str.slice(i, a + 1);
            }
        }
    }
    return '';
}

```
