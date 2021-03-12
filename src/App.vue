<!--
 * @Author: lts
 * @Date: 2021-03-08 12:54:13
 * @LastEditTime: 2021-03-12 10:25:07
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
  <div
    :style="{
      width: '600px',
      height: '400px',
      border: '1px solid black',
      margin: '60px',
    }"
  >
    <ts-menu defaultSelect="4">
      <ts-menu-item icon="setting" myKey="4">侧边栏一</ts-menu-item>
      <ts-menu-item icon="dianzan" myKey="5">侧边栏二</ts-menu-item>
      <ts-menu-item icon="download" myKey="6">侧边栏三</ts-menu-item>
    </ts-menu>
    <!-- 1111 -->
  </div>
  <div>
    <ts-button @click="changeVisible">点击打开modal</ts-button>
    <ts-modal
      :visible="visible"
      :onOk="onOk"
      :onCancel="onCancel"
      okText="ok"
      cancelText="cancel"
    >
      <template #header> header </template>
      <p>content...................</p>
      <p>content...................</p>
      <p>content...................</p>
    </ts-modal>
  </div>
  <div
    :style="{
      width: '1000px',
      height: '400px',
      border: '1px solid black',
      margin: '60px',
      padding: '20px',
      display: 'flex',
    }"
  >
    <ts-card>
      <template #title> header </template>
      <template #extra> more </template>
      <p>content...................</p>
      <p>content...................</p>
      <p>content...................</p>
    </ts-card>
    <ts-card size="small" :style="{ marginLeft: '10px' }" footer>
      <template #title> header </template>
      <template #extra> more </template>
      <template #footer> footer </template>
      <p>content...................</p>
      <p>content...................</p>
      <p>content...................</p>
    </ts-card>
  </div>
  <div
    :style="{
      width: '300px',
      margin: '60px',
      padding: '20px',
      border: '1px solid black',
    }"
  >
    <ts-alert message="提示信息" description="lalallalalla" icon="setting" />
    <ts-alert message="提示信息" icon="search" type="warning" />
    <ts-alert message="提示信息" icon="error" type="error" />
  </div>
  <div
    :style="{
      width: '300px',
      margin: '60px',
      padding: '20px',
      border: '1px solid black',
    }"
  >
    <ts-popover>
      <template #title> 气泡头 </template>
      <template #body>
        <p>content..........</p>
        <p>content..........</p>
        <p>content..........</p>
      </template>
      <ts-button>气泡卡片</ts-button>
    </ts-popover>
  </div>
  <div
    :style="{
      width: '800px',
      height: '300px',
      margin: '60px',
      padding: '20px',
      border: '1px solid black',
    }"
  >
    <ts-tabs>
      <ts-tab-pane myKey="6" tab="tab6">
        <p>content6</p>
      </ts-tab-pane>
      <ts-tab-pane myKey="7" tab="tab7">
        <p>content7</p>
      </ts-tab-pane>
    </ts-tabs>
    <!-- <ts-tab-pane tab="tab4">content4</ts-tab-pane> -->
  </div>
  <div
    :style="{
      width: '800px',
      height: '300px',
      margin: '60px',
      padding: '20px',
      border: '1px solid black',
    }"
  >
    <ts-swiper 
      autoplay
      :autoplayTime="3000"
    >
      <ts-swiper-slide>
        <div class="my-swiper-style" :style="{background:'#364d79'}">123</div>
      </ts-swiper-slide>
      <ts-swiper-slide>
        <div class="my-swiper-style">456</div>
      </ts-swiper-slide>
      <ts-swiper-slide>
        <div class="my-swiper-style" :style="{background:'#964d79'}">789</div>
      </ts-swiper-slide>
    </ts-swiper>
  </div>
</template>

<script>
import { ref } from "vue";
import TsButton from "./button/Button.vue";
import TsButtonGroup from "./button-group/ButtonGroup";
import TsInput from "./input/Input";
import TsDivider from "./divider/Divider";
import TsMenu from "./menu/Menu";
import TsMenuItem from "./menu/MenuItem";
import TsModal from "./modal/Modal";
import TsCard from "./card/Card";
import TsAlert from "./alert/Alert";
import TsPopover from "./popover/Popover";
import TsTabs from "./tabs/Tabs";
import TsTabPane from "./tabs/TabPane";
import TsSwiper from "./swiper/Swiper.jsx";
import TsSwiperSlide from "./swiper/SwiperSlide.jsx";
export default {
  name: "App",
  components: {
    TsButton,
    TsButtonGroup,
    TsInput,
    TsDivider,
    TsMenu,
    TsMenuItem,
    TsModal,
    TsCard,
    TsAlert,
    TsPopover,
    TsTabs,
    TsTabPane,
    TsSwiper,
    TsSwiperSlide,
  },

  setup() {
    let msg = ref("");
    let visible = ref(false);
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
    const changeVisible = () => {
      visible.value = true;
    };
    const onOk = () => {
      visible.value = false;
    };
    const onCancel = () => {
      visible.value = false;
    };
    return {
      changeModel,
      loading,
      handleClick,
      loading2,
      handleClick2,
      handleChange,
      msg,
      visible,
      changeVisible,
      onOk,
      onCancel,
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 3px;
  --color: #999;
  --border-color: #999;
  --border-color-hover: #666;
}
.my-swiper-style {
  color: #fff;
  width: 100%;
  color: "#fff";
  line-height: 250px;
  background: #664d79;
  height: 100%;
}
</style>
