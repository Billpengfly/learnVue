<template>
  <div>
    <!-- <transition name="fade"
      appear
      enter-active-class="animated swing"
      leave-active-class="animated shake"
      appear-active-class="animated swing"
    >
        <div v-if="isShow">hellow world</div>
    </transition> -->

    <!-- <transition name="fade"
      @before-enter="handleBeforeEnter"
      @enter="handleEnter"
      @after-enter="handleAfterEnter"
    >
        <div v-if="isShow">hellow world</div>
    </transition> -->
    <!-- <transition name="fade">
        <div v-if="isShow" key="hellow">hellow world</div>
        <div v-else key="bye">Byeworld</div>
    </transition> -->
    <!-- <transition name="fade">
        <component :is="type"></component>
    </transition> -->
    <!-- <button @click="handleClick">toggle</button> -->
    <transition-group name="fade">
        <div v-for="item in itemList" :key="item.id">{{item.name}}</div>
    </transition-group>
    <button @click="handleListClick">toggle</button>
  </div>
</template>

<script >
import Vue from 'vue'
Vue.component('one',{
  template:"<div>one</div>"
})
Vue.component('two',{
  template:"<div>two</div>"
})
export default {
  name: '',
  data () {
    return {
      isShow:true,
      type:"one",
      num:0,
      itemList:[]
    }
  },
  methods: {
    handleClick () {
      // this.isShow = !this.isShow
      this.type = this.type==='one'?'two':'one'
    },
    handleBeforeEnter (el) {
      el.style.opacity = '0'
    },
    handleEnter (el,done){
      Velocity(el,{opacity:1},{duration:1000})
    },
    handleAfterEnter (el) {
      
    },
    handleListClick () {
      this.itemList.push({
        id:this.num++,
        name:'hello world'
      })
    }
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
/* .fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: opacity 1s;
} */
</style>
