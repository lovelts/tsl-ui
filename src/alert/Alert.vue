<!--
 * @Author: lts
 * @Date: 2021-03-10 12:48:51
 * @LastEditTime: 2021-03-12 10:43:14
 * @FilePath: \my-cli-ui\src\alert\Alert.vue
-->
<template>
  <transition-group name="alert">
    <div
      v-if="isShow"
      class="ts-alert"
      :class="{ [`ts-alert-${type}`]: type, 'alert-font': description }"
    >
      <div class="alert-header">
        <div class="content">
          <ts-icon v-if="icon" :name="icon" class="ts-alert-title-icon" />
          {{ message }}
        </div>
        <ts-icon name="delete" class="close-icon" @click="handleDelete" />
      </div>
      <div v-if="description" class="alert-description">{{ description }}</div>
    </div>
  </transition-group>
</template>
<script>
import { defineComponent, ref } from "vue";
import TsIcon from "../icon/Icon";
export default defineComponent({
  name: "TsAlert",
  components: {
    TsIcon,
  },
  props: {
    type: {
      type: String,
      default: "success",
    },
    message: String,
    icon: {
      type: String,
    },
    description: String,
  },
  setup() {
    let isShow = ref(true);
    const handleDelete = () => {
      isShow.value = false;
    };
    return {
      handleDelete,
      isShow,
    };
  },
});
</script>
<style lang="less" scoped>
.ts-alert {
  min-height: 0;
  position: relative;
  z-index: 10;
  transition: all 0.3s;
  text-align: left;
  display: flex;
  flex-direction: column;
  .alert-header {
    display: flex;
    align-items: center;
    width: 100%;
    .content {
      display: flex;
      flex: 1;
      align-items: center;
      .ts-alert-title-icon {
        margin-right: 0.3em;
      }
    }
  }
  &.alert-font {
    .alert-header {
      .content {
        font-size: 16px;
      }
    }
    .alert-description {
      padding: 0.5em 1.6em;
    }
  }
  .alert-description {
    width: 100%;
    padding: 0.5em 1.4em;
  }
  position: relative;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: tnum;
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  word-wrap: break-word;
  border-radius: 2px;
  &.ts-alert-success {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    fill: #53b608;
  }
  &.ts-alert-error {
    background-color: #fff2f0;
    border: 1px solid #ffccc7;
    fill: red;
  }
  &.ts-alert-warning {
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
    fill: #eebd1c;
  }
  .close-icon {
    cursor: pointer;
    font-size: 10px;
  }
}
.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease;
}

.alert-enter-from,
.alert-leave-to {
  height: 0;
  opacity: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>