<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel"  placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="logBtn">登录</a>
        </div>
        <div class="g-form-btn">
          <span class="g-form-error">{{errorText}}</span>
        </div>
        
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText:''

    }
  },
  computed: {
    userError (){
      let statusText,errorText
      if(!/^([a-z]|[A-Z]){0,10}$/g.test(this.usernameModel)){
        statusText = false
        errorText = '请输入10位字母'
      }else{
        statusText = true
        errorText = ''
      }
      return {
        statusText,
        errorText
      }
    },
    passwordError (){
      let statusText,errorText
      if(!/^\d{0,6}$/g.test(this.passwordModel)){
        statusText = false
        errorText = '请输入6位数字'
      }else{
        statusText = true
        errorText = ''
      }
      return {
        statusText,
        errorText
      }
    }
  },
  mounted (){
    
  },
  methods: {
    logBtn () {
      if(!this.userError.statusText && !this.passwordError.statusText ){
        this.errorText = '部分内容未通过'  
      }else{
        this.errorText = ''  
        this.$http.get('api/login')
        .then(
          (res)=>{
            if(this.usernameModel == res.body.username && this.passwordModel == res.body.userId){
              this.$emit('has-log',res.body)
            }else{
              console.log(222)
            }  
          },(error)=>{

          }
        )
      }
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-form-line{
  display: block;
  width:450px;
  height: 50px;
}
.g-form-label,.g-form-input,.g-form-error{
  float: left;
}
.g-form-error{
  color: red;
  font-size: 16px;
}
a.button{
  background: lightgreen;
  padding: 5px 10px;
}
</style>
