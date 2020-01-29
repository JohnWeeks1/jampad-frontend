<template>
    <div>
        <div class="flex flex-wrap font-bold text-gray-100">
            <div class="w-1/3 p-2">
                <router-link :to="{ name: 'Connections' }">
                    <div class="rounded-full text-center font-white bg-gray-400 p-2
                                    border-gray-100 border-2 py-1 bg-green-500 hover:bg-green-600">
                        <span class="inline-block w-full">{{connections.length}}</span>
                        <span class="inline-block w-full">Connected</span>
                    </div>
                </router-link>
            </div>
            <div class="w-1/3 p-2">
                <div class="rounded-full text-center bg-gray-400 p-2
                                border-gray-100 border-2 py-1 bg-green-500 hover:bg-green-600">
                    <span class="inline-block w-full">0</span>
                    <span class="inline-block w-full">Rated</span>
                </div>
            </div>
            <div class="w-1/3 p-2">
                <div class="rounded-full text-center bg-gray-400 p-2
                                border-gray-100 border-2 py-1 bg-green-500 hover:bg-green-600">
                    <span class="inline-block w-full">9</span>
                    <span class="inline-block w-full">Songs</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileInfoSection",
        data() {
            return {
                connections: null,
            }
        },
        mounted() {
            this.connections = this.getConnections();
        },
        methods: {
            getConnections() {
                this.$http.get("auth/following/" + this.$store.state.user.userId)
                    .then(response => {
                        this.connections = response.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        },
    }
</script>
