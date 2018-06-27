<template>
  <div>
    <button @click="sumbitBtn">确认</button>
    <button @click="cancelBtn">取消</button>
  </div>
</template>

<script >
export default {
  name: '',
  methods:{
    sumbitBtn () {
      this.$emit('quick',true)
    },
    cancelBtn () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped >

</style>
