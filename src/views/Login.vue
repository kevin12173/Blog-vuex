<template>
    <div class="container w-100 w-mb-50">
        <b-form class="login mt-5 ">
            <b-form-group
                id="input-group-1"
                label="Account"
                label-for="input-1"
                description="Enter your email">
                <b-form-input
                    id="input-1"
                    v-model="form.account"
                    type="email"
                    required
                    placeholder="Enter account"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter password"
                ></b-form-input>
            </b-form-group>

                <b-button type="submit" variant="primary" 
                class="px-5 d-block ml-auto mr-auto"
                @click.prevent="routerToAdmin">Submit</b-button>
        </b-form>
    </div>
</template>


<script>
export default {
    data(){
        return {
            form: {
                account: '',
                password: ''
            }
        }
    },
    methods:{
        routerToAdmin: function() {
            this.$router.push({name:"Admin-Home"})
        }
    }
}
</script>

<style lang="sass" scoped>

</style>