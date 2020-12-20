export const VuePages = [
  { path: "pages/index/index", name: "首页" },
  // { path: "pages/v-demo-templete/index", name: "demo首页" },
  // { path: "pages/v-vue2/index", name: "vue2页面" },
  // { path: "pages/o-weapp/index", name: '原生的写法'}
  // { path: "pages/v-vue3-tsx/index", name: "vue3页面" },
];
export const vPages = VuePages.map((item) => item.path);

export default {
  pages: [...vPages],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
