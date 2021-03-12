<!--
 * @Author: lts
 * @Date: 2021-03-09 22:21:58
 * @LastEditTime: 2021-03-12 10:24:04
 * @FilePath: \my-cli-ui\src\modal\Modal.vue
-->
<template>
  <transition name="mask">
    <div v-show="visible" class="ts-modal-box"></div>
  </transition>
  <transition name="modal">
    <div v-show="visible" class="ts-modal">
      <div class="ts-modal-content">
        <div class="ts-modal-header">
          <slot name="header" />
        </div>
        <div class="ts-modal-body">
          <slot />
        </div>
        <div class="ts-modal-footer">
          <ts-button v-if="onCancel" class="cancel" @click="onCancel">{{
            cancelText
          }}</ts-button>
          <ts-button v-if="onOk" type="primary" class="ok" @click="onOk">{{
            okText
          }}</ts-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { defineComponent } from "vue";
import TsButton from "../button/Button";
export default defineComponent({
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    onOk: {
      type: Function,
    },
    onCancel: {
      type: Function,
    },
    okText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
  },
  components: {
    TsButton,
  },
  setup() {},
});
</script>
<style lang="less" scoped>
.ts-modal-box {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1000;
}
.ts-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  // background-color: rgba(0, 0, 0, 0.45);
  z-index: 1000;
  height: 100%;
  // transition: all 0.3s ease;
  .ts-modal-content {
    position: relative;
    top: 100px;
    width: 520px;
    // transform-origin: 398.5px 358px;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    text-align: left;
    .ts-modal-header {
      text-align: left;
      padding: 16px 24px;
      color: rgba(0, 0, 0, 0.85);
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      border-radius: 2px 2px 0 0;
      margin: 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      word-wrap: break-word;
    }
    .ts-modal-body {
      padding: 24px;
      font-size: 14px;
      line-height: 1.5715;
      word-wrap: break-word;
    }
    .ts-modal-footer {
      padding: 10px 16px;
      text-align: right;
      background: 0 0;
      border-top: 1px solid #f0f0f0;
      border-radius: 0 0 2px 2px;
      .ok {
        margin-left: 10px;
      }
    }
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: scale(0.4, 0.4);
  opacity: 0;
}
.mask-enter-active,
.mask-leave-active {
   
  transition: all 0.3s ease;
}

.mask-enter-from,
.mask-leave-to {
 
  opacity: 0;
}
</style>