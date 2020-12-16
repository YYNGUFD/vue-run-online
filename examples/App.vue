
<template>
  <div>
    <section class="main-content">
      <h2>可以编辑的代码区</h2> 
      <vue-run-online
        :js-labs="jsLabs"
        :css-labs="cssLabs"
        title="测试DEMO"
        :open="true"
        :code="code"
        :isHideHeader='true'
      >
        <div slot="header">我是标题呀</div>
        <div slot="footer">我是底部的标签呀</div>
      </vue-run-online>
      <h2>预览模式</h2>
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

  <vue-run-online
        :hideButtons="['reset']"
        :js-labs="jsLabs"
        :css-labs="cssLabs"
        :open="true"
        :canEdit="false"
        :code="code3"
        :vueUrl="'https://cdn.jsdelivr.net/npm/vue@2.6.12'"
      >
      自定义的Vue的版本
      </vue-run-online>
      
      <h2>DEMO 源码</h2>
      <codemirror
        style="border-top: 1px solid #eee"
        :options="codemirrorOption"
        v-model="exampleCode"
      />
    </section>
  </div>
</template>

<script>
import { codemirror, codemirrorOption } from "../src/codemirror";
import exampleCode from "./example";

export default {
  name: "App",
  components: {
    codemirror,
  },
  data() {
    return {
      code3: `<template>
  <div>
   我是一个静态的可预览的文件呀
  </div>
</template>`,
      exampleCode: exampleCode,
      codemirrorOption: codemirrorOption,
      jsLabs: ["https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/index.js"],
      cssLabs: [
         "https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/theme-chalk/index.css",
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
        this.$toast.success('装备不花一分钱')
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
</style>`,
    };
  },
};
</script>

<style>
@import url("./app.css");
pre {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
  background-color: #282c34;
  border-radius: 6px;
  overflow: auto;
  color: rgba(255, 255, 255, 0.9);
}
</style>
