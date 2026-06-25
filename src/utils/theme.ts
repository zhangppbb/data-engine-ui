// 设计稿宽度
export const DESIGN_WIDTH = 1920

/**
 * dp 转 echarts 单位(px)
 * @param dp - 设计稿单位
 * @param containerWidth - 当前容器宽度，可选，默认 1920 对应设计稿
 * @returns 转换后的 px 值
 */
export const px = (dp: number) => {
  const value = document.documentElement.clientWidth / DESIGN_WIDTH

  return dp * value
}
