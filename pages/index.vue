<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        pc-meituan
      </h1>
      <h2 class="subtitle">
        My supreme Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
    <el-button @click="handleClick">点击</el-button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    handleClick() {
      const h = this.$createElement;
      this.$notify({
        title: '提示',
        message: h('div', null, [
          '这是一个段文字',
          h('a', 
            { attrs: { 
                href: 'https://www.jianshu.com/u/639201a5d397' , 
                target: '_blank'
              }
            },
            [
              h('el-button', {
                style: {
                  marginLeft: '20px'
                },
                attrs: {
                  size: 'small',
                  type: 'primary'
                }
              }, '查看详情')
            ]
           ) 
        ]),
        duration: 0
      });
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


</style>

<style lang="less">
.links {
  padding-top: 15px;
}
</style>
