import {bus, debounce} from "@/common/utils";
import BackTop from "@/components/content/BackTop/BackTop";

//图片加载后进行刷新
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh,200);
        this.itemImgListener = () => {
            refresh();
        }
        bus.on('itemImageLoad', this.itemImgListener);
    }
}

//topBack
export const backTopMixin = {
    components: {BackTop},
    data() {
        return {
            isShowTopBack: false
        }
    },
    methods: {
        //回到顶部
        backTopClick() {
            this.$refs.scroll.ScrollTo();
        },
        // 监听滚动位置
        listenBackTop(position) {
            this.isShowTopBack = (-position.y) > 1000;
        }
    }
}