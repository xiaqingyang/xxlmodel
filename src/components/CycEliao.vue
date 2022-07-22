<template >
  <div class="main" id="main">
    <div class="page1 " v-show="showOne">
      <div class="wrapper">
        <img src="../../static/images/page01.jpg" alt="" width="100%">
        <img src="../../static/images/page01-01.jpg" alt="" width="100%">
        <a href="javascript:;" class="nan wenli_base" @click="changeOne">
          <span class="i3">男</span></a>
        <a href="javascript:;" class="nv  wenli_base" @click="changeOne">
          <span class="i2">女</span></a>
      </div>
      <p style="text-align: center;font-size:12px;margin:20px auto;">南京鼓楼新生医疗美容门诊部<br>
        （宁）医广【2022】第01-12-001号</p>
    </div>
    <div class="page2" v-show="showTwo">
      <div class="wrapper">
        <img src="../../static/images/x_top.jpg" alt="" width="100%">
        <img src="../../static/images/x_page2_jd2.jpg" alt="" width="100%">
        <div class="item">
          <h2>您的头皮容易出油吗</h2>
          <ul @click="changeTwo">
            <li class="i4">
              <span class="i4_01">不容易</span></li>
            <li class="i4">
              <span class="i4_01">正常</span></li>
            <li class="i4">
              <span class="i4_01">极为容易</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page3" v-show="showThr">
      <div class="wrapper">
        <img src="../../static/images/x_top.jpg" alt="" width="100%">
        <img src="../../static/images/x_page3_jd3.jpg" alt="" width="100%">
        <div class="item">
          <h2>您脱发多久了？</h2>
          <ul @click="changeThr">
            <li class="i4 i5">
              <span class="i5_01">6个月以下</span></li>
            <li class="i4 i5">
              <span class="i5_01">1年左右</span></li>
            <li class="i4 i5">
              <span class="i5_01">2-3年</span></li>
            <li class="i4 i5">
              <span class="i5_01">4-5年</span></li>
            <li class="i4 i5">
              <span class="i5_01">6年以上</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {txchatInit} from '../assets/js/eliao.js';
import {txchat} from '../assets/js/eliao.js';

export default{
  data(){
    return{
      showOne:true,
      showTwo:false,
      showThr:false
    }
  },
  methods:{
    changeOne:function(){
      this.showOne=false
      this.showTwo=true
    },
    changeTwo:function(){
      this.showTwo=false
      this.showThr=true
    },
    changeThr:function(){
      txchat(24962,81707,53669);
      return false;
    }
  },
  mounted:function(){
    this.$nextTick(function(){
      txchatInit(24962,81707);
    })
  }
}
</script>

<style scoped>
@import "../assets/css/cyceliao.css";
</style>
