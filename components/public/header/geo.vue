<template>
  <div class="m-goe">
    <i class="el-icon-location">{{ $store.state.geo.position.city ? $store.state.geo.position.city : '杭州市'}}</i>
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
    [上海 北京]
  </div>
</template>

