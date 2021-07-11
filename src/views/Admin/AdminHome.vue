<template>
    <div>
            <b-table  :fields="fields" :items="articles" responsive="sm">
                <template v-slot:cell(date)="data">
                <!-- {{ data }} -->
                {{data.value | toDate}}
                </template>
                <template v-slot:cell(content)="data">
                <!-- {{ data }} -->
                {{data.value | subContent}} 
                </template>
                <template  v-slot:cell(id)="data">
                    <b-button-group>
                        <b-button @click="editArticle(data.value)">修改</b-button>
                        <b-button @click="delArticle(data.value)">刪除</b-button>
                    </b-button-group>
                </template>
            </b-table>
    </div>
</template>

<script>
import{ mapState, mapActions} from 'vuex'

export default {
    data (){
        return{
            // BS-vue 改變標題
            fields: [
                {key: 'title', label: '文章標題'},
                {key: 'date', label: '上傳日期'},
                {key: 'content', label: '文章內容'},
                {key: 'id', label: '修改'}
            ]
        }
    },
    methods:{
        ...mapActions(['fetchArticles','deleteArticle']),
        editArticle: function(id){
            this.$router.push({name: 'Admin-Edit',params:{id:id}})
        },
        delArticle: function(id){
            const ensure = confirm("請問是否要刪除這篇文章")
            if(ensure){
                this.deleteArticle(id)
            }
        }
    },
    computed:{
        ...mapState(['account', 'articles'])
    },
    filters: {
        subContent: (content) =>{
            return content.substring(0,80)+'...'
        },
        // 時間戳
        toDate: timstamp => {
            const date = new Date(timstamp)
            let Y =date.getYear();
            let M =date.getMonth();
            let D =date.getDay();
            let H =(Array(2).join("0" )+ date.getHours()).slice(-2);
            let min = (Array(2).join("0" )+ date.getMinutes()).slice(-2);
            return `${Y}/${M}/${D} ${H}:${min}`
        }
    },
}
</script>

