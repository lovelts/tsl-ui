<!--
 * @Author: lts
 * @Date: 2021-03-09 15:16:35
 * @LastEditTime: 2021-03-12 10:43:57
 * @FilePath: \my-cli-ui\src\menu\MenuItem.vue
-->
<template lang="">
    <div
      class="ts-menu-item"
      :class="{'active':injectKey === myKey}"
      @click="handleItemClick(myKey)"
    >
      <span class="ts-menu-item-text">
          <ts-icon class="menu-item-icon" v-if="icon" :name="icon"/>
          <slot/>
      </span>
    </div>
</template>
<script>
import { defineComponent, inject, ref } from "vue";
import TsIcon from "../icon/Icon";
export default defineComponent({
  name: "TsMenuItem",
  components: {
    TsIcon,
  },
  props: {
    myKey: {
      type: String,
    },
    activeKey: String,
    icon: String,
  },
  setup() {
    let injectKey = ref(inject("activeKey"));
    let handleClick = inject("handleClick");
    const handleItemClick = (myKey) => {
      // 修改父组件的activeKey的状态
      handleClick(myKey);
    };
    return {
      handleItemClick,
      injectKey,
    };
  },
});
</script>
<style lang="less" scoped>
@active-color: red;
@active-bgc: rgb(228, 228, 228);
.ts-menu-item {
  cursor: pointer;
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  // height: 30px;
  margin: 4px 0;
  padding: 0.6em 24px 0.6em 32px;
  transition: all 0.15s linear;
  &:hover {
    color: @active-color;
    fill: red;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid @active-color;
    transform: scaleY(0.0001);
    opacity: 0;
    transition: transform 0.15s;
    content: "";
    border-right-style: solid;
    border-right-width: 3px;
    border-color: @active-color;
  }
  &.active {
    background-color: @active-bgc;
    color: @active-color;
    &::after {
      transform: scaleY(1);
      opacity: 1;
    }
    .menu-item-icon {
      fill: @active-color;
    }
  }
  .ts-menu-item-text {
    text-align: left;
    display: flex;
    align-items: center;
    > .menu-item-icon {
      margin-right: 0.5em;
      margin-top: 1px;
    }
  }
}
</style>