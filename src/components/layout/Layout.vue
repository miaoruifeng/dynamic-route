<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../../assets/images/logo.png" />
        <span>动态路由渲染导航栏</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container class="main-container">
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :default-active="activePath"
          router
          unique-opened
        >
          <!-- 一级菜单 -->
            <template v-for="(item, idx) in comRouter">
              <el-submenu
                v-if="item.children && item.children.length"
                :index="item.path"
                :key="'item' + idx"
              >
                <template slot="title">
                  <i :class="item.meta.icon"></i>
                  <span>{{item.meta.title}}</span>
                </template>
                <!-- 二级菜单 -->
                <template v-for="(itemSecond, idxx) in item.children">
                  <el-submenu
                    v-if="itemSecond.children && itemSecond.children.length"
                    :index="itemSecond.path"
                    :key="'itemSecond' + idxx"
                  >
                    <template slot="title">
                      <span>{{itemSecond.meta.title}}</span>
                    </template>
                    <!-- 三级菜单 -->
                    <el-menu-item
                      v-for="(itemThird, idxxx) in itemSecond.children"
                      :index="itemThird.path"
                      :key="'itemThird' + idxxx"
                    >
                      <span slot="title">{{itemThird.meta.title}}</span>
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else :index="itemSecond.path" :key="'itemSecond' + idxx">
                    <span slot="title">{{itemSecond.meta.title}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item v-else :index="item.path" :key="'item' + idx">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
              </el-menu-item>
            </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activePath: ''
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
      window.sessionStorage.clear()
    }
  },
  computed: {
    ...mapGetters({
      comRouter: 'comRouter'
    })
  },
  created() {
    this.activePath = this.$route.path
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
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
.main-container {
  height: 100%;
  overflow: hidden;
}
.el-aside {
  background-color: #333744;
  .toggle-btn {
    line-height: 30px;
    background-color: #4a5064;
    font-size: 10px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .el-menu {
    border-right: none;
  }
}
.iconfont {
  margin: 0 10px;
}
.el-main {
  background-color: #eaedf1;
}
</style>
