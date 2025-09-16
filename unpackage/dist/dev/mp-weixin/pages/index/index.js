"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let str = common_vendor.ref("");
    const getVideoData = () => {
      common_vendor.index.request({
        url: "https://v2.api-m.com/api/meinv",
        data: { type: 2, id: 1 },
        success: (res) => {
          str.value = res.data.data;
          common_vendor.index.stopPullDownRefresh();
        },
        fail: () => {
          common_vendor.index.stopPullDownRefresh();
        }
      });
    };
    common_vendor.onLoad(() => {
      getVideoData();
    });
    common_vendor.onPullDownRefresh(() => {
      getVideoData();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(str)
      }, common_vendor.unref(str) ? {
        b: common_vendor.unref(str)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
