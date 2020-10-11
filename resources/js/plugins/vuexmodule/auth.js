export default {
    actions: {
        register(ctx, auth) {
            //register
            axios
                .post("http://127.0.0.1:8000/api/auth/register", {
                    name: auth.name,
                    email: auth.email,
                    password: auth.password,
                })
                .then(res => ctx.commit('updateRegister', res.data))
                .catch(error => console.log(error));
        },
        login(ctx, auth) {
            //login
            axios
                .post("/api/auth/login", {
                    email: auth.email,
                    password: auth.password,
                })
                .then((res) => {
                    if (res.data.error == 'true') {
                        ctx.commit('updateErrorLogin');
                    } else {
                        ctx.commit('updateToken', res.data.token_type + ' ' + res.data.access_token)
                    }
                })
                .catch(error => console.log(error));
        },
        user(ctx, token) {
            //login
            axios
                .post("/api/auth/user", {}, { headers: { Authorization: token } })
                .then(res => {
                    ctx.commit('updateUserInfo', res);
                    ctx.commit('updateIsAdmin', res.data.user.is_admin)
                })
                .catch(error => console.log(error));
        }
    },
    mutations: {
        updateToken(state, token) {
            state.token = token;
        },
        updateUserInfo(state, info) {
            state.info = info
        },
        updateIsAdmin(state, is_admin) {
            state.isAdmin = is_admin
        },
        updateRegister(state, register) {
            state.register = register
        },
        updateErrorLogin(state) {
            state.error_login = true
        }
    },
    state: {
        token: null,
        info: null,
        isAdmin: false,
        register: false,
        error_login: false
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getUserInfo(state) {
            return state.info;
        },
        getIsAdmin(state) {
            return state.isAdmin;
        },
        getUserRegister(state) {
            return state.register
        },
        getErrorLogin(state) {
            return state.error_login
        }
    }
}
