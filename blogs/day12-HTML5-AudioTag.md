# AUDIO标签详细解读

[TOC]

## 过程

### 前情提要

这两天弄了个基于Vue的音乐播放器，因为最近好多人做我也就跟着学了学。还没有很完善，在audio这里玩了很久。以前都没用过audio标签。

### 重点

#### 前言

audio标签是HTML5中新增的标签之一。可以看看[HTML5之前怎么导入音频](https://www.runoob.com/html/html-sounds.html)。

网页内播放可以用embed导入，但是embed标签过不了HTML4的validation。下面这个用了vue绑定src。

```html
<embed height="50" width="100" :src="songUrl">
```



#### audio标签概述

用来定义声音。

下面看看属性们。测试的时候手上没有音乐的话src可以用我的

https://tianyitimothy.github.io/resources/arcs.mp3



#### 子标签source

类似src属性，用法Demo:

```html
<audio controls>
	<source src="my.mp3">
	<source src="my.ogg">
</audio>

```

用于放多个src，这样浏览器不支持的src会略过，尝试播放下一个。



#### 属性

##### `src`

用来指定音乐的路径。Demo:

```html
<audio src="song.mp3">
    能看到说明不支持
</audio>
```

但你会发现用了上面的代码，并不会显示。这是因为没有自定义界面，也没有加上`controls`属性。



##### `controls`

用来指定是否显示默认的音乐面板。Demo:

```html
<audio src="song.mp3" controls></audio>
```

这样浏览器会显示audio标签的默认播放面板。也可以写作:

```html
<audio src="song.mp3" controls="controls"></audio>
```

`controls`默认是没有的，然后值又只有一个"controls"，不加他就不会显示面板。但是现在`autoplay`属性都已经禁止使用了，只有自己自定义的话才会不需要controls。



##### `loop`

存在此属性则开启循环。值只有"loop"。Demo:

```html
<audio src="song.mp3" controls loop></audio>
```



##### `muted`

存在此属性则静音。值只有"muted"。Demo:

```html
<audio src="song.mp3" controls muted></audio>
```



##### `preload`

设定音频的预加载方式。

="auto":自动加载，页面加载后载入整个音频

="metadata":自动加载，页面加载后只载入[元数据](https://baike.baidu.com/item/%E5%85%83%E6%95%B0%E6%8D%AE)

="none":不自动加载

PS 手机端的preload会被无视，具体默认值是什么没测试~盲猜所有内核都是none吧~

Demo:

```html
<audio src="song.mp3" controls preload="none"></audio>
```



#### JS操作



##### 拿到audio标签

就是获得DOM。Demo:

```javascript
const audioDOM = document.getElementById("audio");
```



##### 当前播放时间currentTime

currentTime属性可读可写。返回当前播放时长，单位是秒。可以通过修改它来实现倒退or前进x秒，倒退5秒Demo:

```javascript
const audioDOM = document.getElementById("audio");
if (audioDOM.currentTime > 5) {
    audioDOM.currentTime -= 5;
} else {
    audioDOM.currentTime = 0;
}
```



##### 音频总时长duration

duration属性是可读属性。返回音频总时长，单位是秒。要注意在load()方法之前，duration的值为NaN。用法伪代码:

```javascript
const audioDOM = document.getElementById("audio");
if (isNaN(audioDOM.duration)) {
    // 未加载时的操作
} else {
    // 已加载时的操作
}
```



##### 音量volume

volume属性可读可写。返回当前音量，最小是0（静音），最大音量是1。可以通过修改它来实现音量增加or减少的按钮。加10%音量Demo:

```javascript
const audioDOM = document.getElementById("audio");
if (audioDOM.volume < 0.9) {
    audioDOM.volume += 0.1;
} else {
    audioDOM.volume = 1;
}
```

音量有时候会变成7.99999999这样的奇葩数字...很奇葩，但是用户来说没有任何影响。



##### 播放速率playbackRate

playbackRate就是播放速率，可读可写，返回播放速度，值是速度的倍率，最大播放速度根据内核的不同而有所不同，但是正常来说2倍已经够用了。选择速度Demo:

```javascript
// 拿到dom
const audioDOM = document.getElementById("audio");
// 不是数字
if(isNaN(rate)){
	return;
}
rate = parseInt(rate);
const minRate = 0.5;
const maxRate = 2;
if (rate <= maxRate && rate >= minRate) {
    audioDOM.playbackRate = rate;
} else if (rate < minRate) {
    audioDOM.playbackRate = minRate;
} else {
    audioDOM.playbackRate = maxRate;
}
```



##### 播放play()

使用播放方法让暂停了的音频播放。Demo:

```javascript
// 拿到dom
const audioDOM = document.getElementById("audio");
audioDOM.play();
```

诶看到这个是不是很心动，autoplay属性被取缔了，那我直接在window.onload里面用play()开始播放不就好了吗？**不。**如果用户没有“跟页面互动”就会报错！

"Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first."



##### 暂停pause()

使用暂停方法让正在播放的音频暂停。Demo:

```javascript
// 拿到dom
const audioDOM = document.getElementById("audio");
audioDOM.pause();
```



##### 是否暂停paused

paused属性是可读属性，返回boolean值：若音频是暂停状态，返回true；反之返回false。通过paused实现播放/暂停Demo:

```javascript
// 拿到dom
const audioDOM = document.getElementById("audio");
if (audioDOM.paused === true) {
    audioDOM.play();
} else {
    audioDOM.pause();
}
```



##### 暂停pause()

使用播放方法让暂停了的音频播放。Demo:

```javascript
// 拿到dom
const audioDOM = document.getElementById("audio");
audioDOM.play();
```



##### 加载load()

如果前面没设置preload或者设置了preload为none，可以用这个方法来触发加载。



#### 加载的生命周期（按先后顺序排序）

其实是可以被监听的事件们，监听伪代码:

```javascript
myAudio.addEventListener("loadstart", function() {
  // 当这个事件触发的时候干嘛呢~
});
```



##### loadstart开始加载

开始加载音频了。



##### durationchange时长改变

音频的时长改变了。



##### loadedmetadata元数据加载完毕

可以用作判断“音频初始化”的方法。当然初始化也可以用duration属性是否为NaN或者durationchange来判断，看需求了。



##### loadeddata数据开始加载

"The `loadeddata` event is fired when the first bit of media arrives."在加载了第一位(bit)的文件时触发。我感觉这个名字取得不好，loadeddata更像是数据已经加载完了。然而加载完了的事件是canplaythrough`。



##### progress加载中

音频还在加载中。loader可以在这里部署。



##### canplay可以播放

音频可以播放了。可以在这个事件触发之后再把controls设置为可以操作的。



##### canplaythrough可以播放整个音频

音频加载完全完成了！

##### 

#### 播放事件

##### timeupdate时间更新

这个time指的是`currentTime` ，最频繁是“每250毫秒触发一次”。



##### waiting等待中

由于没有数据而导致暂停时触发。



##### playing播放中

从waiting状态转换到可以播放的状态时触发。



##### play播放

play()方法被调用时触发。



##### pause暂停

pause()方法被调用时触发。



##### ended结束

音频播放完毕后触发。



##### volumechange音量改变

音量改变时触发。



## 尾巴

1. 什么？？！你要找的这里没有？那来读读[文档](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics)吧！我略过了一些~
2. 比如有一个canplaytype我就没写，因为我自己只在用mp3格式，也就懒得一个个type去测试了~
3. 我的自定义界面要留到以后水博客的时候再写~
4. 我又又又又又又又通宵了。