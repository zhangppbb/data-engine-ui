

export enum ZONE_CODE {
  // 投资类客户
  INVESTMENT_ZONE = 'INVESTMENT_ZONE',
}

export enum ZONE_TYPE {
  // 应用
  APP = 'APP',
  // 案例
  CASE = 'CASE',
  // API
  FACE = 'FACE'
}

/**
 * 专区类型元信息：标签文本 & 颜色
 */
export const ZONE_TYPE_META: Record<ZONE_TYPE, { label: string; color: string }> = {
  [ZONE_TYPE.APP]: { label: '应用', color: '#2563eb' },
  [ZONE_TYPE.CASE]: { label: '案例', color: '#ea580c' },
  [ZONE_TYPE.FACE]: { label: 'API', color: '#16a34a' }
}
