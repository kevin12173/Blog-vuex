import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import  _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: "Glove",
    articles: [],
    searchKey: "",
    focusId: "",
    articlesChange: false
  },
  mutations: {
    fetchArticles: ( state, payload) =>{
      // 調用state,載荷 payload
      state.articles = payload
    },
    changeSearchKey: (state, payload)=>{
      state.searchKey = payload
    },
    addArticles: (state, payload)=>{
      state.articles = [payload, ...state.articles]
      //因為每次都會發生就用反向的自己
      state.articlesChange = !state.articlesChange
    },
    changeFocusId: (state, payload)=>{
      //傳入id
      state.focusId = payload
    },
    updateArticles: (state,{id, newArticles})=>{
      //回傳所有文章的id 並找到此id的index
      const index=state.articles.map(art=>art.id).indexOf(id)
      //將此筆替換掉
      state.articles[index] = newArticles
      //因為每次都會發生就用反向的自己
      state.articlesChange = !state.articlesChange
    },
    deleteArticle: (state, id) =>{
    //回傳所有文章的id 並找到此id的index
    const index=state.articles.map(art=>art.id).indexOf(id)
    //刪除(第幾比,幾個資料)
    state.articles.splice(index,1)
    }
  },
  actions: {
    fetchArticles:  async ( { commit}  ) =>{
      // commit   mutations 函式
      // commit('fetchArticles')

      const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
      const result = await axios.get(api)
      // console.log(result.data.data)
      const payload = result.data.data
      commit('fetchArticles' , payload)
    },
    changeSearchKey: ( { commit} ,payload ) =>{
      //傳入id
      commit('changeSearchKey' , payload)
    },
    addArticles: ({ commit} ,payload) =>{
      const ID = _.random(10000)
      payload.id ="newArticles" +ID
      commit('addArticles' , payload)
    },
    changeFocusId: ({commit},payload) =>{
      commit('changeFocusId' , payload)
    },
    updateArticles: ({commit},payload) => {
      commit('updateArticles' , payload)
    } ,
    deleteArticle: ({commit},payload) =>{
      commit('deleteArticle' , payload)
    }
  },
  getters: {
    filterBySearchKey:  state =>{
      if(state.searchKey===""){
        return state.articles
      }else{
        return state.articles.filter( art => art.title ===state.searchKey)
      }
    },
    filterById: state =>{
      if(state.articles.length){
        //focusId變化時
        return(state.articles.filter(art => art.id ===state.focusId)[0])
      }
    }
  }
})
