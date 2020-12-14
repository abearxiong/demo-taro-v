import { IPluginContext } from "@tarojs/service";
export default (ctx: IPluginContext, options) => {
  // plugin 主体
  ctx.onBuildStart(() => {
    console.log("编译开始！");
  });
  ctx.onBuildFinish(() => {
    console.log("编译结束！");
  });
  ctx.modifyBuildAssets((args) => {
    console.log("args", args);
  });
};
