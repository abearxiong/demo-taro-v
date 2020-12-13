// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const {
    OPENID
  } = cloud.getWXContext();
  console.log('event', event);
  if (event.Title == "我要进用户群" || event.Title == "关注公众号" || event) {
    //设置输入状态
    cloud.openapi.customerServiceMessage.setTyping({
      touser: OPENID,
      command: "Typing",
    });
    //从云储存中拉取图片数据
    const qunimg = await cloud.downloadFile({
      fileID: "cloud://iule-1gpz33gyd693f46a.6975-iule-1gpz33gyd693f46a-1304144285/app-image/cs/cs1.png",
    });
    //上传图片素材到媒体库，并获取到图片id
    const qunmedia = await cloud.openapi.customerServiceMessage.uploadTempMedia(
      {
        type: "image",
        media: {
          contentType: "image/png",
          value: qunimg.fileContent,
        },
      }
    );
    //向用户发送群二维码
    await cloud.openapi.customerServiceMessage.send({
      touser: OPENID,
      msgtype: "image",
      image: {
        mediaId: qunmedia.mediaId,
      },
    });

    //取消状态设置
    cloud.openapi.customerServiceMessage.setTyping({
      touser: OPENID,
      command: "CancelTyping",
    });
  }
};
