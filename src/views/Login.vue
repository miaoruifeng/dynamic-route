<template>
  <div class="login_container">
    <div class="login_box">
      <el-form class="login-form" :model="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="onLogin">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      }
    }
  },
  methods: {
    onLogin() {
      setTimeout(() => {
        this.$router.push('/home')
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background: #2b4b6b;
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
}
.login-form {
  margin-top: 60px;
  padding: 0 40px;
}
.btns {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
</style>
