import { createStore } from 'vuex';


const store = createStore({
    state(){
        return{
            user:null,
            isLogin:false,
        }
    }
    ,
    mutations:{
        setUser(state, user){
            state.user = user;
            state.isLogin = true;
        },
        unSetUser(state){
            state.user = null;
            state.isLogin= false;
        }
    }
});

export default store;