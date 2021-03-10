<!--
 * @Author: lts
 * @Date: 2021-03-10 11:01:34
 * @LastEditTime: 2021-03-10 12:40:08
 * @FilePath: \my-cli-ui\src\card\Card.vue
-->
<template>
  <div
    class="ts-card"
    :style="style"
    :class="{ 'small-card': size === 'small' }"
  >
    <div class="ts-card-header">
      <div class="ts-card-header-title">
        <slot name="title" />
      </div>
      <div class="ts-card-header-extra">
        <slot name="extra" />
      </div>
    </div>
    <div class="ts-card-body"><slot /></div>
    <div class="ts-card-footer" v-if="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    size: {
      type: String,
      default: "default",
    },
    style: {
      type: Object,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
};
</script>
<style lang="less" scoped>
.ts-card {
  position: relative;
  display: flex !important;
  flex-direction: column;
  height: auto !important;
  text-align: left;
  width: 300px;
  border: 1px solid #f0f0f0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: tnum;
  position: relative;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
  .ts-card-header {
    text-align: left;
    min-height: 48px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    background: 0 0;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    zoom: 1;
    display: flex;
    .ts-card-header-title {
      display: inline-block;
      flex: 1;
      padding: 16px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .ts-card-header-extra {
      //   margin-left: auto;
      padding: 16px 0;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 400;
      font-size: 14px;
    }
  }
  .ts-card-body {
    padding: 24px;
    zoom: 1;
  }
  .ts-card-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #f0f0f0;
    padding: 14px 24px;
  }
  &.small-card {
      .ts-card-header {
          min-height: 36px;
          padding: 0 12px;
          .ts-card-header-title {
              padding: 8px 0;
          }
           .ts-card-header-extra {
              padding: 8px 0;
          }
      }
      .ts-card-body {
          padding: 0 12px;
      }
      .ts-card-footer {
          padding: 4px 12px;
      }
  }
}
</style>