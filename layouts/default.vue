<template>
  <el-container class="layout-container">
    <el-header style="height:100%">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from '~/components/public/header/index.vue'
import MyFooter from '~/components/public/footer/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  },
}
</script>
