/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-03 13:24:34
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-03 13:25:19
 */
export default `<template>
  <vue-run-sfc
    :js-labs="jsLabs"
    :css-labs="cssLabs"
    title="测试DEMO"
    :open="true"
    :code="code"
  ></vue-run-sfc>
</template>

<script>

export default {
  data () {
    return {
      code: \`<template>
<div>
  <h1>{{ title }}</h1>
  <div><el-button type="primary" @click="handleClick">点一下, 玩一年</el-button></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      title: "测试一下内容文件"
    }
  },
  methods: {
    handleClick() {
      this.$message.success('装备不花一分钱')
    }
  }
};
<\\/script>
<style lang="scss">
  body {
    #box {
      color: #409EFF;
    }
  }
<\/style>\`
    }
  }
}
</script>
`;
