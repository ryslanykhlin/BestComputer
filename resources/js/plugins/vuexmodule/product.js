export default {
    actions:{
        productsApi(ctx,category){
            //get product in category
            axios.get('/api/products',{ params:{category:category}})
                .then(res => ctx.commit('updateProducts',res.data))
        }
    },
    mutations:{
        updateProducts(state,products){
            state.products = products;
        }
    },
    state:{
        products:[]
    },
    getters:{
        getProducts(state){
            return state.products
        }
    }
}
