<!--
 * @Author: lts
 * @Date: 2021-03-07 10:44:42
 * @LastEditTime: 2021-03-08 17:51:53
 * @FilePath: \my-cli-ui\src\Icon.vue
-->
<template>
  <svg class="ts-icon" >
    <use :xlink:href="`#ts-${name}`"></use>
  </svg>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: "TsIcon",
  props: {
    name: String,
  },
});
</script>
<style lang="less" scoped>
.ts-icon {
  width: 1em;
  height: 1em;
}
</style>