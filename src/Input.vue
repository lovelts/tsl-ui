<!--
 * @Author: lts
 * @Date: 2021-03-08 13:53:51
 * @LastEditTime: 2021-03-09 09:53:28
 * @FilePath: \my-cli-ui\src\Input.vue
-->
<template>
  <div
    class="wrapper"
    :class="{
      ['error']: error,
      [`error-posi-${errorPosi}`]: error && errorPosi,
    }"
  >
    <input
      :value="value"
      type="text"
      class="ts-input"
      :disabled="disabled"
      @change="handleChange"
      @input="updateValue"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div v-if="error">
      <ts-icon name="error" class="icon-error" />
      <span class="error-msg">{{ error }}</span>
    </div>
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
    errorPosi: {
      type: String,
      default: "right",
    },
  },
  emits: ["change", "input", "blur", "focus", "update:value"],
  // eslint-disable-next-line no-unused-vars
  setup(props, ctx) {
    const updateValue = (e) => {
      ctx.emit("update:value", e.target.value);
    };
    const handleChange = (e) => {
      ctx.emit("change", e.target.value);
    };
    const handleInput = (e) => {
      ctx.emit("update:value", e.target.value);
    };
    const handleBlur = (e) => {
      ctx.emit("blur", e.target.value);
    };
    const handleFocus = (e) => {
      ctx.emit("focus", e.target.value);
    };
    return {
      handleChange,
      handleInput,
      handleBlur,
      handleFocus,
      updateValue,
    };
  },
};
</script>
<style lang="less" scoped>
@height: 32px;
@border-color: #999;
@border-hover-color: #666;
@border-shadow-color: rgba(179, 179, 179, 0.5);
@error-red: #ff4d4f;
@font-color: rgba(48, 48, 48, 0.85);
.wrapper {
  display: inline-flex;
  .ts-input {
    color: @font-color;
    height: @height;
    font-size: 12px;
    border: 1px solid @border-color;
    font-size: var(--font-size);
    border-radius: 4px;
    padding: 0 1em;
    transition: all linear 0.1s;
    &:hover {
      border-color: @border-hover-color;
    }
    &:focus {
      border-color: @border-hover-color;
      box-shadow: 0 0 0 2px @border-shadow-color;
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
    > div {
      display: inline-flex;
      align-items: center;
      > * {
        margin-left: 0.4em;
      }
      > input {
        border-color: @error-red;
        &:hover {
          border-color: rgb(255, 0, 0);
        }
        &:focus {
          border-color: rgb(255, 0, 0);
          box-shadow: 0 0 0 2px rgb(255, 204, 204);
        }
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
  &.error-posi-bottom {
    flex-direction: column;
    justify-content: center;
    .error-msg {
      margin-top: 5px;
    }
    .icon-error {
      margin-top: 5px;
    }
  }
  &.error-posi-top {
    flex-direction: column-reverse;
    justify-content: center;
    .error-msg {
      margin-bottom: 5px;
    }
    .icon-error {
      margin-bottom: 5px;
    }
  }
}
</style>