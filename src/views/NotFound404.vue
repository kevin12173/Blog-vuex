<template>
    <div class="">
        <div class="container w-50 min-vh-100">
            <img alt="Vue logo" src="../assets/404.png">
                    <a class="d-block text-center text-white mb-5" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
                <b-button type="submit" variant="secondary" 
                class="px-5 d-block ml-auto mr-auto" @click="goBack">Go Back</b-button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBack: function(){
            this.$router.push({name: 'Home'})
        }
    }
}
</script>