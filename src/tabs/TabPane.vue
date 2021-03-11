<!--
 * @Author: lts
 * @Date: 2021-03-10 20:06:36
 * @LastEditTime: 2021-03-11 13:11:27
 * @FilePath: \my-cli-ui\src\tabs\TabPane.vue
-->
<template>
  <div ref="myRef">
    <slot />
  </div>
</template>
<script>
import { defineComponent, inject, onMounted, ref,createVNode } from "vue";

export default defineComponent({
  name: "TabPane",
  props: {
    tab: String,
    myKey: String,
  },
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    let myRef = ref(null);
    const pushKeysAndTabs = inject("pushKeysAndTabs");
    onMounted(() => {
      // console.log(createVNode(myRef.value))
      pushKeysAndTabs({ tab: props.tab, key: props.myKey,slots:createVNode(myRef.value) });
    });
    return {
      myRef,
    };
  },
});
</script>
<style lang="less" scoped>
</style>
