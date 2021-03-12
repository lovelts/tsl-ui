<!--
 * @Author: lts
 * @Date: 2021-03-10 18:20:03
 * @LastEditTime: 2021-03-12 10:44:31
 * @FilePath: \my-cli-ui\src\tabs\Tabs.vue
-->
<template>
  <div class="ts-tabs">
    <div class="ts-tabs-header">
      <div
        v-for="item in keysAndTabs"
        :key="item.key"
        class="ts-tabs-pane"
        :class="{ active: activeKey === item.key }"
        @click="handleClick(item.key)"
      >
        {{ item.tab }}
      </div>
    </div>
    <div class="ts-tabs-body">
      <div
        v-for="item in keysAndTabs"
        :key="item.key"
        class="ts-tabs-pane-content"
        :class="{ 'active-content': activeKey === item.key }"
      ></div>
    </div>
    <div ref="tempRef" style="display: none"><slot /></div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref, provide } from "vue";

export default defineComponent({
  name: "TsTabs",
  setup() {
    let keysAndTabs = ref([]);
    const pushKeysAndTabs = (obj) => {
      keysAndTabs.value = [...keysAndTabs.value, obj];
    };
    provide("pushKeysAndTabs", pushKeysAndTabs);
    let tempRef = ref();
    let activeKey = ref();
    onMounted(() => {


      keysAndTabs.value[0] && (activeKey.value = keysAndTabs.value[0].key);
    });
    const handleClick = (key) => {
      // console.log(key);
      activeKey.value = key;
    };
    return {
      handleClick,
      activeKey,
      tempRef,
      keysAndTabs,
    };
  },
});
</script>
<style lang="less" scoped>
@active-color: #ff4d4f;
.ts-tabs {
  width: 100%;
  text-align: left;
  .ts-tabs-header {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    outline: 0;
    transition: padding 0.3s;
    display: inline-flex;
    margin-bottom: 16px;
    .ts-tabs-pane {
      font-weight: 500;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      margin: 0 32px 0 0;
      padding: 12px 16px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        transform: scaleX(0.0001);
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        height: 2px;
        background-color: @active-color;
        transition: all 0.15s;
      }
      &.active {
        color: @active-color;
        &::after {
          content: "";
          position: absolute;
          transform: scaleX(1);
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 1;
          background-color: @active-color;
        }
      }
      &:hover {
        color: @active-color;
      }
    }
  }
  .ts-tabs-body {
    display: flex;
    flex-direction: row;
    width: 100%;
    // transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    // will-change: margin-left;
    color: rgba(0, 0, 0, 0.85);
    .ts-tabs-pane-content {
      height: 0;
      padding: 0 !important;
      overflow: hidden;
      opacity: 0;
      flex-shrink: 0;
      width: 0;
      opacity: 0;
      transition: all 0.45s;
      pointer-events: none;
      &.active-content {
        opacity: 1;
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>