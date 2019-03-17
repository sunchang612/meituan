<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="4">
      <geo></geo>
    </el-col>
    <el-col :span="6">
      <user></user>  
    </el-col>
    <el-col :span="14">
      <navbar></navbar>
    </el-col>
  </el-row>
</template>
<script>
import Geo from './geo'
import User from './user'
import Navbar from './nav'

export default {
  components: {
    Geo,
    User,
    Navbar
  }
}
</script>
<style lang="sass">
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/header/index.scss";
</style>

