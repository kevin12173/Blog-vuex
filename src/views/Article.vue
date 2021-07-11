<template>
    <div class="container">
        <article class="articlePage mt-5 mb-5" v-if="articles.length" >
            <h2 class="text-center mb-4">{{filterById.title}}</h2>
            <i class="date mb-3">{{filterById.date}}</i>
            <div v-html="filterById.content"></div>
        </article>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    mounted() {
        // 先取router
        const id = this.$route.params.id
        this.artId = id

        //先取得全部資料
        const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
        axios.get(api).then( result =>{
            console.log(result.data)
            this.articles = result.data.data
        })
    },
    data(){
        return{
            artId: null,
            articles: [],
        }
    },
    computed:{
        filterById: function(){
            // filter 陣列會回傳 arry格式
            return this.articles.filter(art => art.id === this.artId)[0]
        }
    }
}
</script>