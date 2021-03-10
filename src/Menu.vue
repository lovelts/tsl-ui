<!--
 * @Author: lts
 * @Date: 2021-03-09 13:40:09
 * @LastEditTime: 2021-03-10 12:43:43
 * @FilePath: \my-cli-ui\src\Menu.vue
-->
<template>
  <div class="ts-menu" :style="style">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent, provide, ref } from "vue";
export default defineComponent({
  name: "Menu",
  props: {
    defaultSelect: String,
    style:Object
  },
  setup(props) {
    const activeKey = ref(props.defaultSelect);
    provide('activeKey',activeKey)
    const keys = ref(["1", "2", "3"]);
    const handleClick = (currentKey) => {
      activeKey.value = currentKey;
    };
    provide('handleClick',handleClick)
    return {
      handleClick,
      keys,
      activeKey,
    };
  },
});
</script>
<style lang="less" scoped>
.ts-menu {
  text-align: left;
  position: relative;
  display: flex;
  width: 256px;
  height: 100%;
  border-right: 1px;
  border-right-style: solid;
  border-color: #e2e2e2;
  flex-direction: column;
  transition: all .3s;
}
</style>