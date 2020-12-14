import path from "path";

const config = {
  projectName: "taro-v-demo",
  date: "2020-12-12",
  // designWidth: 750,
  designWidth: 360,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    360: 1 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [path.resolve(__dirname, "..", "plugin/plugin-demo")],
  defineConstants: {},
  // uglify: {
  //   enable: false,
  //   config: {}
  // },
  copy: {
    patterns: [
      { from: "src/components", to: "dist/components", ignore: "*.vue" },
    ],
    options: {},
  },
  framework: "vue3",
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/store": path.resolve(__dirname, "..", "src/store"),
    "@/hooks": path.resolve(__dirname, "..", "src/hooks"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/api": path.resolve(__dirname, "..", "src/api"),
    "@/lib": path.resolve(__dirname, "..", "src/lib"),
    "@/images": path.resolve(__dirname, "..", "src/images"),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
