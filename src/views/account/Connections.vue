<template>
    <div>
        <top-navigation></top-navigation>
            <div class="container max-w-4xl mx-auto pb-20">
                <div class="w-full">
                    <div class="flex flex-wrap font-bold text-gray-100">
                        <div v-for="user in users" class="w-1/5 p-2">
                            <div class="max-w-sm overflow-hidden bg-gray-900">
                                <img class="w-full" src="http://www.jampad.localhost/api/auth/image/1">
                                <div class="px-4 py-2">
                                    <div class="text-md text-center">{{user[0].first_name + ' ' + user[0].last_name}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import FooterComponent from "@/components/structure/Footer";
    import TopNavigation from "@/components/structure/TopNavigation";

    export default {
        name: "Connections",
        data() {
            return {
                users: null,
            }
        },
        mounted() {
            this.getConnections()
        },
        methods: {
            getConnections() {
                this.$http.get("auth/following/" + this.$store.state.user.userId)
                    .then(response => {
                        this.users = response.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        },
        components: {
            TopNavigation,
            FooterComponent
        },
    };
</script>
