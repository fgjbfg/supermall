import {request} from "@/network/request";

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
//推荐信息
export function getDetailRecommend() {
    return request({
        url: '/recommend',
    })
}

//基本信息
export class GoodsDetailBase {
    constructor(itemInfo, columns, shopInfo)  {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.oldPrice = itemInfo.oldPrice;
        this.newPrice = itemInfo.price;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = shopInfo.services;
        this.calcPrice = itemInfo.lowNowPrice;
    }
}
//店铺信息
export class GoodDetailShop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;
        this.score = shopInfo.score;
    }
}
