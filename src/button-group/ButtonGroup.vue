<!--
 * @Author: lts
 * @Date: 2021-03-07 12:47:05
 * @LastEditTime: 2021-03-12 10:43:28
 * @FilePath: \my-cli-ui\src\button-group\ButtonGroup.vue
-->
<template>
  <div class="ts-button-group" ref="myDiv">
    <slot></slot>
  </div>
</template>
<script>
import { onMounted, ref,defineComponent } from "vue";
export default defineComponent ({
  name: "TsButtonGroup",
  setup() {
    const myDiv = ref();
    onMounted(() => {
      // for (const el of myDiv._value.children) {
      //   if (el.nodeName.toLowerCase() !== "button") {
      //     console.warn(
      //       `ts-button-group的子元素应该是ts-button，而不应该是${el.nodeName.toLowerCase()}`
      //     );
      //   }
      // }
    });
    return {
      myDiv,
    };
  },
});
</script>
<style lang="less" scoped>
.ts-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .ts-button {
    border-radius: 0;
    &:not(:first-child) {
        margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>