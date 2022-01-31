<template>
    <div>
        <h1 class="title">
            Listes des conversations
        </h1>
        <div class="m-3" v-for="conv in conversations" :key="conv.id">
            <Conversation :conversation="conv" />
        </div>
    </div>
</template>

<script>
    import Conversation from "../../components/conversationCard.vue";

    export default {
        name: "Conversations",
        components: {
            Conversation
        },
        data() {
            return {
                conversations: [],
            };
        },
        created() {
            this.$isLoading(true) // show loading screen
            this.$api.get("channels").then((response) => {
                this.conversations = response.data
            }).finally(() => {
                this.$isLoading(false) // hide loading screen
            })
        },
    };
</script>
