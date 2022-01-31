<template>
    <div>
        <h1 class="title">
            Liste des membres
        </h1>
        <div class="m-3" v-for="member in members" :key="member.id">
            <div class="card">
                <router-link :to="'/member/' + member.id" class="has-text-primary card-header-title">
                    {{ member.fullname }}
                </router-link>
                <div class="card-content">
                    <div class="content">
                        {{ member.email }} - {{ member.created_at }}
                    </div>

                    <!-- supprimer un membre depuis cette page -->
                    <!--
                        <div class="content">
                            <button @click="remove(member.id)" class="button is-danger">Supprimer le membre</button>
                        </div>
                    -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            members:[]
        }
    },
    created(){
        this.$isLoading(true)
        this.$api.get('members')
            .then(response => {
                this.members = response.data
            })
            .finally(() => {
                this.$isLoading(false)
            })
    },
    methods:{
        /*
        // supprimer un membre depuis cette page
        remove(id){
            if(this.$store.state.member.id == id) {
                alert("tu ne peux pas supprimer ton compte")
            } else {
                this.$api.delete('members/' + id)
                .then(response => {
                    alert(response.data.message)

                    let index = this.members.map(member => {
                        return member.Id;
                    }).indexOf(id);

                    this.members.splice(index, 1);
                })
                .catch(err => alert(err.response.data.message))
            }
        }
        */
    }
}
</script>

<style>

</style>