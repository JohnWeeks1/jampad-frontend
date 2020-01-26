<template>
    <div>
        <div @click="followUser()" class="flex items-center cursor-pointer">
            <img class="bg-green-500 hover:bg-green-700 rounded w-10 my-4" src="@/assets/zondicons/user-add.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "FollowUser",
        data() {
            return {
                followingUserId: null,
                id: null
            }
        },
        methods: {
            followUser() {
                this.$http.post("auth/following/", {
                    user_id: this.$store.state.user.userId,
                    following_user_id: this.id
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    };
</script>
