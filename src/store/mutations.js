export default {
    //mutations实现的方法尽量简单一点
    addCounter(state, payload) {
        payload.count++;
        // console.log(payload.count);
    },
    addToCart(state, payload) {
        state.cartList.push(payload);
    }
}