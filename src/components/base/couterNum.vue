<template>
    <div class="cout-component">
      <span @click="minus">-</span>
      <input type="text" value="0" v-model="productNum" @keyup="valChange">
      <span @click="add">+</span>
    </div>
</template>

<script>
export default {
  props:{
    // selections:{
    //   type:Array,
    //   default:[{
    //     label: 'test',
    //     value: 0
    //   }]
    // }
  },
  data (){
    return {
      productNum:0
    }
  },
  mounted () {
    
  },
  methods:{
    minus () {
      if(this.productNum <= 0){
        this.productNum = 0  
      }else{
        this.productNum -=1
      }
    },
    add () {
       this.productNum += 1 
    },
    valChange () {
      this.productNum = Number(this.productNum)
    }
  },
  watch:{
    productNum () {
      this.$emit('on-change',this.productNum)
    }
  }
}
</script>

<style scoped>
.cout-component span{
  float: left;
  display:inline-block;
  width:20px;
  height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}
.cout-component input{
  float: left;
  display:inline-block;
  width: 30px;
  height: 16px;
  margin: 0 5px;
  text-align: center;
}
</style>
