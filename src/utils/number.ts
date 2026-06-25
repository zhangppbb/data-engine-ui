import BigNumber from 'bignumber.js'
import { maxBy, minBy } from 'lodash-es'

/**
 * 元 → 亿元
 * @param {string | number} amount - 金额（元）
 * @param {number} decimals - 保留小数位，默认 2
 * @returns {string} 转换后的金额（亿元）
 */
export const convertYuanToBillion = (amount: string | number, decimals = 2): string => {
  if (!amount) return '0'
  const bnAmount = new BigNumber(amount)
  const billion = bnAmount.dividedBy(100_000_000)
  return billion.toFixed(decimals)
}

/**
 * 将金额从“万元”转换为“亿元”（BigNumber 精准处理）
 * @param amountInWan 需要转换的金额（单位：万元）
 * @param digits 保留的小数位数（默认 2 位）
 * @returns 转换后的金额（单位：亿元，number 类型）
 */
export const convertWanToYi = (
  amountInWan: number | string,
  digits: number = 2
): number => {
  const bn = new BigNumber(amountInWan || 0);

  return Number(
    bn
      .dividedBy(10000)
      .decimalPlaces(digits, BigNumber.ROUND_HALF_UP)
      .toString()
  );
};

/**
 * 获取数据的最大值与最小值，若相等则最小值减 1
 * @param list 数据源数组
 * @param key 需要比较的字段名
 */
export const getRange = <T extends Record<string, any>>(list: T[], key: string) => {
  if (!list.length) {
    return { max: 1, min: 0 }
  }

  const MAX = Number(maxBy(list, key)?.[key] ?? 0)
  const MIN = Number(minBy(list, key)?.[key] ?? 0)

  return {
    max: MAX === MIN ? MAX + 1 : MAX,
    min: MIN
  }
}
