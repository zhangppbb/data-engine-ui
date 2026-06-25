export enum CallingPartyEnum {
  OWN = 'OWN',   // 自有
  DSK = 'DSK',   // 大司空
  QCC = 'QCC',   // 企查查
  TYC = 'TYC',   // 天眼查
}

export const CallingPartyLabelMap: Record<CallingPartyEnum, string> = {
  [CallingPartyEnum.OWN]: '自有',
  [CallingPartyEnum.DSK]: '大司空',
  [CallingPartyEnum.QCC]: '企查查',
  [CallingPartyEnum.TYC]: '天眼查',
};

