<template>
    <div class="m-5">
        <h2 class="m-3">Login</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <input class="input" type="email" required v-model="email">
            </div>
            <div  class="field">
                <input class="input" type="password" required v-model="password">
            </div>
            <div class="field">
                <button class="button is-success">Se connecter</button>
            </div>
        </form>
        <div>
            <router-link to="register">Créer compte</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data (){  
        return{
            email :"user1@test.com",
            password :"password"
        }
    },
    methods:{
        validation() {
            this.$isLoading(true)
            this.$api.post('members/signin',{
                email :this.email,
                password :this.password
            })
            .then(response => {
                this.$store.commit('setToken', response.data.token)
                this.$store.commit('setMember', response.data.member)
                this.$router.push('/')
            })
            .catch(err => alert(err.response.data.message))
            .finally(() => {
                this.$isLoading(false)
            })
        }
    }
}
</script>

<style>

</style>