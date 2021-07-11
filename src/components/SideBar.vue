<template>
    <div class="col-12 col-md-3 order-0" v-if="articles.length">
        <div class="sideBar  mb-3  min-mb-100vh">
            <h2 class="border-bottom border-primary text-center pb-2 mb-3">最新文章</h2>
            <ul>
                <li v-for="(art,index) in articles" :key="index" class="mb-2 pointer" @click="routerToArticle(art.id)" >
                    {{art.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        articles: Array
    },
    methods:{
        routerToArticle: function(id){
            this.$router.push({name:'Article',params:{id:id}})
        }
    }
}
</script>