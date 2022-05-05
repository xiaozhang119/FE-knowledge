
###### 题目描述

实现sum方法，实现如下能力：

```javascript

const a = sum(1,2)(3,4)(5);
console.log(a.valueOf()); //15

const b = a(2)(3,1);
console.log(b.valueOf()); // 21

```

###### 需求分析

1. 需求分析，观察 a = sum(1,2)(3,4)(5)， 可知sum方法可接受数字参数做加运算，其返回值可以继续调用并传入参数在其基础上累加；
2. sum方法得返回值存在valueOf方法获取sum方法累加得和；
3. sum方法可接受多参数或者单参数;

##### 实现代码

```javascript

const sum = (() => {
  let record = 0;
  const add = (...rest) => {
    record = rest.reduce((p,n) => p + n, record);
    return add;
  };
  add.valueOf = () => record;
  return add;
})();

const a = sum(1,2)(3,4)(5);
console.log(a.valueOf()); // 15

const b = a(2)(3,1);
console.log(b.valueOf()); // 21

```




