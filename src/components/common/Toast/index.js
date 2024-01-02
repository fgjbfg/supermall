import Toast from "./Toast";
import { createApp } from 'vue'

// 定义插件对象
const ToastObj = {
    install: function (Vue) {
        /* Vue3的自定义插件 */
        // 1.实例化并绑定组件
        const toastConstructor = createApp(Toast);
        const instance = toastConstructor.mount(document.createElement('div'));

        // 2.将挂载的Node添加到body中
        document.body.appendChild(instance.$el);

        // 3.定义全局($toast即是此插件的名称)
        Vue.config.globalProperties.$toast = instance;
    }
}
export default ToastObj;