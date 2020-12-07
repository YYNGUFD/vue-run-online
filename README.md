 
# vue-run-online
>vue-run-online 是一款能够在线编辑/预览代码效果的vue组件
# 前置说明
  vue-run-online 是基于[vue-fun-sfc](https://www.npmjs.com/package/vue-run-sfc)组件进行自定义改造，在原来基础上增加了一些属性和可自定义配置项目,主要是为了配置自己自定义组件库而进行改造，非商业用途～
## 使用说明
### 安装

```
npm install vue-run-online

```
### 使用
* 全局使用

```
import VueRunOnline from "vue-run-online";
 
Vue.use(VueRunOnline, { 
  cssLabs: ["https://unpkg.com/normalize.css@8.0.1/normalize.css"],
  jsLabs: ["https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/index.js"], 
});

```

* 局部使用
```
<script>
  import { VueRunOnline } from "vue-run-online";
 
  export default {
    components: { VueRunOnline }
  };
</script> 
```
## 传入说明
### props

属性 | 类型 |默认值|属性描述|可选值
---|---|---|---|---
code  | string  | '' | 传入的需要进行demo演示的代码
jsLabs | Array｜String | ' ' | code执行所需要js资源
cssLabs | Array｜String | ' ' | code执行所需要css
canEdit| Boolean | true |是否可以编辑代码区域
comDesc|String |''|组件说明 展示在头部下面
hideAllBtn｜Boolean| false| 隐藏头部所有按钮
hideButtons|Array|[]|隐藏头部三个按钮组|['reset','full','layout']
hideRight|Boolean ｜false ｜隐藏右下角内容配置
rightLink|String|' '|右下角链接配置
rightText|String|' '|右下角链接文字配置
js | Array｜String | ' ' | code执行所需要css
css | Array｜String | ' ' | code执行所需要css 
themeColor | String | '#409eff' | 代码演示主题效果颜色
themeBorderColor | String |'#eaeefb' | 代码演示主题边框色
row | Boolean |false | 代码和演示效果的排列效果 true 左右排列 false上下排列 | 
reverse | Boolean | false | 代码和演示效果上下排列时候 代码区和编辑区上下位置 false 编辑器在下, 展示区在上 true 编辑器在上, 展示区在 下 |
title | String | '' | 代码展示标题名称 |
height | String | '' | 代码展示高度 |
open | Boolean | true | 是否自动打开编辑区域 |
isHideHeader | Boolean | false | 是否隐藏头部 |

### slots
提供了三个可以插槽功能

插槽名称 |描述
---|---
header | 头部插槽位置 页面头部中间部分 当hideAllBtn==true时，将会展示在右侧
desc | 组件说明部分 和comDesc字段渲染在一个位置
footer |  底部右下角说明部分 和其他的配置项目一起展示

## demo示例
### 基本正常使用 可编辑状态 
```
  <vue-run-online
          :js-labs="jsLabs"
        :css-labs="cssLabs"
        title="测试DEMO"
        :open="true"
        :code="code"
      >
      <div slot='header'>我是标题呀</div>
      <div slot="footer">我是底部的标签呀</div> 
      </vue-run-online>
<script>
 data() {
    return {
      exampleCode: exampleCode,
      codemirrorOption: codemirrorOption,
      jsLabs: ["https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/index.js"],
      cssLabs: [
        "https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/theme-chalk/index.css"
      ],
      code: `<template>
  <div>
    <h1>{{title}}</h1>
    <div><el-button type="primary" @click="handleClick">可以进行操作</el-button></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "我是按钮"
      };
    },
    methods: {
      handleClick () {
        this.$message.success('')
      }
    }
  };
<\/script>

<style lang="scss">
  body {
    #box {
      color: #409EFF;
    }
  }
</style>`
    };
  }
</script>
```
![image](http://note.youdao.com/yws/public/resource/cda3d18e86473bd84cad3cdb4bc49e15/xmlnote/03A20DFCA49748C98A5C87368CA9B533/36324)

### 预览demo

```
 <vue-run-online
        :hideButtons="['reset']"
        :js-labs="jsLabs"
        :css-labs="cssLabs"
        :open="true"
        :canEdit="false"
        :code="code3"
      >
        <div slot="header">我是标题呀</div>
        <div slot="desc">我是组件说明嘻嘻</div>
        <div slot="footer">我是底部的标签呀</div>
      </vue-run-online>
    //code
       code3: `<template>
  <div>
   我是一个静态的可预览的文件呀
  </div>
</template>`,
```

![image](http://note.youdao.com/yws/public/resource/cda3d18e86473bd84cad3cdb4bc49e15/xmlnote/9EA0CA11C6594E8C954DDDC8E573CDC6/36333)
# 参考地址
* [vue-run-sfc](https://www.npmjs.com/package/vue-run-sfc)
* [使用Vue-codemirror使用总结](https://blog.csdn.net/weixin_43080277/article/details/83860629 )
* [CodeMirror使用](https://my.oschina.net/u/4360005/blog/3588410)