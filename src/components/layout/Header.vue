<template>
  <el-header>
    <div>
      <img src="../assets/images/user.png" />
      <span>电商后台管理系统</span>
    </div>
    <el-button type="info">退出</el-button>
  </el-header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #373d41;
  > div {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #fff;
    img {
      width: 44px;
      margin-right: 15px;
    }
  }
}
</style>
