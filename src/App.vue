<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  mounted (){
    // App 載入時調度 也就是把Home的 mounted 搬過來
    this.$store.dispatch('fetchArticles')
  },
  components: {
    Header
  }
}
</script>


<style lang="scss">

</style>
