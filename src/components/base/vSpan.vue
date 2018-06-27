<template>
    <div class="cout-component">
      <ul>
        <li v-for="(item, index) in selections">{{ item.label }}</li>
      </ul>
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
      productNum:0
    }
  },
  mounted () {
    // console.log(this.selections);
  },
  methods:{
    
  }
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
li{
  float: left;
  padding: 2px 10px;
  color: #fff;
}
li+li{
  margin-left:10px; 
}
.bg{
  background:#4fc08d;
}
</style>
