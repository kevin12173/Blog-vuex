<template>
    <div class="container w-100 w-100">
        <b-form class="login mt-5 ">
            <b-form-group
                id="input-group-1"
                label="輸入文章標題"
                label-for="input-1"
                description="">
                <b-form-input
                    id="input-1"
                    v-model="formData.title"
                    type="email"
                    required
                    placeholder="Enter account"
                ></b-form-input>
            </b-form-group>
            <b-form-group 
                id="input-group-2" 
                label="文章內容" 
                label-for="input-2">
                    <b-form-textarea
                    id="input-2"
                    v-model="formData.content"
                    placeholder="Enter something..."
                    rows="10"
                    max-rows="10"
                    ></b-form-textarea>
            </b-form-group>
            <div class="text-center mt-5">
                <b-button type="submit" variant="outline-primary" 
                class="px-5 mr-3"
                @click.prevent="resetFormData">重設</b-button>
                <b-button type="submit" variant="primary" 
                class="px-5"
                @click.prevent="submitFormData">送出</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import{ mapState, mapActions ,mapGetters } from 'vuex'

export default {
    mounted (){
        if(this.$route.name ==="Admin-Edit"){
            const id = this.$route.params.id
            this.mode ='edit'
            console.log(id)
            //並調度changeFocusId改變 focusIdㄙ
            this.$store.dispatch('changeFocusId',id)
        }
        this.thisAccount = this.$store.state.account
    },
    data (){
        return{
            mode: 'add',
            formData:{
                title: "",
                date: "",
                content: ""
            },
            thisAccount: 'null'
        }
    },
    computed:{
        ...mapState(['account','articlesChange']),
        ...mapGetters(['filterById'])
    },
    methods:{
        ...mapActions(['addArticles','updateArticles']),
        resetFormData: function(){
            this.formData={
                title: "",
                date: "",
                content: ""
            }
        },
        submitFormData: function(){
            this.formData.date = new Date().getTime()
            if (this.mode==='edit'){
                //帶兩個參數與變數
                this.updateArticles( {id:this.$route.params.id,newArticles:this.formData} )
            } else{
            console.log(this.formData)
            this.addArticles(this.formData)
            }
        }
    } ,
    watch:{
        filterById: function(){
            this.formData.title = this.filterById.title
            this.formData.content = this.filterById.content
        },
        articlesChange: function(){
            //監聽data變化
            this.$router.push({name: 'Admin-Home'})
        }
    }
}
</script>