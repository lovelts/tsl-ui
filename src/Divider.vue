<!--
 * @Author: lts
 * @Date: 2021-03-09 11:40:27
 * @LastEditTime: 2021-03-09 13:30:30
 * @FilePath: \my-cli-ui\src\Divider.vue
-->
<template>
  <div
    v-if="type === 'horizontal'"
    class="ts-divider-horizontal"
    :class="{
      [`ts-divider-text-${posi}`]: true,
      ['ts-divider-dashed']: dashed,
    }"
  >
    <span class="ts-divider-text"> <slot /> </span>
  </div>
  <div
    class="ts-divider-vertical"
    v-if="type === 'vertical'"
    :class="{
      ['ts-divider-dashed']: dashed
    }"
  ></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Divider",
  props: {
    posi: {
      type: String,
      default: "center",
    },
    type: {
      type: String,
      default: "horizontal",
    },
    dashed: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style lang="less" scoped>
.ts-divider-horizontal {
  display: table;
  margin: 16px 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  background: 0 0;
  &::after,
  &::before {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 50%;
    border-top: 1px solid #e2e2e2;
    transform: translateY(50%);
    content: "";
  }
  .ts-divider-text {
    padding: 0 1em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
  }
  &.ts-divider-text-left {
    &::before {
      width: 5%;
    }
    &::after {
      width: 95%;
    }
  }
  &.ts-divider-text-right {
    &::before {
      width: 95%;
    }
    &::after {
      width: 5%;
    }
  }
  &.ts-divider-dashed {
    &::after,
    &::before {
      border-top: 1px dashed #e2e2e2;
    }
  }
}
.ts-divider-vertical {
  // height: ;
  position: relative;
  //   top: -0.06em;
  display: inline-block;
  width: 1px;
  height: inherit;
  margin: 0 8px;
  vertical-align: middle;
  background-color: #e2e2e2;
  &.ts-divider-dashed {
      background-color: transparent;
      border-width: 0 0 0 1px;
      border-style: dashed;
      border-color: #e2e2e2;

  }
}
</style>