import Taro from "@tarojs/taro";
import qs from "qs";
import { VuePages, vPages } from "../app.config";

type SimpleObject = {
  [key: string]: any;
  [key: number]: any;
};

export const HomePage = "/pages/index/index";

console.log("HomePage", HomePage);
export { VuePages, vPages };
export const history = {
  push: (url: string, data?: SimpleObject) => {
    console.log("navto", url, data);
    if (data) {
      // url = url + "?" + convertParams(data);
      // url = url + "?" + qs.stringify(data);
      url = url + "?" + qs.stringify(data, { encode: false });
    }
    Taro.navigateTo({ url });
  },
};
