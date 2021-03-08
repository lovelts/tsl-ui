<!--
 * @Author: lts
 * @Date: 2021-03-08 13:53:51
 * @LastEditTime: 2021-03-08 18:34:38
 * @FilePath: \my-cli-ui\src\Input.vue
-->
<template>
  <div class="wrapper" :class="{ error }">
    <input :value="value" type="text" class="ts-input" :disabled="disabled" />
    <template v-if="error">
      <ts-icon name="error" class="icon-error" />
      <span class="error-msg">{{error}}</span>
    </template>
  </div>
</template>
<script>
import TsIcon from "./Icon";
export default {
  name: "Input",
  components: {
    TsIcon,
  },
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>
<style lang="less" scoped>
@height: 32px;
@border-color: #999;
@border-hover-color: #666;
@border-shadow-color: rgba(0, 0, 0, 0.5);
@error-red: #ff4d4f;
.wrapper {
  display: inline-flex;
  align-items: center;
  .ts-input {
    height: @height;
    font-size: 12px;
    border: 1px solid var(--border-color);
    font-size: var(--font-size);
    border-radius: 4px;
    padding: 0 1em;
    &:hover {
      border-color: @border-hover-color;
    }
    &:focus {
      box-shadow: inset 0 1px 2px @border-shadow-color;
      outline: none;
    }
    &[disabled] {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 1;
      border-color: #c4c4c4;
    }
  }
  &.error {
    > * {
     &:not(:last-child) {
        margin-right: .4em;
     }
    }
    > input {
      border-color: @error-red;
    }
    .icon-error {
      fill: @error-red;
      font-size: 16px;
    }
    .error-msg {
      color: red;
    }
  }
}
</style>