<template>
  <div class="Header hd">
      <div class="hd-top">
          <h1 class="logoBox"></h1>
          <div class="setting ue-clear">
              <ul class="setting-main">
                  <li><span>|</span></li>
                  <li id="exitButton"><a href="javascript:;" class="close-btn exit"></a><a href="javascript:;">退出登录</a></li>
              </ul>
          </div>
          <div class="user-info">
            <span class="user-name" id="userNo"></span>
            <span class="user-name" id="userName"></span>
            <span class="user-name" id="orgName"></span>
          </div>
        </div>
        <div class="hd-bottom">
            <i class="home"><a href="javascript:;"><img src="img/icon/home.png"/></a></i>
            <div class="nav-wrap">
              <ul class="nav ue-clear navBox" id="menu-main">
                <li @click="refreshSidebar('h1')">微应用证书管理</li>
                <li @click="refreshSidebar('h2')">微应用接口管理</li>
                <li @click="refreshSidebar('h3')">微应用终端管理</li>
              </ul>
            </div>
        </div>

  </div>
</template>

<script >

import Vue from 'vue'

export default {
  name: 'Header',
  methods:{
    refreshSidebar:function(key){
      this.$emit('headerKey',key)
    }
  }
}
</script>

<style scoped >
.banner{
  font-size: 20px;
  position: absolute;
  left: 0;
  top: 0;

}
.banner li{
  float: left;
  list-style: none;
  padding: 5px 10px;
}

a{
    color: #fff;
    text-decoration: none;
}
.hd {
    width: 100%;
    height: 100px;
    border: 1px solid #333;
    background: url('../image/topbanner.png') no-repeat;
  }
.hd-top{
    height: 44px;
  }
 .logoBox{
     position: relative;
     float: left;
     width: 358px;
     height: 44px;
     margin: 10px 0 0 25px;
     background: url('../image/logo.png') no-repeat;
   }
.setting-main{
    float: right;
    margin: 20px 50px 0 0;
  }
  .setting-main li{
    float: left;
  }
  .setting-main li+li{
    margin-left: 10px;
  }
  .navBox{
      height: 38px;
      background: url('../image/menubg.png') repeat-x;
    }
    .navBox li{
      float: left;
      height: 38px;
      line-height: 38px;
      color: #fff;
      padding: 0px 20px;
    }
    .navBox li+li{
      margin-left: 10px;
    }
</style>
