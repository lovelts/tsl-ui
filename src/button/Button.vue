<!--
 * @Author: lts
 * @Date: 2021-03-06 13:14:04
 * @LastEditTime: 2021-03-12 10:18:58
 * @FilePath: \my-cli-ui\src\button\Button.vue
-->
<template>
  <button
    class="ts-button"
    :class="{
      [`icon-${iconPosi}`]: true,
      [`btn-${type}`]: true,
    }"
  >
    <ts-icon class="loading icon" v-if="loading" name="loading" />
    <ts-icon class="icon" v-if="icon && !loading" :name="icon" />
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "../icon/Icon.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  components: {
    "ts-icon": Icon,
  },
  props: {
    icon: String,
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "default",
    },
    iconPosi: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
});
</script>
<style lang="less" scoped>
.ts-button {
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  height: var(--button-height);
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  padding: 0 1em;
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    border-color: var(--border-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-top: 1.5px;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      //   margin-top: 1px;
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  &.btn-primary {
    background-color: rgb(81, 226, 52);
    border: 1px solid rgb(81, 226, 52);
    .icon {
      fill: #fff;
    }
    color: #fff;
    transition: all ease 0.2s;
    &:hover {
      background-color: rgb(125, 221, 105);
    }
    &:active {
      background-color: rgb(125, 221, 105);
    }
    &:focus {
      outline: none;
    }
  }
  &.btn-danger {
    background-color: #ff4d4f;
    border: 1px solid #ff4d4f;
    color: #fff;
    .icon {
      fill: #fff;
    }
    transition: all ease 0.2s;
    &:hover {
      background-color: #f56a6d;
    }
    &:active {
      background-color: #f56a6d;
    }
    &:focus {
      outline: none;
    }
  }
  .loading {
    animation: spin .8s infinite linear;
  }
}
</style>