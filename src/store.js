import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';
import UserModule from '@/vuex/UserModule';
import SongModule from '@/vuex/SongModule';


Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'jampad',
    storage: window.localStorage,
});


export default new Vuex.Store({
    modules: {
        user: UserModule,
        song: SongModule,
    },
    plugins: [vuexLocalStorage.plugin]
});
