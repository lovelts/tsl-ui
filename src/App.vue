<!--
 * @Author: lts
 * @Date: 2021-03-08 12:54:13
 * @LastEditTime: 2021-03-09 22:06:15
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
    <ts-input type="number" />
    <ts-input value="李四" error="123132132132" />
    <ts-input @change="handleChange" />
    <ts-input v-model:value="msg" />
    <p>{{ msg }}</p>
    <ts-button @click="changeModel">点击改变</ts-button>
    <ts-input value="李四" error="123132132132" errorPosi="bottom" />
    <ts-input value="李四" error="123132132132" errorPosi="top" />
    <ts-input
      value="李四"
      enterButton
      :buttonAttr="{
        buttonText: '点击',
        buttonIcon: 'search',
        buttonIconPosi: 'left',
        buttonIconLoading: false,
        buttonType: 'danger',
      }"
    />
  </div>
  <div>
    <ts-divider>.......</ts-divider>
    <ts-divider posi="left" dashed>左边</ts-divider>
    <ts-divider posi="center">中间</ts-divider>
    <ts-divider posi="right">右边</ts-divider>
    <div :style="{ width: '300px', height: '100px' }">
      <ts-divider type="vertical" dashed />
    </div>
  </div>
  <div :style="{ width: '600px', height: '400px' ,border:'1px solid black',margin:'60px' }">
    <ts-menu defaultSelect="4">
      <ts-menu-item icon="setting" myKey="4">侧边栏一</ts-menu-item>
      <ts-menu-item icon="dianzan" myKey="5">侧边栏二</ts-menu-item>
      <ts-menu-item icon="download" myKey="6">侧边栏三</ts-menu-item>
    </ts-menu>
    <!-- 1111 -->
  </div>
</template>

<script>
import { ref } from "vue";
import TsButton from "./Button.vue";
import TsButtonGroup from "./ButtonGroup";
import TsInput from "./Input";
import TsDivider from "./Divider";
import TsMenu from "./Menu";
import TsMenuItem from './MenuItem'
export default {
  name: "App",
  components: {
    TsButton,
    TsButtonGroup,
    TsInput,
    TsDivider,
    TsMenu,
    TsMenuItem
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
