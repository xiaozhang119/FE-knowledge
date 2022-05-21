###### 题目描述

已知一个圆的坐标，以及半径，如何用性能更好的函数进行判断一个 x，y 点是否在圆上。

###### 需求分析

1. 圆的概念，圆形是在一个平面内，一动点以一定点为中心，以一定长度为距离旋转一周所形成的封闭曲线，这个一定距离就是圆的半径；
2. 判断一个点是否在园内，只要知道这个点到圆心的距离是否大于半径长度即可；
3. 已知圆的坐标，以及某个点的坐标（x，y），那么是不是很简单了，第一个想法冒出来，平面直角坐标系、两点距离、勾股定理；
4. 以两点向 x，y 轴画垂线，连接两点形成直角三角形，加上已知的坐标可计算出两条直角边的长度；

##### 代码实现

```javascript
const circleDistance = (cp, r, p) => {
  const [x1, y1] = cp;
  const [x2, y2] = p;
  const x = x1 - x2;
  const y = y1 - y2;
  const l = Math.pow(x, 2) + Math.pow(y, 2);
  console.log(l, Math.pow(r, 2));
  return l <= Math.pow(r, 2);
};

console.log(circleDistance([8, 8], 4, [3, 3])); // false
console.log(circleDistance([8, 8], 6, [5, 3])); // true
```
