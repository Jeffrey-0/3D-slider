# 3D旋转轮播图

自制的jQuery插件：3D-slider

演示demo地址：[3D旋转轮播图演示](https://jeffrey-0.github.io/3D-slider/3D旋转轮播.html)

## 效果图&功能

![img](img/3D轮播效果图.gif)

* 3D旋转效果
* 自动轮播
* 点击切换当前图片
* 点击当前图片跳转链接
* 鼠标悬停停止自动轮播
* 自适应各种图片（最大等比例+居中裁切）

## 快速开始

下载地址：` https://github.com/Jeffrey-0/3D-slider`

CSS样式

```html
<link rel="stylesheet" type="text/css" href="your_path/3D-slider.css">
```

HTML结构

```html
<div id="wrapper" class="wrapper">
    <a href="#"><img src="your_path/img/1.jpg" alt="火影"></a>
    <a href="#"><img src="your_path/img/2.jpg" alt="海贼王"></a>
</div>
```

JS脚本

```html
<!-- 引入jquery -->
<script type="text/javascript" src="your_path/jquery.min.js"></script>
<!-- 引入slider插件 -->
<script type="text/javascript" src="your_path/3D-slider.js"></script>
<!-- 使用slider插件 -->
<script>      
        $('#wrapper').slider({
          curDisplay: 0, // 当前显示第n张图片
          autoPlay: true, // 是否自动轮播
          interval: 2000, // 轮播的时间，单位：毫秒
          translateX: 200, // 图片向俩边平移的距离，单位：px
          translateZ: 300, // 图片向前平移的距离，视觉上的放大缩小，单位：px
          rotateY: 30  // 图片的偏移角度，单位：deg
        })
</script>
```



## 选项

这些选项均有默认值，可根据自己喜好配置不同值

| 选项       | 类型    | 默认 | 描述                           |
| ---------- | ------- | ---- | ------------------------------ |
| curDisplay | Number  | 0    | 当前显示第n张图片              |
| autoPlay   | Boolean | true | 是否自动轮播                   |
| interval   | Number  | 2000 | 轮播的时间，单位：毫秒         |
| translateX | Number  | 200  | 图片向俩边平移的距离，单位：px |
| translateZ | Number  | 300  | 图片向前平移的距离，单位：px   |
| rotateY    | Number  | 30   | 图片的偏移角度，单位：deg      |

* 如果你不想要点击当前图片跳转链接，可以设置a标签中的`href`为`javascript:;`

## 兼容性

* 兼容主流浏览器 + 移动端
* 本插件使用的jQuery为[jQuery3.5.0版本](https://cdn.bootcdn.net/ajax/libs/jquery/3.5.0/jquery.min.js)