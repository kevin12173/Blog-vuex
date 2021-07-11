<template>
  <div class="home container-fluid">
    <div class="row mt-3">
      <div class=" col-12 col-md-9 order-1 order-md-0">
        <article class="article mb-3" v-for="(art,index) in filterBySearchKey" :key="index">
          <h3 @click="routerToArticle(art.id)" class="pointer">{{art.title}}</h3>
          <i class="date mb-2">{{art.date}}</i>
          <div class="text-center">{{art.content | subContent}}</div>
        </article>
      </div>
      <SideBar :articles="articles"></SideBar>
        <!-- {{articles}} -->
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar'
import { mapState,mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    SideBar
  },
  filters: {
    subContent: (content) =>{
      return content.substring(0,150)
    }
  },
  methods:{
    routerToArticle: function(id){
      this.$router.push({name:'Article',params:{id:id}})
    }
  },
  computed:{
    ...mapState(['articles']),
    ...mapGetters(['filterBySearchKey'])
  }
}
</script>

