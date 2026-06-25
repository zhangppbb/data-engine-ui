const path = require('path');

module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport-update': {
      viewportWidth: 1920, // 设计稿宽度（大屏一般 1920）
      viewportUnit: 'vw',  // 转换成 vw 单位
      unitPrecision: 3,    // 小数点精度
      minPixelValue: 1,    // 小于 1px 不转换
      mediaQuery: false,   // 不转换媒体查询里的 px
      include: [
        /\/src[\/\\]views[\/\\]screen/ // 匹配 src/views/screen 目录
        //  /\/src[\/\\]components[\/\\]BigscreenLayout/, // 匹配对应组件目录
      ],
    }
  }
}
