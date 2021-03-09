<!--
 * @Author: lts
 * @Date: 2021-03-08 12:54:13
 * @LastEditTime: 2021-03-09 11:22:10
 * @FilePath: \my-cli-ui\src\App.vue
-->
<template>
  <div>
    基础button
    <ts-button>我爱</ts-button>
    <ts-button icon="dianzan" iconPosi="left">我爱JS</ts-button>
    <br />
    <br />
    <ts-button
      icon="setting"
      iconPosi="left"
      :loading="loading"
      @click="handleClick"
      >我爱</ts-button
    >
    <ts-button
      icon="download"
      iconPosi="right"
      :loading="loading2"
      @click="handleClick2"
      >我爱JS</ts-button
    >
    <br />
    <br />
    <ts-button-group>
      <ts-button icon="prev" iconPosi="left">上一页</ts-button>
      <ts-button>更多</ts-button>
      <ts-button icon="next" iconPosi="right">下一页</ts-button>
    </ts-button-group>
    <br />
    <br />
    <ts-button type="default">上一页</ts-button>
    <ts-button type="primary">上一页</ts-button>
    <ts-button type="danger">上一页</ts-button>
  </div>
  <div>
    <br />
    <ts-input placeholder="我是placeholder" />
    <ts-input value="李四" disabled />
    <ts-input value="李四" error="123132132132" />
    <ts-input @change="handleChange" />
    <ts-input v-model:value="msg" />
    <p>{{ msg }}</p>
    <ts-button @click="changeModel">点击改变</ts-button>
    <ts-input value="李四" error="123132132132" errorPosi="bottom" />
    <ts-input value="李四" error="123132132132" errorPosi="top" />
    <ts-input value="李四" enterButton :buttonAttr="{
      buttonText:'点击',
      buttonIcon:'setting',
      buttonIconPosi:'left',
      buttonIconLoading:false,
      buttonType: 'danger',
    }" />
  </div>
</template>

<script>
import { ref } from "vue";
import TsButton from "./Button.vue";
import TsButtonGroup from "./ButtonGroup";
import TsInput from "./Input";
export default {
  name: "App",
  components: {
    TsButton,
    TsButtonGroup,
    TsInput,
  },

  setup() {
    let msg = ref("");
    const loading = ref(false);
    const loading2 = ref(false);
    function handleClick() {
      console.log(loading.value);
      loading.value = !loading.value;
    }
    function handleClick2() {
      loading2.value = !loading2.value;
    }
    function handleChange() {
      console.log(msg.value);
    }
    function changeModel() {
      msg.value += 1;
    }
    return {
      changeModel,
      loading,
      handleClick,
      loading2,
      handleClick2,
      handleChange,
      msg,
    };
  },
};
</script>

<style lang="less">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #999;
  --border-color: #999;
  --border-color-hover: #666;
}
</style>
