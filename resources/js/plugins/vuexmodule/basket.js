export default {
    actions:{
        addProductItem(ctx,item) {
            ctx.commit('updateProductItem',item)
        },
        deleteProductItem(ctx,index) {
            ctx.commit('deleteProductItem',index)
        },

    },
    mutations:{
        updateProductItem(state,item){
            let basket = JSON.parse(localStorage.getItem('basket')) ?? [];
            basket.unshift(item);
            localStorage.setItem('basket',JSON.stringify(basket))
            state.basketItem.unshift(item);
        },
        deleteProductItem(state,index){
            let basket = JSON.parse(localStorage.getItem('basket'));
            basket.splice(index,1);
            localStorage.setItem('basket',JSON.stringify(basket));
            state.basketItem = basket;
        }
    },
    state:{
        basketItem:JSON.parse(localStorage.getItem('basket')) ?? [],
    },
    getters:{
        getbasketCount(state){
            return state.basketItem.length
        },
        getBasketItem(state){
            return state.basketItem
        }
    }
}
