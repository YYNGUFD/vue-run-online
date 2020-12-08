<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-07 11:05:28
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-07 15:57:29
-->
<template >
  <div class="vue-run-online-desc"> 
    <slot v-if="$slots.default"></slot>
    <div v-if="comDesc" v-html="comDesc"></div>
  </div>
</template>
<script>
export default {
   props:{
     comDesc:String,
   },
   name:"VueRunOnlineDesc"
}
</script>
<style lang="css" scoped>
.vue-run-online-desc{ 
  background: var(--vue-run-sfc-border, #ebeef5);
  padding:5px 10px;
  z-index: 1;
  border: 1px solid var(--vue-run-sfc-border, #ebeef5);
  border-top: 0px; 
  box-sizing: content-box; 
  color: var(--vue-run-sfc-main, #ebeef5);
  font-size: 14px;
}
</style>