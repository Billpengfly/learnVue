<template>
    <div class="selection-component">
      <div class="selection-show" @click="drowUp">
        <span>{{selectVal}}</span>
        <div class="arrow" :class="{arrowGetVal:selectVal!=''}"></div>
      </div>
      <div  class="selection-list" v-if="isShow">
        <ul>
          <li v-for="(item, index) in selections" @click="getSelectVal(item.label)">{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    selections:{
      type:Array,
      default:[{
        label: 'test',
        value: 0
      }]
    }
  },
  data (){
    return {
      selectVal:'',
      isShow:false
    }
  },
  mounted(){
    
  },
  methods:{
    getSelectVal(label){
      this.selectVal = label
      this.isShow = false
      this.$emit('on-change',this.selectVal)
    },
    drowUp(){
      this.isShow = true
    }
  }
}
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  width:50px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 55px;
  margin-right: -14px;
  vertical-align: middle;
}
.arrowGetVal{
  margin-top: -54px!important;
}
.selection-list {
  display:block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list ul{
  margin:0;
  padding: 0;
  width:50px;
}
.selection-list li {
  width:110%;
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>
