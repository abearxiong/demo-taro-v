import cloud from "wx-server-sdk";

const env: any = cloud.DYNAMIC_CURRENT_ENV;
cloud.init({
  env,
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.action) {
    case "get_test":
      return getTest(event);
    default:
      return "ts-test";
  }
};
const getTest = async (event: any) => {
  // const wxcode = cloud.openapi.
  // const wxacodeRes = await cloud.openapi.wxacode.GetQrCode;
  return "test";
};
