<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Ri-Code</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto d-flex align-items-center">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/article">Article</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" 
            v-model="searchKey"
            placeholder="Search"></b-form-input>
            <b-button 
            @click.prevent="submitSearchKey"
            size="sm" class="my-2 my-sm-0 bg-secondary" 
            type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  data (){
    return {
      searchKey: "",
    }
  },
  methods: {
    ...mapActions(['changeSearchKey']),
    submitSearchKey: function(){
      this.changeSearchKey(this.searchKey)
    }
  },
  watch:{
    searchKey: function(){
      if(this.searchKey ===""){
        this.changeSearchKey(this.searchKey)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
