// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.action) {
    case "get-unlimited":
      return getUnlimited(event);
    case "getTasteCode":
      return getTasteCode(event);
    case "authorize":
      return authorize(event);
  }
};

async function getUnlimited(event) {
  try {
    const { OPENID } = cloud.getWXContext();

    const scene = event.scene;
    const page = event.page || "pages/index/index";
    const wxacodeRes = await cloud.openapi.wxacode.getUnlimited({
      scene,
      page,
    });
    const name = new Date().getTime();
    const cloudPath = "wxacode/code" + name + ".png";
    const uploadRes = await cloud.uploadFile({
      cloudPath: cloudPath,
      fileContent: wxacodeRes.buffer,
    });
    let code = await db.collection("code");
    code.add({
      data: {
        path: cloudPath,
        scene,
        page,
        openid: OPENID,
      },
    });
    cloud
      .getTempFileURL({
        fileList: [
          {
            fileID: uploadRes.fileID,
            maxAge: 60 * 60, // one hour
          },
        ],
      })
      .then((res) => {
        // get temp file URL
        console.log(res.fileList);
      })
      .catch((error) => {
        // handle error
      });
    return uploadRes.fileID;
  } catch (err) {
    return err;
  }
}
async function getTasteCode(event) {
  // 失败
  try {
    const { OPENID } = cloud.getWXContext();

    const page = event.page || "pages/index/index";
    const wxacodeRes = await cloud.openapi.wxacode.getQrcode({
      page,
    });
    // get_qrcode

    const name = new Date().getTime();
    const cloudPath = "wxacode/code-taste" + name + ".png";
    const uploadRes = await cloud.uploadFile({
      cloudPath: cloudPath,
      fileContent: wxacodeRes.buffer,
    });
    let code = await db.collection("code");
    code.add({
      data: {
        path: cloudPath,
        type: "code_taste",
        page,
        openid: OPENID,
      },
    });
    cloud
      .getTempFileURL({
        fileList: [
          {
            fileID: uploadRes.fileID,
            maxAge: 60 * 60, // one hour
          },
        ],
      })
      .then((res) => {
        // get temp file URL
        console.log(res.fileList);
      })
      .catch((error) => {
        // handle error
      });
    return uploadRes.fileID;
  } catch (err) {
    return err;
  }
}
async function authorize(event) {
  const { OPENID } = cloud.getWXContext();

  let getRes = await db
    .collection("wxacode-user")
    .where({
      openid: OPENID,
    })
    .get();

  if (getRes.errMsg !== "collection.get:ok") {
    return {
      env: cloud.DYNAMIC_CURRENT_ENV,
    };
  }

  if (getRes.data.length > 0) {
    return {
      env: cloud.DYNAMIC_CURRENT_ENV,
    };
  }

  let addRes = await db.collection("wxacode-user").add({
    data: {
      openid: OPENID,
      userInfo: event.userInfo,
      authorizedTime: new Date(),
    },
  });

  if (addRes.errMsg !== "collection.add:ok") {
    return {
      env: cloud.DYNAMIC_CURRENT_ENV,
    };
  }

  return {
    errMsg: "user.authorize.ok",
    env: cloud.DYNAMIC_CURRENT_ENV,
  };
}
