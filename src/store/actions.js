export default {
    addCart(context, payload) {
        //使用promise判断添加购物车是否成功
        return new Promise((resolve, reject) => {
            //如果是相同商品，不能增加cartList长度，而是让它的count加一
            //先定义count变量，记录商品数量，不能在构建对象时定义，这样每次进来的count都会刷新
            //这里使用一个变量判断商品是否存在
            payload.count = 1;
            //加入购物车时将checked变量也添加
            payload.checked = true;
            let isExist = false;
            for(let i = 0; i < context.state.cartList.length; i++) {
                if(context.state.cartList[i].iid === payload.iid) {
                    isExist = true;
                    context.commit('addCounter', context.state.cartList[i]);
                    resolve('商品数量加一');
                }
            }
            if(!isExist) {
                context.commit('addToCart', payload);
                resolve('添加购物车成功');
            }
        })
    }
}