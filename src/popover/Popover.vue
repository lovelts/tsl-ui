<!--
 * @Author: lts
 * @Date: 2021-03-10 15:46:48
 * @LastEditTime: 2021-03-10 20:41:06
 * @FilePath: \my-cli-ui\src\popover\Popover.vue
-->
<template>
  <div class="ts-popover" ref="popoverRef" :class="{ 'is-show': isShow }">
    <div class="popover-header">
      <slot name="title" />
    </div>
    <div class="popover-body">
      <slot name="body"/>
    </div>
    <div class="shanjiao"></div>
  </div>
  <div class="my-slot" ref="slotRef" @click="handleClick"><slot /></div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Popover",
  setup() {
    let isShow = ref(false);
    let slotRef = ref(null);
    let popoverRef = ref(null);
    onMounted(() => {
      popoverRef.value.style.top =
        slotRef.value.offsetTop - popoverRef.value.offsetHeight - 18 + "px";
      popoverRef.value.style.left =
        slotRef.value.offsetLeft - slotRef.value.offsetWidth / 2 + "px";
      window.addEventListener("click", () => {
        isShow.value && (isShow.value = false);
      });
    });
    const handleClick = (e) => {
      e.stopPropagation() || (e.cancelBubble = true);
      isShow.value = !isShow.value;
      return false;
    };
    return {
      isShow,
      slotRef,
      popoverRef,
      handleClick,
    };
  },
});
</script>
<style lang="less" scoped>
.ts-popover {
  &.is-show {
    opacity: 1;
    z-index: 999;
    transform: rotate(0deg) scale(1,1);
  }
  transform: rotate(90deg) scale(0,0);

  box-shadow: 0 0 8px rgb(206, 206, 206);
  transition: all 0.3s;
  opacity: 0;
  margin-bottom: 18px;
  position: absolute;
  background-color: #fff;
  border: 1px solid rgb(255, 255, 255);
  top: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: tnum;
  z-index: -999;
  font-weight: 400;
  white-space: normal;
  text-align: left;
  cursor: auto;
  user-select: text;
  .popover-header {
    min-width: 177px;
    min-height: 32px;
    margin: 0;
    padding: 5px 16px 4px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
  }
  .popover-body {
    padding: 12px 16px;
    color: rgba(0, 0, 0, 0.85);
  }
  .shanjiao {
    position: absolute;
    bottom: 0;
    left: calc(50% - 5px);
    background-color: #fff;
    border-right: 1px solid rgb(232, 232, 232);
    border-bottom: 1px solid rgb(232, 232, 232);
    width: 10px;
    height: 10px;
    transform: translateY(50%) rotate(45deg);
  }
}
.my-slot {
  display: inline-flex;
  // width: auto;
}
</style>