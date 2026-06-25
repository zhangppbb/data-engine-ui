import { COMPANY_TYPE, REGISTER } from './region-status';
import type { CascaderOption } from 'element-plus';

// 股票类型
export const STOCK_TYPE_OPTIONS: CascaderOption[] = [
  { label: 'A股', value: '0' },
  { label: '港股', value: '1', disabled: true },
  { label: '美股', value: '2', disabled: true },
  { label: '其他', value: '3', disabled: true },
];

// 国标行业
export const BASIC_INDUSTRY: CascaderOption[] = [
  {
    value: 'A',
    label: '农、林、牧、渔业',
    children: [
      {
        value: '01',
        label: '农业',
        children: [
          {
            value: '011',
            label: '谷物种植',
            children: [
              {
                value: '0111',
                label: '稻谷种植'
              },
              {
                value: '0112',
                label: '小麦种植'
              },
              {
                value: '0113',
                label: '玉米种植'
              },
              {
                value: '0119',
                label: '其他谷物种植'
              }
            ]
          },
          {
            value: '012',
            label: '豆类、油料和薯类种植',
            children: [
              {
                value: '0121',
                label: '豆类种植'
              },
              {
                value: '0122',
                label: '油料种植'
              },
              {
                value: '0123',
                label: '薯类种植'
              }
            ]
          },
          {
            value: '013',
            label: '棉、麻、糖、烟草种植',
            children: [
              {
                value: '0131',
                label: '棉花种植'
              },
              {
                value: '0132',
                label: '麻类种植'
              },
              {
                value: '0133',
                label: '糖料种植'
              },
              {
                value: '0134',
                label: '烟草种植'
              }
            ]
          },
          {
            value: '014',
            label: '蔬菜、食用菌及园艺作物种植',
            children: [
              {
                value: '0141',
                label: '蔬菜种植'
              },
              {
                value: '0142',
                label: '食用菌种植'
              },
              {
                value: '0143',
                label: '花卉种植'
              },
              {
                value: '0149',
                label: '其他园艺作物种植'
              }
            ]
          },
          {
            value: '015',
            label: '水果种植',
            children: [
              {
                value: '0151',
                label: '仁果类和核果类水果种植'
              },
              {
                value: '0152',
                label: '葡萄种植'
              },
              {
                value: '0153',
                label: '柑橘类种植'
              },
              {
                value: '0154',
                label: '香蕉等亚热带水果种植'
              },
              {
                value: '0159',
                label: '其他水果种植'
              }
            ]
          },
          {
            value: '016',
            label: '坚果、含油果、香料和饮料作物种植',
            children: [
              {
                value: '0161',
                label: '坚果种植'
              },
              {
                value: '0162',
                label: '含油果种植'
              },
              {
                value: '0163',
                label: '香料作物种植'
              },
              {
                value: '0164',
                label: '茶叶种植'
              },
              {
                value: '0169',
                label: '其他饮料作物种植'
              }
            ]
          },
          {
            value: '017',
            label: '中药材种植',
            children: [
              {
                value: '0171',
                label: '中草药种植'
              },
              {
                value: '0179',
                label: '其他中药材种植'
              }
            ]
          },
          {
            value: '018',
            label: '草种植及割草',
            children: [
              {
                value: '0181',
                label: '草种植'
              },
              {
                value: '0182',
                label: '天然草原割草'
              }
            ]
          },
          {
            value: '0190',
            label: '其他农业'
          }
        ]
      },
      {
        value: '02',
        label: '林业',
        children: [
          {
            value: '021',
            label: '林木育种和育苗',
            children: [
              {
                value: '0211',
                label: '林木育种'
              },
              {
                value: '0212',
                label: '林木育苗'
              }
            ]
          },
          {
            value: '0220',
            label: '造林和更新'
          },
          {
            value: '023',
            label: '森林经营、管护和改培',
            children: [
              {
                value: '0231',
                label: '森林经营和管护'
              },
              {
                value: '0232',
                label: '森林改培'
              }
            ]
          },
          {
            value: '024',
            label: '木材和竹材采运',
            children: [
              {
                value: '0241',
                label: '木材采运'
              },
              {
                value: '0242',
                label: '竹材采运'
              }
            ]
          },
          {
            value: '025',
            label: '林产品采集',
            children: [
              {
                value: '0251',
                label: '木竹材林产品采集'
              },
              {
                value: '0252',
                label: '非木竹材林产品采集'
              }
            ]
          }
        ]
      },
      {
        value: '03',
        label: '畜牧业',
        children: [
          {
            value: '031',
            label: '牲畜饲养',
            children: [
              {
                value: '0311',
                label: '牛的饲养'
              },
              {
                value: '0312',
                label: '马的饲养'
              },
              {
                value: '0313',
                label: '猪的饲养'
              },
              {
                value: '0314',
                label: '羊的饲养'
              },
              {
                value: '0315',
                label: '骆驼饲养'
              },
              {
                value: '0319',
                label: '其他牲畜饲养'
              }
            ]
          },
          {
            value: '032',
            label: '家禽饲养',
            children: [
              {
                value: '0321',
                label: '鸡的饲养'
              },
              {
                value: '0322',
                label: '鸭的饲养'
              },
              {
                value: '0323',
                label: '鹅的饲养'
              },
              {
                value: '0329',
                label: '其他家禽饲养'
              }
            ]
          },
          {
            value: '0330',
            label: '狩猎和捕捉动物'
          },
          {
            value: '039',
            label: '其他畜牧业',
            children: [
              {
                value: '0391',
                label: '兔的饲养'
              },
              {
                value: '0392',
                label: '蜜蜂饲养'
              },
              {
                value: '0399',
                label: '其他未列明畜牧业'
              }
            ]
          }
        ]
      },
      {
        value: '04',
        label: '渔业',
        children: [
          {
            value: '041',
            label: '水产养殖',
            children: [
              {
                value: '0411',
                label: '海水养殖'
              },
              {
                value: '0412',
                label: '内陆养殖'
              }
            ]
          },
          {
            value: '042',
            label: '水产捕捞',
            children: [
              {
                value: '0421',
                label: '海水捕捞'
              },
              {
                value: '0422',
                label: '内陆捕捞'
              }
            ]
          }
        ]
      },
      {
        value: '05',
        label: '农、林、牧、渔专业及辅助性活动',
        children: [
          {
            value: '051',
            label: '农业专业及辅助性活动',
            children: [
              {
                value: '0511',
                label: '种子种苗培育活动'
              },
              {
                value: '0512',
                label: '农业机械活动'
              },
              {
                value: '0513',
                label: '灌溉活动'
              },
              {
                value: '0514',
                label: '农产品初加工活动'
              },
              {
                value: '0515',
                label: '农作物病虫害防治活动'
              },
              {
                value: '0519',
                label: '其他农业专业及辅助性活动'
              }
            ]
          },
          {
            value: '052',
            label: '林业专业及辅助性活动',
            children: [
              {
                value: '0521',
                label: '林业有害生物防治活动'
              },
              {
                value: '0522',
                label: '森林防火活动'
              },
              {
                value: '0523',
                label: '林产品初级加工活动'
              },
              {
                value: '0529',
                label: '其他林业专业及辅助性活动'
              }
            ]
          },
          {
            value: '053',
            label: '畜牧专业及辅助性活动',
            children: [
              {
                value: '0531',
                label: '畜牧良种繁殖活动'
              },
              {
                value: '0532',
                label: '畜禽粪污处理活动'
              },
              {
                value: '0539',
                label: '其他畜牧专业及辅助性活动'
              }
            ]
          },
          {
            value: '054',
            label: '渔业专业及辅助性活动',
            children: [
              {
                value: '0541',
                label: '鱼苗及鱼种场活动'
              },
              {
                value: '0549',
                label: '其他渔业专业及辅助性活动'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'B',
    label: '采矿业',
    children: [
      {
        value: '06',
        label: '煤炭开采和洗选业',
        children: [
          {
            value: '0610',
            label: '烟煤和无烟煤开采洗选'
          },
          {
            value: '0620',
            label: '褐煤开采洗选'
          },
          {
            value: '0690',
            label: '其他煤炭采选'
          }
        ]
      },
      {
        value: '07',
        label: '石油和天然气开采业',
        children: [
          {
            value: '071',
            label: '石油开采',
            children: [
              {
                value: '0711',
                label: '陆地石油开采'
              },
              {
                value: '0712',
                label: '海洋石油开采'
              }
            ]
          },
          {
            value: '072',
            label: '天然气开采',
            children: [
              {
                value: '0721',
                label: '陆地天然气开采'
              },
              {
                value: '0722',
                label: '海洋天然气及可燃冰开采'
              }
            ]
          }
        ]
      },
      {
        value: '08',
        label: '黑色金属矿采选业',
        children: [
          {
            value: '0810',
            label: '铁矿采选'
          },
          {
            value: '0820',
            label: '锰矿、铬矿采选'
          },
          {
            value: '0890',
            label: '其他黑色金属矿采选'
          }
        ]
      },
      {
        value: '09',
        label: '有色金属矿采选业',
        children: [
          {
            value: '091',
            label: '常用有色金属矿采选',
            children: [
              {
                value: '0911',
                label: '铜矿采选'
              },
              {
                value: '0912',
                label: '铅锌矿采选'
              },
              {
                value: '0913',
                label: '镍钴矿采选'
              },
              {
                value: '0914',
                label: '锡矿采选'
              },
              {
                value: '0915',
                label: '锑矿采选'
              },
              {
                value: '0916',
                label: '铝矿采选'
              },
              {
                value: '0917',
                label: '镁矿采选'
              },
              {
                value: '0919',
                label: '其他常用有色金属矿采选'
              }
            ]
          },
          {
            value: '092',
            label: '贵金属矿采选',
            children: [
              {
                value: '0921',
                label: '金矿采选'
              },
              {
                value: '0922',
                label: '银矿采选'
              },
              {
                value: '0929',
                label: '其他贵金属矿采选'
              }
            ]
          },
          {
            value: '093',
            label: '稀有稀土金属矿采选',
            children: [
              {
                value: '0931',
                label: '钨钼矿采选'
              },
              {
                value: '0932',
                label: '稀土金属矿采选'
              },
              {
                value: '0933',
                label: '放射性金属矿采选'
              },
              {
                value: '0939',
                label: '其他稀有金属矿采选'
              }
            ]
          }
        ]
      },
      {
        value: '10',
        label: '非金属矿采选业',
        children: [
          {
            value: '101',
            label: '土砂石开采',
            children: [
              {
                value: '1011',
                label: '石灰石、石膏开采'
              },
              {
                value: '1012',
                label: '建筑装饰用石开采'
              },
              {
                value: '1013',
                label: '耐火土石开采'
              },
              {
                value: '1019',
                label: '粘土及其他土砂石开采'
              }
            ]
          },
          {
            value: '1020',
            label: '化学矿开采'
          },
          {
            value: '1030',
            label: '采盐'
          },
          {
            value: '109',
            label: '石棉及其他非金属矿采选',
            children: [
              {
                value: '1091',
                label: '石棉、云母矿采选'
              },
              {
                value: '1092',
                label: '石墨、滑石采选'
              },
              {
                value: '1093',
                label: '宝石、玉石采选'
              },
              {
                value: '1099',
                label: '其他未列明非金属矿采选'
              }
            ]
          }
        ]
      },
      {
        value: '11',
        label: '开采专业及辅助性活动',
        children: [
          {
            value: '1110',
            label: '煤炭开采和洗选专业及辅助性活动'
          },
          {
            value: '1120',
            label: '石油和天然气开采专业及辅助性活动'
          },
          {
            value: '1190',
            label: '其他开采专业及辅助性活动'
          }
        ]
      },
      {
        value: '12',
        label: '其他采矿业',
        children: [
          {
            value: '1200',
            label: '其他采矿业'
          }
        ]
      }
    ]
  },
  {
    value: 'C',
    label: '制造业',
    children: [
      {
        value: '13',
        label: '农副食品加工业',
        children: [
          {
            value: '131',
            label: '谷物磨制',
            children: [
              {
                value: '1311',
                label: '稻谷加工'
              },
              {
                value: '1312',
                label: '小麦加工'
              },
              {
                value: '1313',
                label: '玉米加工'
              },
              {
                value: '1314',
                label: '杂粮加工'
              },
              {
                value: '1319',
                label: '其他谷物磨制'
              }
            ]
          },
          {
            value: '132',
            label: '饲料加工',
            children: [
              {
                value: '1321',
                label: '宠物饲料加工'
              },
              {
                value: '1329',
                label: '其他饲料加工'
              }
            ]
          },
          {
            value: '133',
            label: '植物油加工',
            children: [
              {
                value: '1331',
                label: '食用植物油加工'
              },
              {
                value: '1332',
                label: '非食用植物油加工'
              }
            ]
          },
          {
            value: '1340',
            label: '制糖业'
          },
          {
            value: '135',
            label: '屠宰及肉类加工',
            children: [
              {
                value: '1351',
                label: '牲畜屠宰'
              },
              {
                value: '1352',
                label: '禽类屠宰'
              },
              {
                value: '1353',
                label: '肉制品及副产品加工'
              }
            ]
          },
          {
            value: '136',
            label: '水产品加工',
            children: [
              {
                value: '1361',
                label: '水产品冷冻加工'
              },
              {
                value: '1362',
                label: '鱼糜制品及水产品干腌制加工'
              },
              {
                value: '1363',
                label: '鱼油提取及制品制造'
              },
              {
                value: '1369',
                label: '其他水产品加工'
              }
            ]
          },
          {
            value: '137',
            label: '蔬菜、菌类、水果和坚果加工',
            children: [
              {
                value: '1371',
                label: '蔬菜加工'
              },
              {
                value: '1372',
                label: '食用菌加工'
              },
              {
                value: '1373',
                label: '水果和坚果加工'
              }
            ]
          },
          {
            value: '139',
            label: '其他农副食品加工',
            children: [
              {
                value: '1391',
                label: '淀粉及淀粉制品制造'
              },
              {
                value: '1392',
                label: '豆制品制造'
              },
              {
                value: '1393',
                label: '蛋品加工'
              },
              {
                value: '1399',
                label: '其他未列明农副食品加工'
              }
            ]
          }
        ]
      },
      {
        value: '14',
        label: '食品制造业',
        children: [
          {
            value: '141',
            label: '焙烤食品制造',
            children: [
              {
                value: '1411',
                label: '糕点、面包制造'
              },
              {
                value: '1419',
                label: '饼干及其他焙烤食品制造'
              }
            ]
          },
          {
            value: '142',
            label: '糖果、巧克力及蜜饯制造',
            children: [
              {
                value: '1421',
                label: '糖果、巧克力制造'
              },
              {
                value: '1422',
                label: '蜜饯制作'
              }
            ]
          },
          {
            value: '143',
            label: '方便食品制造',
            children: [
              {
                value: '1431',
                label: '米、面制品制造'
              },
              {
                value: '1432',
                label: '速冻食品制造'
              },
              {
                value: '1433',
                label: '方便面制造'
              },
              {
                value: '1439',
                label: '其他方便食品制造'
              }
            ]
          },
          {
            value: '144',
            label: '乳制品制造',
            children: [
              {
                value: '1441',
                label: '液体乳制造'
              },
              {
                value: '1442',
                label: '乳粉制造'
              },
              {
                value: '1449',
                label: '其他乳制品制造'
              }
            ]
          },
          {
            value: '145',
            label: '罐头食品制造',
            children: [
              {
                value: '1451',
                label: '肉、禽类罐头制造'
              },
              {
                value: '1452',
                label: '水产品罐头制造'
              },
              {
                value: '1453',
                label: '蔬菜、水果罐头制造'
              },
              {
                value: '1459',
                label: '其他罐头食品制造'
              }
            ]
          },
          {
            value: '146',
            label: '调味品、发酵制品制造',
            children: [
              {
                value: '1461',
                label: '味精制造'
              },
              {
                value: '1462',
                label: '酱油、食醋及类似制品制造'
              },
              {
                value: '1469',
                label: '其他调味品、发酵制品制造'
              }
            ]
          },
          {
            value: '149',
            label: '其他食品制造',
            children: [
              {
                value: '1491',
                label: '营养食品制造'
              },
              {
                value: '1492',
                label: '保健食品制造'
              },
              {
                value: '1493',
                label: '冷冻饮品及食用冰制造'
              },
              {
                value: '1494',
                label: '盐加工'
              },
              {
                value: '1495',
                label: '食品及饲料添加剂制造'
              },
              {
                value: '1499',
                label: '其他未列明食品制造'
              }
            ]
          }
        ]
      },
      {
        value: '15',
        label: '酒、饮料和精制茶制造业',
        children: [
          {
            value: '151',
            label: '酒的制造',
            children: [
              {
                value: '1511',
                label: '酒精制造'
              },
              {
                value: '1512',
                label: '白酒制造'
              },
              {
                value: '1513',
                label: '啤酒制造'
              },
              {
                value: '1514',
                label: '黄酒制造'
              },
              {
                value: '1515',
                label: '葡萄酒制造'
              },
              {
                value: '1519',
                label: '其他酒制造'
              }
            ]
          },
          {
            value: '152',
            label: '饮料制造',
            children: [
              {
                value: '1521',
                label: '碳酸饮料制造'
              },
              {
                value: '1522',
                label: '瓶（罐）装饮用水制造'
              },
              {
                value: '1523',
                label: '果菜汁及果菜汁饮料制造'
              },
              {
                value: '1524',
                label: '含乳饮料和植物蛋白饮料制造'
              },
              {
                value: '1525',
                label: '固体饮料制造'
              },
              {
                value: '1529',
                label: '茶饮料及其他饮料制造'
              }
            ]
          },
          {
            value: '1530',
            label: '精制茶加工'
          }
        ]
      },
      {
        value: '16',
        label: '烟草制品业',
        children: [
          {
            value: '1610',
            label: '烟叶复烤'
          },
          {
            value: '1620',
            label: '卷烟制造'
          },
          {
            value: '1690',
            label: '其他烟草制品制造'
          }
        ]
      },
      {
        value: '17',
        label: '纺织业',
        children: [
          {
            value: '171',
            label: '棉纺织及印染精加工',
            children: [
              {
                value: '1711',
                label: '棉纺纱加工'
              },
              {
                value: '1712',
                label: '棉织造加工'
              },
              {
                value: '1713',
                label: '棉印染精加工'
              }
            ]
          },
          {
            value: '172',
            label: '毛纺织及染整精加工',
            children: [
              {
                value: '1721',
                label: '毛条和毛纱线加工'
              },
              {
                value: '1722',
                label: '毛织造加工'
              },
              {
                value: '1723',
                label: '毛染整精加工'
              }
            ]
          },
          {
            value: '173',
            label: '麻纺织及染整精加工',
            children: [
              {
                value: '1731',
                label: '麻纤维纺前加工和纺纱'
              },
              {
                value: '1732',
                label: '麻织造加工'
              },
              {
                value: '1733',
                label: '麻染整精加工'
              }
            ]
          },
          {
            value: '174',
            label: '丝绢纺织及印染精加工',
            children: [
              {
                value: '1741',
                label: '缫丝加工'
              },
              {
                value: '1742',
                label: '绢纺和丝织加工'
              },
              {
                value: '1743',
                label: '丝印染精加工'
              }
            ]
          },
          {
            value: '175',
            label: '化纤织造及印染精加工',
            children: [
              {
                value: '1751',
                label: '化纤织造加工'
              },
              {
                value: '1752',
                label: '化纤织物染整精加工'
              }
            ]
          },
          {
            value: '176',
            label: '针织或钩针编织物及其制品制造',
            children: [
              {
                value: '1761',
                label: '针织或钩针编织物织造'
              },
              {
                value: '1762',
                label: '针织或钩针编织物印染精加工'
              },
              {
                value: '1763',
                label: '针织或钩针编织品制造'
              }
            ]
          },
          {
            value: '177',
            label: '家用纺织制成品制造',
            children: [
              {
                value: '1771',
                label: '床上用品制造'
              },
              {
                value: '1772',
                label: '毛巾类制品制造'
              },
              {
                value: '1773',
                label: '窗帘、布艺类产品制造'
              },
              {
                value: '1779',
                label: '其他家用纺织制成品制造'
              }
            ]
          },
          {
            value: '178',
            label: '产业用纺织制成品制造',
            children: [
              {
                value: '1781',
                label: '非织造布制造'
              },
              {
                value: '1782',
                label: '绳、索、缆制造'
              },
              {
                value: '1783',
                label: '纺织带和帘子布制造'
              },
              {
                value: '1784',
                label: '篷、帆布制造'
              },
              {
                value: '1789',
                label: '其他产业用纺织制成品制造'
              }
            ]
          }
        ]
      },
      {
        value: '18',
        label: '纺织服装、服饰业',
        children: [
          {
            value: '181',
            label: '机织服装制造',
            children: [
              {
                value: '1811',
                label: '运动机织服装制造'
              },
              {
                value: '1819',
                label: '其他机织服装制造'
              }
            ]
          },
          {
            value: '182',
            label: '针织或钩针编织服装制造',
            children: [
              {
                value: '1821',
                label: '运动休闲针织服装制造'
              },
              {
                value: '1829',
                label: '其他针织或钩针编织服装制造'
              }
            ]
          },
          {
            value: '1830',
            label: '服饰制造'
          }
        ]
      },
      {
        value: '19',
        label: '皮革、毛皮、羽毛及其制品和制鞋业',
        children: [
          {
            value: '1910',
            label: '皮革鞣制加工'
          },
          {
            value: '192',
            label: '皮革制品制造',
            children: [
              {
                value: '1921',
                label: '皮革服装制造'
              },
              {
                value: '1922',
                label: '皮箱、包（袋）制造'
              },
              {
                value: '1923',
                label: '皮手套及皮装饰制品制造'
              },
              {
                value: '1929',
                label: '其他皮革制品制造'
              }
            ]
          },
          {
            value: '193',
            label: '毛皮鞣制及制品加工',
            children: [
              {
                value: '1931',
                label: '毛皮鞣制加工'
              },
              {
                value: '1932',
                label: '毛皮服装加工'
              },
              {
                value: '1939',
                label: '其他毛皮制品加工'
              }
            ]
          },
          {
            value: '194',
            label: '羽毛(绒)加工及制品制造',
            children: [
              {
                value: '1941',
                label: '羽毛（绒）加工'
              },
              {
                value: '1942',
                label: '羽毛（绒）制品加工'
              }
            ]
          },
          {
            value: '195',
            label: '制鞋业',
            children: [
              {
                value: '1951',
                label: '纺织面料鞋制造'
              },
              {
                value: '1952',
                label: '皮鞋制造'
              },
              {
                value: '1953',
                label: '塑料鞋制造'
              },
              {
                value: '1954',
                label: '橡胶鞋制造'
              },
              {
                value: '1959',
                label: '其他制鞋业'
              }
            ]
          }
        ]
      },
      {
        value: '20',
        label: '木材加工和木、竹、藤、棕、草制品业',
        children: [
          {
            value: '201',
            label: '木材加工',
            children: [
              {
                value: '2011',
                label: '锯材加工'
              },
              {
                value: '2012',
                label: '木片加工'
              },
              {
                value: '2013',
                label: '单板加工'
              },
              {
                value: '2019',
                label: '其他木材加工'
              }
            ]
          },
          {
            value: '202',
            label: '人造板制造',
            children: [
              {
                value: '2021',
                label: '胶合板制造'
              },
              {
                value: '2022',
                label: '纤维板制造'
              },
              {
                value: '2023',
                label: '刨花板制造'
              },
              {
                value: '2029',
                label: '其他人造板制造'
              }
            ]
          },
          {
            value: '203',
            label: '木质制品制造',
            children: [
              {
                value: '2031',
                label: '建筑用木料及木材组件加工'
              },
              {
                value: '2032',
                label: '木门窗制造'
              },
              {
                value: '2033',
                label: '木楼梯制造'
              },
              {
                value: '2034',
                label: '木地板制造'
              },
              {
                value: '2035',
                label: '木制容器制造'
              },
              {
                value: '2039',
                label: '软木制品及其他木制品制造'
              }
            ]
          },
          {
            value: '204',
            label: '竹、藤、棕、草等制品制造',
            children: [
              {
                value: '2041',
                label: '竹制品制造'
              },
              {
                value: '2042',
                label: '藤制品制造'
              },
              {
                value: '2043',
                label: '棕制品制造'
              },
              {
                value: '2049',
                label: '草及其他制品制造'
              }
            ]
          }
        ]
      },
      {
        value: '21',
        label: '家具制造业',
        children: [
          {
            value: '2110',
            label: '木质家具制造'
          },
          {
            value: '2120',
            label: '竹、藤家具制造'
          },
          {
            value: '2130',
            label: '金属家具制造'
          },
          {
            value: '2140',
            label: '塑料家具制造'
          },
          {
            value: '2190',
            label: '其他家具制造'
          }
        ]
      },
      {
        value: '22',
        label: '造纸和纸制品业',
        children: [
          {
            value: '221',
            label: '纸浆制造',
            children: [
              {
                value: '2211',
                label: '木竹浆制造'
              },
              {
                value: '2212',
                label: '非木竹浆制造'
              }
            ]
          },
          {
            value: '222',
            label: '造纸',
            children: [
              {
                value: '2221',
                label: '机制纸及纸板制造'
              },
              {
                value: '2222',
                label: '手工纸制造'
              },
              {
                value: '2223',
                label: '加工纸制造'
              }
            ]
          },
          {
            value: '223',
            label: '纸制品制造',
            children: [
              {
                value: '2231',
                label: '纸和纸板容器制造'
              },
              {
                value: '2239',
                label: '其他纸制品制造'
              }
            ]
          }
        ]
      },
      {
        value: '23',
        label: '印刷和记录媒介复制业',
        children: [
          {
            value: '231',
            label: '印刷',
            children: [
              {
                value: '2311',
                label: '书、报刊印刷'
              },
              {
                value: '2312',
                label: '本册印制'
              },
              {
                value: '2319',
                label: '包装装潢及其他印刷'
              }
            ]
          },
          {
            value: '2320',
            label: '装订及印刷相关服务'
          },
          {
            value: '2330',
            label: '记录媒介复制'
          }
        ]
      },
      {
        value: '24',
        label: '文教、工美、体育和娱乐用品制造业',
        children: [
          {
            value: '241',
            label: '文教办公用品制造',
            children: [
              {
                value: '2411',
                label: '文具制造'
              },
              {
                value: '2412',
                label: '笔的制造'
              },
              {
                value: '2413',
                label: '教学用模型及教具制造'
              },
              {
                value: '2414',
                label: '墨水、墨汁制造'
              },
              {
                value: '2419',
                label: '其他文教办公用品制造'
              }
            ]
          },
          {
            value: '242',
            label: '乐器制造',
            children: [
              {
                value: '2421',
                label: '中乐器制造'
              },
              {
                value: '2422',
                label: '西乐器制造'
              },
              {
                value: '2423',
                label: '电子乐器制造'
              },
              {
                value: '2429',
                label: '其他乐器及零件制造'
              }
            ]
          },
          {
            value: '243',
            label: '工艺美术及礼仪用品制造',
            children: [
              {
                value: '2431',
                label: '雕塑工艺品制造'
              },
              {
                value: '2432',
                label: '金属工艺品制造'
              },
              {
                value: '2433',
                label: '漆器工艺品制造'
              },
              {
                value: '2434',
                label: '花画工艺品制造'
              },
              {
                value: '2435',
                label: '天然植物纤维编织工艺品制造'
              },
              {
                value: '2436',
                label: '抽纱刺绣工艺品制造'
              },
              {
                value: '2437',
                label: '地毯、挂毯制造'
              },
              {
                value: '2438',
                label: '珠宝首饰及有关物品制造'
              },
              {
                value: '2439',
                label: '其他工艺美术及礼仪用品制造'
              }
            ]
          },
          {
            value: '244',
            label: '体育用品制造',
            children: [
              {
                value: '2441',
                label: '球类制造'
              },
              {
                value: '2442',
                label: '专项运动器材及配件制造'
              },
              {
                value: '2443',
                label: '健身器材制造'
              },
              {
                value: '2444',
                label: '运动防护用具制造'
              },
              {
                value: '2449',
                label: '其他体育用品制造'
              }
            ]
          },
          {
            value: '245',
            label: '玩具制造',
            children: [
              {
                value: '2451',
                label: '电玩具制造'
              },
              {
                value: '2452',
                label: '塑胶玩具制造'
              },
              {
                value: '2453',
                label: '金属玩具制造'
              },
              {
                value: '2454',
                label: '弹射玩具制造'
              },
              {
                value: '2455',
                label: '娃娃玩具制造'
              },
              {
                value: '2456',
                label: '儿童乘骑玩耍的童车类产品制造'
              },
              {
                value: '2459',
                label: '其他玩具制造'
              }
            ]
          },
          {
            value: '246',
            label: '游艺器材及娱乐用品制造',
            children: [
              {
                value: '2461',
                label: '露天游乐场所游乐设备制造'
              },
              {
                value: '2462',
                label: '游艺用品及室内游艺器材制造'
              },
              {
                value: '2469',
                label: '其他娱乐用品制造'
              }
            ]
          }
        ]
      },
      {
        value: '25',
        label: '石油、煤炭及其他燃料加工业',
        children: [
          {
            value: '251',
            label: '精炼石油产品制造',
            children: [
              {
                value: '2511',
                label: '原油加工及石油制品制造'
              },
              {
                value: '2519',
                label: '其他原油制造'
              }
            ]
          },
          {
            value: '252',
            label: '煤炭加工',
            children: [
              {
                value: '2521',
                label: '炼焦'
              },
              {
                value: '2522',
                label: '煤制合成气生产'
              },
              {
                value: '2523',
                label: '煤制液体燃料生产'
              },
              {
                value: '2524',
                label: '煤制品制造'
              },
              {
                value: '2529',
                label: '其他煤炭加工'
              }
            ]
          },
          {
            value: '2530',
            label: '核燃料加工'
          },
          {
            value: '254',
            label: '生物质燃料加工',
            children: [
              {
                value: '2541',
                label: '生物质液体燃料生产'
              },
              {
                value: '2542',
                label: '生物质致密成型燃料加工'
              }
            ]
          }
        ]
      },
      {
        value: '26',
        label: '化学原料和化学制品制造业',
        children: [
          {
            value: '261',
            label: '基础化学原料制造',
            children: [
              {
                value: '2611',
                label: '无机酸制造'
              },
              {
                value: '2612',
                label: '无机碱制造'
              },
              {
                value: '2613',
                label: '无机盐制造'
              },
              {
                value: '2614',
                label: '有机化学原料制造'
              },
              {
                value: '2619',
                label: '其他基础化学原料制造'
              }
            ]
          },
          {
            value: '262',
            label: '肥料制造',
            children: [
              {
                value: '2621',
                label: '氮肥制造'
              },
              {
                value: '2622',
                label: '磷肥制造'
              },
              {
                value: '2623',
                label: '钾肥制造'
              },
              {
                value: '2624',
                label: '复混肥料制造'
              },
              {
                value: '2625',
                label: '有机肥料及微生物肥料制造'
              },
              {
                value: '2629',
                label: '其他肥料制造'
              }
            ]
          },
          {
            value: '263',
            label: '农药制造',
            children: [
              {
                value: '2631',
                label: '化学农药制造'
              },
              {
                value: '2632',
                label: '生物化学农药及微生物农药制造'
              }
            ]
          },
          {
            value: '264',
            label: '涂料、油墨、颜料及类似产品制造',
            children: [
              {
                value: '2641',
                label: '涂料制造'
              },
              {
                value: '2642',
                label: '油墨及类似产品制造'
              },
              {
                value: '2643',
                label: '工业颜料制造'
              },
              {
                value: '2644',
                label: '工艺美术颜料制造'
              },
              {
                value: '2645',
                label: '染料制造'
              },
              {
                value: '2646',
                label: '密封用填料及类似品制造'
              }
            ]
          },
          {
            value: '265',
            label: '合成材料制造',
            children: [
              {
                value: '2651',
                label: '初级形态塑料及合成树脂制造'
              },
              {
                value: '2652',
                label: '合成橡胶制造'
              },
              {
                value: '2653',
                label: '合成纤维单（聚合）体制造'
              },
              {
                value: '2659',
                label: '其他合成材料制造'
              }
            ]
          },
          {
            value: '266',
            label: '专用化学产品制造',
            children: [
              {
                value: '2661',
                label: '化学试剂和助剂制造'
              },
              {
                value: '2662',
                label: '专项化学用品制造'
              },
              {
                value: '2663',
                label: '林产化学产品制造'
              },
              {
                value: '2664',
                label: '文化用信息化学品制造'
              },
              {
                value: '2665',
                label: '医学生产用信息化学品制造'
              },
              {
                value: '2666',
                label: '环境污染处理专用药剂材料制造'
              },
              {
                value: '2667',
                label: '动物胶制造'
              },
              {
                value: '2669',
                label: '其他专用化学产品制造'
              }
            ]
          },
          {
            value: '267',
            label: '炸药、火工及焰火产品制造',
            children: [
              {
                value: '2671',
                label: '炸药及火工产品制造'
              },
              {
                value: '2672',
                label: '焰火、鞭炮产品制造'
              }
            ]
          },
          {
            value: '268',
            label: '日用化学产品制造',
            children: [
              {
                value: '2681',
                label: '肥皂及洗涤剂制造'
              },
              {
                value: '2682',
                label: '化妆品制造'
              },
              {
                value: '2683',
                label: '口腔清洁用品制造'
              },
              {
                value: '2684',
                label: '香料、香精制造'
              },
              {
                value: '2689',
                label: '其他日用化学产品制造'
              }
            ]
          }
        ]
      },
      {
        value: '27',
        label: '医药制造业',
        children: [
          {
            value: '2710',
            label: '化学药品原料药制造'
          },
          {
            value: '2720',
            label: '化学药品制剂制造'
          },
          {
            value: '2730',
            label: '中药饮片加工'
          },
          {
            value: '2740',
            label: '中成药生产'
          },
          {
            value: '2750',
            label: '兽用药品制造'
          },
          {
            value: '276',
            label: '生物药品制品制造',
            children: [
              {
                value: '2761',
                label: '生物药品制造'
              },
              {
                value: '2762',
                label: '基因工程药物和疫苗制造'
              }
            ]
          },
          {
            value: '2770',
            label: '卫生材料及医药用品制造'
          },
          {
            value: '2780',
            label: '药用辅料及包装材料'
          }
        ]
      },
      {
        value: '28',
        label: '化学纤维制造业',
        children: [
          {
            value: '281',
            label: '纤维素纤维原料及纤维制造',
            children: [
              {
                value: '2811',
                label: '化纤浆粕制造'
              },
              {
                value: '2812',
                label: '人造纤维（纤维素纤维）制造'
              }
            ]
          },
          {
            value: '282',
            label: '合成纤维制造',
            children: [
              {
                value: '2821',
                label: '锦纶纤维制造'
              },
              {
                value: '2822',
                label: '涤纶纤维制造'
              },
              {
                value: '2823',
                label: '腈纶纤维制造'
              },
              {
                value: '2824',
                label: '维纶纤维制造'
              },
              {
                value: '2825',
                label: '丙纶纤维制造'
              },
              {
                value: '2826',
                label: '氨纶纤维制造'
              },
              {
                value: '2829',
                label: '其他合成纤维制造'
              }
            ]
          },
          {
            value: '283',
            label: '生物基材料制造',
            children: [
              {
                value: '2831',
                label: '生物基化学纤维制造'
              },
              {
                value: '2832',
                label: '生物基、淀粉基新材料制造'
              }
            ]
          }
        ]
      },
      {
        value: '29',
        label: '橡胶和塑料制品业',
        children: [
          {
            value: '291',
            label: '橡胶制品业',
            children: [
              {
                value: '2911',
                label: '轮胎制造'
              },
              {
                value: '2912',
                label: '橡胶板、管、带制造'
              },
              {
                value: '2913',
                label: '橡胶零件制造'
              },
              {
                value: '2914',
                label: '再生橡胶制造'
              },
              {
                value: '2915',
                label: '日用及医用橡胶制品制造'
              },
              {
                value: '2916',
                label: '运动场地用塑胶制造'
              },
              {
                value: '2919',
                label: '其他橡胶制品制造'
              }
            ]
          },
          {
            value: '292',
            label: '塑料制品业',
            children: [
              {
                value: '2921',
                label: '塑料薄膜制造'
              },
              {
                value: '2922',
                label: '塑料板、管、型材制造'
              },
              {
                value: '2923',
                label: '塑料丝、绳及编织品制造'
              },
              {
                value: '2924',
                label: '泡沫塑料制造'
              },
              {
                value: '2925',
                label: '塑料人造革、合成革制造'
              },
              {
                value: '2926',
                label: '塑料包装箱及容器制造'
              },
              {
                value: '2927',
                label: '日用塑料制品制造'
              },
              {
                value: '2928',
                label: '人造草坪制造'
              },
              {
                value: '2929',
                label: '塑料零件及其他塑料制品制造'
              }
            ]
          }
        ]
      },
      {
        value: '30',
        label: '非金属矿物制品业',
        children: [
          {
            value: '301',
            label: '水泥、石灰和石膏制造',
            children: [
              {
                value: '3011',
                label: '水泥制造'
              },
              {
                value: '3012',
                label: '石灰和石膏制造'
              }
            ]
          },
          {
            value: '302',
            label: '石膏、水泥制品及类似制品制造',
            children: [
              {
                value: '3021',
                label: '水泥制品制造'
              },
              {
                value: '3022',
                label: '砼结构构件制造'
              },
              {
                value: '3023',
                label: '石棉水泥制品制造'
              },
              {
                value: '3024',
                label: '轻质建筑材料制造'
              },
              {
                value: '3029',
                label: '其他水泥类似制品制造'
              }
            ]
          },
          {
            value: '303',
            label: '砖瓦、石材等建筑材料制造',
            children: [
              {
                value: '3031',
                label: '粘土砖瓦及建筑砌块制造'
              },
              {
                value: '3032',
                label: '建筑用石加工'
              },
              {
                value: '3033',
                label: '防水建筑材料制造'
              },
              {
                value: '3034',
                label: '隔热和隔音材料制造'
              },
              {
                value: '3039',
                label: '其他建筑材料制造'
              }
            ]
          },
          {
            value: '304',
            label: '玻璃制造',
            children: [
              {
                value: '3041',
                label: '平板玻璃制造'
              },
              {
                value: '3042',
                label: '特种玻璃制造'
              },
              {
                value: '3049',
                label: '其他玻璃制造'
              }
            ]
          },
          {
            value: '305',
            label: '玻璃制品制造',
            children: [
              {
                value: '3051',
                label: '技术玻璃制品制造'
              },
              {
                value: '3052',
                label: '光学玻璃制造'
              },
              {
                value: '3053',
                label: '玻璃仪器制造'
              },
              {
                value: '3054',
                label: '日用玻璃制品制造'
              },
              {
                value: '3055',
                label: '玻璃包装容器制造'
              },
              {
                value: '3056',
                label: '玻璃保温容器制造'
              },
              {
                value: '3057',
                label: '制镜及类似品加工'
              },
              {
                value: '3059',
                label: '其他玻璃制品制造'
              }
            ]
          },
          {
            value: '306',
            label: '玻璃纤维和玻璃纤维增强塑料制品制造',
            children: [
              {
                value: '3061',
                label: '玻璃纤维及制品制造'
              },
              {
                value: '3062',
                label: '玻璃纤维增强塑料制品制造'
              }
            ]
          },
          {
            value: '307',
            label: '陶瓷制品制造',
            children: [
              {
                value: '3071',
                label: '建筑陶瓷制品制造'
              },
              {
                value: '3072',
                label: '卫生陶瓷制品制造'
              },
              {
                value: '3073',
                label: '特种陶瓷制品制造'
              },
              {
                value: '3074',
                label: '日用陶瓷制品制造'
              },
              {
                value: '3075',
                label: '陈设艺术陶瓷制造'
              },
              {
                value: '3076',
                label: '园艺陶瓷制造'
              },
              {
                value: '3079',
                label: '其他陶瓷制品制造'
              }
            ]
          },
          {
            value: '308',
            label: '耐火材料制品制造',
            children: [
              {
                value: '3081',
                label: '石棉制品制造'
              },
              {
                value: '3082',
                label: '云母制品制造'
              },
              {
                value: '3089',
                label: '耐火陶瓷制品及其他耐火材料制造'
              }
            ]
          },
          {
            value: '309',
            label: '石墨及其他非金属矿物制品制造',
            children: [
              {
                value: '3091',
                label: '石墨及碳素制品制造'
              },
              {
                value: '3099',
                label: '其他非金属矿物制品制造'
              }
            ]
          }
        ]
      },
      {
        value: '31',
        label: '黑色金属冶炼和压延加工业',
        children: [
          {
            value: '3110',
            label: '炼铁'
          },
          {
            value: '3120',
            label: '炼钢'
          },
          {
            value: '3130',
            label: '钢压延加工'
          },
          {
            value: '3140',
            label: '铁合金冶炼'
          }
        ]
      },
      {
        value: '32',
        label: '有色金属冶炼和压延加工业',
        children: [
          {
            value: '321',
            label: '常用有色金属冶炼',
            children: [
              {
                value: '3211',
                label: '铜冶炼'
              },
              {
                value: '3212',
                label: '铅锌冶炼'
              },
              {
                value: '3213',
                label: '镍钴冶炼'
              },
              {
                value: '3214',
                label: '锡冶炼'
              },
              {
                value: '3215',
                label: '锑冶炼'
              },
              {
                value: '3216',
                label: '铝冶炼'
              },
              {
                value: '3217',
                label: '镁冶炼'
              },
              {
                value: '3218',
                label: '硅冶炼'
              },
              {
                value: '3219',
                label: '其他常用有色金属冶炼'
              }
            ]
          },
          {
            value: '322',
            label: '贵金属冶炼',
            children: [
              {
                value: '3221',
                label: '金冶炼'
              },
              {
                value: '3222',
                label: '银冶炼'
              },
              {
                value: '3229',
                label: '其他贵金属冶炼'
              }
            ]
          },
          {
            value: '323',
            label: '稀有稀土金属冶炼',
            children: [
              {
                value: '3231',
                label: '钨钼冶炼'
              },
              {
                value: '3232',
                label: '稀土金属冶炼'
              },
              {
                value: '3239',
                label: '其他稀有金属冶炼'
              }
            ]
          },
          {
            value: '3240',
            label: '有色金属合金制造'
          },
          {
            value: '325',
            label: '有色金属压延加工',
            children: [
              {
                value: '3251',
                label: '铜压延加工'
              },
              {
                value: '3252',
                label: '铝压延加工'
              },
              {
                value: '3253',
                label: '贵金属压延加工'
              },
              {
                value: '3254',
                label: '稀有稀土金属压延加工'
              },
              {
                value: '3259',
                label: '其他有色金属压延加工'
              }
            ]
          }
        ]
      },
      {
        value: '33',
        label: '金属制品业',
        children: [
          {
            value: '331',
            label: '结构性金属制品制造',
            children: [
              {
                value: '3311',
                label: '金属结构制造'
              },
              {
                value: '3312',
                label: '金属门窗制造'
              }
            ]
          },
          {
            value: '332',
            label: '金属工具制造',
            children: [
              {
                value: '3321',
                label: '切削工具制造'
              },
              {
                value: '3322',
                label: '手工具制造'
              },
              {
                value: '3323',
                label: '农用及园林用金属工具制造'
              },
              {
                value: '3324',
                label: '刀剪及类似日用金属工具制造'
              },
              {
                value: '3329',
                label: '其他金属工具制造'
              }
            ]
          },
          {
            value: '333',
            label: '集装箱及金属包装容器制造',
            children: [
              {
                value: '3331',
                label: '集装箱制造'
              },
              {
                value: '3332',
                label: '金属压力容器制造'
              },
              {
                value: '3333',
                label: '金属包装容器及材料制造'
              }
            ]
          },
          {
            value: '3340',
            label: '金属丝绳及其制品制造'
          },
          {
            value: '335',
            label: '建筑、安全用金属制品制造',
            children: [
              {
                value: '3351',
                label: '建筑、家具用金属配件制造'
              },
              {
                value: '3352',
                label: '建筑装饰及水暖管道零件制造'
              },
              {
                value: '3353',
                label: '安全、消防用金属制品制造'
              },
              {
                value: '3359',
                label: '其他建筑、安全用金属制品制造'
              }
            ]
          },
          {
            value: '3360',
            label: '金属表面处理及热处理加工'
          },
          {
            value: '337',
            label: '搪瓷制品制造',
            children: [
              {
                value: '3371',
                label: '生产专用搪瓷制品制造'
              },
              {
                value: '3372',
                label: '建筑装饰搪瓷制品制造'
              },
              {
                value: '3373',
                label: '搪瓷卫生洁具制造'
              },
              {
                value: '3379',
                label: '搪瓷日用品及其他搪瓷制品制造'
              }
            ]
          },
          {
            value: '338',
            label: '金属制日用品制造',
            children: [
              {
                value: '3381',
                label: '金属制厨房用器具制造'
              },
              {
                value: '3382',
                label: '金属制餐具和器皿制造'
              },
              {
                value: '3383',
                label: '金属制卫生器具制造'
              },
              {
                value: '3389',
                label: '其他金属制日用品制造'
              }
            ]
          },
          {
            value: '339',
            label: '铸造及其他金属制品制造',
            children: [
              {
                value: '3391',
                label: '黑色金属铸造'
              },
              {
                value: '3392',
                label: '有色金属铸造'
              },
              {
                value: '3393',
                label: '锻件及粉末冶金制品制造'
              },
              {
                value: '3394',
                label: '交通及公共管理用金属标牌制造'
              },
              {
                value: '3399',
                label: '其他未列明金属制品制造'
              }
            ]
          }
        ]
      },
      {
        value: '34',
        label: '通用设备制造业',
        children: [
          {
            value: '341',
            label: '锅炉及原动设备制造',
            children: [
              {
                value: '3411',
                label: '锅炉及辅助设备制造'
              },
              {
                value: '3412',
                label: '内燃机及配件制造'
              },
              {
                value: '3413',
                label: '汽轮机及辅机制造'
              },
              {
                value: '3414',
                label: '水轮机及辅机制造'
              },
              {
                value: '3415',
                label: '风能原动设备制造'
              },
              {
                value: '3419',
                label: '其他原动设备制造'
              }
            ]
          },
          {
            value: '342',
            label: '金属加工机械制造',
            children: [
              {
                value: '3421',
                label: '金属切削机床制造'
              },
              {
                value: '3422',
                label: '金属成形机床制造'
              },
              {
                value: '3423',
                label: '铸造机械制造'
              },
              {
                value: '3424',
                label: '金属切割及焊接设备制造'
              },
              {
                value: '3425',
                label: '机床功能部件及附件制造'
              },
              {
                value: '3429',
                label: '其他金属加工机械制造'
              }
            ]
          },
          {
            value: '343',
            label: '物料搬运设备制造',
            children: [
              {
                value: '3431',
                label: '轻小型起重设备制造'
              },
              {
                value: '3432',
                label: '生产专用起重机制造'
              },
              {
                value: '3433',
                label: '生产专用车辆制造'
              },
              {
                value: '3434',
                label: '连续搬运设备制造'
              },
              {
                value: '3435',
                label: '电梯、自动扶梯及升降机制造'
              },
              {
                value: '3436',
                label: '客运索道制造'
              },
              {
                value: '3437',
                label: '机械式停车设备制造'
              },
              {
                value: '3439',
                label: '其他物料搬运设备制造'
              }
            ]
          },
          {
            value: '344',
            label: '泵、阀门、压缩机及类似机械制造',
            children: [
              {
                value: '3441',
                label: '泵及真空设备制造'
              },
              {
                value: '3442',
                label: '气体压缩机械制造'
              },
              {
                value: '3443',
                label: '阀门和旋塞制造'
              },
              {
                value: '3444',
                label: '液压动力机械及元件制造'
              },
              {
                value: '3445',
                label: '液力动力机械元件制造'
              },
              {
                value: '3446',
                label: '气压动力机械及元件制造'
              }
            ]
          },
          {
            value: '345',
            label: '轴承、齿轮和传动部件制造',
            children: [
              {
                value: '3451',
                label: '滚动轴承制造'
              },
              {
                value: '3452',
                label: '滑动轴承制造'
              },
              {
                value: '3453',
                label: '齿轮及齿轮减、变速箱制造'
              },
              {
                value: '3459',
                label: '其他传动部件制造'
              }
            ]
          },
          {
            value: '346',
            label: '烘炉、风机、包装等设备制造',
            children: [
              {
                value: '3461',
                label: '烘炉、熔炉及电炉制造'
              },
              {
                value: '3462',
                label: '风机、风扇制造'
              },
              {
                value: '3463',
                label: '气体、液体分离及纯净设备制造'
              },
              {
                value: '3464',
                label: '制冷、空调设备制造'
              },
              {
                value: '3465',
                label: '风动和电动工具制造'
              },
              {
                value: '3466',
                label: '喷枪及类似器具制造'
              },
              {
                value: '3467',
                label: '包装专用设备制造'
              }
            ]
          },
          {
            value: '347',
            label: '文化、办公用机械制造',
            children: [
              {
                value: '3471',
                label: '电影机械制造'
              },
              {
                value: '3472',
                label: '幻灯及投影设备制造'
              },
              {
                value: '3473',
                label: '照相机及器材制造'
              },
              {
                value: '3474',
                label: '复印和胶印设备制造'
              },
              {
                value: '3475',
                label: '计算器及货币专用设备制造'
              },
              {
                value: '3479',
                label: '其他文化、办公用机械制造'
              }
            ]
          },
          {
            value: '348',
            label: '通用零部件制造',
            children: [
              {
                value: '3481',
                label: '金属密封件制造'
              },
              {
                value: '3482',
                label: '紧固件制造'
              },
              {
                value: '3483',
                label: '弹簧制造'
              },
              {
                value: '3484',
                label: '机械零部件加工'
              },
              {
                value: '3489',
                label: '其他通用零部件制造'
              }
            ]
          },
          {
            value: '349',
            label: '其他通用设备制造业',
            children: [
              {
                value: '3491',
                label: '工业机器人制造'
              },
              {
                value: '3492',
                label: '特殊作业机器人制造'
              },
              {
                value: '3493',
                label: '增材制造装备制造'
              },
              {
                value: '3499',
                label: '其他未列明通用设备制造业'
              }
            ]
          }
        ]
      },
      {
        value: '35',
        label: '专用设备制造业',
        children: [
          {
            value: '351',
            label: '采矿、冶金、建筑专用设备制造',
            children: [
              {
                value: '3511',
                label: '矿山机械制造'
              },
              {
                value: '3512',
                label: '石油钻采专用设备制造'
              },
              {
                value: '3513',
                label: '深海石油钻探设备制造'
              },
              {
                value: '3514',
                label: '建筑工程用机械制造'
              },
              {
                value: '3515',
                label: '建筑材料生产专用机械制造'
              },
              {
                value: '3516',
                label: '冶金专用设备制造'
              },
              {
                value: '3517',
                label: '隧道施工专用机械制造'
              }
            ]
          },
          {
            value: '352',
            label: '化工、木材、非金属加工专用设备制造',
            children: [
              {
                value: '3521',
                label: '炼油、化工生产专用设备制造'
              },
              {
                value: '3522',
                label: '橡胶加工专用设备制造'
              },
              {
                value: '3523',
                label: '塑料加工专用设备制造'
              },
              {
                value: '3524',
                label: '木竹材加工机械制造'
              },
              {
                value: '3525',
                label: '模具制造'
              },
              {
                value: '3529',
                label: '其他非金属加工专用设备制造'
              }
            ]
          },
          {
            value: '353',
            label: '食品、饮料、烟草及饲料生产专用设备制造',
            children: [
              {
                value: '3531',
                label: '食品、酒、饮料及茶生产专用设备制造'
              },
              {
                value: '3532',
                label: '农副食品加工专用设备制造'
              },
              {
                value: '3533',
                label: '烟草生产专用设备制造'
              },
              {
                value: '3534',
                label: '饲料生产专用设备制造'
              }
            ]
          },
          {
            value: '354',
            label: '印刷、制药、日化及日用品生产专用设备制造',
            children: [
              {
                value: '3541',
                label: '制浆和造纸专用设备制造'
              },
              {
                value: '3542',
                label: '印刷专用设备制造'
              },
              {
                value: '3543',
                label: '日用化工专用设备制造'
              },
              {
                value: '3544',
                label: '制药专用设备制造'
              },
              {
                value: '3545',
                label: '照明器具生产专用设备制造'
              },
              {
                value: '3546',
                label: '玻璃、陶瓷和搪瓷制品生产专用设备制造'
              },
              {
                value: '3549',
                label: '其他日用品生产专用设备制造'
              }
            ]
          },
          {
            value: '355',
            label: '纺织、服装和皮革加工专用设备制造',
            children: [
              {
                value: '3551',
                label: '纺织专用设备制造'
              },
              {
                value: '3552',
                label: '皮革、毛皮及其制品加工专用设备制造'
              },
              {
                value: '3553',
                label: '缝制机械制造'
              },
              {
                value: '3554',
                label: '洗涤机械制造'
              }
            ]
          },
          {
            value: '356',
            label: '电子和电工机械专用设备制造',
            children: [
              {
                value: '3561',
                label: '电工机械专用设备制造'
              },
              {
                value: '3562',
                label: '半导体器件专用设备制造'
              },
              {
                value: '3563',
                label: '电子元器件与机电组件设备制造'
              },
              {
                value: '3569',
                label: '其他电子专用设备制造'
              }
            ]
          },
          {
            value: '357',
            label: '农、林、牧、渔专用机械制造',
            children: [
              {
                value: '3571',
                label: '拖拉机制造'
              },
              {
                value: '3572',
                label: '机械化农业及园艺机具制造'
              },
              {
                value: '3573',
                label: '营林及木竹采伐机械制造'
              },
              {
                value: '3574',
                label: '畜牧机械制造'
              },
              {
                value: '3575',
                label: '渔业机械制造'
              },
              {
                value: '3576',
                label: '农林牧渔机械配件制造'
              },
              {
                value: '3577',
                label: '棉花加工机械制造'
              },
              {
                value: '3579',
                label: '其他农、林、牧、渔业机械制造'
              }
            ]
          },
          {
            value: '358',
            label: '医疗仪器设备及器械制造',
            children: [
              {
                value: '3581',
                label: '医疗诊断、监护及治疗设备制造'
              },
              {
                value: '3582',
                label: '口腔科用设备及器具制造'
              },
              {
                value: '3583',
                label: '医疗实验室及医用消毒设备和器具制造'
              },
              {
                value: '3584',
                label: '医疗、外科及兽医用器械制造'
              },
              {
                value: '3585',
                label: '机械治疗及病房护理设备制造'
              },
              {
                value: '3586',
                label: '康复辅具制造'
              },
              {
                value: '3587',
                label: '眼镜制造'
              },
              {
                value: '3589',
                label: '其他医疗设备及器械制造'
              }
            ]
          },
          {
            value: '359',
            label: '环保、邮政、社会公共服务及其他专用设备制造',
            children: [
              {
                value: '3591',
                label: '环境保护专用设备制造'
              },
              {
                value: '3592',
                label: '地质勘查专用设备制造'
              },
              {
                value: '3593',
                label: '邮政专用机械及器材制造'
              },
              {
                value: '3594',
                label: '商业、饮食、服务专用设备制造'
              },
              {
                value: '3595',
                label: '社会公共安全设备及器材制造'
              },
              {
                value: '3596',
                label: '交通安全、管制及类似专用设备制造'
              },
              {
                value: '3597',
                label: '水资源专用机械制造'
              },
              {
                value: '3599',
                label: '其他专用设备制造'
              }
            ]
          }
        ]
      },
      {
        value: '36',
        label: '汽车制造业',
        children: [
          {
            value: '361',
            label: '汽车整车制造',
            children: [
              {
                value: '3611',
                label: '汽柴油车整车制造'
              },
              {
                value: '3612',
                label: '新能源车整车制造'
              }
            ]
          },
          {
            value: '3620',
            label: '汽车用发动机制造'
          },
          {
            value: '3630',
            label: '改装汽车制造'
          },
          {
            value: '3640',
            label: '低速汽车制造'
          },
          {
            value: '3650',
            label: '电车制造'
          },
          {
            value: '3660',
            label: '汽车车身、挂车制造'
          },
          {
            value: '3670',
            label: '汽车零部件及配件制造'
          }
        ]
      },
      {
        value: '37',
        label: '铁路、船舶、航空航天和其他运输设备制造业',
        children: [
          {
            value: '371',
            label: '铁路运输设备制造',
            children: [
              {
                value: '3711',
                label: '高铁车组制造'
              },
              {
                value: '3712',
                label: '铁路机车车辆制造'
              },
              {
                value: '3713',
                label: '窄轨机车车辆制造'
              },
              {
                value: '3714',
                label: '高铁设备、配件制造'
              },
              {
                value: '3715',
                label: '铁路机车车辆配件制造'
              },
              {
                value: '3716',
                label: '铁路专用设备及器材、配件制造'
              },
              {
                value: '3719',
                label: '其他铁路运输设备制造'
              }
            ]
          },
          {
            value: '3720',
            label: '城市轨道交通设备制造'
          },
          {
            value: '373',
            label: '船舶及相关装置制造',
            children: [
              {
                value: '3731',
                label: '金属船舶制造'
              },
              {
                value: '3732',
                label: '非金属船舶制造'
              },
              {
                value: '3733',
                label: '娱乐船和运动船制造'
              },
              {
                value: '3734',
                label: '船用配套设备制造'
              },
              {
                value: '3735',
                label: '船舶改装'
              },
              {
                value: '3736',
                label: '船舶拆除'
              },
              {
                value: '3737',
                label: '海洋工程装备制造'
              },
              {
                value: '3739',
                label: '航标器材及其他相关装置制造'
              }
            ]
          },
          {
            value: '374',
            label: '航空、航天器及设备制造',
            children: [
              {
                value: '3741',
                label: '飞机制造'
              },
              {
                value: '3742',
                label: '航天器及运载火箭制造'
              },
              {
                value: '3743',
                label: '航天相关设备制造'
              },
              {
                value: '3744',
                label: '航空相关设备制造'
              },
              {
                value: '3749',
                label: '其他航空航天器制造'
              }
            ]
          },
          {
            value: '375',
            label: '摩托车制造',
            children: [
              {
                value: '3751',
                label: '摩托车整车制造'
              },
              {
                value: '3752',
                label: '摩托车零部件及配件制造'
              }
            ]
          },
          {
            value: '376',
            label: '自行车和残疾人座车制造',
            children: [
              {
                value: '3761',
                label: '自行车制造'
              },
              {
                value: '3762',
                label: '残疾人座车制造'
              }
            ]
          },
          {
            value: '3770',
            label: '助动车制造'
          },
          {
            value: '3780',
            label: '非公路休闲车及零配件制造'
          },
          {
            value: '379',
            label: '潜水救捞及其他未列明运输设备制造',
            children: [
              {
                value: '3791',
                label: '潜水装备制造'
              },
              {
                value: '3792',
                label: '水下救捞装备制造'
              },
              {
                value: '3799',
                label: '其他未列明运输设备制造'
              }
            ]
          }
        ]
      },
      {
        value: '38',
        label: '电气机械和器材制造业',
        children: [
          {
            value: '381',
            label: '电机制造',
            children: [
              {
                value: '3811',
                label: '发电机及发电机组制造'
              },
              {
                value: '3812',
                label: '电动机制造'
              },
              {
                value: '3813',
                label: '微特电机及组件制造'
              },
              {
                value: '3819',
                label: '其他电机制造'
              }
            ]
          },
          {
            value: '382',
            label: '输配电及控制设备制造',
            children: [
              {
                value: '3821',
                label: '变压器、整流器和电感器制造'
              },
              {
                value: '3822',
                label: '电容器及其配套设备制造'
              },
              {
                value: '3823',
                label: '配电开关控制设备制造'
              },
              {
                value: '3824',
                label: '电力电子元器件制造'
              },
              {
                value: '3825',
                label: '光伏设备及元器件制造'
              },
              {
                value: '3829',
                label: '其他输配电及控制设备制造'
              }
            ]
          },
          {
            value: '383',
            label: '电线、电缆、光缆及电工器材制造',
            children: [
              {
                value: '3831',
                label: '电线、电缆制造'
              },
              {
                value: '3832',
                label: '光纤制造'
              },
              {
                value: '3833',
                label: '光缆制造'
              },
              {
                value: '3834',
                label: '绝缘制品制造'
              },
              {
                value: '3839',
                label: '其他电工器材制造'
              }
            ]
          },
          {
            value: '384',
            label: '电池制造',
            children: [
              {
                value: '3841',
                label: '锂离子电池制造'
              },
              {
                value: '3842',
                label: '镍氢电池制造'
              },
              {
                value: '3843',
                label: '铅蓄电池制造'
              },
              {
                value: '3844',
                label: '锌锰电池制造'
              },
              {
                value: '3849',
                label: '其他电池制造'
              }
            ]
          },
          {
            value: '385',
            label: '家用电力器具制造',
            children: [
              {
                value: '3851',
                label: '家用制冷电器具制造'
              },
              {
                value: '3852',
                label: '家用空气调节器制造'
              },
              {
                value: '3853',
                label: '家用通风电器具制造'
              },
              {
                value: '3854',
                label: '家用厨房电器具制造'
              },
              {
                value: '3855',
                label: '家用清洁卫生电器具制造'
              },
              {
                value: '3856',
                label: '家用美容、保健护理电器具制造'
              },
              {
                value: '3857',
                label: '家用电力器具专用配件制造'
              },
              {
                value: '3859',
                label: '其他家用电力器具制造'
              }
            ]
          },
          {
            value: '386',
            label: '非电力家用器具制造',
            children: [
              {
                value: '3861',
                label: '燃气及类似能源家用器具制造'
              },
              {
                value: '3862',
                label: '太阳能器具制造'
              },
              {
                value: '3869',
                label: '其他非电力家用器具制造'
              }
            ]
          },
          {
            value: '387',
            label: '照明器具制造',
            children: [
              {
                value: '3871',
                label: '电光源制造'
              },
              {
                value: '3872',
                label: '照明灯具制造'
              },
              {
                value: '3873',
                label: '舞台及场地用灯制造'
              },
              {
                value: '3874',
                label: '智能照明器具制造'
              },
              {
                value: '3879',
                label: '灯用电器附件及其他照明器具制造'
              }
            ]
          },
          {
            value: '389',
            label: '其他电气机械及器材制造',
            children: [
              {
                value: '3891',
                label: '电气信号设备装置制造'
              },
              {
                value: '3899',
                label: '其他未列明电气机械及器材制造'
              }
            ]
          }
        ]
      },
      {
        value: '39',
        label: '计算机、通信和其他电子设备制造业',
        children: [
          {
            value: '391',
            label: '计算机制造',
            children: [
              {
                value: '3911',
                label: '计算机整机制造'
              },
              {
                value: '3912',
                label: '计算机零部件制造'
              },
              {
                value: '3913',
                label: '计算机外围设备制造'
              },
              {
                value: '3914',
                label: '工业控制计算机及系统制造'
              },
              {
                value: '3915',
                label: '信息安全设备制造'
              },
              {
                value: '3919',
                label: '其他计算机制造'
              }
            ]
          },
          {
            value: '392',
            label: '通信设备制造',
            children: [
              {
                value: '3921',
                label: '通信系统设备制造'
              },
              {
                value: '3922',
                label: '通信终端设备制造'
              }
            ]
          },
          {
            value: '393',
            label: '广播电视设备制造',
            children: [
              {
                value: '3931',
                label: '广播电视节目制作及发射设备制造'
              },
              {
                value: '3932',
                label: '广播电视接收设备制造'
              },
              {
                value: '3933',
                label: '广播电视专用配件制造'
              },
              {
                value: '3934',
                label: '专业音响设备制造'
              },
              {
                value: '3939',
                label: '应用电视设备及其他广播电视设备制造'
              }
            ]
          },
          {
            value: '3940',
            label: '雷达及配套设备制造'
          },
          {
            value: '395',
            label: '非专业视听设备制造',
            children: [
              {
                value: '3951',
                label: '电视机制造'
              },
              {
                value: '3952',
                label: '音响设备制造'
              },
              {
                value: '3953',
                label: '影视录放设备制造'
              }
            ]
          },
          {
            value: '396',
            label: '智能消费设备制造',
            children: [
              {
                value: '3961',
                label: '可穿戴智能设备制造'
              },
              {
                value: '3962',
                label: '智能车载设备制造'
              },
              {
                value: '3963',
                label: '智能无人飞行器制造'
              },
              {
                value: '3964',
                label: '服务消费机器人制造'
              },
              {
                value: '3969',
                label: '其他智能消费设备制造'
              }
            ]
          },
          {
            value: '397',
            label: '电子器件制造',
            children: [
              {
                value: '3971',
                label: '电子真空器件制造'
              },
              {
                value: '3972',
                label: '半导体分立器件制造'
              },
              {
                value: '3973',
                label: '集成电路制造'
              },
              {
                value: '3974',
                label: '显示器件制造'
              },
              {
                value: '3975',
                label: '半导体照明器件制造'
              },
              {
                value: '3976',
                label: '光电子器件制造'
              },
              {
                value: '3979',
                label: '其他电子器件制造'
              }
            ]
          },
          {
            value: '398',
            label: '电子元件及电子专用材料制造',
            children: [
              {
                value: '3981',
                label: '电阻电容电感元件制造'
              },
              {
                value: '3982',
                label: '电子电路制造'
              },
              {
                value: '3983',
                label: '敏感元件及传感器制造'
              },
              {
                value: '3984',
                label: '电声器件及零件制造'
              },
              {
                value: '3985',
                label: '电子专用材料制造'
              },
              {
                value: '3989',
                label: '其他电子元件制造'
              }
            ]
          },
          {
            value: '3990',
            label: '其他电子设备制造'
          }
        ]
      },
      {
        value: '40',
        label: '仪器仪表制造业',
        children: [
          {
            value: '401',
            label: '通用仪器仪表制造',
            children: [
              {
                value: '4011',
                label: '工业自动控制系统装置制造'
              },
              {
                value: '4012',
                label: '电工仪器仪表制造'
              },
              {
                value: '4013',
                label: '绘图、计算及测量仪器制造'
              },
              {
                value: '4014',
                label: '实验分析仪器制造'
              },
              {
                value: '4015',
                label: '试验机制造'
              },
              {
                value: '4016',
                label: '供应用仪器仪表制造'
              },
              {
                value: '4019',
                label: '其他通用仪器制造'
              }
            ]
          },
          {
            value: '402',
            label: '专用仪器仪表制造',
            children: [
              {
                value: '4021',
                label: '环境监测专用仪器仪表制造'
              },
              {
                value: '4022',
                label: '运输设备及生产用计数仪表制造'
              },
              {
                value: '4023',
                label: '导航、测绘、气象及海洋专用仪器制造'
              },
              {
                value: '4024',
                label: '农林牧渔专用仪器仪表制造'
              },
              {
                value: '4025',
                label: '地质勘探和地震专用仪器制造'
              },
              {
                value: '4026',
                label: '教学专用仪器制造'
              },
              {
                value: '4027',
                label: '核子及核辐射测量仪器制造'
              },
              {
                value: '4028',
                label: '电子测量仪器制造'
              },
              {
                value: '4029',
                label: '其他专用仪器制造'
              }
            ]
          },
          {
            value: '4030',
            label: '钟表与计时仪器制造'
          },
          {
            value: '4040',
            label: '光学仪器制造'
          },
          {
            value: '4050',
            label: '衡器制造'
          },
          {
            value: '4090',
            label: '其他仪器仪表制造业'
          }
        ]
      },
      {
        value: '41',
        label: '其他制造业',
        children: [
          {
            value: '411',
            label: '日用杂品制造',
            children: [
              {
                value: '4111',
                label: '鬃毛加工、制刷及清扫工具制造'
              },
              {
                value: '4119',
                label: '其他日用杂品制造'
              }
            ]
          },
          {
            value: '4120',
            label: '核辐射加工'
          },
          {
            value: '4190',
            label: '其他未列明制造业'
          }
        ]
      },
      {
        value: '42',
        label: '废弃资源综合利用业',
        children: [
          {
            value: '4210',
            label: '金属废料和碎屑加工处理'
          },
          {
            value: '4220',
            label: '非金属废料和碎屑加工处理'
          }
        ]
      },
      {
        value: '43',
        label: '金属制品、机械和设备修理业',
        children: [
          {
            value: '4310',
            label: '金属制品修理'
          },
          {
            value: '4320',
            label: '通用设备修理'
          },
          {
            value: '4330',
            label: '专用设备修理'
          },
          {
            value: '434',
            label: '铁路、船舶、航空航天等运输设备修理',
            children: [
              {
                value: '4341',
                label: '铁路运输设备修理'
              },
              {
                value: '4342',
                label: '船舶修理'
              },
              {
                value: '4343',
                label: '航空航天器修理'
              },
              {
                value: '4349',
                label: '其他运输设备修理'
              }
            ]
          },
          {
            value: '4350',
            label: '电气设备修理'
          },
          {
            value: '4360',
            label: '仪器仪表修理'
          },
          {
            value: '4390',
            label: '其他机械和设备修理业'
          }
        ]
      }
    ]
  },
  {
    value: 'D',
    label: '电力、热力、燃气及水生产和供应业',
    children: [
      {
        value: '44',
        label: '电力、热力生产和供应业',
        children: [
          {
            value: '441',
            label: '电力生产',
            children: [
              {
                value: '4411',
                label: '火力发电'
              },
              {
                value: '4412',
                label: '热电联产'
              },
              {
                value: '4413',
                label: '水力发电'
              },
              {
                value: '4414',
                label: '核力发电'
              },
              {
                value: '4415',
                label: '风力发电'
              },
              {
                value: '4416',
                label: '太阳能发电'
              },
              {
                value: '4417',
                label: '生物质能发电'
              },
              {
                value: '4419',
                label: '其他电力生产'
              }
            ]
          },
          {
            value: '4420',
            label: '电力供应'
          },
          {
            value: '4430',
            label: '热力生产和供应'
          }
        ]
      },
      {
        value: '45',
        label: '燃气生产和供应业',
        children: [
          {
            value: '451',
            label: '燃气生产和供应业',
            children: [
              {
                value: '4511',
                label: '天然气生产和供应业'
              },
              {
                value: '4512',
                label: '液化石油气生产和供应业'
              },
              {
                value: '4513',
                label: '煤气生产和供应业'
              }
            ]
          },
          {
            value: '4520',
            label: '生物质燃气生产和供应业'
          }
        ]
      },
      {
        value: '46',
        label: '水的生产和供应业',
        children: [
          {
            value: '4610',
            label: '自来水生产和供应'
          },
          {
            value: '4620',
            label: '污水处理及其再生利用'
          },
          {
            value: '4630',
            label: '海水淡化处理'
          },
          {
            value: '4690',
            label: '其他水的处理、利用与分配'
          }
        ]
      }
    ]
  },
  {
    value: 'E',
    label: '建筑业',
    children: [
      {
        value: '47',
        label: '房屋建筑业',
        children: [
          {
            value: '4710',
            label: '住宅房屋建筑'
          },
          {
            value: '4720',
            label: '体育场馆建筑'
          },
          {
            value: '4790',
            label: '其他房屋建筑业'
          }
        ]
      },
      {
        value: '48',
        label: '土木工程建筑业',
        children: [
          {
            value: '481',
            label: '铁路、道路、隧道和桥梁工程建筑',
            children: [
              {
                value: '4811',
                label: '铁路工程建筑'
              },
              {
                value: '4812',
                label: '公路工程建筑'
              },
              {
                value: '4813',
                label: '市政道路工程建筑'
              },
              {
                value: '4814',
                label: '城市轨道交通工程建筑'
              },
              {
                value: '4819',
                label: '其他道路、隧道和桥梁工程建筑'
              }
            ]
          },
          {
            value: '482',
            label: '水利和水运工程建筑',
            children: [
              {
                value: '4821',
                label: '水源及供水设施工程建筑'
              },
              {
                value: '4822',
                label: '河湖治理及防洪设施工程建筑'
              },
              {
                value: '4823',
                label: '港口及航运设施工程建筑'
              }
            ]
          },
          {
            value: '483',
            label: '海洋工程建筑',
            children: [
              {
                value: '4831',
                label: '海洋油气资源开发利用工程建筑'
              },
              {
                value: '4832',
                label: '海洋能源开发利用工程建筑'
              },
              {
                value: '4833',
                label: '海底隧道工程建筑'
              },
              {
                value: '4834',
                label: '海底设施铺设工程建筑'
              },
              {
                value: '4839',
                label: '其他海洋工程建筑'
              }
            ]
          },
          {
            value: '4840',
            label: '工矿工程建筑'
          },
          {
            value: '485',
            label: '架线和管道工程建筑',
            children: [
              {
                value: '4851',
                label: '架线及设备工程建筑'
              },
              {
                value: '4852',
                label: '管道工程建筑'
              },
              {
                value: '4853',
                label: '地下综合管廊工程建筑'
              }
            ]
          },
          {
            value: '486',
            label: '节能环保工程施工',
            children: [
              {
                value: '4861',
                label: '节能工程施工'
              },
              {
                value: '4862',
                label: '环保工程施工'
              },
              {
                value: '4863',
                label: '生态保护工程施工'
              }
            ]
          },
          {
            value: '487',
            label: '电力工程施工',
            children: [
              {
                value: '4871',
                label: '火力发电工程施工'
              },
              {
                value: '4872',
                label: '水力发电工程施工'
              },
              {
                value: '4873',
                label: '核电工程施工'
              },
              {
                value: '4874',
                label: '风能发电工程施工'
              },
              {
                value: '4875',
                label: '太阳能发电工程施工'
              },
              {
                value: '4879',
                label: '其他电力工程施工'
              }
            ]
          },
          {
            value: '489',
            label: '其他土木工程建筑',
            children: [
              {
                value: '4891',
                label: '园林绿化工程施工'
              },
              {
                value: '4892',
                label: '体育场地设施工程施工'
              },
              {
                value: '4893',
                label: '游乐设施工程施工'
              },
              {
                value: '4899',
                label: '其他土木工程建筑施工'
              }
            ]
          }
        ]
      },
      {
        value: '49',
        label: '建筑安装业',
        children: [
          {
            value: '4910',
            label: '电气安装'
          },
          {
            value: '4920',
            label: '管道和设备安装'
          },
          {
            value: '499',
            label: '其他建筑安装业',
            children: [
              {
                value: '4991',
                label: '体育场地设施安装'
              },
              {
                value: '4999',
                label: '其他建筑安装'
              }
            ]
          }
        ]
      },
      {
        value: '50',
        label: '建筑装饰、装修和其他建筑业',
        children: [
          {
            value: '501',
            label: '建筑装饰和装修业',
            children: [
              {
                value: '5011',
                label: '公共建筑装饰和装修'
              },
              {
                value: '5012',
                label: '住宅装饰和装修'
              },
              {
                value: '5013',
                label: '建筑幕墙装饰和装修'
              }
            ]
          },
          {
            value: '502',
            label: '建筑物拆除和场地准备活动',
            children: [
              {
                value: '5021',
                label: '建筑物拆除活动'
              },
              {
                value: '5022',
                label: '场地准备活动'
              }
            ]
          },
          {
            value: '5030',
            label: '提供施工设备服务'
          },
          {
            value: '5090',
            label: '其他未列明建筑业'
          }
        ]
      }
    ]
  },
  {
    value: 'F',
    label: '批发和零售业',
    children: [
      {
        value: '51',
        label: '批发业',
        children: [
          {
            value: '511',
            label: '农、林、牧、渔产品批发',
            children: [
              {
                value: '5111',
                label: '谷物、豆及薯类批发'
              },
              {
                value: '5112',
                label: '种子批发'
              },
              {
                value: '5113',
                label: '畜牧渔业饲料批发'
              },
              {
                value: '5114',
                label: '棉、麻批发'
              },
              {
                value: '5115',
                label: '林业产品批发'
              },
              {
                value: '5116',
                label: '牲畜批发'
              },
              {
                value: '5117',
                label: '渔业产品批发'
              },
              {
                value: '5119',
                label: '其他农牧产品批发'
              }
            ]
          },
          {
            value: '512',
            label: '食品、饮料及烟草制品批发',
            children: [
              {
                value: '5121',
                label: '米、面制品及食用油批发'
              },
              {
                value: '5122',
                label: '糕点、糖果及糖批发'
              },
              {
                value: '5123',
                label: '果品、蔬菜批发'
              },
              {
                value: '5124',
                label: '肉、禽、蛋、奶及水产品批发'
              },
              {
                value: '5125',
                label: '盐及调味品批发'
              },
              {
                value: '5126',
                label: '营养和保健品批发'
              },
              {
                value: '5127',
                label: '酒、饮料及茶叶批发'
              },
              {
                value: '5128',
                label: '烟草制品批发'
              },
              {
                value: '5129',
                label: '其他食品批发'
              }
            ]
          },
          {
            value: '513',
            label: '纺织、服装及家庭用品批发',
            children: [
              {
                value: '5131',
                label: '纺织品、针织品及原料批发'
              },
              {
                value: '5132',
                label: '服装批发'
              },
              {
                value: '5133',
                label: '鞋帽批发'
              },
              {
                value: '5134',
                label: '化妆品及卫生用品批发'
              },
              {
                value: '5135',
                label: '厨具卫具及日用杂品批发'
              },
              {
                value: '5136',
                label: '灯具、装饰物品批发'
              },
              {
                value: '5137',
                label: '家用视听设备批发'
              },
              {
                value: '5138',
                label: '日用家电批发'
              },
              {
                value: '5139',
                label: '其他家庭用品批发'
              }
            ]
          },
          {
            value: '514',
            label: '文化、体育用品及器材批发',
            children: [
              {
                value: '5141',
                label: '文具用品批发'
              },
              {
                value: '5142',
                label: '体育用品及器材批发'
              },
              {
                value: '5143',
                label: '图书批发'
              },
              {
                value: '5144',
                label: '报刊批发'
              },
              {
                value: '5145',
                label: '音像制品、电子和数字出版物批发'
              },
              {
                value: '5146',
                label: '首饰、工艺品及收藏品批发'
              },
              {
                value: '5147',
                label: '乐器批发'
              },
              {
                value: '5149',
                label: '其他文化用品批发'
              }
            ]
          },
          {
            value: '515',
            label: '医药及医疗器材批发',
            children: [
              {
                value: '5151',
                label: '西药批发'
              },
              {
                value: '5152',
                label: '中药批发'
              },
              {
                value: '5153',
                label: '动物用药品批发'
              },
              {
                value: '5154',
                label: '医疗用品及器材批发'
              }
            ]
          },
          {
            value: '516',
            label: '矿产品、建材及化工产品批发',
            children: [
              {
                value: '5161',
                label: '煤炭及制品批发'
              },
              {
                value: '5162',
                label: '石油及制品批发'
              },
              {
                value: '5163',
                label: '非金属矿及制品批发'
              },
              {
                value: '5164',
                label: '金属及金属矿批发'
              },
              {
                value: '5165',
                label: '建材批发'
              },
              {
                value: '5166',
                label: '化肥批发'
              },
              {
                value: '5167',
                label: '农药批发'
              },
              {
                value: '5168',
                label: '农用薄膜批发'
              },
              {
                value: '5169',
                label: '其他化工产品批发'
              }
            ]
          },
          {
            value: '517',
            label: '机械设备、五金产品及电子产品批发',
            children: [
              {
                value: '5171',
                label: '农业机械批发'
              },
              {
                value: '5172',
                label: '汽车及零配件批发'
              },
              {
                value: '5173',
                label: '摩托车及零配件批发'
              },
              {
                value: '5174',
                label: '五金产品批发'
              },
              {
                value: '5175',
                label: '电气设备批发'
              },
              {
                value: '5176',
                label: '计算机、软件及辅助设备批发'
              },
              {
                value: '5177',
                label: '通讯设备批发'
              },
              {
                value: '5178',
                label: '广播影视设备批发'
              },
              {
                value: '5179',
                label: '其他机械设备及电子产品批发'
              }
            ]
          },
          {
            value: '518',
            label: '贸易经纪与代理',
            children: [
              {
                value: '5181',
                label: '贸易代理'
              },
              {
                value: '5182',
                label: '一般物品拍卖'
              },
              {
                value: '5183',
                label: '艺术品、收藏品拍卖'
              },
              {
                value: '5184',
                label: '艺术品代理'
              },
              {
                value: '5189',
                label: '其他贸易经纪与代理'
              }
            ]
          },
          {
            value: '519',
            label: '其他批发业',
            children: [
              {
                value: '5191',
                label: '再生物资回收与批发'
              },
              {
                value: '5192',
                label: '宠物食品用品批发'
              },
              {
                value: '5193',
                label: '互联网批发'
              },
              {
                value: '5199',
                label: '其他未列明批发业'
              }
            ]
          }
        ]
      },
      {
        value: '52',
        label: '零售业',
        children: [
          {
            value: '521',
            label: '综合零售',
            children: [
              {
                value: '5211',
                label: '百货零售'
              },
              {
                value: '5212',
                label: '超级市场零售'
              },
              {
                value: '5213',
                label: '便利店零售'
              },
              {
                value: '5219',
                label: '其他综合零售'
              }
            ]
          },
          {
            value: '522',
            label: '食品、饮料及烟草制品专门零售',
            children: [
              {
                value: '5221',
                label: '粮油零售'
              },
              {
                value: '5222',
                label: '糕点、面包零售'
              },
              {
                value: '5223',
                label: '果品、蔬菜零售'
              },
              {
                value: '5224',
                label: '肉、禽、蛋、奶及水产品零售'
              },
              {
                value: '5225',
                label: '营养和保健品零售'
              },
              {
                value: '5226',
                label: '酒、饮料及茶叶零售'
              },
              {
                value: '5227',
                label: '烟草制品零售'
              },
              {
                value: '5229',
                label: '其他食品零售'
              }
            ]
          },
          {
            value: '523',
            label: '纺织、服装及日用品专门零售',
            children: [
              {
                value: '5231',
                label: '纺织品及针织品零售'
              },
              {
                value: '5232',
                label: '服装零售'
              },
              {
                value: '5233',
                label: '鞋帽零售'
              },
              {
                value: '5234',
                label: '化妆品及卫生用品零售'
              },
              {
                value: '5235',
                label: '厨具卫具及日用杂品零售'
              },
              {
                value: '5236',
                label: '钟表、眼镜零售'
              },
              {
                value: '5237',
                label: '箱包零售'
              },
              {
                value: '5238',
                label: '自行车等代步设备零售'
              },
              {
                value: '5239',
                label: '其他日用品零售'
              }
            ]
          },
          {
            value: '524',
            label: '文化、体育用品及器材专门零售',
            children: [
              {
                value: '5241',
                label: '文具用品零售'
              },
              {
                value: '5242',
                label: '体育用品及器材零售'
              },
              {
                value: '5243',
                label: '图书、报刊零售'
              },
              {
                value: '5244',
                label: '音像制品、电子和数字出版物零售'
              },
              {
                value: '5245',
                label: '珠宝首饰零售'
              },
              {
                value: '5246',
                label: '工艺美术品及收藏品零售'
              },
              {
                value: '5247',
                label: '乐器零售'
              },
              {
                value: '5248',
                label: '照相器材零售'
              },
              {
                value: '5249',
                label: '其他文化用品零售'
              }
            ]
          },
          {
            value: '525',
            label: '医药及医疗器材专门零售',
            children: [
              {
                value: '5251',
                label: '西药零售'
              },
              {
                value: '5252',
                label: '中药零售'
              },
              {
                value: '5253',
                label: '动物用药品零售'
              },
              {
                value: '5254',
                label: '医疗用品及器材零售'
              },
              {
                value: '5255',
                label: '保健辅助治疗器材零售'
              }
            ]
          },
          {
            value: '526',
            label: '汽车、摩托车、零配件和燃料及其他动力销售',
            children: [
              {
                value: '5261',
                label: '汽车新车零售'
              },
              {
                value: '5262',
                label: '汽车旧车零售'
              },
              {
                value: '5263',
                label: '汽车零配件零售'
              },
              {
                value: '5264',
                label: '摩托车及零配件零售'
              },
              {
                value: '5265',
                label: '机动车燃油零售'
              },
              {
                value: '5266',
                label: '机动车燃气零售'
              },
              {
                value: '5267',
                label: '机动车充电销售'
              }
            ]
          },
          {
            value: '527',
            label: '家用电器及电子产品专门零售',
            children: [
              {
                value: '5271',
                label: '家用视听设备零售'
              },
              {
                value: '5272',
                label: '日用家电零售'
              },
              {
                value: '5273',
                label: '计算机、软件及辅助设备零售'
              },
              {
                value: '5274',
                label: '通信设备零售'
              },
              {
                value: '5279',
                label: '其他电子产品零售'
              }
            ]
          },
          {
            value: '528',
            label: '五金、家具及室内装饰材料专门零售',
            children: [
              {
                value: '5281',
                label: '五金零售'
              },
              {
                value: '5282',
                label: '灯具零售'
              },
              {
                value: '5283',
                label: '家具零售'
              },
              {
                value: '5284',
                label: '涂料零售'
              },
              {
                value: '5285',
                label: '卫生洁具零售'
              },
              {
                value: '5286',
                label: '木质装饰材料零售'
              },
              {
                value: '5287',
                label: '陶瓷、石材装饰材料零售'
              },
              {
                value: '5289',
                label: '其他室内装饰材料零售'
              }
            ]
          },
          {
            value: '529',
            label: '货摊、无店铺及其他零售业',
            children: [
              {
                value: '5291',
                label: '流动货摊零售'
              },
              {
                value: '5292',
                label: '互联网零售'
              },
              {
                value: '5293',
                label: '邮购及电视、电话零售'
              },
              {
                value: '5294',
                label: '自动售货机零售'
              },
              {
                value: '5295',
                label: '旧货零售'
              },
              {
                value: '5296',
                label: '生活用燃料零售'
              },
              {
                value: '5297',
                label: '宠物食品用品零售'
              },
              {
                value: '5299',
                label: '其他未列明零售业'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'G',
    label: '交通运输、仓储和邮政业',
    children: [
      {
        value: '53',
        label: '铁路运输业',
        children: [
          {
            value: '531',
            label: '铁路旅客运输',
            children: [
              {
                value: '5311',
                label: '高速铁路旅客运输'
              },
              {
                value: '5312',
                label: '城际铁路旅客运输'
              },
              {
                value: '5313',
                label: '普通铁路旅客运输'
              }
            ]
          },
          {
            value: '5320',
            label: '铁路货物运输'
          },
          {
            value: '533',
            label: '铁路运输辅助活动',
            children: [
              {
                value: '5331',
                label: '客运火车站'
              },
              {
                value: '5332',
                label: '货运火车站（场）'
              },
              {
                value: '5333',
                label: '铁路运输维护活动'
              },
              {
                value: '5339',
                label: '其他铁路运输辅助活动'
              }
            ]
          }
        ]
      },
      {
        value: '54',
        label: '道路运输业',
        children: [
          {
            value: '541',
            label: '城市公共交通运输',
            children: [
              {
                value: '5411',
                label: '公共电汽车客运'
              },
              {
                value: '5412',
                label: '城市轨道交通'
              },
              {
                value: '5413',
                label: '出租车客运'
              },
              {
                value: '5414',
                label: '公共自行车服务'
              },
              {
                value: '5419',
                label: '其他城市公共交通运输'
              }
            ]
          },
          {
            value: '542',
            label: '公路旅客运输',
            children: [
              {
                value: '5421',
                label: '长途客运'
              },
              {
                value: '5422',
                label: '旅游客运'
              },
              {
                value: '5429',
                label: '其他公路客运'
              }
            ]
          },
          {
            value: '543',
            label: '道路货物运输',
            children: [
              {
                value: '5431',
                label: '普通货物道路运输'
              },
              {
                value: '5432',
                label: '冷藏车道路运输'
              },
              {
                value: '5433',
                label: '集装箱道路运输'
              },
              {
                value: '5434',
                label: '大型货物道路运输'
              },
              {
                value: '5435',
                label: '危险货物道路运输'
              },
              {
                value: '5436',
                label: '邮件包裹道路运输'
              },
              {
                value: '5437',
                label: '城市配送'
              },
              {
                value: '5438',
                label: '搬家运输'
              },
              {
                value: '5439',
                label: '其他道路货物运输'
              }
            ]
          },
          {
            value: '544',
            label: '道路运输辅助活动',
            children: [
              {
                value: '5441',
                label: '客运汽车站'
              },
              {
                value: '5442',
                label: '货运枢纽（站）'
              },
              {
                value: '5443',
                label: '公路管理与养护'
              },
              {
                value: '5449',
                label: '其他道路运输辅助活动'
              }
            ]
          }
        ]
      },
      {
        value: '55',
        label: '水上运输业',
        children: [
          {
            value: '551',
            label: '水上旅客运输',
            children: [
              {
                value: '5511',
                label: '海上旅客运输'
              },
              {
                value: '5512',
                label: '内河旅客运输'
              },
              {
                value: '5513',
                label: '客运轮渡运输'
              }
            ]
          },
          {
            value: '552',
            label: '水上货物运输',
            children: [
              {
                value: '5521',
                label: '远洋货物运输'
              },
              {
                value: '5522',
                label: '沿海货物运输'
              },
              {
                value: '5523',
                label: '内河货物运输'
              }
            ]
          },
          {
            value: '553',
            label: '水上运输辅助活动',
            children: [
              {
                value: '5531',
                label: '客运港口'
              },
              {
                value: '5532',
                label: '货运港口'
              },
              {
                value: '5539',
                label: '其他水上运输辅助活动'
              }
            ]
          }
        ]
      },
      {
        value: '56',
        label: '航空运输业',
        children: [
          {
            value: '561',
            label: '航空客货运输',
            children: [
              {
                value: '5611',
                label: '航空旅客运输'
              },
              {
                value: '5612',
                label: '航空货物运输'
              }
            ]
          },
          {
            value: '562',
            label: '通用航空服务',
            children: [
              {
                value: '5621',
                label: '通用航空生产服务'
              },
              {
                value: '5622',
                label: '观光游览航空服务'
              },
              {
                value: '5623',
                label: '体育航空运动服务'
              },
              {
                value: '5629',
                label: '其他通用航空服务'
              }
            ]
          },
          {
            value: '563',
            label: '航空运输辅助活动',
            children: [
              {
                value: '5631',
                label: '机场'
              },
              {
                value: '5632',
                label: '空中交通管理'
              },
              {
                value: '5639',
                label: '其他航空运输辅助活动'
              }
            ]
          }
        ]
      },
      {
        value: '57',
        label: '管道运输业',
        children: [
          {
            value: '5710',
            label: '海底管道运输'
          },
          {
            value: '5720',
            label: '陆地管道运输'
          }
        ]
      },
      {
        value: '58',
        label: '多式联运和运输代理业',
        children: [
          {
            value: '5810',
            label: '多式联运'
          },
          {
            value: '582',
            label: '运输代理业',
            children: [
              {
                value: '5821',
                label: '货物运输代理'
              },
              {
                value: '5822',
                label: '旅客票务代理'
              },
              {
                value: '5829',
                label: '其他运输代理业'
              }
            ]
          }
        ]
      },
      {
        value: '59',
        label: '装卸搬运和仓储业',
        children: [
          {
            value: '5910',
            label: '装卸搬运'
          },
          {
            value: '5920',
            label: '通用仓储'
          },
          {
            value: '5930',
            label: '低温仓储'
          },
          {
            value: '594',
            label: '危险品仓储',
            children: [
              {
                value: '5941',
                label: '油气仓储'
              },
              {
                value: '5942',
                label: '危险化学品仓储'
              },
              {
                value: '5949',
                label: '其他危险品仓储'
              }
            ]
          },
          {
            value: '595',
            label: '谷物、棉花等农产品仓储',
            children: [
              {
                value: '5951',
                label: '谷物仓储'
              },
              {
                value: '5952',
                label: '棉花仓储'
              },
              {
                value: '5959',
                label: '其他农产品仓储'
              }
            ]
          },
          {
            value: '5960',
            label: '中药材仓储'
          },
          {
            value: '5990',
            label: '其他仓储业'
          }
        ]
      },
      {
        value: '60',
        label: '邮政业',
        children: [
          {
            value: '6010',
            label: '邮政基本服务'
          },
          {
            value: '6020',
            label: '快递服务'
          },
          {
            value: '6090',
            label: '其他寄递服务'
          }
        ]
      }
    ]
  },
  {
    value: 'H',
    label: '住宿和餐饮业',
    children: [
      {
        value: '61',
        label: '住宿业',
        children: [
          {
            value: '6110',
            label: '旅游饭店'
          },
          {
            value: '612',
            label: '一般旅馆',
            children: [
              {
                value: '6121',
                label: '经济型连锁酒店'
              },
              {
                value: '6129',
                label: '其他一般旅馆'
              }
            ]
          },
          {
            value: '6130',
            label: '民宿服务'
          },
          {
            value: '6140',
            label: '露营地服务'
          },
          {
            value: '6190',
            label: '其他住宿业'
          }
        ]
      },
      {
        value: '62',
        label: '餐饮业',
        children: [
          {
            value: '6210',
            label: '正餐服务'
          },
          {
            value: '6220',
            label: '快餐服务'
          },
          {
            value: '623',
            label: '饮料及冷饮服务',
            children: [
              {
                value: '6231',
                label: '茶馆服务'
              },
              {
                value: '6232',
                label: '咖啡馆服务'
              },
              {
                value: '6233',
                label: '酒吧服务'
              },
              {
                value: '6239',
                label: '其他饮料及冷饮服务'
              }
            ]
          },
          {
            value: '624',
            label: '餐饮配送及外卖送餐服务',
            children: [
              {
                value: '6241',
                label: '餐饮配送服务'
              },
              {
                value: '6242',
                label: '外卖送餐服务'
              }
            ]
          },
          {
            value: '629',
            label: '其他餐饮业',
            children: [
              {
                value: '6291',
                label: '小吃服务'
              },
              {
                value: '6299',
                label: '其他未列明餐饮业'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'I',
    label: '信息传输、软件和信息技术服务业',
    children: [
      {
        value: '63',
        label: '电信、广播电视和卫星传输服务',
        children: [
          {
            value: '631',
            label: '电信',
            children: [
              {
                value: '6311',
                label: '固定电信服务'
              },
              {
                value: '6312',
                label: '移动电信服务'
              },
              {
                value: '6319',
                label: '其他电信服务'
              }
            ]
          },
          {
            value: '632',
            label: '广播电视传输服务',
            children: [
              {
                value: '6321',
                label: '有线广播电视传输服务'
              },
              {
                value: '6322',
                label: '无线广播电视传输服务'
              }
            ]
          },
          {
            value: '633',
            label: '卫星传输服务',
            children: [
              {
                value: '6331',
                label: '广播电视卫星传输服务'
              },
              {
                value: '6339',
                label: '其他卫星传输服务'
              }
            ]
          }
        ]
      },
      {
        value: '64',
        label: '互联网和相关服务',
        children: [
          {
            value: '6410',
            label: '互联网接入及相关服务'
          },
          {
            value: '642',
            label: '互联网信息服务',
            children: [
              {
                value: '6421',
                label: '互联网搜索服务'
              },
              {
                value: '6422',
                label: '互联网游戏服务'
              },
              {
                value: '6429',
                label: '互联网其他信息服务'
              }
            ]
          },
          {
            value: '643',
            label: '互联网平台',
            children: [
              {
                value: '6431',
                label: '互联网生产服务平台'
              },
              {
                value: '6432',
                label: '互联网生活服务平台'
              },
              {
                value: '6433',
                label: '互联网科技创新平台'
              },
              {
                value: '6434',
                label: '互联网公共服务平台'
              },
              {
                value: '6439',
                label: '其他互联网平台'
              }
            ]
          },
          {
            value: '6440',
            label: '互联网安全服务'
          },
          {
            value: '6450',
            label: '互联网数据服务'
          },
          {
            value: '6490',
            label: '其他互联网服务'
          }
        ]
      },
      {
        value: '65',
        label: '软件和信息技术服务业',
        children: [
          {
            value: '651',
            label: '软件开发',
            children: [
              {
                value: '6511',
                label: '基础软件开发'
              },
              {
                value: '6512',
                label: '支撑软件开发'
              },
              {
                value: '6513',
                label: '应用软件开发'
              },
              {
                value: '6519',
                label: '其他软件开发'
              }
            ]
          },
          {
            value: '6520',
            label: '集成电路设计'
          },
          {
            value: '653',
            label: '信息系统集成和物联网技术服务',
            children: [
              {
                value: '6531',
                label: '信息系统集成服务'
              },
              {
                value: '6532',
                label: '物联网技术服务'
              }
            ]
          },
          {
            value: '6540',
            label: '运行维护服务'
          },
          {
            value: '6550',
            label: '信息处理和存储支持服务'
          },
          {
            value: '6560',
            label: '信息技术咨询服务'
          },
          {
            value: '657',
            label: '数字内容服务',
            children: [
              {
                value: '6571',
                label: '地理遥感信息服务'
              },
              {
                value: '6572',
                label: '动漫、游戏数字内容服务'
              },
              {
                value: '6579',
                label: '其他数字内容服务'
              }
            ]
          },
          {
            value: '659',
            label: '其他信息技术服务业',
            children: [
              {
                value: '6591',
                label: '呼叫中心'
              },
              {
                value: '6599',
                label: '其他未列明信息技术服务业'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'J',
    label: '金融业',
    children: [
      {
        value: '66',
        label: '货币金融服务',
        children: [
          {
            value: '6610',
            label: '中央银行服务'
          },
          {
            value: '662',
            label: '货币银行服务',
            children: [
              {
                value: '6621',
                label: '商业银行服务'
              },
              {
                value: '6622',
                label: '政策性银行服务'
              },
              {
                value: '6623',
                label: '信用合作社服务'
              },
              {
                value: '6624',
                label: '农村资金互助社服务'
              },
              {
                value: '6629',
                label: '其他货币银行服务'
              }
            ]
          },
          {
            value: '663',
            label: '非货币银行服务',
            children: [
              {
                value: '6631',
                label: '融资租赁服务'
              },
              {
                value: '6632',
                label: '财务公司服务'
              },
              {
                value: '6633',
                label: '典当'
              },
              {
                value: '6634',
                label: '汽车金融公司服务'
              },
              {
                value: '6635',
                label: '小额贷款公司服务'
              },
              {
                value: '6636',
                label: '消费金融公司服务'
              },
              {
                value: '6637',
                label: '网络借贷服务'
              },
              {
                value: '6639',
                label: '其他非货币银行服务'
              }
            ]
          },
          {
            value: '6640',
            label: '银行理财服务'
          },
          {
            value: '6650',
            label: '银行监管服务'
          }
        ]
      },
      {
        value: '67',
        label: '资本市场服务',
        children: [
          {
            value: '671',
            label: '证券市场服务',
            children: [
              {
                value: '6711',
                label: '证券市场管理服务'
              },
              {
                value: '6712',
                label: '证券经纪交易服务'
              }
            ]
          },
          {
            value: '6720',
            label: '公开募集证券投资基金'
          },
          {
            value: '673',
            label: '非公开募集证券投资基金',
            children: [
              {
                value: '6731',
                label: '创业投资基金'
              },
              {
                value: '6732',
                label: '天使投资'
              },
              {
                value: '6739',
                label: '其他非公开募集证券投资基金'
              }
            ]
          },
          {
            value: '674',
            label: '期货市场服务',
            children: [
              {
                value: '6741',
                label: '期货市场管理服务'
              },
              {
                value: '6749',
                label: '其他期货市场服务'
              }
            ]
          },
          {
            value: '6750',
            label: '证券期货监管服务'
          },
          {
            value: '6760',
            label: '资本投资服务'
          },
          {
            value: '6790',
            label: '其他资本市场服务'
          }
        ]
      },
      {
        value: '68',
        label: '保险业',
        children: [
          {
            value: '681',
            label: '人身保险',
            children: [
              {
                value: '6811',
                label: '人寿保险'
              },
              {
                value: '6812',
                label: '年金保险'
              },
              {
                value: '6813',
                label: '健康保险'
              },
              {
                value: '6814',
                label: '意外伤害保险'
              }
            ]
          },
          {
            value: '6820',
            label: '财产保险'
          },
          {
            value: '6830',
            label: '再保险'
          },
          {
            value: '6840',
            label: '商业养老金'
          },
          {
            value: '685',
            label: '保险中介服务',
            children: [
              {
                value: '6851',
                label: '保险经纪服务'
              },
              {
                value: '6852',
                label: '保险代理服务'
              },
              {
                value: '6853',
                label: '保险公估服务'
              }
            ]
          },
          {
            value: '6860',
            label: '保险资产管理'
          },
          {
            value: '6870',
            label: '保险监管服务'
          },
          {
            value: '6890',
            label: '其他保险活动'
          }
        ]
      },
      {
        value: '69',
        label: '其他金融业',
        children: [
          {
            value: '691',
            label: '金融信托与管理服务',
            children: [
              {
                value: '6911',
                label: '信托公司'
              },
              {
                value: '6919',
                label: '其他金融信托与管理服务'
              }
            ]
          },
          {
            value: '6920',
            label: '控股公司服务'
          },
          {
            value: '6930',
            label: '非金融机构支付服务'
          },
          {
            value: '6940',
            label: '金融信息服务'
          },
          {
            value: '6950',
            label: '金融资产管理公司'
          },
          {
            value: '699',
            label: '其他未列明金融业',
            children: [
              {
                value: '6991',
                label: '货币经纪公司服务'
              },
              {
                value: '6999',
                label: '其他未包括金融业'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'K',
    label: '房地产业',
    children: [
      {
        value: '70',
        label: '房地产业',
        children: [
          {
            value: '7010',
            label: '房地产开发经营'
          },
          {
            value: '7020',
            label: '物业管理'
          },
          {
            value: '7030',
            label: '房地产中介服务'
          },
          {
            value: '7040',
            label: '房地产租赁经营'
          },
          {
            value: '7090',
            label: '其他房地产业'
          }
        ]
      }
    ]
  },
  {
    value: 'L',
    label: '租赁和商务服务业',
    children: [
      {
        value: '71',
        label: '租赁业',
        children: [
          {
            value: '711',
            label: '机械设备经营租赁',
            children: [
              {
                value: '7111',
                label: '汽车租赁'
              },
              {
                value: '7112',
                label: '农业机械经营租赁'
              },
              {
                value: '7113',
                label: '建筑工程机械与设备经营租赁'
              },
              {
                value: '7114',
                label: '计算机及通讯设备经营租赁'
              },
              {
                value: '7115',
                label: '医疗设备经营租赁'
              },
              {
                value: '7119',
                label: '其他机械与设备经营租赁'
              }
            ]
          },
          {
            value: '712',
            label: '文体设备和用品出租',
            children: [
              {
                value: '7121',
                label: '休闲娱乐用品设备出租'
              },
              {
                value: '7122',
                label: '体育用品设备出租'
              },
              {
                value: '7123',
                label: '文化用品设备出租'
              },
              {
                value: '7124',
                label: '图书出租'
              },
              {
                value: '7125',
                label: '音像制品出租'
              },
              {
                value: '7129',
                label: '其他文体设备和用品出租'
              }
            ]
          },
          {
            value: '7130',
            label: '日用品出租'
          }
        ]
      },
      {
        value: '72',
        label: '商务服务业',
        children: [
          {
            value: '721',
            label: '组织管理服务',
            children: [
              {
                value: '7211',
                label: '企业总部管理'
              },
              {
                value: '7212',
                label: '投资与资产管理'
              },
              {
                value: '7213',
                label: '资源与产权交易服务'
              },
              {
                value: '7214',
                label: '单位后勤管理服务'
              },
              {
                value: '7215',
                label: '农村集体经济组织管理'
              },
              {
                value: '7219',
                label: '其他组织管理服务'
              }
            ]
          },
          {
            value: '722',
            label: '综合管理服务',
            children: [
              {
                value: '7221',
                label: '园区管理服务'
              },
              {
                value: '7222',
                label: '商业综合体管理服务'
              },
              {
                value: '7223',
                label: '市场管理服务'
              },
              {
                value: '7224',
                label: '供应链管理服务'
              },
              {
                value: '7229',
                label: '其他综合管理服务'
              }
            ]
          },
          {
            value: '723',
            label: '法律服务',
            children: [
              {
                value: '7231',
                label: '律师及相关法律服务'
              },
              {
                value: '7232',
                label: '公证服务'
              },
              {
                value: '7239',
                label: '其他法律服务'
              }
            ]
          },
          {
            value: '724',
            label: '咨询与调查',
            children: [
              {
                value: '7241',
                label: '会计、审计及税务服务'
              },
              {
                value: '7242',
                label: '市场调查'
              },
              {
                value: '7243',
                label: '社会经济咨询'
              },
              {
                value: '7244',
                label: '健康咨询'
              },
              {
                value: '7245',
                label: '环保咨询'
              },
              {
                value: '7246',
                label: '体育咨询'
              },
              {
                value: '7249',
                label: '其他专业咨询与调查'
              }
            ]
          },
          {
            value: '725',
            label: '广告业',
            children: [
              {
                value: '7251',
                label: '互联网广告服务'
              },
              {
                value: '7259',
                label: '其他广告服务'
              }
            ]
          },
          {
            value: '726',
            label: '人力资源服务',
            children: [
              {
                value: '7261',
                label: '公共就业服务'
              },
              {
                value: '7262',
                label: '职业中介服务'
              },
              {
                value: '7263',
                label: '劳务派遣服务'
              },
              {
                value: '7264',
                label: '创业指导服务'
              },
              {
                value: '7269',
                label: '其他人力资源服务'
              }
            ]
          },
          {
            value: '727',
            label: '安全保护服务',
            children: [
              {
                value: '7271',
                label: '安全服务'
              },
              {
                value: '7272',
                label: '安全系统监控服务'
              },
              {
                value: '7279',
                label: '其他安全保护服务'
              }
            ]
          },
          {
            value: '728',
            label: '会议、展览及相关服务',
            children: [
              {
                value: '7281',
                label: '科技会展服务'
              },
              {
                value: '7282',
                label: '旅游会展服务'
              },
              {
                value: '7283',
                label: '体育会展服务'
              },
              {
                value: '7284',
                label: '文化会展服务'
              },
              {
                value: '7289',
                label: '其他会议、会展及相关服务'
              }
            ]
          },
          {
            value: '729',
            label: '其他商务服务业',
            children: [
              {
                value: '7291',
                label: '旅行社及相关服务'
              },
              {
                value: '7292',
                label: '包装服务'
              },
              {
                value: '7293',
                label: '办公服务'
              },
              {
                value: '7294',
                label: '翻译服务'
              },
              {
                value: '7295',
                label: '信用服务'
              },
              {
                value: '7296',
                label: '非融资担保服务'
              },
              {
                value: '7297',
                label: '商务代理代办服务'
              },
              {
                value: '7298',
                label: '票务代理服务'
              },
              {
                value: '7299',
                label: '其他未列明商务服务业'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'M',
    label: '科学研究和技术服务业',
    children: [
      {
        value: '73',
        label: '研究和试验发展',
        children: [
          {
            value: '7310',
            label: '自然科学研究和试验发展'
          },
          {
            value: '7320',
            label: '工程和技术研究和试验发展'
          },
          {
            value: '7330',
            label: '农业科学研究和试验发展'
          },
          {
            value: '7340',
            label: '医学研究和试验发展'
          },
          {
            value: '7350',
            label: '社会人文科学研究'
          }
        ]
      },
      {
        value: '74',
        label: '专业技术服务业',
        children: [
          {
            value: '7410',
            label: '气象服务'
          },
          {
            value: '7420',
            label: '地震服务'
          },
          {
            value: '743',
            label: '海洋服务',
            children: [
              {
                value: '7431',
                label: '海洋气象服务'
              },
              {
                value: '7432',
                label: '海洋环境服务'
              },
              {
                value: '7439',
                label: '其他海洋服务'
              }
            ]
          },
          {
            value: '744',
            label: '测绘地理信息服务',
            children: [
              {
                value: '7441',
                label: '遥感测绘服务'
              },
              {
                value: '7449',
                label: '其他测绘地理信息服务'
              }
            ]
          },
          {
            value: '745',
            label: '质检技术服务',
            children: [
              {
                value: '7451',
                label: '检验检疫服务'
              },
              {
                value: '7452',
                label: '检测服务'
              },
              {
                value: '7453',
                label: '计量服务'
              },
              {
                value: '7454',
                label: '标准化服务'
              },
              {
                value: '7455',
                label: '认证认可服务'
              },
              {
                value: '7459',
                label: '其他质检技术服务'
              }
            ]
          },
          {
            value: '746',
            label: '环境与生态监测检测服务',
            children: [
              {
                value: '7461',
                label: '环境保护监测'
              },
              {
                value: '7462',
                label: '生态资源监测'
              },
              {
                value: '7463',
                label: '野生动物疫源疫病防控监测'
              }
            ]
          },
          {
            value: '747',
            label: '地质勘查',
            children: [
              {
                value: '7471',
                label: '能源矿产地质勘查'
              },
              {
                value: '7472',
                label: '固体矿产地质勘查'
              },
              {
                value: '7473',
                label: '水、二氧化碳等矿产地质勘查'
              },
              {
                value: '7474',
                label: '基础地质勘查'
              },
              {
                value: '7475',
                label: '地质勘查技术服务'
              }
            ]
          },
          {
            value: '748',
            label: '工程技术与设计服务',
            children: [
              {
                value: '7481',
                label: '工程管理服务'
              },
              {
                value: '7482',
                label: '工程监理服务'
              },
              {
                value: '7483',
                label: '工程勘察活动'
              },
              {
                value: '7484',
                label: '工程设计活动'
              },
              {
                value: '7485',
                label: '规划设计管理'
              },
              {
                value: '7486',
                label: '土地规划服务'
              }
            ]
          },
          {
            value: '749',
            label: '工业与专业设计及其他专业技术服务',
            children: [
              {
                value: '7491',
                label: '工业设计服务'
              },
              {
                value: '7492',
                label: '专业设计服务'
              },
              {
                value: '7493',
                label: '兽医服务'
              },
              {
                value: '7499',
                label: '其他未列明专业技术服务业'
              }
            ]
          }
        ]
      },
      {
        value: '75',
        label: '科技推广和应用服务业',
        children: [
          {
            value: '751',
            label: '技术推广服务',
            children: [
              {
                value: '7511',
                label: '农林牧渔技术推广服务'
              },
              {
                value: '7512',
                label: '生物技术推广服务'
              },
              {
                value: '7513',
                label: '新材料技术推广服务'
              },
              {
                value: '7514',
                label: '节能技术推广服务'
              },
              {
                value: '7515',
                label: '新能源技术推广服务'
              },
              {
                value: '7516',
                label: '环保技术推广服务'
              },
              {
                value: '7517',
                label: '三维（3D)打印技术推广服务'
              },
              {
                value: '7519',
                label: '其他技术推广服务'
              }
            ]
          },
          {
            value: '7520',
            label: '知识产权服务'
          },
          {
            value: '7530',
            label: '科技中介服务'
          },
          {
            value: '7540',
            label: '创业空间服务'
          },
          {
            value: '7590',
            label: '其他科技推广服务业'
          }
        ]
      }
    ]
  },
  {
    value: 'N',
    label: '水利、环境和公共设施管理业',
    children: [
      {
        value: '76',
        label: '水利管理业',
        children: [
          {
            value: '7610',
            label: '防洪除涝设施管理'
          },
          {
            value: '7620',
            label: '水资源管理'
          },
          {
            value: '7630',
            label: '天然水收集与分配'
          },
          {
            value: '7640',
            label: '水文服务'
          },
          {
            value: '7690',
            label: '其他水利管理业'
          }
        ]
      },
      {
        value: '77',
        label: '生态保护和环境治理业',
        children: [
          {
            value: '771',
            label: '生态保护',
            children: [
              {
                value: '7711',
                label: '自然生态系统保护管理'
              },
              {
                value: '7712',
                label: '自然遗迹保护管理'
              },
              {
                value: '7713',
                label: '野生动物保护'
              },
              {
                value: '7714',
                label: '野生植物保护'
              },
              {
                value: '7715',
                label: '动物园、水族馆管理服务'
              },
              {
                value: '7716',
                label: '植物园管理服务'
              },
              {
                value: '7719',
                label: '其他自然保护'
              }
            ]
          },
          {
            value: '772',
            label: '环境治理业',
            children: [
              {
                value: '7721',
                label: '水污染治理'
              },
              {
                value: '7722',
                label: '大气污染治理'
              },
              {
                value: '7723',
                label: '固体废物治理'
              },
              {
                value: '7724',
                label: '危险废物治理'
              },
              {
                value: '7725',
                label: '放射性废物治理'
              },
              {
                value: '7726',
                label: '土壤污染治理与修复服务'
              },
              {
                value: '7727',
                label: '噪声与振动控制服务'
              },
              {
                value: '7729',
                label: '其他污染治理'
              }
            ]
          }
        ]
      },
      {
        value: '78',
        label: '公共设施管理业',
        children: [
          {
            value: '7810',
            label: '市政设施管理'
          },
          {
            value: '7820',
            label: '环境卫生管理'
          },
          {
            value: '7830',
            label: '城乡市容管理'
          },
          {
            value: '7840',
            label: '绿化管理'
          },
          {
            value: '7850',
            label: '城市公园管理'
          },
          {
            value: '786',
            label: '游览景区管理',
            children: [
              {
                value: '7861',
                label: '名胜风景区管理'
              },
              {
                value: '7862',
                label: '森林公园管理'
              },
              {
                value: '7869',
                label: '其他游览景区管理'
              }
            ]
          }
        ]
      },
      {
        value: '79',
        label: '土地管理业',
        children: [
          {
            value: '7910',
            label: '土地整治服务'
          },
          {
            value: '7920',
            label: '土地调查评估服务'
          },
          {
            value: '7930',
            label: '土地登记服务'
          },
          {
            value: '7940',
            label: '土地登记代理服务'
          },
          {
            value: '7990',
            label: '其他土地管理服务'
          }
        ]
      }
    ]
  },
  {
    value: 'O',
    label: '居民服务、修理和其他服务业',
    children: [
      {
        value: '80',
        label: '居民服务业',
        children: [
          {
            value: '8010',
            label: '家庭服务'
          },
          {
            value: '8020',
            label: '托儿所服务'
          },
          {
            value: '8030',
            label: '洗染服务'
          },
          {
            value: '8040',
            label: '理发及美容服务'
          },
          {
            value: '805',
            label: '洗浴和保健养生服务',
            children: [
              {
                value: '8051',
                label: '洗浴服务'
              },
              {
                value: '8052',
                label: '足浴服务'
              },
              {
                value: '8053',
                label: '养生保健服务'
              }
            ]
          },
          {
            value: '8060',
            label: '摄影扩印服务'
          },
          {
            value: '8070',
            label: '婚姻服务'
          },
          {
            value: '8080',
            label: '殡葬服务'
          },
          {
            value: '8090',
            label: '其他居民服务业'
          }
        ]
      },
      {
        value: '81',
        label: '机动车、电子产品和日用产品修理业',
        children: [
          {
            value: '811',
            label: '汽车、摩托车等修理与维护',
            children: [
              {
                value: '8111',
                label: '汽车修理与维护'
              },
              {
                value: '8112',
                label: '大型车辆装备修理与维护'
              },
              {
                value: '8113',
                label: '摩托车修理与维护'
              },
              {
                value: '8114',
                label: '助动车等修理与维护'
              }
            ]
          },
          {
            value: '812',
            label: '计算机和办公设备维修',
            children: [
              {
                value: '8121',
                label: '计算机和辅助设备修理'
              },
              {
                value: '8122',
                label: '通讯设备修理'
              },
              {
                value: '8129',
                label: '其他办公设备维修'
              }
            ]
          },
          {
            value: '813',
            label: '家用电器修理',
            children: [
              {
                value: '8131',
                label: '家用电子产品修理'
              },
              {
                value: '8132',
                label: '日用电器修理'
              }
            ]
          },
          {
            value: '819',
            label: '其他日用产品修理业',
            children: [
              {
                value: '8191',
                label: '自行车修理'
              },
              {
                value: '8192',
                label: '鞋和皮革修理'
              },
              {
                value: '8193',
                label: '家具和相关物品修理'
              },
              {
                value: '8199',
                label: '其他未列明日用产品修理业'
              }
            ]
          }
        ]
      },
      {
        value: '82',
        label: '其他服务业',
        children: [
          {
            value: '821',
            label: '清洁服务',
            children: [
              {
                value: '8211',
                label: '建筑物清洁服务'
              },
              {
                value: '8219',
                label: '其他清洁服务'
              }
            ]
          },
          {
            value: '822',
            label: '宠物服务',
            children: [
              {
                value: '8221',
                label: '宠物饲养'
              },
              {
                value: '8222',
                label: '宠物医院服务'
              },
              {
                value: '8223',
                label: '宠物美容服务'
              },
              {
                value: '8224',
                label: '宠物寄托收养服务'
              },
              {
                value: '8229',
                label: '其他宠物服务'
              }
            ]
          },
          {
            value: '8290',
            label: '其他未列明服务业'
          }
        ]
      }
    ]
  },
  {
    value: 'P',
    label: '教育',
    children: [
      {
        value: '83',
        label: '教育',
        children: [
          {
            value: '8310',
            label: '学前教育'
          },
          {
            value: '832',
            label: '初等教育',
            children: [
              {
                value: '8321',
                label: '普通小学教育'
              },
              {
                value: '8322',
                label: '成人小学教育'
              }
            ]
          },
          {
            value: '833',
            label: '中等教育',
            children: [
              {
                value: '8331',
                label: '普通初中教育'
              },
              {
                value: '8332',
                label: '职业初中教育'
              },
              {
                value: '8333',
                label: '成人初中教育'
              },
              {
                value: '8334',
                label: '普通高中教育'
              },
              {
                value: '8335',
                label: '成人高中教育'
              },
              {
                value: '8336',
                label: '中等职业学校教育'
              }
            ]
          },
          {
            value: '834',
            label: '高等教育',
            children: [
              {
                value: '8341',
                label: '普通高等教育'
              },
              {
                value: '8342',
                label: '成人高等教育'
              }
            ]
          },
          {
            value: '8350',
            label: '特殊教育'
          },
          {
            value: '839',
            label: '技能培训、教育辅助及其他教育',
            children: [
              {
                value: '8391',
                label: '职业技能培训'
              },
              {
                value: '8392',
                label: '体校及体育培训'
              },
              {
                value: '8393',
                label: '文化艺术培训'
              },
              {
                value: '8394',
                label: '教育辅助服务'
              },
              {
                value: '8399',
                label: '其他未列明教育'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'Q',
    label: '卫生和社会工作',
    children: [
      {
        value: '84',
        label: '卫生',
        children: [
          {
            value: '841',
            label: '医院',
            children: [
              {
                value: '8411',
                label: '综合医院'
              },
              {
                value: '8412',
                label: '中医医院'
              },
              {
                value: '8413',
                label: '中西医结合医院'
              },
              {
                value: '8414',
                label: '民族医院'
              },
              {
                value: '8415',
                label: '专科医院'
              },
              {
                value: '8416',
                label: '疗养院'
              }
            ]
          },
          {
            value: '842',
            label: '基层医疗卫生服务',
            children: [
              {
                value: '8421',
                label: '社区卫生服务中心（站）'
              },
              {
                value: '8422',
                label: '街道卫生院'
              },
              {
                value: '8423',
                label: '乡镇卫生院'
              },
              {
                value: '8424',
                label: '村卫生室'
              },
              {
                value: '8425',
                label: '门诊部（所）'
              }
            ]
          },
          {
            value: '843',
            label: '专业公共卫生服务',
            children: [
              {
                value: '8431',
                label: '疾病预防控制中心'
              },
              {
                value: '8432',
                label: '专科疾病防治院（所、站）'
              },
              {
                value: '8433',
                label: '妇幼保健院（所、站）'
              },
              {
                value: '8434',
                label: '急救中心（站）服务'
              },
              {
                value: '8435',
                label: '采供血机构服务'
              },
              {
                value: '8436',
                label: '计划生育技术服务活动'
              }
            ]
          },
          {
            value: '849',
            label: '其他卫生活动',
            children: [
              {
                value: '8491',
                label: '健康体检服务'
              },
              {
                value: '8492',
                label: '临床检验服务'
              },
              {
                value: '8499',
                label: '其他未列明卫生服务'
              }
            ]
          }
        ]
      },
      {
        value: '85',
        label: '社会工作',
        children: [
          {
            value: '851',
            label: '提供住宿社会工作',
            children: [
              {
                value: '8511',
                label: '干部休养所'
              },
              {
                value: '8512',
                label: '护理机构服务'
              },
              {
                value: '8513',
                label: '精神康复服务'
              },
              {
                value: '8514',
                label: '老年人、残疾人养护服务'
              },
              {
                value: '8515',
                label: '临终关怀服务'
              },
              {
                value: '8516',
                label: '孤残儿童收养和庇护服务'
              },
              {
                value: '8519',
                label: '其他提供住宿社会救助'
              }
            ]
          },
          {
            value: '852',
            label: '不提供住宿社会工作',
            children: [
              {
                value: '8521',
                label: '社会看护与帮助服务'
              },
              {
                value: '8522',
                label: '康复辅具适配服务'
              },
              {
                value: '8529',
                label: '其他不提供住宿社会工作'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'R',
    label: '文化、体育和娱乐业',
    children: [
      {
        value: '86',
        label: '新闻和出版业',
        children: [
          {
            value: '8610',
            label: '新闻业'
          },
          {
            value: '862',
            label: '出版业',
            children: [
              {
                value: '8621',
                label: '图书出版'
              },
              {
                value: '8622',
                label: '报纸出版'
              },
              {
                value: '8623',
                label: '期刊出版'
              },
              {
                value: '8624',
                label: '音像制品出版'
              },
              {
                value: '8625',
                label: '电子出版物出版'
              },
              {
                value: '8626',
                label: '数字出版'
              },
              {
                value: '8629',
                label: '其他出版业'
              }
            ]
          }
        ]
      },
      {
        value: '87',
        label: '广播、电视、电影和录音制作业',
        children: [
          {
            value: '8710',
            label: '广播'
          },
          {
            value: '8720',
            label: '电视'
          },
          {
            value: '8730',
            label: '影视节目制作'
          },
          {
            value: '8740',
            label: '广播电视集成播控'
          },
          {
            value: '8750',
            label: '电影和广播电视节目发行'
          },
          {
            value: '8760',
            label: '电影放映'
          },
          {
            value: '8770',
            label: '录音制作'
          }
        ]
      },
      {
        value: '88',
        label: '文化艺术业',
        children: [
          {
            value: '8810',
            label: '文艺创作与表演'
          },
          {
            value: '8820',
            label: '艺术表演场馆'
          },
          {
            value: '883',
            label: '图书馆与档案馆',
            children: [
              {
                value: '8831',
                label: '图书馆'
              },
              {
                value: '8832',
                label: '档案馆'
              }
            ]
          },
          {
            value: '8840',
            label: '文物及非物质文化遗产保护'
          },
          {
            value: '8850',
            label: '博物馆'
          },
          {
            value: '8860',
            label: '烈士陵园、纪念馆'
          },
          {
            value: '8870',
            label: '群众文体活动'
          },
          {
            value: '8890',
            label: '其他文化艺术业'
          }
        ]
      },
      {
        value: '89',
        label: '体育',
        children: [
          {
            value: '891',
            label: '体育组织',
            children: [
              {
                value: '8911',
                label: '体育竞赛组织'
              },
              {
                value: '8912',
                label: '体育保障组织'
              },
              {
                value: '8919',
                label: '其他体育组织'
              }
            ]
          },
          {
            value: '892',
            label: '体育场地设施管理',
            children: [
              {
                value: '8921',
                label: '体育场馆管理'
              },
              {
                value: '8929',
                label: '其他体育场地设施管理'
              }
            ]
          },
          {
            value: '8930',
            label: '健身休闲活动'
          },
          {
            value: '899',
            label: '其他体育',
            children: [
              {
                value: '8991',
                label: '体育中介代理服务'
              },
              {
                value: '8992',
                label: '体育健康服务'
              },
              {
                value: '8999',
                label: '其他未列明体育'
              }
            ]
          }
        ]
      },
      {
        value: '90',
        label: '娱乐业',
        children: [
          {
            value: '901',
            label: '室内娱乐活动',
            children: [
              {
                value: '9011',
                label: '歌舞厅娱乐活动'
              },
              {
                value: '9012',
                label: '电子游艺厅娱乐活动'
              },
              {
                value: '9013',
                label: '网吧活动'
              },
              {
                value: '9019',
                label: '其他室内娱乐活动'
              }
            ]
          },
          {
            value: '9020',
            label: '游乐园'
          },
          {
            value: '9030',
            label: '休闲观光活动'
          },
          {
            value: '904',
            label: '彩票活动',
            children: [
              {
                value: '9041',
                label: '体育彩票服务'
              },
              {
                value: '9042',
                label: '福利彩票服务'
              },
              {
                value: '9049',
                label: '其他彩票服务'
              }
            ]
          },
          {
            value: '905',
            label: '文化体育娱乐活动与经纪代理服务',
            children: [
              {
                value: '9051',
                label: '文化活动服务'
              },
              {
                value: '9052',
                label: '体育表演服务'
              },
              {
                value: '9053',
                label: '文化娱乐经纪人'
              },
              {
                value: '9054',
                label: '体育经纪人'
              },
              {
                value: '9059',
                label: '其他文化艺术经纪代理'
              }
            ]
          },
          {
            value: '9090',
            label: '其他娱乐业'
          }
        ]
      }
    ]
  },
  {
    value: 'S',
    label: '公共管理、社会保障和社会组织',
    children: [
      {
        value: '91',
        label: '中国共产党机关',
        children: [
          {
            value: '9100',
            label: '中国共产党机关'
          }
        ]
      },
      {
        value: '92',
        label: '国家机构',
        children: [
          {
            value: '9210',
            label: '国家权力机构'
          },
          {
            value: '922',
            label: '国家行政机构',
            children: [
              {
                value: '9221',
                label: '综合事务管理机构'
              },
              {
                value: '9222',
                label: '对外事务管理机构'
              },
              {
                value: '9223',
                label: '公共安全管理机构'
              },
              {
                value: '9224',
                label: '社会事务管理机构'
              },
              {
                value: '9225',
                label: '经济事务管理机构'
              },
              {
                value: '9226',
                label: '行政监督检查机构'
              }
            ]
          },
          {
            value: '923',
            label: '人民法院和人民检察院',
            children: [
              {
                value: '9231',
                label: '人民法院'
              },
              {
                value: '9232',
                label: '人民检察院'
              }
            ]
          },
          {
            value: '929',
            label: '其他国家机构',
            children: [
              {
                value: '9291',
                label: '消防管理机构'
              },
              {
                value: '9299',
                label: '其他未列明国家机构'
              }
            ]
          }
        ]
      },
      {
        value: '93',
        label: '人民政协、民主党派',
        children: [
          {
            value: '9310',
            label: '人民政协'
          },
          {
            value: '9320',
            label: '民主党派'
          }
        ]
      },
      {
        value: '94',
        label: '社会保障',
        children: [
          {
            value: '941',
            label: '基本保险',
            children: [
              {
                value: '9411',
                label: '基本养老保险'
              },
              {
                value: '9412',
                label: '基本医疗保险'
              },
              {
                value: '9413',
                label: '失业保险'
              },
              {
                value: '9414',
                label: '工伤保险'
              },
              {
                value: '9415',
                label: '生育保险'
              },
              {
                value: '9419',
                label: '其他基本保险'
              }
            ]
          },
          {
            value: '9420',
            label: '补充保险'
          },
          {
            value: '9490',
            label: '其他社会保障'
          }
        ]
      },
      {
        value: '95',
        label: '群众团体、社会团体和其他成员组织',
        children: [
          {
            value: '951',
            label: '群众团体',
            children: [
              {
                value: '9511',
                label: '工会'
              },
              {
                value: '9512',
                label: '妇联'
              },
              {
                value: '9513',
                label: '共青团'
              },
              {
                value: '9519',
                label: '其他群众团体'
              }
            ]
          },
          {
            value: '952',
            label: '社会团体',
            children: [
              {
                value: '9521',
                label: '专业性团体'
              },
              {
                value: '9522',
                label: '行业性团体'
              },
              {
                value: '9529',
                label: '其他社会团体'
              }
            ]
          },
          {
            value: '9530',
            label: '基金会'
          },
          {
            value: '954',
            label: '宗教组织',
            children: [
              {
                value: '9541',
                label: '宗教团体服务'
              },
              {
                value: '9542',
                label: '宗教活动场所服务'
              }
            ]
          }
        ]
      },
      {
        value: '96',
        label: '基层群众自治组织及其他组织',
        children: [
          {
            value: '9610',
            label: '社区居民自治组织'
          },
          {
            value: '9620',
            label: '村民自治组织'
          }
        ]
      }
    ]
  },
  {
    value: 'T',
    label: '国际组织',
    children: [
      {
        value: '97',
        label: '国际组织',
        children: [
          {
            value: '9700',
            label: '国际组织'
          }
        ]
      }
    ]
  }
];

// 战兴行业
export const NEW_BASIC_INDUSTRY: CascaderOption[] = [
  {
    value: '1',
    label: '数字创意产业',
    children: [
      {
        value: '1.14',
        label: '数字文化创意活动',
        children: [
          {
            value: '1.14.54',
            label: '数字文化创意广播电视服务'
          },
          {
            value: '1.14.53',
            label: '数字文化创意内容制作服务'
          },
          {
            value: '1.14.61',
            label: '新型媒体服务'
          },
          {
            value: '1.14.156',
            label: '设计服务'
          },
          {
            value: '1.14.20',
            label: '其他数字文化创意活动'
          }
        ]
      },
      {
        value: '1.12',
        label: '数字创意与融合服务',
        children: [
          {
            value: '1.12.51',
            label: '数字创意与融合服务'
          }
        ]
      },
      {
        value: '1.13',
        label: '数字创意技术设备制造',
        children: [
          {
            value: '1.13.52',
            label: '数字创意技术设备制造'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '新一代信息技术产业',
    children: [
      {
        value: '2.1',
        label: '下一代信息网络产业',
        children: [
          {
            value: '2.1.64',
            label: '新型计算机及信息终端设备制造'
          },
          {
            value: '2.1.57',
            label: '新一代移动通信网络服务'
          },
          {
            value: '2.1.29',
            label: '其他网络运营服务'
          },
          {
            value: '2.1.155',
            label: '计算机和辅助设备修理'
          },
          {
            value: '2.1.11',
            label: '信息安全设备制造'
          }
        ]
      },
      {
        value: '2.2',
        label: '互联网与云计算、大数据服务',
        children: [
          {
            value: '2.2.49',
            label: '工业互联网及支持服务'
          },
          {
            value: '2.2.6',
            label: '互联网相关信息服务'
          },
          {
            value: '2.2.5',
            label: '互联网平台服务（互联网+）'
          }
        ]
      },
      {
        value: '2.15',
        label: '新兴软件和新型信息技术服务',
        children: [
          {
            value: '2.15.146',
            label: '网络与信息安全软件开发'
          },
          {
            value: '2.15.59',
            label: '新型信息技术服务'
          },
          {
            value: '2.15.4',
            label: '互联网安全服务'
          }
        ]
      },
      {
        value: '2.3',
        label: '人工智能',
        children: [
          {
            value: '2.3.75',
            label: '智能消费相关设备制造'
          }
        ]
      },
      {
        value: '2.29',
        label: '电子核心产业',
        children: [
          {
            value: '2.29.169',
            label: '集成电路制造'
          },
          {
            value: '2.29.63',
            label: '新型电子元器件及设备制造'
          }
        ]
      }
    ]
  },
  {
    value: '3',
    label: '新材料产业',
    children: [
      {
        value: '3.4',
        label: '先进无机非金属材料',
        children: [
          {
            value: '3.4.62',
            label: '新型建筑材料制造',
            children: [
              {
                value: '3.4.62.31',
                label: '新型墙体材料制造'
              },
              {
                value: '3.4.62.32',
                label: '新型建筑防水材料制造'
              }
            ]
          },
          {
            value: '3.4.138',
            label: '矿物功能材料制造',
            children: [
              {
                value: '3.4.138.34',
                label: '新型耐火材料制造'
              }
            ]
          }
        ]
      },
      {
        value: '3.5',
        label: '先进有色金属材料',
        children: [
          {
            value: '3.5.23',
            label: '其他有色金属材料制造'
          },
          {
            value: '3.5.140',
            label: '硬质合金及制品制造',
            children: [
              {
                value: '3.5.140.107',
                label: '超细晶硬质合金切削刀片类制造'
              }
            ]
          },
          {
            value: '3.5.142',
            label: '稀土新材料制造',
            children: [
              {
                value: '3.5.142.171',
                label: '高纯稀土金属及制品制造'
              }
            ]
          }
        ]
      },
      {
        value: '3.6',
        label: '先进石化化工新材料',
        children: [
          {
            value: '3.6.18',
            label: '其他化工新材料制造',
            children: [
              {
                value: '3.6.18.2',
                label: '二次电池材料制造'
              },
              {
                value: '3.6.18.155',
                label: '高性能有机密封材料制造'
              }
            ]
          },
          {
            value: '3.6.2',
            label: '专用化学品及材料制造'
          },
          {
            value: '3.6.60',
            label: '新型功能涂层材料制造',
            children: [
              {
                value: '3.6.60.131',
                label: '颜料制造'
              },
              {
                value: '3.6.60.54',
                label: '油墨制造'
              },
              {
                value: '3.6.60.47',
                label: '染料制造'
              }
            ]
          },
          {
            value: '3.6.177',
            label: '高性能塑料及树脂制造'
          }
        ]
      },
      {
        value: '3.7',
        label: '先进钢铁材料',
        children: [
          {
            value: '3.7.15',
            label: '先进钢铁材料制品制造',
            children: [
              {
                value: '3.7.15.134',
                label: '高品质不锈钢制品制造'
              },
              {
                value: '3.7.15.163',
                label: '高性能金属密封材料制造'
              },
              {
                value: '3.7.15.153',
                label: '高性能丝绳制品制造'
              }
            ]
          }
        ]
      },
      {
        value: '3.10',
        label: '前沿新材料',
        children: [
          {
            value: '3.10.1',
            label: '3D打印用材料制造'
          }
        ]
      },
      {
        value: '3.17',
        label: '新材料相关服务',
        children: [
          {
            value: '3.17.141',
            label: '科技推广和应用服务',
            children: [
              {
                value: '3.17.141.81',
                label: '科技推广和应用服务'
              }
            ]
          }
        ]
      },
      {
        value: '3.33',
        label: '高性能纤维及制品和复合材料',
        children: [
          {
            value: '3.33.180',
            label: '高性能纤维及制品制造',
            children: [
              {
                value: '3.33.180.45',
                label: '有机纤维制造'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: '4',
    label: '新能源产业',
    children: [
      {
        value: '4.11',
        label: '太阳能产业',
        children: [
          {
            value: '4.11.48',
            label: '太阳能设备和生产装备制造'
          },
          {
            value: '4.11.44',
            label: '太阳能发电运营维护'
          },
          {
            value: '4.11.46',
            label: '太阳能工程施工'
          },
          {
            value: '4.11.47',
            label: '太阳能材料制造'
          }
        ]
      },
      {
        value: '4.22',
        label: '核电产业',
        children: [
          {
            value: '4.22.79',
            label: '核燃料加工及设备制造'
          },
          {
            value: '4.22.83',
            label: '核电运营维护'
          },
          {
            value: '4.22.81',
            label: '核电工程施工'
          }
        ]
      },
      {
        value: '4.32',
        label: '风能产业',
        children: [
          {
            value: '4.32.174',
            label: '风能发电运营维护'
          },
          {
            value: '4.32.173',
            label: '风能发电机装备及零部件制造'
          },
          {
            value: '4.32.170',
            label: '风能发电其他相关装备及材料制造'
          },
          {
            value: '4.32.172',
            label: '风能发电工程施工'
          }
        ]
      },
      {
        value: '4.28',
        label: '生物质能及其他新能源产业',
        children: [
          {
            value: '4.28.127',
            label: '生物质能发电'
          },
          {
            value: '4.28.123',
            label: '生物质供热'
          },
          {
            value: '4.28.125',
            label: '生物质燃气生产和供应'
          },
          {
            value: '4.28.76',
            label: '智能电网产业',
            children: [
              {
                value: '4.28.76.43',
                label: '智能电网输送与配电'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: '5',
    label: '新能源汽车产业',
    children: [
      {
        value: '5.20',
        label: '新能源汽车相关设施制造',
        children: [
          {
            value: '5.20.10',
            label: '供能装置制造'
          }
        ]
      },
      {
        value: '5.18',
        label: '新能源汽车整车制造',
        children: [
          {
            value: '5.18.69',
            label: '新能源汽车整车制造'
          },
          {
            value: '5.18.70',
            label: '新能源汽车装置、配件制造',
            children: [
              {
                value: '5.18.70.71',
                label: '电机、发动机制造'
              }
            ]
          }
        ]
      },
      {
        value: '5.19',
        label: '新能源汽车相关服务',
        children: [
          {
            value: '5.19.67',
            label: '新能源汽车充电及维修服务'
          }
        ]
      }
    ]
  },
  {
    value: '6',
    label: '生物产业',
    children: [
      {
        value: '6.8',
        label: '其他生物业',
        children: [
          {
            value: '6.8.93',
            label: '海洋生物制品制造'
          },
          {
            value: '6.8.27',
            label: '其他生物工程相关设备制造'
          },
          {
            value: '6.8.131',
            label: '生物酶等发酵制品制造'
          }
        ]
      },
      {
        value: '6.25',
        label: '生物医学工程产业',
        children: [
          {
            value: '6.25.13',
            label: '先进医疗设备及器械制造'
          },
          {
            value: '6.25.85',
            label: '植介入生物医用材料及设备制造'
          },
          {
            value: '6.25.113',
            label: '生物医学工程相关服务'
          }
        ]
      },
      {
        value: '6.24',
        label: '生物农业及相关产业',
        children: [
          {
            value: '6.24.120',
            label: '生物肥料制造'
          },
          {
            value: '6.24.121',
            label: '生物育种'
          },
          {
            value: '6.24.108',
            label: '生物兽药、兽用生物制品及疫苗制造'
          },
          {
            value: '6.24.110',
            label: '生物农药制造'
          },
          {
            value: '6.24.132',
            label: '生物饲料制造'
          }
        ]
      },
      {
        value: '6.27',
        label: '生物质能产业',
        children: [
          {
            value: '6.27.124',
            label: '生物质燃料加工'
          }
        ]
      },
      {
        value: '6.26',
        label: '生物医药产业',
        children: [
          {
            value: '6.26.122',
            label: '生物药品制品制造'
          },
          {
            value: '6.26.116',
            label: '生物医药相关服务'
          },
          {
            value: '6.26.115',
            label: '生物医药关键装备与原辅料制造'
          },
          {
            value: '6.26.105',
            label: '现代中药与民族药制造'
          },
          {
            value: '6.26.36',
            label: '化学药品与原料药制造'
          }
        ]
      }
    ]
  },
  {
    value: '7',
    label: '节能环保产业',
    children: [
      {
        value: '7.34',
        label: '高效节能产业',
        children: [
          {
            value: '7.34.145',
            label: '绿色节能建筑材料制造'
          },
          {
            value: '7.34.98',
            label: '环保工程施工'
          },
          {
            value: '7.34.99',
            label: '环保研发与技术服务'
          },
          {
            value: '7.34.153',
            label: '节能工程施工'
          },
          {
            value: '7.34.154',
            label: '节能研发与技术服务'
          },
          {
            value: '7.34.186',
            label: '高效节能电气机械器材制造'
          },
          {
            value: '7.34.187',
            label: '高效节能通用设备制造'
          },
          {
            value: '7.34.101',
            label: '环境保护及污染治理服务'
          },
          {
            value: '7.34.102',
            label: '环境保护监测仪器及电子设备制造'
          },
          {
            value: '7.34.104',
            label: '环境评估与监测服务'
          },
          {
            value: '7.34.184',
            label: '高效节能专用设备制造'
          }
        ]
      },
      {
        value: '7.31',
        label: '资源循环利用产业',
        children: [
          {
            value: '7.31.50',
            label: '工业固体废物、废气、废液回收和资源化利用 '
          },
          {
            value: '7.31.34',
            label: '农林废弃物资源化利用'
          },
          {
            value: '7.31.89',
            label: '海水淡化活动'
          },
          {
            value: '7.31.88',
            label: '水资源循环利用与节水活动'
          },
          {
            value: '7.31.87',
            label: '水及海水资源利用设备制造'
          },
          {
            value: '7.31.137',
            label: '矿产资源综合利用'
          },
          {
            value: '7.31.136',
            label: '矿产资源与工业废弃资源利用设备制造'
          }
        ]
      }
    ]
  },
  {
    value: '8',
    label: '高端服务业',
    children: [
      {
        value: '8.9',
        label: '其他相关服务',
        children: [
          {
            value: '8.9.152',
            label: '航空运营及支持服务'
          },
          {
            value: '8.9.106',
            label: '现代金融服务'
          }
        ]
      },
      {
        value: '8.16',
        label: '新技术与创新创业服务',
        children: [
          {
            value: '8.16.35',
            label: '创新创业服务'
          },
          {
            value: '8.16.134',
            label: '知识产权及相关服务'
          },
          {
            value: '8.16.84',
            label: '检验检测认证服务'
          },
          {
            value: '8.16.139',
            label: '研发服务'
          },
          {
            value: '8.16.19',
            label: '其他技术推广服务'
          },
          {
            value: '8.16.16',
            label: '其他专业技术服务'
          }
        ]
      }
    ]
  },
  {
    value: '9',
    label: '高端装备制造产业',
    children: [
      {
        value: '9.23',
        label: '海洋工程装备产业',
        children: [
          {
            value: '9.23.92',
            label: '海洋环境监测与探测装备制造'
          },
          {
            value: '9.23.90',
            label: '海洋工程建筑及相关服务'
          },
          {
            value: '9.23.24',
            label: '其他海洋相关设备与产品制造'
          }
        ]
      },
      {
        value: '9.21',
        label: '智能制造装备产业',
        children: [
          {
            value: '9.21.163',
            label: '重大成套设备制造'
          },
          {
            value: '9.21.77',
            label: '机器人与增材设备制造'
          },
          {
            value: '9.21.72',
            label: '智能关键基础零部件制造'
          },
          {
            value: '9.21.74',
            label: '智能测控装备制造'
          },
          {
            value: '9.21.73',
            label: '智能制造相关服务'
          },
          {
            value: '9.21.22',
            label: '其他智能设备制造'
          }
        ]
      },
      {
        value: '9.30',
        label: '航空装备产业',
        children: [
          {
            value: '9.30.39',
            label: '卫星应用服务'
          },
          {
            value: '9.30.38',
            label: '卫星应用技术设备制造'
          },
          {
            value: '9.30.43',
            label: '城市轨道装备制造'
          },
          {
            value: '9.30.32',
            label: '其他轨道交通装备制造'
          },
          {
            value: '9.30.31',
            label: '其他航空装备制造及相关服务 '
          },
          {
            value: '9.30.151',
            label: '航空器装备制造'
          },
          {
            value: '9.30.161',
            label: '轨道交通相关服务'
          },
          {
            value: '9.30.165',
            label: '铁路高端装备制造'
          }
        ]
      }
    ]
  }
];

// 经营状态
export const OPERATION_STATUS = REGISTER.slice(1, REGISTER.length);

// 项目行业
export const BIDDING_INDUSTRY: CascaderOption[] = [
  {
    value: '1',
    label: '建筑工程'
  },
  {
    value: '2',
    label: '行政办公'
  },
  {
    value: '3',
    label: '医疗卫生'
  },
  {
    value: '4',
    label: '服务采购'
  },
  {
    value: '5',
    label: '机械设备'
  },
  {
    value: '6',
    label: '水利水电'
  },
  {
    value: '7',
    label: '能源化工'
  },
  {
    value: '8',
    label: '弱电安防'
  },
  {
    value: '9',
    label: '信息技术'
  },
  {
    value: '10',
    label: '交通工程'
  },
  {
    value: '11',
    label: '市政设施'
  },
  {
    value: '12',
    label: '农林牧渔'
  },
  {
    value: '13',
    label: '政府采购'
  },
  {
    value: '14',
    label: '日用百货'
  },
  { value: '16', label: '材料配件' },
  { value: '17', label: '通讯电子' },
  { value: '18', label: '仪器仪表' },
  { value: '19', label: '环保绿化' },
  { value: '20', label: '服装布料' },
  { value: '21', label: '制造生产' },
  { value: '22', label: '家居建材' },
  { value: '23', label: '食品饮品' },
  { value: '24', label: '债券发行' },
  {
    value: '15',
    label: '其他'
  }
];

// 企业类型
export const COMPANY_TYPES = COMPANY_TYPE.slice(1);

// 潜力企业
export const POTENTIAL = [
  {
    value: 'HT001',
    label: '高新技术企业'
  },
  {
    value: 'UE',
    label: '独角兽企业'
  },
  {
    value: 'GE',
    label: '瞪羚企业'
  },
  {
    value: 'YEE',
    label: '雏鹰企业'
  },
  {
    value: 'ITE',
    label: '创新型科技企业'
  },
  {
    value: 'STE',
    label: '科技小巨人企业'
  },
  {
    value: 'SSE',
    label: '专精特新企业'
  },
  {
    value: 'T_TSMES',
    label: '科技型中小企业'
  },
  {
    value: 'T_PT',
    label: '民营科技企业'
  },
  {
    value: 'T_TC',
    label: '企业技术中心'
  },
  {
    value: 'T_MS',
    label: '国家备案众创空间'
  },
  {
    value: 'T_CI',
    label: '科技企业孵化器'
  },
  {
    value: 'T_TD',
    label: '技术创新示范企业'
  },
  {
    value: 'T_IC',
    label: '隐形冠军企业'
  },
  {
    value: 'T_ATS',
    label: '技术先进型服务企业'
  },
  // {
  //   value: 'T_AC',
  //   label: '牛羚企业'
  // },
  {
    value: 'XWQY',
    label: '小微企业'
  }
];

// 融资阶段
export const FINACAINGSTAGES = [
  { value: '1', label: '天使/种子轮' },
  { value: '2', label: 'A轮' },
  { value: '3', label: 'B轮' },
  {
    value: '4',
    label: 'C轮'
  },
  { value: '5', label: 'D轮' },
  { value: '6', label: 'E轮及以上' },
  {
    value: '7',
    label: 'IPO'
  },
  { value: '8', label: '定向增发' },
  { value: '9', label: '战略融资' },
  { value: '10', label: '并购' },
  { value: '11', label: '其他' }
];

// 纳税等级
export const TLEVEL: CascaderOption[] = [
  { label: 'A', value: 'A' },
  { label: '非A', value: 'N_A' }
];

// 新兴行业
export const NEW_INDUSTRY = [
  {
    label: '区块链',
    value: '区块链',
    children: [
      {
        label: '数字资产',
        value: '数字资产'
      },
      {
        label: '数字货币',
        value: '数字货币',
        children: [
          {
            label: '数字资产管理',
            value: '数字资产管理'
          }
        ]
      },
      {
        label: '矿业',
        value: '矿业',
        children: [
          {
            label: '矿机',
            value: '矿机'
          },
          {
            label: '矿池',
            value: '矿池'
          },
          {
            label: '云算力',
            value: '云算力'
          },
          {
            label: '矿场',
            value: '矿场'
          }
        ]
      },
      {
        label: '区块链行情资讯',
        value: '区块链行情资讯',
        children: [
          {
            label: '区块链媒体社区',
            value: '区块链媒体社区'
          },
          {
            label: '区块链行情',
            value: '区块链行情'
          }
        ]
      },
      {
        label: '区块链工具',
        value: '区块链工具',
        children: [
          {
            label: 'DAPP',
            value: 'DAPP'
          },
          {
            label: '区块链钱包',
            value: '区块链钱包'
          },
          {
            label: '区块链浏览器',
            value: '区块链浏览器'
          }
        ]
      },
      {
        label: '区块链应用',
        value: '区块链应用',
        children: [
          {
            label: '防伪溯源',
            value: '防伪溯源'
          },
          {
            label: '区块链版权',
            value: '区块链版权'
          },
          {
            label: '区块链物联网',
            value: '区块链物联网'
          },
          {
            label: '区块链金融',
            value: '区块链金融'
          },
          {
            label: '区块链医疗',
            value: '区块链医疗'
          },
          {
            label: '区块链餐饮',
            value: '区块链餐饮'
          },
          {
            label: '区块链社交',
            value: '区块链社交'
          },
          {
            label: '区块链文娱',
            value: '区块链文娱'
          },
          {
            label: '区块链游戏',
            value: '区块链游戏'
          },
          {
            label: '区块链供应链管理',
            value: '区块链供应链管理'
          },
          {
            label: '区块链能源',
            value: '区块链能源'
          }
        ]
      },
      {
        label: '区块链技术',
        value: '区块链技术',
        children: [
          {
            label: '区块链身份认证',
            value: '区块链身份认证'
          },
          {
            label: 'BaaS',
            value: 'BaaS'
          },
          {
            label: '区块链底层平台',
            value: '区块链底层平台'
          },
          {
            label: '智能合约',
            value: '智能合约'
          },
          {
            label: '区块链硬件',
            value: '区块链硬件'
          },
          {
            label: '区块链解决方案',
            value: '区块链解决方案'
          }
        ]
      },
      {
        label: '数字货币交易服务',
        value: '数字货币交易服务',
        children: [
          {
            label: '场外交易',
            value: '场外交易'
          },
          {
            label: '数字货币交易所',
            value: '数字货币交易所'
          },
          {
            label: 'ICO服务',
            value: 'ICO服务'
          }
        ]
      }
    ]
  },
  {
    label: '金融',
    value: '金融',
    children: [
      {
        label: '支付',
        value: '支付',
        children: [
          {
            label: '第三方支付',
            value: '第三方支付'
          },
          {
            label: '跨境支付',
            value: '跨境支付'
          },
          {
            label: '场景支付',
            value: '场景支付'
          },
          {
            label: 'NFC支付',
            value: 'NFC支付'
          },
          {
            label: '智能pos机',
            value: '智能pos机'
          },
          {
            label: '支付技术支持',
            value: '支付技术支持'
          },
          {
            label: '虚拟货币支付',
            value: '虚拟货币支付'
          }
        ]
      },
      {
        label: '理财',
        value: '理财',
        children: [
          {
            label: '股票',
            value: '股票'
          },
          {
            label: 'P2P',
            value: 'P2P'
          },
          {
            label: '贵金属',
            value: '贵金属'
          },
          {
            label: '票据理财',
            value: '票据理财'
          },
          {
            label: '期货',
            value: '期货'
          },
          {
            label: '股权投资',
            value: '股权投资'
          },
          {
            label: '外汇交易',
            value: '外汇交易'
          },
          {
            label: '期权',
            value: '期权'
          },
          {
            label: '金融衍生品',
            value: '金融衍生品'
          },
          {
            label: '企业理财',
            value: '企业理财'
          },
          {
            label: '实业投资',
            value: '实业投资'
          },
          {
            label: '基金理财',
            value: '基金理财'
          },
          {
            label: '债券理财',
            value: '债券理财'
          },
          {
            label: '海外理财',
            value: '海外理财'
          },
          {
            label: '理财自媒体',
            value: '理财自媒体'
          },
          {
            label: '理财师服务',
            value: '理财师服务'
          },
          {
            label: '股票跟投社区',
            value: '股票跟投社区'
          },
          {
            label: '司法拍卖',
            value: '司法拍卖'
          },
          {
            label: '财富管理',
            value: '财富管理'
          }
        ]
      },
      {
        label: '消费金融',
        value: '消费金融',
        children: [
          {
            label: '租房分期',
            value: '租房分期'
          },
          {
            label: '旅游分期',
            value: '旅游分期'
          },
          {
            label: '美容分期',
            value: '美容分期'
          },
          {
            label: '教育分期',
            value: '教育分期'
          },
          {
            label: '汽车分期',
            value: '汽车分期'
          },
          {
            label: '熟人借贷',
            value: '熟人借贷'
          },
          {
            label: '大学生分期',
            value: '大学生分期'
          },
          {
            label: '蓝领分期',
            value: '蓝领分期'
          },
          {
            label: '医疗分期',
            value: '医疗分期'
          },
          {
            label: '购物分期',
            value: '购物分期'
          },
          {
            label: '家装分期',
            value: '家装分期'
          },
          {
            label: '农业分期',
            value: '农业分期'
          },
          {
            label: '现金贷',
            value: '现金贷'
          },
          {
            label: '信用卡服务',
            value: '信用卡服务'
          },
          {
            label: '校园信贷',
            value: '校园信贷'
          },
          {
            label: '婚庆金融',
            value: '婚庆金融'
          },
          {
            label: '移动信贷',
            value: '移动信贷'
          }
        ]
      },
      {
        label: '金融大数据',
        value: '金融大数据',
        children: [
          {
            label: '量化投资',
            value: '量化投资'
          },
          {
            label: '大数据征信',
            value: '大数据征信'
          },
          {
            label: '大数据风控',
            value: '大数据风控'
          },
          {
            label: '金融数据库',
            value: '金融数据库'
          },
          {
            label: '精准保费厘定',
            value: '精准保费厘定'
          }
        ]
      },
      {
        label: '金融科技',
        value: '金融科技',
        children: [
          {
            label: '智能投顾',
            value: '智能投顾'
          },
          {
            label: '智能投研',
            value: '智能投研'
          },
          {
            label: '金融安全监控与预警',
            value: '金融安全监控与预警'
          },
          {
            label: '金融预测',
            value: '金融预测'
          },
          {
            label: '个性化保险',
            value: '个性化保险'
          },
          {
            label: '智能信贷',
            value: '智能信贷'
          }
        ]
      },
      {
        label: '企业金融服务',
        value: '企业金融服务',
        children: [
          {
            label: '供应链金融',
            value: '供应链金融'
          },
          {
            label: '催收',
            value: '催收'
          },
          {
            label: '融资租赁',
            value: '融资租赁'
          },
          {
            label: '不良资产处置',
            value: '不良资产处置'
          },
          {
            label: '无抵押贷款',
            value: '无抵押贷款'
          },
          {
            label: '企业征信',
            value: '企业征信'
          },
          {
            label: '现金流管理',
            value: '现金流管理'
          },
          {
            label: '企业融资',
            value: '企业融资'
          },
          {
            label: '小微企业贷',
            value: '小微企业贷'
          },
          {
            label: '企业债权信贷',
            value: '企业债权信贷'
          },
          {
            label: '企业担保服务',
            value: '企业担保服务'
          }
        ]
      },
      {
        label: '金融机构',
        value: '金融机构',
        children: [
          {
            label: '证券公司',
            value: '证券公司'
          },
          {
            label: '典当行',
            value: '典当行'
          },
          {
            label: '保险公司',
            value: '保险公司'
          },
          {
            label: '互联网银行',
            value: '互联网银行'
          },
          {
            label: '征信机构',
            value: '征信机构'
          },
          {
            label: '投融资机构',
            value: '投融资机构'
          },
          {
            label: '基金公司',
            value: '基金公司'
          },
          {
            label: '信托机构',
            value: '信托机构'
          },
          {
            label: '银行',
            value: '银行'
          },
          {
            label: '风控机构',
            value: '风控机构'
          }
        ]
      },
      {
        label: '金融信息服务',
        value: '金融信息服务',
        children: [
          {
            label: '金融咨询',
            value: '金融咨询'
          },
          {
            label: '金融IT外包',
            value: '金融IT外包'
          },
          {
            label: '投资咨询',
            value: '投资咨询'
          },
          {
            label: '投资管理',
            value: '投资管理'
          }
        ]
      },
      {
        label: '金融终端设备',
        value: '金融终端设备'
      },
      {
        label: '保险',
        value: '保险',
        children: [
          {
            label: '互联网保险',
            value: '互联网保险'
          },
          {
            label: '互助保险',
            value: '互助保险'
          },
          {
            label: '保险代理',
            value: '保险代理'
          },
          {
            label: '保险理赔',
            value: '保险理赔'
          },
          {
            label: '保险产品',
            value: '保险产品'
          },
          {
            label: '保险经纪',
            value: '保险经纪'
          },
          {
            label: '保险比价',
            value: '保险比价'
          },
          {
            label: '场景化保险',
            value: '场景化保险'
          },
          {
            label: '保险导购',
            value: '保险导购'
          },
          {
            label: '保险特卖',
            value: '保险特卖'
          },
          {
            label: '创新险种',
            value: '创新险种'
          },
          {
            label: '保险公估',
            value: '保险公估'
          },
          {
            label: '保险定制',
            value: '保险定制'
          },
          {
            label: 'UBI车险',
            value: 'UBI车险'
          },
          {
            label: '寿命保险',
            value: '寿命保险'
          }
        ]
      },
      {
        label: '众筹',
        value: '众筹',
        children: [
          {
            label: '股权众筹',
            value: '股权众筹'
          },
          {
            label: '加盟',
            value: '加盟'
          },
          {
            label: '房产众筹',
            value: '房产众筹'
          },
          {
            label: '项目众筹',
            value: '项目众筹'
          },
          {
            label: '商品众筹',
            value: '商品众筹'
          },
          {
            label: '轻众筹',
            value: '轻众筹'
          },
          {
            label: '众筹社区',
            value: '众筹社区'
          }
        ]
      }
    ]
  },
  {
    label: '医疗',
    value: '医疗',
    children: [
      {
        label: '兽医',
        value: '兽医'
      },
      {
        label: '医生服务',
        value: '医生服务',
        children: [
          {
            label: '患者管理',
            value: '患者管理'
          },
          {
            label: '医生社交',
            value: '医生社交'
          },
          {
            label: '医疗教育',
            value: '医疗教育'
          },
          {
            label: '医生集团',
            value: '医生集团'
          },
          {
            label: '患者教育',
            value: '患者教育'
          },
          {
            label: '医疗科研外包',
            value: '医疗科研外包'
          },
          {
            label: '医疗媒体资讯',
            value: '医疗媒体资讯'
          },
          {
            label: '医疗科研数据库',
            value: '医疗科研数据库'
          }
        ]
      },
      {
        label: '医疗设备',
        value: '医疗设备',
        children: [
          {
            label: '医疗器械',
            value: '医疗器械'
          },
          {
            label: '医疗耗材',
            value: '医疗耗材'
          },
          {
            label: '医疗设备研发生产',
            value: '医疗设备研发生产'
          },
          {
            label: '医疗设备维修管理',
            value: '医疗设备维修管理'
          },
          {
            label: '医疗设备融资租赁',
            value: '医疗设备融资租赁'
          }
        ]
      },
      {
        label: '养生保健',
        value: '养生保健',
        children: [
          {
            label: '体检',
            value: '体检'
          },
          {
            label: '睡眠管理',
            value: '睡眠管理'
          },
          {
            label: '产后护理',
            value: '产后护理'
          },
          {
            label: '女性健康',
            value: '女性健康'
          },
          {
            label: '产前检查',
            value: '产前检查'
          }
        ]
      },
      {
        label: '医疗大数据',
        value: '医疗大数据',
        children: [
          {
            label: '病历数据库',
            value: '病历数据库'
          },
          {
            label: '医疗大数据云平台',
            value: '医疗大数据云平台'
          },
          {
            label: '医疗科研大数据',
            value: '医疗科研大数据'
          },
          {
            label: '肿瘤大数据',
            value: '肿瘤大数据'
          },
          {
            label: '基因大数据',
            value: '基因大数据'
          },
          {
            label: '医疗保险控费',
            value: '医疗保险控费'
          },
          {
            label: '健康管理',
            value: '健康管理'
          },
          {
            label: '医疗信息保密',
            value: '医疗信息保密'
          }
        ]
      },
      {
        label: '慢病',
        value: '慢病',
        children: [
          {
            label: '糖尿病',
            value: '糖尿病'
          },
          {
            label: '肾病',
            value: '肾病'
          },
          {
            label: '肝病',
            value: '肝病'
          },
          {
            label: '高血压',
            value: '高血压'
          },
          {
            label: '神经疾病',
            value: '神经疾病'
          },
          {
            label: '呼吸系统疾病',
            value: '呼吸系统疾病'
          }
        ]
      },
      {
        label: '医疗机器人',
        value: '医疗机器人',
        children: [
          {
            label: '康复机器人',
            value: '康复机器人'
          },
          {
            label: '手术机器人',
            value: '手术机器人'
          },
          {
            label: '输液机器人',
            value: '输液机器人'
          },
          {
            label: '胶囊机器人',
            value: '胶囊机器人'
          },
          {
            label: '医院服务机器人',
            value: '医院服务机器人'
          },
          {
            label: '牙科机器人',
            value: '牙科机器人'
          },
          {
            label: '护理机器人',
            value: '护理机器人'
          },
          {
            label: '疾病诊断机器人',
            value: '疾病诊断机器人'
          },
          {
            label: '外骨骼机器人',
            value: '外骨骼机器人'
          },
          {
            label: '远程医疗机器人',
            value: '远程医疗机器人'
          },
          {
            label: '输液监护机器人',
            value: '输液监护机器人'
          },
          {
            label: '医疗模拟机器人',
            value: '医疗模拟机器人'
          }
        ]
      },
      {
        label: '跨境医疗',
        value: '跨境医疗',
        children: [
          {
            label: '医疗旅游',
            value: '医疗旅游'
          },
          {
            label: '跨境会诊',
            value: '跨境会诊'
          },
          {
            label: '海外生殖',
            value: '海外生殖'
          },
          {
            label: '海外重症',
            value: '海外重症'
          }
        ]
      },
      {
        label: '医疗3D打印',
        value: '医疗3D打印',
        children: [
          {
            label: '医疗模型',
            value: '医疗模型'
          },
          {
            label: '3D打印医疗器械',
            value: '3D打印医疗器械'
          },
          {
            label: '3D打印器官',
            value: '3D打印器官'
          },
          {
            label: '牙科3D打印',
            value: '牙科3D打印'
          },
          {
            label: '手术导板',
            value: '手术导板'
          }
        ]
      },
      {
        label: '患者服务',
        value: '患者服务',
        children: [
          {
            label: '挂号',
            value: '挂号'
          },
          {
            label: '在线问诊',
            value: '在线问诊'
          },
          {
            label: '家庭医生',
            value: '家庭医生'
          },
          {
            label: '上门问诊',
            value: '上门问诊'
          },
          {
            label: '分级诊疗',
            value: '分级诊疗'
          },
          {
            label: '自诊',
            value: '自诊'
          },
          {
            label: '导诊',
            value: '导诊'
          },
          {
            label: '诊后咨询',
            value: '诊后咨询'
          },
          {
            label: '护工护理',
            value: '护工护理'
          },
          {
            label: '疾病管理',
            value: '疾病管理'
          },
          {
            label: '康复医疗',
            value: '康复医疗'
          },
          {
            label: '病友社区',
            value: '病友社区'
          },
          {
            label: '临终关怀',
            value: '临终关怀'
          }
        ]
      },
      {
        label: '消费医疗',
        value: '消费医疗',
        children: [
          {
            label: '心理健康',
            value: '心理健康'
          },
          {
            label: '中医',
            value: '中医'
          },
          {
            label: '眼科',
            value: '眼科'
          },
          {
            label: '牙科',
            value: '牙科'
          },
          {
            label: '医美',
            value: '医美'
          },
          {
            label: '妇产',
            value: '妇产'
          }
        ]
      },
      {
        label: '大病重症',
        value: '大病重症',
        children: [
          {
            label: '肿瘤筛查',
            value: '肿瘤筛查'
          },
          {
            label: '癌症治疗',
            value: '癌症治疗'
          },
          {
            label: '心脑血管疾病',
            value: '心脑血管疾病'
          }
        ]
      },
      {
        label: '其他疾病',
        value: '其他疾病',
        children: [
          {
            label: '儿科',
            value: '儿科'
          },
          {
            label: '骨科',
            value: '骨科'
          },
          {
            label: '传染病',
            value: '传染病'
          },
          {
            label: '遗传病',
            value: '遗传病'
          },
          {
            label: '耳科',
            value: '耳科'
          },
          {
            label: '男科',
            value: '男科'
          },
          {
            label: '皮肤病',
            value: '皮肤病'
          },
          {
            label: '免疫性疾病',
            value: '免疫性疾病'
          },
          {
            label: '过敏性疾病',
            value: '过敏性疾病'
          }
        ]
      },
      {
        label: '医疗技术',
        value: '医疗技术',
        children: [
          {
            label: '基因检测',
            value: '基因检测'
          },
          {
            label: '免疫治疗',
            value: '免疫治疗'
          },
          {
            label: '精准医疗',
            value: '精准医疗'
          },
          {
            label: '医疗影像',
            value: '医疗影像'
          },
          {
            label: 'poct',
            value: 'poct'
          },
          {
            label: '体外诊断',
            value: '体外诊断'
          },
          {
            label: '分子诊断',
            value: '分子诊断'
          },
          {
            label: '辅助生殖',
            value: '辅助生殖'
          },
          {
            label: '基因编辑',
            value: '基因编辑'
          }
        ]
      },
      {
        label: '医疗信息化',
        value: '医疗信息化',
        children: [
          {
            label: '移动医疗',
            value: '移动医疗'
          },
          {
            label: '远程医疗',
            value: '远程医疗'
          },
          {
            label: 'HIS系统',
            value: 'HIS系统'
          },
          {
            label: 'EMRS系统',
            value: 'EMRS系统'
          },
          {
            label: 'PACS系统',
            value: 'PACS系统'
          },
          {
            label: 'RIS系统',
            value: 'RIS系统'
          },
          {
            label: '医疗智能终端',
            value: '医疗智能终端'
          },
          {
            label: '云医疗',
            value: '云医疗'
          },
          {
            label: '药品流通信息化',
            value: '药品流通信息化'
          },
          {
            label: '医保信息化',
            value: '医保信息化'
          },
          {
            label: '医疗信息化硬件',
            value: '医疗信息化硬件'
          },
          {
            label: '药店管理saas',
            value: '药店管理saas'
          },
          {
            label: '诊所管理saas',
            value: '诊所管理saas'
          },
          {
            label: 'CDSS',
            value: 'CDSS'
          },
          {
            label: '医疗搜索引擎',
            value: '医疗搜索引擎'
          },
          {
            label: '医药查询',
            value: '医药查询'
          },
          {
            label: '循证医学',
            value: '循证医学'
          },
          {
            label: '医院wifi',
            value: '医院wifi'
          }
        ]
      },
      {
        label: '生物医药',
        value: '生物医药',
        children: [
          {
            label: '药物研发',
            value: '药物研发'
          },
          {
            label: '原料药',
            value: '原料药'
          },
          {
            label: '医药中间体',
            value: '医药中间体'
          },
          {
            label: '靶向药物',
            value: '靶向药物'
          },
          {
            label: '中药研发',
            value: '中药研发'
          },
          {
            label: '疫苗及血制品',
            value: '疫苗及血制品'
          },
          {
            label: '医药安全',
            value: '医药安全'
          },
          {
            label: '医药批发',
            value: '医药批发'
          },
          {
            label: '医药零售',
            value: '医药零售'
          },
          {
            label: '药用辅料',
            value: '药用辅料'
          },
          {
            label: '药物研发外包',
            value: '药物研发外包'
          },
          {
            label: '生物技术',
            value: '生物技术'
          }
        ]
      },
      {
        label: '养老',
        value: '养老',
        children: [
          {
            label: '养老服务',
            value: '养老服务'
          },
          {
            label: '智慧养老',
            value: '智慧养老'
          },
          {
            label: '养老机构',
            value: '养老机构'
          },
          {
            label: '老年人用品',
            value: '老年人用品'
          }
        ]
      },
      {
        label: '医疗机构',
        value: '医疗机构',
        children: [
          {
            label: '口腔诊所',
            value: '口腔诊所'
          },
          {
            label: '儿科诊所',
            value: '儿科诊所'
          },
          {
            label: '全科诊所',
            value: '全科诊所'
          },
          {
            label: '中医诊所',
            value: '中医诊所'
          },
          {
            label: '社区诊所',
            value: '社区诊所'
          },
          {
            label: '医院',
            value: '医院'
          },
          {
            label: '诊所',
            value: '诊所'
          }
        ]
      }
    ]
  },
  {
    label: '教育',
    value: '教育',
    children: [
      {
        label: '语言学习',
        value: '语言学习',
        children: [
          {
            label: '英语学习',
            value: '英语学习'
          },
          {
            label: '外教',
            value: '外教'
          },
          {
            label: '小语种',
            value: '小语种'
          },
          {
            label: '词典单词',
            value: '词典单词'
          },
          {
            label: '汉语学习',
            value: '汉语学习'
          },
          {
            label: '语言学习社区',
            value: '语言学习社区'
          }
        ]
      },
      {
        label: '职业教育',
        value: '职业教育',
        children: [
          {
            label: '企业培训',
            value: '企业培训'
          },
          {
            label: '金融培训',
            value: '金融培训'
          },
          {
            label: '教师培训',
            value: '教师培训'
          },
          {
            label: '医学教育',
            value: '医学教育'
          },
          {
            label: '商学院',
            value: '商学院'
          },
          {
            label: 'IT技能培训',
            value: 'IT技能培训'
          },
          {
            label: '法律教育',
            value: '法律教育'
          },
          {
            label: '财会教育',
            value: '财会教育'
          },
          {
            label: '烹饪培训',
            value: '烹饪培训'
          },
          {
            label: '美业培训',
            value: '美业培训'
          },
          {
            label: '职称考证培训',
            value: '职称考证培训'
          }
        ]
      },
      {
        label: '在线教育',
        value: '在线教育',
        children: [
          {
            label: 'MOOC',
            value: 'MOOC'
          },
          {
            label: '互联网大学',
            value: '互联网大学'
          },
          {
            label: '在线英语教育',
            value: '在线英语教育'
          },
          {
            label: '在线一对一教育',
            value: '在线一对一教育'
          },
          {
            label: '在线一对多教育',
            value: '在线一对多教育'
          },
          {
            label: '直播教育',
            value: '直播教育'
          }
        ]
      },
      {
        label: '教育信息化',
        value: '教育信息化',
        children: [
          {
            label: '远程教育',
            value: '远程教育'
          },
          {
            label: '智慧校园',
            value: '智慧校园'
          },
          {
            label: '教育资源共享',
            value: '教育资源共享'
          },
          {
            label: '云教学',
            value: '云教学'
          },
          {
            label: '教育测评',
            value: '教育测评'
          },
          {
            label: '数字教科书',
            value: '数字教科书'
          },
          {
            label: '一站式图书馆',
            value: '一站式图书馆'
          },
          {
            label: '校园一卡通',
            value: '校园一卡通'
          }
        ]
      },
      {
        label: '早教',
        value: '早教',
        children: [
          {
            label: '幼儿园',
            value: '幼儿园'
          },
          {
            label: '亲子教育',
            value: '亲子教育'
          },
          {
            label: '胎教',
            value: '胎教'
          },
          {
            label: '儿童托管',
            value: '儿童托管'
          },
          {
            label: '早教产品内容',
            value: '早教产品内容'
          },
          {
            label: '儿童智力开发',
            value: '儿童智力开发'
          },
          {
            label: '母婴育儿',
            value: '母婴育儿'
          },
          {
            label: 'VRAR早教产品',
            value: 'VRAR早教产品'
          }
        ]
      },
      {
        label: '素质教育',
        value: '素质教育',
        children: [
          {
            label: '兴趣教育',
            value: '兴趣教育'
          },
          {
            label: '艺术教育',
            value: '艺术教育'
          },
          {
            label: '编程教育',
            value: '编程教育'
          },
          {
            label: '机器人教育',
            value: '机器人教育'
          },
          {
            label: '创客教育',
            value: '创客教育'
          },
          {
            label: 'STEAM教育',
            value: 'STEAM教育'
          },
          {
            label: '武术教育',
            value: '武术教育'
          },
          {
            label: '情商教育',
            value: '情商教育'
          },
          {
            label: '国学教育',
            value: '国学教育'
          },
          {
            label: '传统文化教育',
            value: '传统文化教育'
          },
          {
            label: '青少年培训',
            value: '青少年培训'
          },
          {
            label: '礼仪教育',
            value: '礼仪教育'
          },
          {
            label: '职业体验教育',
            value: '职业体验教育'
          },
          {
            label: '创造力教育',
            value: '创造力教育'
          }
        ]
      },
      {
        label: '留学教育',
        value: '留学教育',
        children: [
          {
            label: '留学服务',
            value: '留学服务'
          },
          {
            label: '游学',
            value: '游学'
          },
          {
            label: '留学考试培训',
            value: '留学考试培训'
          }
        ]
      },
      {
        label: 'K12教育',
        value: 'K12教育',
        children: [
          {
            label: 'K12在线辅导',
            value: 'K12在线辅导'
          },
          {
            label: 'K12线下机构',
            value: 'K12线下机构'
          },
          {
            label: 'K12题库',
            value: 'K12题库'
          },
          {
            label: '高考服务',
            value: '高考服务'
          },
          {
            label: 'K12产品内容',
            value: 'K12产品内容'
          },
          {
            label: '上门辅导',
            value: '上门辅导'
          }
        ]
      },
      {
        label: '教育大数据',
        value: '教育大数据',
        children: [
          {
            label: '智能题库',
            value: '智能题库'
          },
          {
            label: '学情分析',
            value: '学情分析'
          },
          {
            label: '教育机构搜索',
            value: '教育机构搜索'
          },
          {
            label: '学习数据采集',
            value: '学习数据采集'
          },
          {
            label: '教育数据采集',
            value: '教育数据采集'
          }
        ]
      },
      {
        label: '知识付费',
        value: '知识付费',
        children: [
          {
            label: '付费问答',
            value: '付费问答'
          },
          {
            label: '技能出租',
            value: '技能出租'
          }
        ]
      },
      {
        label: 'AI教育',
        value: 'AI教育',
        children: [
          {
            label: '分级阅读',
            value: '分级阅读'
          },
          {
            label: '智能评测',
            value: '智能评测'
          },
          {
            label: '智能阅卷',
            value: '智能阅卷'
          },
          {
            label: '在线作业批改',
            value: '在线作业批改'
          },
          {
            label: '教育决策支持系统',
            value: '教育决策支持系统'
          },
          {
            label: '自动化答疑',
            value: '自动化答疑'
          }
        ]
      },
      {
        label: '大学教育',
        value: '大学教育',
        children: [
          {
            label: '就业指导',
            value: '就业指导'
          },
          {
            label: '司法考试',
            value: '司法考试'
          },
          {
            label: '求职教育',
            value: '求职教育'
          },
          {
            label: '考证考级',
            value: '考证考级'
          },
          {
            label: '考研公考',
            value: '考研公考'
          }
        ]
      },
      {
        label: '线下机构',
        value: '线下机构',
        children: [
          {
            label: '留学中介',
            value: '留学中介'
          },
          {
            label: '托管机构',
            value: '托管机构'
          },
          {
            label: '儿童游乐空间',
            value: '儿童游乐空间'
          },
          {
            label: '辅导机构',
            value: '辅导机构'
          }
        ]
      }
    ]
  },
  {
    label: '交通运输',
    value: '交通运输',
    children: [
      {
        label: '汽车金融',
        value: '汽车金融',
        children: [
          {
            label: '汽车保险',
            value: '汽车保险'
          },
          {
            label: '汽车贷款',
            value: '汽车贷款'
          },
          {
            label: '汽车抵押',
            value: '汽车抵押'
          },
          {
            label: '二手车汽车金融',
            value: '二手车汽车金融'
          },
          {
            label: '车险分期',
            value: '车险分期'
          },
          {
            label: '农村汽车金融服务',
            value: '农村汽车金融服务'
          },
          {
            label: '新能源汽车',
            value: '新能源汽车'
          },
          {
            label: '新能源汽车制造',
            value: '新能源汽车制造'
          },
          {
            label: '新能源汽车电池组',
            value: '新能源汽车电池组'
          },
          {
            label: '新能源汽车充电桩',
            value: '新能源汽车充电桩'
          },
          {
            label: '汽车无线充电',
            value: '汽车无线充电'
          },
          {
            label: '汽车融资租赁',
            value: '汽车融资租赁'
          }
        ]
      },
      {
        label: '车载智能硬件',
        value: '车载智能硬件',
        children: [
          {
            label: 'HUD',
            value: 'HUD'
          },
          {
            label: '行车记录仪',
            value: '行车记录仪'
          },
          {
            label: 'OBD设备',
            value: 'OBD设备'
          },
          {
            label: '车载音箱',
            value: '车载音箱'
          },
          {
            label: '车载导航',
            value: '车载导航'
          },
          {
            label: '车联网终端',
            value: '车联网终端'
          },
          {
            label: '车载路由器',
            value: '车载路由器'
          },
          {
            label: '智能后视镜',
            value: '智能后视镜'
          },
          {
            label: '车载数码产品',
            value: '车载数码产品'
          },
          {
            label: '双目视觉摄像头',
            value: '双目视觉摄像头'
          },
          {
            label: '汽车传感器',
            value: '汽车传感器'
          }
        ]
      },
      {
        label: '无人驾驶',
        value: '无人驾驶',
        children: [
          {
            label: 'ADAS',
            value: 'ADAS'
          },
          {
            label: '车载中控系统',
            value: '车载中控系统'
          },
          {
            label: '高精地图识别',
            value: '高精地图识别'
          },
          {
            label: '无人驾驶系统',
            value: '无人驾驶系统'
          }
        ]
      },
      {
        label: '汽车配件',
        value: '汽车配件',
        children: [
          {
            label: '汽车零部件',
            value: '汽车零部件'
          },
          {
            label: '汽配B2B',
            value: '汽配B2B'
          },
          {
            label: '车辆座椅',
            value: '车辆座椅'
          },
          {
            label: '车辆空调',
            value: '车辆空调'
          },
          {
            label: '车身附件',
            value: '车身附件'
          },
          {
            label: '汽车维修设备',
            value: '汽车维修设备'
          },
          {
            label: '汽配电商',
            value: '汽配电商'
          }
        ]
      },
      {
        label: '新车制造',
        value: '新车制造',
        children: [
          {
            label: '传统汽车制造',
            value: '传统汽车制造'
          },
          {
            label: '智能汽车制造',
            value: '智能汽车制造'
          }
        ]
      },
      {
        label: '航空航运',
        value: '航空航运',
        children: [
          {
            label: '机场',
            value: '机场'
          },
          {
            label: '航空公司',
            value: '航空公司'
          },
          {
            label: '港口',
            value: '港口'
          },
          {
            label: '船舶工业',
            value: '船舶工业'
          },
          {
            label: '航运公司',
            value: '航运公司'
          },
          {
            label: '商用飞机研发',
            value: '商用飞机研发'
          }
        ]
      },
      {
        label: '轨交铁路',
        value: '轨交铁路',
        children: [
          {
            label: '铁路建设',
            value: '铁路建设'
          },
          {
            label: '铁路设备',
            value: '铁路设备'
          },
          {
            label: '轨道交通信息系统',
            value: '轨道交通信息系统'
          },
          {
            label: '地铁运营',
            value: '地铁运营'
          }
        ]
      },
      {
        label: '汽车交通相关服务',
        value: '汽车交通相关服务',
        children: [
          {
            label: '汽车媒体',
            value: '汽车媒体'
          },
          {
            label: '驾考培训',
            value: '驾考培训'
          },
          {
            label: '公交到站查询',
            value: '公交到站查询'
          },
          {
            label: '交通信息化',
            value: '交通信息化'
          },
          {
            label: '虚拟驾驶',
            value: '虚拟驾驶'
          }
        ]
      },
      {
        label: '汽车后服务',
        value: '汽车后服务',
        children: [
          {
            label: '洗车',
            value: '洗车'
          },
          {
            label: '汽车改装',
            value: '汽车改装'
          },
          {
            label: '汽车美容',
            value: '汽车美容'
          },
          {
            label: '道路救援',
            value: '道路救援'
          },
          {
            label: '智能停车',
            value: '智能停车'
          },
          {
            label: '汽车充电',
            value: '汽车充电'
          },
          {
            label: '代客泊车',
            value: '代客泊车'
          },
          {
            label: '共享停车',
            value: '共享停车'
          },
          {
            label: '汽车加油',
            value: '汽车加油'
          },
          {
            label: '汽车年检',
            value: '汽车年检'
          },
          {
            label: '汽车违章查询',
            value: '汽车违章查询'
          },
          {
            label: '汽车售后服务',
            value: '汽车售后服务'
          },
          {
            label: '汽车O2O服务',
            value: '汽车O2O服务'
          },
          {
            label: '汽车检测',
            value: '汽车检测'
          },
          {
            label: '汽车维修保养',
            value: '汽车维修保养'
          }
        ]
      },
      {
        label: '汽车交易',
        value: '汽车交易',
        children: [
          {
            label: '汽车电商',
            value: '汽车电商'
          },
          {
            label: '二手车交易',
            value: '二手车交易'
          },
          {
            label: '平行进口车',
            value: '平行进口车'
          },
          {
            label: '新车销售',
            value: '新车销售'
          },
          {
            label: '汽车交易信息平台',
            value: '汽车交易信息平台'
          },
          {
            label: '汽车B2B',
            value: '汽车B2B'
          },
          {
            label: '豪车销售',
            value: '豪车销售'
          },
          {
            label: '汽车比价平台',
            value: '汽车比价平台'
          },
          {
            label: '汽车定价',
            value: '汽车定价'
          },
          {
            label: '二手车估价',
            value: '二手车估价'
          },
          {
            label: '农村汽车交易',
            value: '农村汽车交易'
          },
          {
            label: '汽车特卖',
            value: '汽车特卖'
          }
        ]
      },
      {
        label: '出行服务',
        value: '出行服务',
        children: [
          {
            label: '拼车',
            value: '拼车'
          },
          {
            label: '代驾',
            value: '代驾'
          },
          {
            label: '自行车',
            value: '自行车'
          },
          {
            label: '电动车',
            value: '电动车'
          },
          {
            label: '巴士',
            value: '巴士'
          },
          {
            label: '共享汽车',
            value: '共享汽车'
          },
          {
            label: '传统租车',
            value: '传统租车'
          },
          {
            label: '网约车',
            value: '网约车'
          },
          {
            label: '境外用车',
            value: '境外用车'
          },
          {
            label: '共享电动车',
            value: '共享电动车'
          },
          {
            label: '共享单车',
            value: '共享单车'
          }
        ]
      }
    ]
  },
  {
    label: '物联网',
    value: '物联网',
    children: [
      {
        label: '车联网',
        value: '车联网',
        children: [
          {
            label: '智能交通',
            value: '智能交通'
          },
          {
            label: '车载娱乐系统',
            value: '车载娱乐系统'
          },
          {
            label: '车联网云服务',
            value: '车联网云服务'
          },
          {
            label: '车联网大数据',
            value: '车联网大数据'
          },
          {
            label: '车载WIFI',
            value: '车载WIFI'
          },
          {
            label: 'CAN总线',
            value: 'CAN总线'
          },
          {
            label: '车联网防火墙',
            value: '车联网防火墙'
          }
        ]
      },
      {
        label: '智能安防',
        value: '智能安防',
        children: [
          {
            label: '智能安防硬件',
            value: '智能安防硬件'
          },
          {
            label: '智能巡检系统',
            value: '智能巡检系统'
          },
          {
            label: '智能报警系统',
            value: '智能报警系统'
          },
          {
            label: '智能锁',
            value: '智能锁'
          },
          {
            label: '远程视频监控',
            value: '远程视频监控'
          },
          {
            label: '数字安防',
            value: '数字安防'
          },
          {
            label: '家用安防系统',
            value: '家用安防系统'
          }
        ]
      },
      {
        label: '物联网管理支持',
        value: '物联网管理支持',
        children: [
          {
            label: '物联大数据云平台',
            value: '物联大数据云平台'
          },
          {
            label: '物联网云计算',
            value: '物联网云计算'
          },
          {
            label: '物联网云平台',
            value: '物联网云平台'
          },
          {
            label: '物联网智能终端',
            value: '物联网智能终端'
          },
          {
            label: '物联网服务',
            value: '物联网服务'
          }
        ]
      },
      {
        label: '物联网基础技术',
        value: '物联网基础技术',
        children: [
          {
            label: 'RFID',
            value: 'RFID'
          },
          {
            label: 'm2m',
            value: 'm2m'
          },
          {
            label: '光谱识别技术',
            value: '光谱识别技术'
          },
          {
            label: '传感器技术',
            value: '传感器技术'
          },
          {
            label: '嵌入式无线模块',
            value: '嵌入式无线模块'
          },
          {
            label: '物联网中间件',
            value: '物联网中间件'
          },
          {
            label: '物联网芯片',
            value: '物联网芯片'
          }
        ]
      },
      {
        label: '物联网应用',
        value: '物联网应用',
        children: [
          {
            label: '智慧城市',
            value: '智慧城市'
          },
          {
            label: '智能电网',
            value: '智能电网'
          },
          {
            label: '智慧交通',
            value: '智慧交通'
          },
          {
            label: '工业物联网',
            value: '工业物联网'
          },
          {
            label: '农业物联网',
            value: '农业物联网'
          },
          {
            label: '智慧供水',
            value: '智慧供水'
          },
          {
            label: '智慧办公',
            value: '智慧办公'
          },
          {
            label: '智慧酒店',
            value: '智慧酒店'
          },
          {
            label: '智慧物业',
            value: '智慧物业'
          },
          {
            label: '智能消防',
            value: '智能消防'
          }
        ]
      }
    ]
  },
  {
    label: '智能硬件',
    value: '智能硬件',
    children: [
      {
        label: '可穿戴设备',
        value: '可穿戴设备',
        children: [
          {
            label: '智能手环',
            value: '智能手环'
          },
          {
            label: '智能手表',
            value: '智能手表'
          },
          {
            label: '智能口罩',
            value: '智能口罩'
          },
          {
            label: 'VR头盔',
            value: 'VR头盔'
          },
          {
            label: 'VR眼镜',
            value: 'VR眼镜'
          },
          {
            label: '生物传感设备',
            value: '生物传感设备'
          },
          {
            label: '足部可穿戴设备',
            value: '足部可穿戴设备'
          },
          {
            label: '定位追踪器',
            value: '定位追踪器'
          },
          {
            label: '随身空气净化器',
            value: '随身空气净化器'
          },
          {
            label: '体感枪',
            value: '体感枪'
          },
          {
            label: '手势控制臂环',
            value: '手势控制臂环'
          }
        ]
      },
      {
        label: '智能家居',
        value: '智能家居',
        children: [
          {
            label: '智能马桶',
            value: '智能马桶'
          },
          {
            label: '小家电',
            value: '小家电'
          },
          {
            label: '智能厨房',
            value: '智能厨房'
          },
          {
            label: '智能照明',
            value: '智能照明'
          },
          {
            label: '智能插座',
            value: '智能插座'
          },
          {
            label: '智能门锁',
            value: '智能门锁'
          },
          {
            label: '智能楼宇',
            value: '智能楼宇'
          },
          {
            label: '电子感应垃圾桶',
            value: '电子感应垃圾桶'
          },
          {
            label: '智能门铃',
            value: '智能门铃'
          },
          {
            label: '智能路由器',
            value: '智能路由器'
          },
          {
            label: '智能音箱',
            value: '智能音箱'
          },
          {
            label: '智能家庭影院',
            value: '智能家庭影院'
          },
          {
            label: '智能烤箱',
            value: '智能烤箱'
          },
          {
            label: '家用水质监测设备',
            value: '家用水质监测设备'
          },
          {
            label: '智能投影',
            value: '智能投影'
          },
          {
            label: '智能淋浴',
            value: '智能淋浴'
          },
          {
            label: '智能门窗',
            value: '智能门窗'
          },
          {
            label: '自助咖啡机',
            value: '自助咖啡机'
          },
          {
            label: '智能睡眠产品',
            value: '智能睡眠产品'
          },
          {
            label: '自动叠衣衣柜',
            value: '自动叠衣衣柜'
          }
        ]
      },
      {
        label: '车载智能硬件',
        value: '车载智能硬件'
      },
      {
        label: '智能玩具',
        value: '智能玩具',
        children: [
          {
            label: '编程机器人',
            value: '编程机器人'
          },
          {
            label: '陪伴机器人',
            value: '陪伴机器人'
          },
          {
            label: '智能积木',
            value: '智能积木'
          }
        ]
      },
      {
        label: '消费类硬件',
        value: '消费类硬件',
        children: [
          {
            label: '智能手机',
            value: '智能手机'
          },
          {
            label: '智能电视',
            value: '智能电视'
          },
          {
            label: '运动相机',
            value: '运动相机'
          },
          {
            label: '手机配件',
            value: '手机配件'
          },
          {
            label: '空气净化器',
            value: '空气净化器'
          },
          {
            label: '智能牙刷',
            value: '智能牙刷'
          },
          {
            label: '智能体温计',
            value: '智能体温计'
          },
          {
            label: '扫地机器人',
            value: '扫地机器人'
          },
          {
            label: '高端吸尘器',
            value: '高端吸尘器'
          },
          {
            label: '智能绿植',
            value: '智能绿植'
          },
          {
            label: '智能称',
            value: '智能称'
          },
          {
            label: '智能奶瓶',
            value: '智能奶瓶'
          },
          {
            label: '智能耳机',
            value: '智能耳机'
          },
          {
            label: '智能情趣用品',
            value: '智能情趣用品'
          },
          {
            label: '电视盒子',
            value: '电视盒子'
          },
          {
            label: '智能乐器',
            value: '智能乐器'
          },
          {
            label: '智能鱼缸',
            value: '智能鱼缸'
          }
        ]
      },
      {
        label: '医疗智能硬件',
        value: '医疗智能硬件',
        children: [
          {
            label: '血糖仪',
            value: '血糖仪'
          },
          {
            label: '智能轮椅',
            value: '智能轮椅'
          },
          {
            label: '人工耳蜗',
            value: '人工耳蜗'
          },
          {
            label: '健康监测硬件',
            value: '健康监测硬件'
          },
          {
            label: '胎儿监测贴',
            value: '胎儿监测贴'
          },
          {
            label: '智能假肢',
            value: '智能假肢'
          },
          {
            label: '智能助孕仪',
            value: '智能助孕仪'
          },
          {
            label: '智能测肤设备',
            value: '智能测肤设备'
          },
          {
            label: '智能戒烟设备',
            value: '智能戒烟设备'
          }
        ]
      },
      {
        label: '农业智能硬件',
        value: '农业智能硬件',
        children: [
          {
            label: '农业传感器',
            value: '农业传感器'
          },
          {
            label: '智慧畜牧',
            value: '智慧畜牧'
          },
          {
            label: '养殖水质监测设备',
            value: '养殖水质监测设备'
          },
          {
            label: '农田智能监测器',
            value: '农田智能监测器'
          },
          {
            label: '动物电子标识',
            value: '动物电子标识'
          },
          {
            label: '小型气象站',
            value: '小型气象站'
          },
          {
            label: '智能捕虫计',
            value: '智能捕虫计'
          },
          {
            label: '水肥一体机',
            value: '水肥一体机'
          },
          {
            label: '温室一体机',
            value: '温室一体机'
          },
          {
            label: '牧场智能监测器',
            value: '牧场智能监测器'
          }
        ]
      },
      {
        label: '体育智能硬件',
        value: '体育智能硬件',
        children: [
          {
            label: '运动头盔',
            value: '运动头盔'
          },
          {
            label: '智能运动器材',
            value: '智能运动器材'
          },
          {
            label: '足球智能穿戴设备',
            value: '足球智能穿戴设备'
          },
          {
            label: '智能滑雪记录仪',
            value: '智能滑雪记录仪'
          },
          {
            label: '智能羽毛球拍',
            value: '智能羽毛球拍'
          },
          {
            label: '智能网球拍',
            value: '智能网球拍'
          },
          {
            label: '智能篮球',
            value: '智能篮球'
          },
          {
            label: '智能足球',
            value: '智能足球'
          },
          {
            label: '智慧球场',
            value: '智慧球场'
          },
          {
            label: 'VR跑步机',
            value: 'VR跑步机'
          },
          {
            label: '智能鞋垫',
            value: '智能鞋垫'
          },
          {
            label: '室内滑雪模拟机',
            value: '室内滑雪模拟机'
          }
        ]
      },
      {
        label: '智能代步',
        value: '智能代步',
        children: [
          {
            label: '平衡车',
            value: '平衡车'
          },
          {
            label: '智能自行车',
            value: '智能自行车'
          },
          {
            label: '智能电动车',
            value: '智能电动车'
          },
          {
            label: '电动滑板',
            value: '电动滑板'
          }
        ]
      }
    ]
  },
  {
    label: '体育',
    value: '体育',
    children: [
      {
        label: '体育运动',
        value: '体育运动',
        children: [
          {
            label: '瑜伽',
            value: '瑜伽'
          },
          {
            label: '舞蹈',
            value: '舞蹈'
          },
          {
            label: '极限运动',
            value: '极限运动'
          },
          {
            label: '户外运动',
            value: '户外运动'
          },
          {
            label: '跑步',
            value: '跑步'
          },
          {
            label: '高尔夫',
            value: '高尔夫'
          },
          {
            label: '游泳',
            value: '游泳'
          },
          {
            label: '滑雪',
            value: '滑雪'
          },
          {
            label: '马拉松',
            value: '马拉松'
          },
          {
            label: '射箭',
            value: '射箭'
          },
          {
            label: '篮球运动',
            value: '篮球运动'
          },
          {
            label: '足球运动',
            value: '足球运动'
          },
          {
            label: '格斗搏击',
            value: '格斗搏击'
          },
          {
            label: '拳击',
            value: '拳击'
          },
          {
            label: '水上运动',
            value: '水上运动'
          },
          {
            label: '网球运动',
            value: '网球运动'
          },
          {
            label: '羽毛球运动',
            value: '羽毛球运动'
          },
          {
            label: '乒乓球运动',
            value: '乒乓球运动'
          }
        ]
      },
      {
        label: '体育赛事',
        value: '体育赛事',
        children: [
          {
            label: '赛事运营',
            value: '赛事运营'
          },
          {
            label: '赛事票务',
            value: '赛事票务'
          },
          {
            label: '赛事IP',
            value: '赛事IP'
          },
          {
            label: '赛场运营',
            value: '赛场运营'
          },
          {
            label: '赛事宣传',
            value: '赛事宣传'
          },
          {
            label: '体育经纪人',
            value: '体育经纪人'
          }
        ]
      },
      {
        label: '健身',
        value: '健身',
        children: [
          {
            label: '减肥',
            value: '减肥'
          },
          {
            label: '健身房',
            value: '健身房'
          },
          {
            label: '健身器材',
            value: '健身器材'
          },
          {
            label: '健身教练',
            value: '健身教练'
          },
          {
            label: '健身课程',
            value: '健身课程'
          },
          {
            label: '健身管理',
            value: '健身管理'
          },
          {
            label: '共享健身房',
            value: '共享健身房'
          },
          {
            label: 'Mini健身仓',
            value: 'Mini健身仓'
          },
          {
            label: '健身app',
            value: '健身app'
          },
          {
            label: '24h健身房',
            value: '24h健身房'
          },
          {
            label: '无人健身房',
            value: '无人健身房'
          },
          {
            label: '健身教练资格培训',
            value: '健身教练资格培训'
          },
          {
            label: '健身服饰',
            value: '健身服饰'
          },
          {
            label: '健身营养品',
            value: '健身营养品'
          },
          {
            label: '健身方案定制',
            value: '健身方案定制'
          }
        ]
      },
      {
        label: '电子竞技',
        value: '电子竞技',
        children: [
          {
            label: '电竞直播',
            value: '电竞直播'
          },
          {
            label: '电竞战队',
            value: '电竞战队'
          },
          {
            label: '电竞赛事',
            value: '电竞赛事'
          },
          {
            label: '电竞场馆',
            value: '电竞场馆'
          },
          {
            label: '电竞培训',
            value: '电竞培训'
          },
          {
            label: '电竞数据分析',
            value: '电竞数据分析'
          },
          {
            label: '电竞俱乐部',
            value: '电竞俱乐部'
          },
          {
            label: '电竞内容制作',
            value: '电竞内容制作'
          }
        ]
      },
      {
        label: '体育媒体',
        value: '体育媒体',
        children: [
          {
            label: '体育资讯',
            value: '体育资讯'
          },
          {
            label: '体育媒体社区',
            value: '体育媒体社区'
          },
          {
            label: '体育自媒体',
            value: '体育自媒体'
          }
        ]
      },
      {
        label: '体育场馆',
        value: '体育场馆',
        children: [
          {
            label: '场馆预定',
            value: '场馆预定'
          },
          {
            label: '场馆运营',
            value: '场馆运营'
          }
        ]
      },
      {
        label: '体育培训',
        value: '体育培训',
        children: [
          {
            label: '健身教练培训',
            value: '健身教练培训'
          },
          {
            label: '青少年体育培训',
            value: '青少年体育培训'
          }
        ]
      },
      {
        label: '体育大数据',
        value: '体育大数据'
      },
      {
        label: '体育智能硬件',
        value: '体育智能硬件'
      },
      {
        label: '体育消费品',
        value: '体育消费品',
        children: [
          {
            label: '瑜伽用品',
            value: '瑜伽用品'
          },
          {
            label: '篮球用品',
            value: '篮球用品'
          },
          {
            label: '跑步用品',
            value: '跑步用品'
          },
          {
            label: '游泳用品',
            value: '游泳用品'
          },
          {
            label: '滑雪用品',
            value: '滑雪用品'
          },
          {
            label: '足球用品',
            value: '足球用品'
          },
          {
            label: '舞蹈用品',
            value: '舞蹈用品'
          },
          {
            label: '体育营养品',
            value: '体育营养品'
          },
          {
            label: '户外运动装备',
            value: '户外运动装备'
          }
        ]
      },
      {
        label: '体育社交',
        value: '体育社交',
        children: [
          {
            label: '跑步社区',
            value: '跑步社区'
          },
          {
            label: '户外运动社交',
            value: '户外运动社交'
          },
          {
            label: '极限运动社交',
            value: '极限运动社交'
          },
          {
            label: '足球论坛',
            value: '足球论坛'
          },
          {
            label: '篮球论坛',
            value: '篮球论坛'
          }
        ]
      }
    ]
  },
  {
    label: '旅游',
    value: '旅游',
    children: [
      {
        label: '旅游信息化',
        value: '旅游信息化',
        children: [
          {
            label: '旅游大数据',
            value: '旅游大数据'
          }
        ]
      },
      {
        label: '旅游媒体',
        value: '旅游媒体',
        children: [
          {
            label: '旅行综艺',
            value: '旅行综艺'
          },
          {
            label: '旅游地方门户',
            value: '旅游地方门户'
          }
        ]
      },
      {
        label: '旅游金融',
        value: '旅游金融',
        children: [
          {
            label: '旅游保险',
            value: '旅游保险'
          }
        ]
      },
      {
        label: '预订平台',
        value: '预订平台',
        children: [
          {
            label: '酒店预订',
            value: '酒店预订'
          },
          {
            label: '机票预订',
            value: '机票预订'
          },
          {
            label: '船票预订',
            value: '船票预订'
          },
          {
            label: '车票预订',
            value: '车票预订'
          },
          {
            label: '门票预订',
            value: '门票预订'
          },
          {
            label: '民宿预订',
            value: '民宿预订'
          }
        ]
      },
      {
        label: '酒店民宿',
        value: '酒店民宿',
        children: [
          {
            label: '酒店品牌',
            value: '酒店品牌'
          },
          {
            label: '酒店管理系统',
            value: '酒店管理系统'
          },
          {
            label: '民宿品牌',
            value: '民宿品牌'
          }
        ]
      },
      {
        label: '向导服务',
        value: '向导服务',
        children: [
          {
            label: '导游',
            value: '导游'
          },
          {
            label: '智能语音导游',
            value: '智能语音导游'
          }
        ]
      },
      {
        label: '景区服务',
        value: '景区服务',
        children: [
          {
            label: '智慧景区',
            value: '智慧景区'
          },
          {
            label: '景区管理系统',
            value: '景区管理系统'
          },
          {
            label: '景区流量管理',
            value: '景区流量管理'
          }
        ]
      },
      {
        label: '旅游出行',
        value: '旅游出行',
        children: [
          {
            label: '签证',
            value: '签证'
          },
          {
            label: '随身WiFi',
            value: '随身WiFi'
          },
          {
            label: '旅游包车',
            value: '旅游包车'
          }
        ]
      },
      {
        label: '旅游产品',
        value: '旅游产品',
        children: [
          {
            label: '亲子游',
            value: '亲子游'
          },
          {
            label: '出境游',
            value: '出境游'
          },
          {
            label: '自由行',
            value: '自由行'
          },
          {
            label: '户外游',
            value: '户外游'
          },
          {
            label: '周边游',
            value: '周边游'
          },
          {
            label: '旅行社',
            value: '旅行社'
          },
          {
            label: '商旅',
            value: '商旅'
          },
          {
            label: '旅游B2B',
            value: '旅游B2B'
          },
          {
            label: '定制游',
            value: '定制游'
          },
          {
            label: '跟团游',
            value: '跟团游'
          },
          {
            label: '乡村旅游',
            value: '乡村旅游'
          },
          {
            label: '团队游',
            value: '团队游'
          },
          {
            label: '半自由行',
            value: '半自由行'
          },
          {
            label: '体验式旅游',
            value: '体验式旅游'
          },
          {
            label: '目的地游',
            value: '目的地游'
          },
          {
            label: 'OTA',
            value: 'OTA'
          }
        ]
      },
      {
        label: '旅游电商',
        value: '旅游电商',
        children: [
          {
            label: '旅游购物',
            value: '旅游购物'
          },
          {
            label: '当地特产',
            value: '当地特产'
          },
          {
            label: '旅游导购',
            value: '旅游导购'
          },
          {
            label: '装备租赁',
            value: '装备租赁'
          }
        ]
      },
      {
        label: '旅游社交',
        value: '旅游社交',
        children: [
          {
            label: '结伴游',
            value: '结伴游'
          },
          {
            label: '游记分享社区',
            value: '游记分享社区'
          },
          {
            label: '旅行直播',
            value: '旅行直播'
          },
          {
            label: '背包客旅游',
            value: '背包客旅游'
          }
        ]
      }
    ]
  },
  {
    label: '社交',
    value: '社交',
    children: [
      {
        label: '语音社交',
        value: '语音社交',
        children: [
          {
            label: '口语学习社交',
            value: '口语学习社交'
          },
          {
            label: '声音交友',
            value: '声音交友'
          },
          {
            label: '陌生人语音聊天',
            value: '陌生人语音聊天'
          },
          {
            label: '游戏语音社交',
            value: '游戏语音社交'
          },
          {
            label: '语音电话',
            value: '语音电话'
          }
        ]
      },
      {
        label: '图片社交',
        value: '图片社交',
        children: [
          {
            label: '图片分享',
            value: '图片分享'
          },
          {
            label: '表情包',
            value: '表情包'
          },
          {
            label: '动图社交',
            value: '动图社交'
          },
          {
            label: '即时图片社交',
            value: '即时图片社交'
          },
          {
            label: '拍照社交',
            value: '拍照社交'
          },
          {
            label: '图片聊天',
            value: '图片聊天'
          },
          {
            label: '有声图片',
            value: '有声图片'
          }
        ]
      },
      {
        label: '社区',
        value: '社区',
        children: [
          {
            label: '女性社区',
            value: '女性社区'
          },
          {
            label: '母婴社区',
            value: '母婴社区'
          },
          {
            label: '医生社区',
            value: '医生社区'
          },
          {
            label: '电影社区',
            value: '电影社区'
          },
          {
            label: '汽车社区',
            value: '汽车社区'
          },
          {
            label: '知识社区',
            value: '知识社区'
          },
          {
            label: '运动社区',
            value: '运动社区'
          },
          {
            label: '分享社区',
            value: '分享社区'
          },
          {
            label: '亲子社区',
            value: '亲子社区'
          },
          {
            label: '情感倾诉社区',
            value: '情感倾诉社区'
          },
          {
            label: '理财社区',
            value: '理财社区'
          },
          {
            label: '辩论社区',
            value: '辩论社区'
          },
          {
            label: '综合内容社区',
            value: '综合内容社区'
          },
          {
            label: '活动推荐社区',
            value: '活动推荐社区'
          },
          {
            label: '文玩社区',
            value: '文玩社区'
          },
          {
            label: '禅意生活社群',
            value: '禅意生活社群'
          },
          {
            label: '患者交流社区',
            value: '患者交流社区'
          },
          {
            label: 'VR内容社区',
            value: 'VR内容社区'
          },
          {
            label: '写作社区',
            value: '写作社区'
          }
        ]
      },
      {
        label: '社交4.0',
        value: '社交4.0'
      },
      {
        label: '垂直人群社交',
        value: '垂直人群社交',
        children: [
          {
            label: '新生代社交',
            value: '新生代社交'
          },
          {
            label: '同性社交',
            value: '同性社交'
          },
          {
            label: '熟人社交',
            value: '熟人社交'
          },
          {
            label: '校园社交',
            value: '校园社交'
          },
          {
            label: '女性社交',
            value: '女性社交'
          },
          {
            label: '蓝领社交',
            value: '蓝领社交'
          },
          {
            label: '男性社交',
            value: '男性社交'
          },
          {
            label: '中老年社交',
            value: '中老年社交'
          },
          {
            label: '青少年社交',
            value: '青少年社交'
          },
          {
            label: '留学生社交',
            value: '留学生社交'
          }
        ]
      },
      {
        label: '兴趣社交',
        value: '兴趣社交',
        children: [
          {
            label: '宠物社交',
            value: '宠物社交'
          },
          {
            label: '美食社交',
            value: '美食社交'
          },
          {
            label: '旅行社交',
            value: '旅行社交'
          },
          {
            label: '运动社交',
            value: '运动社交'
          },
          {
            label: '音乐社交',
            value: '音乐社交'
          },
          {
            label: '二次元社交',
            value: '二次元社交'
          },
          {
            label: '技能社交',
            value: '技能社交'
          },
          {
            label: '骑行社交',
            value: '骑行社交'
          },
          {
            label: '垂钓社交',
            value: '垂钓社交'
          },
          {
            label: '飞行爱好者社交',
            value: '飞行爱好者社交'
          },
          {
            label: '军事迷社交',
            value: '军事迷社交'
          },
          {
            label: '占星社交',
            value: '占星社交'
          },
          {
            label: '艺术社交',
            value: '艺术社交'
          },
          {
            label: '围棋社交',
            value: '围棋社交'
          },
          {
            label: '动漫社交',
            value: '动漫社交'
          },
          {
            label: '阅读社交',
            value: '阅读社交'
          },
          {
            label: '情趣社交',
            value: '情趣社交'
          },
          {
            label: '电影社交',
            value: '电影社交'
          },
          {
            label: '手艺人社交',
            value: '手艺人社交'
          },
          {
            label: '广场舞社交',
            value: '广场舞社交'
          }
        ]
      },
      {
        label: '陌生人社交',
        value: '陌生人社交',
        children: [
          {
            label: '同城交友',
            value: '同城交友'
          },
          {
            label: 'LBS社交',
            value: 'LBS社交'
          },
          {
            label: '婚恋社交',
            value: '婚恋社交'
          },
          {
            label: '匿名社交',
            value: '匿名社交'
          },
          {
            label: '直播社交',
            value: '直播社交'
          },
          {
            label: '弹幕社交',
            value: '弹幕社交'
          },
          {
            label: '随机匹配交友',
            value: '随机匹配交友'
          },
          {
            label: '国际社交',
            value: '国际社交'
          },
          {
            label: '陪聊社交',
            value: '陪聊社交'
          }
        ]
      },
      {
        label: '视频社交',
        value: '视频社交',
        children: [
          {
            label: '实时群组视频',
            value: '实时群组视频'
          },
          {
            label: '随机匹配视频交友',
            value: '随机匹配视频交友'
          },
          {
            label: '美颜视频社交',
            value: '美颜视频社交'
          },
          {
            label: '移动视频社交',
            value: '移动视频社交'
          },
          {
            label: '原创视频社交',
            value: '原创视频社交'
          },
          {
            label: '短视频社交',
            value: '短视频社交'
          },
          {
            label: '一对一视频社交',
            value: '一对一视频社交'
          }
        ]
      },
      {
        label: '社交媒体',
        value: '社交媒体'
      }
    ]
  },
  {
    label: '农业',
    value: '农业',
    children: [
      {
        label: '农机',
        value: '农机',
        children: [
          {
            label: '农机研发',
            value: '农机研发'
          },
          {
            label: '农机维修',
            value: '农机维修'
          },
          {
            label: '农机交易',
            value: '农机交易'
          },
          {
            label: '农机融资租赁',
            value: '农机融资租赁'
          }
        ]
      },
      {
        label: '农村金融',
        value: '农村金融',
        children: [
          {
            label: '农业供应链金融',
            value: '农业供应链金融'
          },
          {
            label: '农业信贷',
            value: '农业信贷'
          },
          {
            label: '农产品众筹',
            value: '农产品众筹'
          },
          {
            label: '农业保险',
            value: '农业保险'
          }
        ]
      },
      {
        label: '农业智能硬件',
        value: '农业智能硬件'
      },
      {
        label: '生产种植技术',
        value: '生产种植技术',
        children: [
          {
            label: '微生物技术',
            value: '微生物技术'
          },
          {
            label: '克隆及转基因',
            value: '克隆及转基因'
          },
          {
            label: '分子态植物提纯',
            value: '分子态植物提纯'
          },
          {
            label: '杂交技术',
            value: '杂交技术'
          },
          {
            label: '动物育种',
            value: '动物育种'
          },
          {
            label: '植物育种',
            value: '植物育种'
          },
          {
            label: '畜禽防治',
            value: '畜禽防治'
          },
          {
            label: '养殖技术',
            value: '养殖技术'
          },
          {
            label: '作物提取',
            value: '作物提取'
          }
        ]
      },
      {
        label: '农村物流',
        value: '农村物流',
        children: [
          {
            label: '农机配送',
            value: '农机配送'
          },
          {
            label: '农村大件物流',
            value: '农村大件物流'
          }
        ]
      },
      {
        label: '农业信息化',
        value: '农业信息化',
        children: [
          {
            label: '牧场SaaS',
            value: '牧场SaaS'
          },
          {
            label: '养猪SaaS',
            value: '养猪SaaS'
          },
          {
            label: '农业资讯平台',
            value: '农业资讯平台'
          },
          {
            label: '农场管理系统',
            value: '农场管理系统'
          },
          {
            label: '农技分享',
            value: '农技分享'
          }
        ]
      },
      {
        label: '农业大数据',
        value: '农业大数据'
      },
      {
        label: '农业服务',
        value: '农业服务',
        children: [
          {
            label: '农技服务',
            value: '农技服务'
          },
          {
            label: '动物保健',
            value: '动物保健'
          }
        ]
      },
      {
        label: '农产品流通',
        value: '农产品流通',
        children: [
          {
            label: '农业电商',
            value: '农业电商'
          },
          {
            label: '农产品电商',
            value: '农产品电商'
          },
          {
            label: '农产品品牌',
            value: '农产品品牌'
          },
          {
            label: '农产品加工',
            value: '农产品加工'
          },
          {
            label: '品牌农业',
            value: '品牌农业'
          },
          {
            label: '生鲜连锁',
            value: '生鲜连锁'
          },
          {
            label: '农产品配送',
            value: '农产品配送'
          }
        ]
      },
      {
        label: '农村土地',
        value: '农村土地',
        children: [
          {
            label: '农村土地流转',
            value: '农村土地流转'
          },
          {
            label: '农村土地资讯',
            value: '农村土地资讯'
          }
        ]
      },
      {
        label: '农资',
        value: '农资',
        children: [
          {
            label: '饲料',
            value: '饲料'
          },
          {
            label: '农药',
            value: '农药'
          },
          {
            label: '化肥',
            value: '化肥'
          },
          {
            label: '种子',
            value: '种子'
          }
        ]
      },
      {
        label: '广义农业',
        value: '广义农业',
        children: [
          {
            label: '林业',
            value: '林业'
          },
          {
            label: '渔业',
            value: '渔业'
          },
          {
            label: '畜牧业',
            value: '畜牧业'
          },
          {
            label: '种植业',
            value: '种植业'
          }
        ]
      },
      {
        label: '现代农业',
        value: '现代农业',
        children: [
          {
            label: '有机农业',
            value: '有机农业'
          }
        ]
      }
    ]
  },
  {
    label: '电子商务',
    value: '电子商务',
    children: [
      {
        label: 'B2B',
        value: 'B2B',
        children: [
          {
            label: '医药B2B',
            value: '医药B2B'
          },
          {
            label: '食材B2B',
            value: '食材B2B'
          },
          {
            label: '快消品B2B',
            value: '快消品B2B'
          },
          {
            label: '工业B2B',
            value: '工业B2B'
          },
          {
            label: '纺织面料B2B',
            value: '纺织面料B2B'
          },
          {
            label: '生鲜B2B',
            value: '生鲜B2B'
          },
          {
            label: '能源B2B',
            value: '能源B2B'
          },
          {
            label: '电子元件B2B',
            value: '电子元件B2B'
          },
          {
            label: '木材B2B',
            value: '木材B2B'
          },
          {
            label: '化工原料B2B',
            value: '化工原料B2B'
          },
          {
            label: '金属B2B',
            value: '金属B2B'
          },
          {
            label: '办公用品B2B',
            value: '办公用品B2B'
          },
          {
            label: '建材B2B',
            value: '建材B2B'
          },
          {
            label: '珠宝B2B',
            value: '珠宝B2B'
          },
          {
            label: '玻璃B2B',
            value: '玻璃B2B'
          }
        ]
      },
      {
        label: 'S2b',
        value: 'S2b',
        children: [
          {
            label: 'S2b供应链',
            value: 'S2b供应链'
          },
          {
            label: '家装S2b',
            value: '家装S2b'
          },
          {
            label: '服装S2b',
            value: '服装S2b'
          }
        ]
      },
      {
        label: '综合电商',
        value: '综合电商'
      },
      {
        label: '垂直电商',
        value: '垂直电商',
        children: [
          {
            label: '奢侈品电商',
            value: '奢侈品电商'
          },
          {
            label: '眼镜电商',
            value: '眼镜电商'
          },
          {
            label: '母婴电商',
            value: '母婴电商'
          },
          {
            label: '生鲜电商',
            value: '生鲜电商'
          },
          {
            label: '艺术品电商',
            value: '艺术品电商'
          },
          {
            label: '医药电商',
            value: '医药电商'
          },
          {
            label: '农村电商',
            value: '农村电商'
          },
          {
            label: '服装电商',
            value: '服装电商'
          },
          {
            label: '家居电商',
            value: '家居电商'
          },
          {
            label: '酒类电商',
            value: '酒类电商'
          },
          {
            label: '礼品电商',
            value: '礼品电商'
          },
          {
            label: '美妆电商',
            value: '美妆电商'
          },
          {
            label: '鲜花电商',
            value: '鲜花电商'
          }
        ]
      },
      {
        label: '新兴电商',
        value: '新兴电商',
        children: [
          {
            label: '跨境电商',
            value: '跨境电商'
          },
          {
            label: '社群电商',
            value: '社群电商'
          },
          {
            label: '微商',
            value: '微商'
          },
          {
            label: '二手电商',
            value: '二手电商'
          },
          {
            label: '内容电商',
            value: '内容电商'
          },
          {
            label: '定制电商',
            value: '定制电商'
          },
          {
            label: '导购电商',
            value: '导购电商'
          },
          {
            label: '在线便利店',
            value: '在线便利店'
          },
          {
            label: '订阅式电商',
            value: '订阅式电商'
          },
          {
            label: '租赁电商',
            value: '租赁电商'
          },
          {
            label: 'F2C电商',
            value: 'F2C电商'
          }
        ]
      },
      {
        label: '电商服务',
        value: '电商服务',
        children: [
          {
            label: '电商解决方案',
            value: '电商解决方案'
          },
          {
            label: '比价服务',
            value: '比价服务'
          }
        ]
      }
    ]
  },
  {
    label: '生活服务',
    value: '生活服务',
    children: [
      {
        label: '数码快印',
        value: '数码快印'
      },
      {
        label: '母婴用品',
        value: '母婴用品'
      },
      {
        label: '共享经济',
        value: '共享经济',
        children: [
          {
            label: '共享充电宝',
            value: '共享充电宝'
          },
          {
            label: '共享雨伞',
            value: '共享雨伞'
          },
          {
            label: '共享珠宝',
            value: '共享珠宝'
          },
          {
            label: '共享衣橱',
            value: '共享衣橱'
          },
          {
            label: '共享家居',
            value: '共享家居'
          },
          {
            label: '共享篮球',
            value: '共享篮球'
          },
          {
            label: '共享玩具',
            value: '共享玩具'
          },
          {
            label: '共享奢侈品',
            value: '共享奢侈品'
          },
          {
            label: '共享睡眠仓',
            value: '共享睡眠仓'
          },
          {
            label: '共享图书',
            value: '共享图书'
          },
          {
            label: '共享时间',
            value: '共享时间'
          }
        ]
      },
      {
        label: '婚嫁',
        value: '婚嫁',
        children: [
          {
            label: '婚车',
            value: '婚车'
          },
          {
            label: '婚礼策划',
            value: '婚礼策划'
          },
          {
            label: '婚礼定制',
            value: '婚礼定制'
          },
          {
            label: '婚恋交友',
            value: '婚恋交友'
          },
          {
            label: '蜜月旅行',
            value: '蜜月旅行'
          },
          {
            label: '婚宴酒店服务',
            value: '婚宴酒店服务'
          },
          {
            label: '相亲服务',
            value: '相亲服务'
          },
          {
            label: '一站式婚礼',
            value: '一站式婚礼'
          },
          {
            label: '婚礼珠宝服务',
            value: '婚礼珠宝服务'
          },
          {
            label: '婚纱服务',
            value: '婚纱服务'
          }
        ]
      },
      {
        label: '美业',
        value: '美业',
        children: [
          {
            label: '美妆',
            value: '美妆'
          },
          {
            label: '美容院',
            value: '美容院'
          },
          {
            label: '美发店',
            value: '美发店'
          },
          {
            label: '整形医院',
            value: '整形医院'
          },
          {
            label: '美甲店',
            value: '美甲店'
          }
        ]
      },
      {
        label: '宠物服务',
        value: '宠物服务',
        children: [
          {
            label: '宠物医疗',
            value: '宠物医疗'
          },
          {
            label: '宠物食品',
            value: '宠物食品'
          },
          {
            label: '宠物美容',
            value: '宠物美容'
          },
          {
            label: '宠物寄养',
            value: '宠物寄养'
          },
          {
            label: '宠物交易',
            value: '宠物交易'
          },
          {
            label: '宠物玩具',
            value: '宠物玩具'
          },
          {
            label: '宠物旅游',
            value: '宠物旅游'
          },
          {
            label: '宠物保健',
            value: '宠物保健'
          },
          {
            label: '宠物配种',
            value: '宠物配种'
          },
          {
            label: '宠物直播',
            value: '宠物直播'
          }
        ]
      },
      {
        label: '回收维修',
        value: '回收维修',
        children: [
          {
            label: '家电维修',
            value: '家电维修'
          },
          {
            label: '废品回收',
            value: '废品回收'
          },
          {
            label: '衣服捐赠回收',
            value: '衣服捐赠回收'
          },
          {
            label: '上门回收',
            value: '上门回收'
          },
          {
            label: '数码回收',
            value: '数码回收'
          },
          {
            label: '日用品修理',
            value: '日用品修理'
          },
          {
            label: '奢侈品回收',
            value: '奢侈品回收'
          },
          {
            label: '二手数码回收',
            value: '二手数码回收'
          },
          {
            label: '金属回收',
            value: '金属回收'
          },
          {
            label: '废旧蓄电池回收',
            value: '废旧蓄电池回收'
          },
          {
            label: '数码设备维修',
            value: '数码设备维修'
          }
        ]
      },
      {
        label: '其他生活服务',
        value: '其他生活服务',
        children: [
          {
            label: '校园服务',
            value: '校园服务'
          },
          {
            label: 'WIFI服务',
            value: 'WIFI服务'
          },
          {
            label: '彩票',
            value: '彩票'
          },
          {
            label: '物业管理',
            value: '物业管理'
          },
          {
            label: '食品安全',
            value: '食品安全'
          },
          {
            label: '跑腿服务',
            value: '跑腿服务'
          },
          {
            label: '电子烟',
            value: '电子烟'
          },
          {
            label: '母婴服务',
            value: '母婴服务'
          },
          {
            label: '殡葬服务',
            value: '殡葬服务'
          },
          {
            label: '真人管家',
            value: '真人管家'
          },
          {
            label: '在线祈福',
            value: '在线祈福'
          },
          {
            label: '文印服务',
            value: '文印服务'
          },
          {
            label: '搬迁服务',
            value: '搬迁服务'
          }
        ]
      },
      {
        label: '本地生活',
        value: '本地生活',
        children: [
          {
            label: 'KTV',
            value: 'KTV'
          },
          {
            label: '生活资讯',
            value: '生活资讯'
          },
          {
            label: '网吧',
            value: '网吧'
          },
          {
            label: '公共服务',
            value: '公共服务'
          },
          {
            label: '游乐园',
            value: '游乐园'
          },
          {
            label: '私人影院',
            value: '私人影院'
          },
          {
            label: '棋牌室',
            value: '棋牌室'
          },
          {
            label: '桌游吧',
            value: '桌游吧'
          },
          {
            label: '一站式派对',
            value: '一站式派对'
          },
          {
            label: '地区媒体',
            value: '地区媒体'
          },
          {
            label: '浴场',
            value: '浴场'
          },
          {
            label: '沐足',
            value: '沐足'
          },
          {
            label: '按摩',
            value: '按摩'
          },
          {
            label: '麻将馆',
            value: '麻将馆'
          }
        ]
      },
      {
        label: '夜生活',
        value: '夜生活',
        children: [
          {
            label: '酒吧',
            value: '酒吧'
          },
          {
            label: '夜店',
            value: '夜店'
          }
        ]
      },
      {
        label: '摄影',
        value: '摄影',
        children: [
          {
            label: '婚纱摄影',
            value: '婚纱摄影'
          },
          {
            label: '摄影O2O',
            value: '摄影O2O'
          },
          {
            label: '旅拍',
            value: '旅拍'
          },
          {
            label: '儿童摄影',
            value: '儿童摄影'
          },
          {
            label: '个人写真',
            value: '个人写真'
          },
          {
            label: '孕婴摄影',
            value: '孕婴摄影'
          },
          {
            label: '家庭摄影',
            value: '家庭摄影'
          },
          {
            label: '摄影工作室',
            value: '摄影工作室'
          },
          {
            label: '证件照拍摄',
            value: '证件照拍摄'
          },
          {
            label: '摄影消费团购',
            value: '摄影消费团购'
          },
          {
            label: '修图软件',
            value: '修图软件'
          },
          {
            label: '证件照自助机',
            value: '证件照自助机'
          }
        ]
      },
      {
        label: '居家服务',
        value: '居家服务',
        children: [
          {
            label: '月嫂',
            value: '月嫂'
          },
          {
            label: '搬家',
            value: '搬家'
          },
          {
            label: '洗衣',
            value: '洗衣'
          },
          {
            label: '推拿',
            value: '推拿'
          },
          {
            label: '送水',
            value: '送水'
          },
          {
            label: '家政维修',
            value: '家政维修'
          },
          {
            label: '二手物交易',
            value: '二手物交易'
          },
          {
            label: '家政保洁',
            value: '家政保洁'
          }
        ]
      },
      {
        label: '餐饮',
        value: '餐饮',
        children: [
          {
            label: '餐饮信息化',
            value: '餐饮信息化'
          },
          {
            label: '餐饮O2O',
            value: '餐饮O2O'
          },
          {
            label: '外卖品牌',
            value: '外卖品牌'
          },
          {
            label: '甜品店',
            value: '甜品店'
          },
          {
            label: '品牌餐饮',
            value: '品牌餐饮'
          },
          {
            label: '餐饮连锁',
            value: '餐饮连锁'
          },
          {
            label: '特产小吃',
            value: '特产小吃'
          },
          {
            label: '餐饮团购',
            value: '餐饮团购'
          },
          {
            label: '外卖平台',
            value: '外卖平台'
          },
          {
            label: '奶茶店',
            value: '奶茶店'
          },
          {
            label: '咖啡店',
            value: '咖啡店'
          },
          {
            label: '外卖',
            value: '外卖'
          }
        ]
      }
    ]
  },
  {
    label: '先进制造',
    value: '先进制造',
    children: [
      {
        label: '无人机',
        value: '无人机'
      },
      {
        label: '3D打印',
        value: '3D打印',
        children: [
          {
            label: '工业3D打印',
            value: '工业3D打印'
          },
          {
            label: '服装鞋包3D打印',
            value: '服装鞋包3D打印'
          },
          {
            label: '汽车配件3D打印',
            value: '汽车配件3D打印'
          },
          {
            label: '食物3D打印',
            value: '食物3D打印'
          },
          {
            label: '房屋建筑3D打印',
            value: '房屋建筑3D打印'
          }
        ]
      },
      {
        label: '无线充电',
        value: '无线充电',
        children: [
          {
            label: '共享充电',
            value: '共享充电'
          },
          {
            label: '手机无线充电',
            value: '手机无线充电'
          },
          {
            label: 'NFC电源',
            value: 'NFC电源'
          },
          {
            label: '无线充电芯片',
            value: '无线充电芯片'
          },
          {
            label: '无线充电设备',
            value: '无线充电设备'
          }
        ]
      },
      {
        label: '航空航天',
        value: '航空航天',
        children: [
          {
            label: '卫星',
            value: '卫星'
          },
          {
            label: '火箭',
            value: '火箭'
          },
          {
            label: '航天技术',
            value: '航天技术'
          },
          {
            label: '飞行模拟机',
            value: '飞行模拟机'
          },
          {
            label: '航空器零部件',
            value: '航空器零部件'
          }
        ]
      },
      {
        label: '集成电路',
        value: '集成电路',
        children: [
          {
            label: '半导体器件',
            value: '半导体器件'
          },
          {
            label: 'IC设计',
            value: 'IC设计'
          },
          {
            label: '电子信息材料',
            value: '电子信息材料'
          },
          {
            label: '半导体设备',
            value: '半导体设备'
          }
        ]
      },
      {
        label: '传感设备',
        value: '传感设备',
        children: [
          {
            label: '激光雷达',
            value: '激光雷达'
          },
          {
            label: '传感器芯片',
            value: '传感器芯片'
          },
          {
            label: '传感摄像头',
            value: '传感摄像头'
          },
          {
            label: '毫米波雷达',
            value: '毫米波雷达'
          },
          {
            label: '雷达传感器',
            value: '雷达传感器'
          },
          {
            label: '激光传感器',
            value: '激光传感器'
          },
          {
            label: '光纤传感器',
            value: '光纤传感器'
          },
          {
            label: '声波传感器',
            value: '声波传感器'
          },
          {
            label: '光电传感器',
            value: '光电传感器'
          },
          {
            label: '半导体传感器',
            value: '半导体传感器'
          },
          {
            label: '3D传感器',
            value: '3D传感器'
          },
          {
            label: '自动化传感器',
            value: '自动化传感器'
          },
          {
            label: '生物传感器',
            value: '生物传感器'
          },
          {
            label: '磁传感器',
            value: '磁传感器'
          },
          {
            label: '压力传感器',
            value: '压力传感器'
          },
          {
            label: 'MEMS惯性传感器',
            value: 'MEMS惯性传感器'
          },
          {
            label: '光谱传感器',
            value: '光谱传感器'
          },
          {
            label: '直读传感器',
            value: '直读传感器'
          }
        ]
      },
      {
        label: '新材料',
        value: '新材料',
        children: [
          {
            label: '纳米材料',
            value: '纳米材料'
          },
          {
            label: '磁性材料',
            value: '磁性材料'
          },
          {
            label: '光学材料',
            value: '光学材料'
          },
          {
            label: '节能环保材料',
            value: '节能环保材料'
          },
          {
            label: '先进复合材料',
            value: '先进复合材料'
          },
          {
            label: '先进金属材料',
            value: '先进金属材料'
          },
          {
            label: '先进陶瓷材料',
            value: '先进陶瓷材料'
          },
          {
            label: '稀土材料',
            value: '稀土材料'
          },
          {
            label: '碳材料',
            value: '碳材料'
          },
          {
            label: '膜材料',
            value: '膜材料'
          },
          {
            label: '超导材料',
            value: '超导材料'
          },
          {
            label: '生物医用材料',
            value: '生物医用材料'
          },
          {
            label: '新型建筑材料',
            value: '新型建筑材料'
          }
        ]
      },
      {
        label: '工业4.0',
        value: '工业4.0',
        children: [
          {
            label: '工业自动化',
            value: '工业自动化'
          },
          {
            label: '工业信息化',
            value: '工业信息化'
          }
        ]
      },
      {
        label: '智能制造装备',
        value: '智能制造装备',
        children: [
          {
            label: '数控机床',
            value: '数控机床'
          },
          {
            label: '大型智能工程机械',
            value: '大型智能工程机械'
          },
          {
            label: '高效农业机械',
            value: '高效农业机械'
          },
          {
            label: '自动化纺织机械',
            value: '自动化纺织机械'
          },
          {
            label: '精密和智能仪器仪表',
            value: '精密和智能仪器仪表'
          },
          {
            label: '精密机械',
            value: '精密机械'
          },
          {
            label: '自动化设备',
            value: '自动化设备'
          },
          {
            label: '智能印刷机械',
            value: '智能印刷机械'
          }
        ]
      },
      {
        label: '工业机器人',
        value: '工业机器人'
      }
    ]
  },
  {
    label: '机器人',
    value: '机器人',
    children: [
      {
        label: '娱乐机器人',
        value: '娱乐机器人',
        children: [
          {
            label: '聊天机器人',
            value: '聊天机器人'
          },
          {
            label: '跳舞机器人',
            value: '跳舞机器人'
          },
          {
            label: '音乐机器人',
            value: '音乐机器人'
          },
          {
            label: '足球机器人',
            value: '足球机器人'
          },
          {
            label: '玩具机器人',
            value: '玩具机器人'
          },
          {
            label: '格斗机器人',
            value: '格斗机器人'
          }
        ]
      },
      {
        label: '商用机器人',
        value: '商用机器人',
        children: [
          {
            label: '清洁机器人',
            value: '清洁机器人'
          },
          {
            label: '送餐机器人',
            value: '送餐机器人'
          },
          {
            label: '仿人机器人',
            value: '仿人机器人'
          },
          {
            label: '点餐机器人',
            value: '点餐机器人'
          },
          {
            label: '迎宾机器人',
            value: '迎宾机器人'
          },
          {
            label: '巡逻机器人',
            value: '巡逻机器人'
          },
          {
            label: '物业机器人',
            value: '物业机器人'
          },
          {
            label: '导航机器人',
            value: '导航机器人'
          },
          {
            label: '导购机器人',
            value: '导购机器人'
          }
        ]
      },
      {
        label: '医疗机器人',
        value: '医疗机器人'
      },
      {
        label: '机器人零部件',
        value: '机器人零部件'
      },
      {
        label: '机器人技术',
        value: '机器人技术',
        children: [
          {
            label: '智能控制系统',
            value: '智能控制系统'
          },
          {
            label: '伺服系统',
            value: '伺服系统'
          },
          {
            label: 'SLAM技术',
            value: 'SLAM技术'
          },
          {
            label: '运动规划算法',
            value: '运动规划算法'
          },
          {
            label: '仿生技术',
            value: '仿生技术'
          }
        ]
      },
      {
        label: '机器人定制',
        value: '机器人定制'
      },
      {
        label: '物流机器人',
        value: '物流机器人',
        children: [
          {
            label: '送货机器人',
            value: '送货机器人'
          },
          {
            label: '装货机器人',
            value: '装货机器人'
          },
          {
            label: '搬运机器人',
            value: '搬运机器人'
          },
          {
            label: '分拣机器人',
            value: '分拣机器人'
          }
        ]
      },
      {
        label: '工业机器人',
        value: '工业机器人',
        children: [
          {
            label: '移动机器人',
            value: '移动机器人'
          },
          {
            label: '安防机器人',
            value: '安防机器人'
          },
          {
            label: '协作机器人',
            value: '协作机器人'
          },
          {
            label: '锡焊机器人',
            value: '锡焊机器人'
          },
          {
            label: '桌面机器人',
            value: '桌面机器人'
          },
          {
            label: '机械臂',
            value: '机械臂'
          },
          {
            label: '工业检测机器人',
            value: '工业检测机器人'
          },
          {
            label: '软体机器人',
            value: '软体机器人'
          },
          {
            label: '工业搬运机器人',
            value: '工业搬运机器人'
          },
          {
            label: '涂装机器人',
            value: '涂装机器人'
          },
          {
            label: '水果去核去皮机器人',
            value: '水果去核去皮机器人'
          },
          {
            label: '测量机器人',
            value: '测量机器人'
          }
        ]
      },
      {
        label: '水下机器人',
        value: '水下机器人',
        children: [
          {
            label: '水下测绘机器人',
            value: '水下测绘机器人'
          },
          {
            label: '载人潜水机器人',
            value: '载人潜水机器人'
          },
          {
            label: '水下打捞机器人',
            value: '水下打捞机器人'
          },
          {
            label: '深海机器人',
            value: '深海机器人'
          },
          {
            label: '自主水下机器人',
            value: '自主水下机器人'
          },
          {
            label: '有缆遥控水下机器人',
            value: '有缆遥控水下机器人'
          },
          {
            label: '水下探测机器人',
            value: '水下探测机器人'
          },
          {
            label: '水下摄影机器人',
            value: '水下摄影机器人'
          }
        ]
      },
      {
        label: '家用机器人',
        value: '家用机器人',
        children: [
          {
            label: '机器人管家',
            value: '机器人管家'
          },
          {
            label: '睡眠机器人',
            value: '睡眠机器人'
          }
        ]
      },
      {
        label: '教育机器人',
        value: '教育机器人',
        children: [
          {
            label: '早教机器人',
            value: '早教机器人'
          },
          {
            label: '拟脑机器人',
            value: '拟脑机器人'
          },
          {
            label: '钢琴陪练机器人',
            value: '钢琴陪练机器人'
          },
          {
            label: '助教机器人',
            value: '助教机器人'
          },
          {
            label: '编程教育机器人',
            value: '编程教育机器人'
          },
          {
            label: '作业批改机器人',
            value: '作业批改机器人'
          },
          {
            label: '远程听课机器人',
            value: '远程听课机器人'
          }
        ]
      },
      {
        label: '机器人竞赛',
        value: '机器人竞赛',
        children: [
          {
            label: '机器人格斗赛事',
            value: '机器人格斗赛事'
          },
          {
            label: '机器人制造赛事',
            value: '机器人制造赛事'
          }
        ]
      },
      {
        label: '救援机器人',
        value: '救援机器人'
      },
      {
        label: '无人机',
        value: '无人机',
        children: [
          {
            label: '工业无人机',
            value: '工业无人机'
          },
          {
            label: '军用无人机',
            value: '军用无人机'
          },
          {
            label: '植保无人机',
            value: '植保无人机'
          },
          {
            label: '消费无人机',
            value: '消费无人机'
          },
          {
            label: '无人机管理平台',
            value: '无人机管理平台'
          },
          {
            label: '物流无人机',
            value: '物流无人机'
          },
          {
            label: '航拍无人机',
            value: '航拍无人机'
          },
          {
            label: '反无人机系统',
            value: '反无人机系统'
          },
          {
            label: '海洋无人机',
            value: '海洋无人机'
          }
        ]
      }
    ]
  },
  {
    label: '人工智能',
    value: '人工智能',
    children: [
      {
        label: '自然语言处理',
        value: '自然语言处理',
        children: [
          {
            label: '文本分析',
            value: '文本分析'
          },
          {
            label: '知识图谱',
            value: '知识图谱'
          },
          {
            label: '语义分析',
            value: '语义分析'
          },
          {
            label: '信息检索',
            value: '信息检索'
          },
          {
            label: '机器翻译',
            value: '机器翻译'
          }
        ]
      },
      {
        label: '人工智能芯片',
        value: '人工智能芯片'
      },
      {
        label: '计算机视觉',
        value: '计算机视觉',
        children: [
          {
            label: '物体识别',
            value: '物体识别'
          },
          {
            label: '人脸识别',
            value: '人脸识别'
          },
          {
            label: '双目视觉',
            value: '双目视觉'
          },
          {
            label: '图像识别',
            value: '图像识别'
          },
          {
            label: '字符识别',
            value: '字符识别'
          },
          {
            label: '情绪识别',
            value: '情绪识别'
          },
          {
            label: '手势识别',
            value: '手势识别'
          },
          {
            label: '指纹识别',
            value: '指纹识别'
          },
          {
            label: '掌纹识别',
            value: '掌纹识别'
          },
          {
            label: '物体与场景识别',
            value: '物体与场景识别'
          },
          {
            label: '虹膜识别',
            value: '虹膜识别'
          },
          {
            label: '行为识别',
            value: '行为识别'
          },
          {
            label: '视频识别',
            value: '视频识别'
          },
          {
            label: '零件检测',
            value: '零件检测'
          },
          {
            label: '静脉识别',
            value: '静脉识别'
          }
        ]
      },
      {
        label: 'AI工具',
        value: 'AI工具',
        children: [
          {
            label: '虚拟试衣',
            value: '虚拟试衣'
          },
          {
            label: '智能视频制作',
            value: '智能视频制作'
          },
          {
            label: '新闻推荐',
            value: '新闻推荐'
          },
          {
            label: '智能化编辑',
            value: '智能化编辑'
          },
          {
            label: '虚拟语音助手',
            value: '虚拟语音助手'
          },
          {
            label: 'AI音乐创作',
            value: 'AI音乐创作'
          },
          {
            label: 'AI媒体资讯',
            value: 'AI媒体资讯'
          }
        ]
      },
      {
        label: '人工智能行业应用',
        value: '人工智能行业应用',
        children: [
          {
            label: '智能驾驶',
            value: '智能驾驶'
          },
          {
            label: '智能教育',
            value: '智能教育'
          },
          {
            label: '智能金融',
            value: '智能金融'
          },
          {
            label: '智能零售',
            value: '智能零售'
          },
          {
            label: '智能法务',
            value: '智能法务'
          },
          {
            label: '智能音乐',
            value: '智能音乐'
          },
          {
            label: '舆情监测',
            value: '舆情监测'
          },
          {
            label: '智能医疗',
            value: '智能医疗'
          }
        ]
      },
      {
        label: '人工智能基础技术',
        value: '人工智能基础技术',
        children: [
          {
            label: '人机交互',
            value: '人机交互'
          },
          {
            label: '推荐引擎',
            value: '推荐引擎'
          },
          {
            label: '深度学习',
            value: '深度学习'
          },
          {
            label: '脑机接口',
            value: '脑机接口'
          },
          {
            label: '自适应学习',
            value: '自适应学习'
          },
          {
            label: '语音识别',
            value: '语音识别'
          },
          {
            label: '机器学习',
            value: '机器学习'
          }
        ]
      }
    ]
  },
  {
    label: '大数据',
    value: '大数据',
    children: [
      {
        label: '医疗大数据',
        value: '医疗大数据'
      },
      {
        label: '金融大数据',
        value: '金融大数据'
      },
      {
        label: '教育大数据',
        value: '教育大数据'
      },
      {
        label: '农业大数据',
        value: '农业大数据',
        children: [
          {
            label: '智慧农业',
            value: '智慧农业'
          },
          {
            label: '气象预测',
            value: '气象预测'
          },
          {
            label: '卫星遥感大数据',
            value: '卫星遥感大数据'
          },
          {
            label: '农业数据采集',
            value: '农业数据采集'
          },
          {
            label: '精准农业',
            value: '精准农业'
          },
          {
            label: '灌溉管理分析',
            value: '灌溉管理分析'
          },
          {
            label: '农业数字化',
            value: '农业数字化'
          },
          {
            label: '农产品流通追踪',
            value: '农产品流通追踪'
          }
        ]
      },
      {
        label: '工业大数据',
        value: '工业大数据',
        children: [
          {
            label: '工业安全监控',
            value: '工业安全监控'
          },
          {
            label: '工业故障诊断',
            value: '工业故障诊断'
          },
          {
            label: '工业供应链优化',
            value: '工业供应链优化'
          },
          {
            label: '工业大数据交易',
            value: '工业大数据交易'
          },
          {
            label: '工业采购比价',
            value: '工业采购比价'
          }
        ]
      },
      {
        label: '电商大数据',
        value: '电商大数据',
        children: [
          {
            label: '广告精准投放',
            value: '广告精准投放'
          },
          {
            label: '竞争对手监测',
            value: '竞争对手监测'
          },
          {
            label: '品牌危机监测',
            value: '品牌危机监测'
          },
          {
            label: '电商供应链优化',
            value: '电商供应链优化'
          }
        ]
      },
      {
        label: '体育大数据',
        value: '体育大数据',
        children: [
          {
            label: '足球大数据',
            value: '足球大数据'
          },
          {
            label: '赛事分析',
            value: '赛事分析'
          },
          {
            label: '体彩大数据',
            value: '体彩大数据'
          },
          {
            label: '战术辅助决策',
            value: '战术辅助决策'
          }
        ]
      },
      {
        label: '大数据垂直应用',
        value: '大数据垂直应用',
        children: [
          {
            label: '地理大数据',
            value: '地理大数据'
          },
          {
            label: '娱乐大数据',
            value: '娱乐大数据'
          },
          {
            label: '气象大数据',
            value: '气象大数据'
          },
          {
            label: '电竞大数据',
            value: '电竞大数据'
          },
          {
            label: '汽车大数据',
            value: '汽车大数据'
          },
          {
            label: '房产大数据',
            value: '房产大数据'
          },
          {
            label: '媒体大数据',
            value: '媒体大数据'
          },
          {
            label: '电力大数据',
            value: '电力大数据'
          },
          {
            label: '政务大数据',
            value: '政务大数据'
          },
          {
            label: '税务大数据',
            value: '税务大数据'
          }
        ]
      },
      {
        label: '大数据基础技术',
        value: '大数据基础技术',
        children: [
          {
            label: '数据采集',
            value: '数据采集'
          },
          {
            label: '数据处理',
            value: '数据处理'
          },
          {
            label: 'hadoop',
            value: 'hadoop'
          },
          {
            label: '数据恢复',
            value: '数据恢复'
          },
          {
            label: '分布式文件系统',
            value: '分布式文件系统'
          },
          {
            label: '数据库技术',
            value: '数据库技术'
          },
          {
            label: '数据统计',
            value: '数据统计'
          },
          {
            label: '数据集成',
            value: '数据集成'
          },
          {
            label: '数据基础架构',
            value: '数据基础架构'
          },
          {
            label: '数据标注',
            value: '数据标注'
          },
          {
            label: '数据交易',
            value: '数据交易'
          },
          {
            label: '大数据芯片',
            value: '大数据芯片'
          }
        ]
      },
      {
        label: '大数据通用应用',
        value: '大数据通用应用',
        children: [
          {
            label: '大数据营销',
            value: '大数据营销'
          },
          {
            label: 'BI',
            value: 'BI'
          },
          {
            label: '用户行为分析',
            value: '用户行为分析'
          },
          {
            label: '大数据反欺诈',
            value: '大数据反欺诈'
          },
          {
            label: '日志分析',
            value: '日志分析'
          },
          {
            label: '销售数据分析',
            value: '销售数据分析'
          },
          {
            label: '机器大数据分析',
            value: '机器大数据分析'
          }
        ]
      }
    ]
  },
  {
    label: '物流仓储',
    value: '物流仓储',
    children: [
      {
        label: '跨境物流',
        value: '跨境物流',
        children: [
          {
            label: '跨境电商物流',
            value: '跨境电商物流'
          },
          {
            label: '国际快递配送',
            value: '国际快递配送'
          },
          {
            label: '综合航运物流',
            value: '综合航运物流'
          },
          {
            label: '国际空运',
            value: '国际空运'
          },
          {
            label: '进出口物流',
            value: '进出口物流'
          },
          {
            label: '国际转运',
            value: '国际转运'
          }
        ]
      },
      {
        label: '冷链',
        value: '冷链',
        children: [
          {
            label: '冷链配送',
            value: '冷链配送'
          },
          {
            label: '药物冷链',
            value: '药物冷链'
          },
          {
            label: '生鲜冷链',
            value: '生鲜冷链'
          },
          {
            label: '第三方冷链',
            value: '第三方冷链'
          },
          {
            label: '冷链仓库',
            value: '冷链仓库'
          }
        ]
      },
      {
        label: '仓储服务',
        value: '仓储服务',
        children: [
          {
            label: '仓储机器人',
            value: '仓储机器人'
          },
          {
            label: '智能仓储系统',
            value: '智能仓储系统'
          },
          {
            label: '自动化立体仓库',
            value: '自动化立体仓库'
          },
          {
            label: '仓储供应链',
            value: '仓储供应链'
          },
          {
            label: '个人仓储',
            value: '个人仓储'
          },
          {
            label: '危险品仓储',
            value: '危险品仓储'
          },
          {
            label: '无人叉车',
            value: '无人叉车'
          },
          {
            label: '智能配货',
            value: '智能配货'
          },
          {
            label: '物流仓库',
            value: '物流仓库'
          }
        ]
      },
      {
        label: '物流金融',
        value: '物流金融',
        children: [
          {
            label: '物流保险',
            value: '物流保险'
          },
          {
            label: '物流供应链金融',
            value: '物流供应链金融'
          }
        ]
      },
      {
        label: '大件物流',
        value: '大件物流',
        children: [
          {
            label: '货运物流',
            value: '货运物流'
          },
          {
            label: '家具物流',
            value: '家具物流'
          },
          {
            label: '家电物流',
            value: '家电物流'
          },
          {
            label: '机械设备运输',
            value: '机械设备运输'
          },
          {
            label: '整车运输',
            value: '整车运输'
          }
        ]
      },
      {
        label: '危险品物流',
        value: '危险品物流'
      },
      {
        label: '物流地产',
        value: '物流地产'
      },
      {
        label: '快递收发',
        value: '快递收发',
        children: [
          {
            label: '智能快递柜',
            value: '智能快递柜'
          },
          {
            label: '代收货',
            value: '代收货'
          },
          {
            label: '24H自助取货',
            value: '24H自助取货'
          },
          {
            label: '社区快件中转',
            value: '社区快件中转'
          },
          {
            label: '校园快递代领',
            value: '校园快递代领'
          }
        ]
      },
      {
        label: '最后一公里',
        value: '最后一公里',
        children: [
          {
            label: '农村最后一公里',
            value: '农村最后一公里'
          },
          {
            label: '校园最后一公里',
            value: '校园最后一公里'
          }
        ]
      },
      {
        label: '同城物流',
        value: '同城物流',
        children: [
          {
            label: '生鲜配送',
            value: '生鲜配送'
          },
          {
            label: '同城货运',
            value: '同城货运'
          },
          {
            label: '即时物流',
            value: '即时物流'
          },
          {
            label: '众包快递',
            value: '众包快递'
          },
          {
            label: '同城专人直送',
            value: '同城专人直送'
          }
        ]
      },
      {
        label: '物流运输',
        value: '物流运输',
        children: [
          {
            label: '公路物流',
            value: '公路物流'
          },
          {
            label: '铁路物流',
            value: '铁路物流'
          },
          {
            label: '航空物流',
            value: '航空物流'
          },
          {
            label: '水运物流',
            value: '水运物流'
          }
        ]
      },
      {
        label: '快递服务',
        value: '快递服务'
      },
      {
        label: '物流信息化',
        value: '物流信息化',
        children: [
          {
            label: '仓储SaaS',
            value: '仓储SaaS'
          },
          {
            label: '智能物流设备',
            value: '智能物流设备'
          },
          {
            label: '自动分拣设备',
            value: '自动分拣设备'
          },
          {
            label: '智能快递分发平台',
            value: '智能快递分发平台'
          },
          {
            label: '物流比价平台',
            value: '物流比价平台'
          },
          {
            label: '物流路线优化',
            value: '物流路线优化'
          },
          {
            label: '车货匹配平台',
            value: '车货匹配平台'
          },
          {
            label: '运输管理系统',
            value: '运输管理系统'
          },
          {
            label: '货运信息平台',
            value: '货运信息平台'
          },
          {
            label: '物流跟踪',
            value: '物流跟踪'
          },
          {
            label: '无人配送车',
            value: '无人配送车'
          }
        ]
      }
    ]
  },
  {
    label: '房地产',
    value: '房地产',
    children: [
      {
        label: '房产交易',
        value: '房产交易',
        children: [
          {
            label: '海外置业',
            value: '海外置业'
          },
          {
            label: '房产中介',
            value: '房产中介'
          },
          {
            label: '新房交易',
            value: '新房交易'
          },
          {
            label: '二手房交易',
            value: '二手房交易'
          }
        ]
      },
      {
        label: '房产开发',
        value: '房产开发',
        children: [
          {
            label: '商业地产',
            value: '商业地产'
          },
          {
            label: '品牌公寓',
            value: '品牌公寓'
          },
          {
            label: 'BIM',
            value: 'BIM'
          },
          {
            label: '绿色建筑',
            value: '绿色建筑'
          },
          {
            label: '园区开发',
            value: '园区开发'
          },
          {
            label: '酒店地产',
            value: '酒店地产'
          },
          {
            label: '住宅地产',
            value: '住宅地产'
          },
          {
            label: '养老地产',
            value: '养老地产'
          },
          {
            label: '土地流转',
            value: '土地流转'
          }
        ]
      },
      {
        label: '房产租赁',
        value: '房产租赁',
        children: [
          {
            label: '长租',
            value: '长租'
          },
          {
            label: '短租',
            value: '短租'
          },
          {
            label: '海外租房',
            value: '海外租房'
          },
          {
            label: '办公租赁',
            value: '办公租赁'
          },
          {
            label: '留学生租房',
            value: '留学生租房'
          },
          {
            label: '租房信息平台',
            value: '租房信息平台'
          }
        ]
      },
      {
        label: '建材家具',
        value: '建材家具',
        children: [
          {
            label: '家具',
            value: '家具'
          },
          {
            label: '装修建材',
            value: '装修建材'
          }
        ]
      },
      {
        label: '家装',
        value: '家装',
        children: [
          {
            label: '互联网家装',
            value: '互联网家装'
          },
          {
            label: '软装',
            value: '软装'
          },
          {
            label: '家装设计',
            value: '家装设计'
          },
          {
            label: '硬装',
            value: '硬装'
          },
          {
            label: '家装监理',
            value: '家装监理'
          },
          {
            label: 'VR家装',
            value: 'VR家装'
          },
          {
            label: '家装后服务',
            value: '家装后服务'
          },
          {
            label: '家居家纺',
            value: '家居家纺'
          }
        ]
      },
      {
        label: '房产金融',
        value: '房产金融',
        children: [
          {
            label: '装修分期',
            value: '装修分期'
          },
          {
            label: '住房金融',
            value: '住房金融'
          },
          {
            label: '房产抵押',
            value: '房产抵押'
          }
        ]
      }
    ]
  },
  {
    label: '文娱传媒',
    value: '文娱传媒',
    children: [
      {
        label: '音乐',
        value: '音乐',
        children: [
          {
            label: '音乐节',
            value: '音乐节'
          },
          {
            label: '音乐剧',
            value: '音乐剧'
          },
          {
            label: '音乐创作',
            value: '音乐创作'
          },
          {
            label: '民谣',
            value: '民谣'
          },
          {
            label: '电音',
            value: '电音'
          },
          {
            label: '嘻哈',
            value: '嘻哈'
          },
          {
            label: '配音配乐',
            value: '配音配乐'
          },
          {
            label: '迷你KTV',
            value: '迷你KTV'
          },
          {
            label: '唱片公司',
            value: '唱片公司'
          },
          {
            label: '音乐票务',
            value: '音乐票务'
          },
          {
            label: '演唱会运营商',
            value: '演唱会运营商'
          },
          {
            label: '音乐播放器',
            value: '音乐播放器'
          },
          {
            label: '在线K歌',
            value: '在线K歌'
          },
          {
            label: '音乐电台',
            value: '音乐电台'
          },
          {
            label: '音乐版权',
            value: '音乐版权'
          },
          {
            label: 'livehouse',
            value: 'livehouse'
          }
        ]
      },
      {
        label: '直播',
        value: '直播',
        children: [
          {
            label: '赛事直播',
            value: '赛事直播'
          },
          {
            label: '旅游直播',
            value: '旅游直播'
          },
          {
            label: '秀场类直播',
            value: '秀场类直播'
          },
          {
            label: '移动直播平台',
            value: '移动直播平台'
          },
          {
            label: '直播电商',
            value: '直播电商'
          },
          {
            label: '直播技术支持',
            value: '直播技术支持'
          },
          {
            label: '直播平台',
            value: '直播平台'
          }
        ]
      },
      {
        label: '媒体',
        value: '媒体',
        children: [
          {
            label: '垂直媒体',
            value: '垂直媒体'
          },
          {
            label: '门户网站',
            value: '门户网站'
          },
          {
            label: '网络电台',
            value: '网络电台'
          },
          {
            label: '自媒体',
            value: '自媒体'
          },
          {
            label: '电视台',
            value: '电视台'
          },
          {
            label: '传媒公司',
            value: '传媒公司'
          },
          {
            label: '媒体社区',
            value: '媒体社区'
          },
          {
            label: '出版发行',
            value: '出版发行'
          },
          {
            label: '媒体资讯',
            value: '媒体资讯'
          },
          {
            label: '个性化阅读',
            value: '个性化阅读'
          },
          {
            label: '新闻网站',
            value: '新闻网站'
          }
        ]
      },
      {
        label: '数字出版',
        value: '数字出版',
        children: [
          {
            label: '网络小说',
            value: '网络小说'
          },
          {
            label: '电子阅读',
            value: '电子阅读'
          },
          {
            label: '写作阅读平台',
            value: '写作阅读平台'
          },
          {
            label: '图书出版',
            value: '图书出版'
          },
          {
            label: '对话式小说',
            value: '对话式小说'
          },
          {
            label: '网络文学平台',
            value: '网络文学平台'
          },
          {
            label: '有声阅读',
            value: '有声阅读'
          },
          {
            label: '儿童绘本',
            value: '儿童绘本'
          }
        ]
      },
      {
        label: '影视',
        value: '影视',
        children: [
          {
            label: '影视制作',
            value: '影视制作'
          },
          {
            label: '影视众筹',
            value: '影视众筹'
          },
          {
            label: '影音设备',
            value: '影音设备'
          },
          {
            label: '电影院线',
            value: '电影院线'
          },
          {
            label: '影视发行',
            value: '影视发行'
          },
          {
            label: '影视大数据',
            value: '影视大数据'
          },
          {
            label: '电影票务',
            value: '电影票务'
          },
          {
            label: '摄影器材',
            value: '摄影器材'
          }
        ]
      },
      {
        label: '二次元',
        value: '二次元',
        children: [
          {
            label: '动画',
            value: '动画'
          },
          {
            label: '动漫',
            value: '动漫'
          },
          {
            label: '漫画',
            value: '漫画'
          },
          {
            label: 'cosplay',
            value: 'cosplay'
          },
          {
            label: '二次元电商',
            value: '二次元电商'
          },
          {
            label: '二次元社区',
            value: '二次元社区'
          },
          {
            label: '二次元衍生品',
            value: '二次元衍生品'
          },
          {
            label: '二次元游戏',
            value: '二次元游戏'
          },
          {
            label: '漫展签售',
            value: '漫展签售'
          },
          {
            label: '二次元声音制作',
            value: '二次元声音制作'
          },
          {
            label: '二次元视频网站',
            value: '二次元视频网站'
          }
        ]
      },
      {
        label: 'IP版权',
        value: 'IP版权',
        children: [
          {
            label: 'IP孵化',
            value: 'IP孵化'
          },
          {
            label: 'IP运营',
            value: 'IP运营'
          },
          {
            label: '版权交易',
            value: '版权交易'
          },
          {
            label: '动漫IP',
            value: '动漫IP'
          },
          {
            label: '影视IP',
            value: '影视IP'
          },
          {
            label: 'IP创作',
            value: 'IP创作'
          },
          {
            label: 'IP衍生品',
            value: 'IP衍生品'
          },
          {
            label: '文学IP',
            value: '文学IP'
          }
        ]
      },
      {
        label: '综艺',
        value: '综艺',
        children: [
          {
            label: '电视节目',
            value: '电视节目'
          },
          {
            label: '脱口秀',
            value: '脱口秀'
          },
          {
            label: '真人秀',
            value: '真人秀'
          },
          {
            label: '网络综艺',
            value: '网络综艺'
          }
        ]
      },
      {
        label: '艺人经纪',
        value: '艺人经纪',
        children: [
          {
            label: '粉丝经济',
            value: '粉丝经济'
          },
          {
            label: '网红',
            value: '网红'
          },
          {
            label: '粉丝社区',
            value: '粉丝社区'
          },
          {
            label: '经纪公司',
            value: '经纪公司'
          },
          {
            label: '网红经济',
            value: '网红经济'
          },
          {
            label: '网红孵化',
            value: '网红孵化'
          },
          {
            label: 'mcn',
            value: 'mcn'
          },
          {
            label: '偶像团体',
            value: '偶像团体'
          },
          {
            label: '虚拟偶像',
            value: '虚拟偶像'
          },
          {
            label: '文化演出',
            value: '文化演出'
          },
          {
            label: '戏剧',
            value: '戏剧'
          },
          {
            label: '话剧',
            value: '话剧'
          },
          {
            label: '相声小品',
            value: '相声小品'
          },
          {
            label: '歌舞剧',
            value: '歌舞剧'
          }
        ]
      },
      {
        label: '内容制作',
        value: '内容制作',
        children: [
          {
            label: '配音',
            value: '配音'
          },
          {
            label: '配乐',
            value: '配乐'
          },
          {
            label: '内容变现',
            value: '内容变现'
          },
          {
            label: '内容创作',
            value: '内容创作'
          },
          {
            label: '内容宣发',
            value: '内容宣发'
          },
          {
            label: '特效技术',
            value: '特效技术'
          },
          {
            label: '二次创作',
            value: '二次创作'
          }
        ]
      },
      {
        label: '游戏',
        value: '游戏',
        children: [
          {
            label: '游戏直播',
            value: '游戏直播'
          },
          {
            label: '游戏发行',
            value: '游戏发行'
          },
          {
            label: '游戏开发',
            value: '游戏开发'
          },
          {
            label: '游戏运营',
            value: '游戏运营'
          },
          {
            label: '游戏社交',
            value: '游戏社交'
          },
          {
            label: '游戏硬件',
            value: '游戏硬件'
          },
          {
            label: 'VR游戏',
            value: 'VR游戏'
          },
          {
            label: '游戏分发渠道',
            value: '游戏分发渠道'
          },
          {
            label: '游戏衍生品',
            value: '游戏衍生品'
          },
          {
            label: '游戏支持服务',
            value: '游戏支持服务'
          },
          {
            label: '手游',
            value: '手游'
          },
          {
            label: '游戏垂直媒体',
            value: '游戏垂直媒体'
          },
          {
            label: '网络游戏',
            value: '网络游戏'
          }
        ]
      },
      {
        label: '视频',
        value: '视频',
        children: [
          {
            label: '视频播放器',
            value: '视频播放器'
          },
          {
            label: '短视频',
            value: '短视频'
          },
          {
            label: '短视频聚合平台',
            value: '短视频聚合平台'
          },
          {
            label: '视频制作工具',
            value: '视频制作工具'
          },
          {
            label: '综合视频网站',
            value: '综合视频网站'
          },
          {
            label: '垂直视频网站',
            value: '垂直视频网站'
          }
        ]
      }
    ]
  },
  {
    label: '消费',
    value: '消费',
    children: [
      {
        label: '百货零售',
        value: '百货零售',
        children: [
          {
            label: '百货商场',
            value: '百货商场'
          },
          {
            label: '无人便利店',
            value: '无人便利店'
          },
          {
            label: '连锁便利店',
            value: '连锁便利店'
          },
          {
            label: '连锁超市',
            value: '连锁超市'
          }
        ]
      },
      {
        label: '食品饮料',
        value: '食品饮料',
        children: [
          {
            label: '饮料',
            value: '饮料'
          },
          {
            label: '酒类',
            value: '酒类'
          },
          {
            label: '调味品',
            value: '调味品'
          },
          {
            label: '休闲食品',
            value: '休闲食品'
          },
          {
            label: '奶制品',
            value: '奶制品'
          },
          {
            label: '食品添加剂',
            value: '食品添加剂'
          }
        ]
      },
      {
        label: '垂直消费',
        value: '垂直消费',
        children: [
          {
            label: '女性经济',
            value: '女性经济'
          },
          {
            label: '保健品',
            value: '保健品'
          },
          {
            label: '知识经济',
            value: '知识经济'
          },
          {
            label: '珠宝饰品',
            value: '珠宝饰品'
          },
          {
            label: '原创品牌',
            value: '原创品牌'
          },
          {
            label: '服装鞋包',
            value: '服装鞋包'
          },
          {
            label: '美妆品牌',
            value: '美妆品牌'
          },
          {
            label: '奢侈品品牌',
            value: '奢侈品品牌'
          }
        ]
      },
      {
        label: '儿童消费',
        value: '儿童消费',
        children: [
          {
            label: '儿童玩具',
            value: '儿童玩具'
          },
          {
            label: '童装',
            value: '童装'
          },
          {
            label: '儿童奶粉',
            value: '儿童奶粉'
          }
        ]
      },
      {
        label: '线下消费',
        value: '线下消费',
        children: [
          {
            label: '按摩椅',
            value: '按摩椅'
          },
          {
            label: '办公室货架',
            value: '办公室货架'
          },
          {
            label: '快闪店',
            value: '快闪店'
          },
          {
            label: '无人健身仓',
            value: '无人健身仓'
          },
          {
            label: '抓娃娃机',
            value: '抓娃娃机'
          },
          {
            label: '自助贩卖机',
            value: '自助贩卖机'
          }
        ]
      },
      {
        label: '定制消费',
        value: '定制消费',
        children: [
          {
            label: '服装定制',
            value: '服装定制'
          },
          {
            label: '珠宝定制',
            value: '珠宝定制'
          }
        ]
      }
    ]
  },
  {
    label: '传统行业',
    value: '传统行业',
    children: [
      {
        label: '建筑业',
        value: '建筑业',
        children: [
          {
            label: '规划设计',
            value: '规划设计'
          },
          {
            label: '建筑施工',
            value: '建筑施工'
          },
          {
            label: '建筑设备',
            value: '建筑设备'
          },
          {
            label: '园林绿化',
            value: '园林绿化'
          },
          {
            label: '土木工程',
            value: '土木工程'
          },
          {
            label: '招标采购',
            value: '招标采购'
          },
          {
            label: '建筑装饰',
            value: '建筑装饰'
          },
          {
            label: '建筑信息化',
            value: '建筑信息化'
          },
          {
            label: '爆破服务',
            value: '爆破服务'
          },
          {
            label: '装配式建筑',
            value: '装配式建筑'
          },
          {
            label: '建筑工程',
            value: '建筑工程'
          },
          {
            label: '建筑材料',
            value: '建筑材料'
          },
          {
            label: '勘察测绘',
            value: '勘察测绘'
          },
          {
            label: '景观设计',
            value: '景观设计'
          },
          {
            label: '装饰工程',
            value: '装饰工程'
          },
          {
            label: '建筑设计',
            value: '建筑设计'
          },
          {
            label: '建筑工程管理',
            value: '建筑工程管理'
          },
          {
            label: '建筑工程咨询',
            value: '建筑工程咨询'
          }
        ]
      },
      {
        label: '材料类',
        value: '材料类',
        children: [
          {
            label: '化工新材料',
            value: '化工新材料'
          }
        ]
      },
      {
        label: '电子制造',
        value: '电子制造',
        children: [
          {
            label: '家电',
            value: '家电'
          },
          {
            label: '电子元器件',
            value: '电子元器件'
          },
          {
            label: '消费电子',
            value: '消费电子'
          },
          {
            label: 'LED产业',
            value: 'LED产业'
          },
          {
            label: '电器',
            value: '电器'
          },
          {
            label: '数码产品',
            value: '数码产品'
          }
        ]
      },
      {
        label: '石油矿采',
        value: '石油矿采',
        children: [
          {
            label: '冶金工业',
            value: '冶金工业'
          },
          {
            label: '钢铁产业',
            value: '钢铁产业'
          },
          {
            label: '勘探技术',
            value: '勘探技术'
          },
          {
            label: '能源开采',
            value: '能源开采'
          },
          {
            label: '煤炭开采',
            value: '煤炭开采'
          },
          {
            label: '矿石开采',
            value: '矿石开采'
          },
          {
            label: '石油开采',
            value: '石油开采'
          },
          {
            label: '开采设备',
            value: '开采设备'
          }
        ]
      },
      {
        label: '纺织工业',
        value: '纺织工业',
        children: [
          {
            label: '纺织印染',
            value: '纺织印染'
          },
          {
            label: '纺织设备',
            value: '纺织设备'
          },
          {
            label: '皮革加工',
            value: '皮革加工'
          },
          {
            label: '服装制造',
            value: '服装制造'
          },
          {
            label: '纺织原料',
            value: '纺织原料'
          },
          {
            label: '鞋袜配饰',
            value: '鞋袜配饰'
          },
          {
            label: '服装辅料',
            value: '服装辅料'
          }
        ]
      },
      {
        label: '轻工制造',
        value: '轻工制造',
        children: [
          {
            label: '印刷',
            value: '印刷'
          },
          {
            label: '包装',
            value: '包装'
          },
          {
            label: '造纸',
            value: '造纸'
          }
        ]
      },
      {
        label: '通信通讯',
        value: '通信通讯',
        children: [
          {
            label: '通讯技术',
            value: '通讯技术'
          },
          {
            label: '通讯设备',
            value: '通讯设备'
          },
          {
            label: '光通信',
            value: '光通信'
          },
          {
            label: '通讯卫星',
            value: '通讯卫星'
          },
          {
            label: '光纤传输',
            value: '光纤传输'
          },
          {
            label: '无线集群通信',
            value: '无线集群通信'
          },
          {
            label: '通信基站',
            value: '通信基站'
          },
          {
            label: '量子通讯',
            value: '量子通讯'
          },
          {
            label: '通信芯片',
            value: '通信芯片'
          },
          {
            label: '电信运营商',
            value: '电信运营商'
          }
        ]
      },
      {
        label: '零部件制造',
        value: '零部件制造'
      },
      {
        label: '环保行业',
        value: '环保行业',
        children: [
          {
            label: '污水处理',
            value: '污水处理'
          },
          {
            label: '环保设备',
            value: '环保设备'
          },
          {
            label: '环保生活用品',
            value: '环保生活用品'
          },
          {
            label: '环保能源',
            value: '环保能源'
          },
          {
            label: '环保材料',
            value: '环保材料'
          },
          {
            label: '固废处理',
            value: '固废处理'
          },
          {
            label: '大气治理',
            value: '大气治理'
          },
          {
            label: '环境修复',
            value: '环境修复'
          },
          {
            label: '生态保护',
            value: '生态保护'
          },
          {
            label: '环保工程',
            value: '环保工程'
          },
          {
            label: '环保技术',
            value: '环保技术'
          },
          {
            label: '噪声处理',
            value: '噪声处理'
          }
        ]
      },
      {
        label: '军工产业',
        value: '军工产业'
      },
      {
        label: '电气行业',
        value: '电气行业',
        children: [
          {
            label: '电气工程',
            value: '电气工程'
          },
          {
            label: '电气设备',
            value: '电气设备'
          }
        ]
      },
      {
        label: '酒业',
        value: '酒业',
        children: [
          {
            label: '酒庄',
            value: '酒庄'
          }
        ]
      },
      {
        label: '化学工业',
        value: '化学工业',
        children: [
          {
            label: '精细化工',
            value: '精细化工'
          },
          {
            label: '化工原料',
            value: '化工原料'
          },
          {
            label: '化工制品',
            value: '化工制品'
          },
          {
            label: '化工制剂',
            value: '化工制剂'
          },
          {
            label: '农药化肥',
            value: '农药化肥'
          },
          {
            label: '塑料制品',
            value: '塑料制品'
          },
          {
            label: '塑胶制品',
            value: '塑胶制品'
          }
        ]
      },
      {
        label: '能源行业',
        value: '能源行业',
        children: [
          {
            label: '新能源',
            value: '新能源'
          },
          {
            label: '电力供应',
            value: '电力供应'
          },
          {
            label: '能源技术',
            value: '能源技术'
          },
          {
            label: '太阳能光伏',
            value: '太阳能光伏'
          },
          {
            label: '能源工程',
            value: '能源工程'
          },
          {
            label: '热力供应',
            value: '热力供应'
          },
          {
            label: '传统能源',
            value: '传统能源'
          },
          {
            label: '节能技术',
            value: '节能技术'
          },
          {
            label: '电池技术',
            value: '电池技术'
          },
          {
            label: '电源科技',
            value: '电源科技'
          },
          {
            label: '清洁能源',
            value: '清洁能源'
          },
          {
            label: '分布式能源',
            value: '分布式能源'
          }
        ]
      },
      {
        label: '重工业',
        value: '重工业'
      },
      {
        label: '消防行业',
        value: '消防行业',
        children: [
          {
            label: '防火技术',
            value: '防火技术'
          },
          {
            label: '灭火器',
            value: '灭火器'
          },
          {
            label: '火灾探测',
            value: '火灾探测'
          },
          {
            label: '消防报警',
            value: '消防报警'
          }
        ]
      },
      {
        label: '机械制造',
        value: '机械制造',
        children: [
          {
            label: '机械设备',
            value: '机械设备'
          },
          {
            label: '电力设备',
            value: '电力设备'
          },
          {
            label: '汽车制造业',
            value: '汽车制造业'
          },
          {
            label: '通风设备',
            value: '通风设备'
          },
          {
            label: '消防设备',
            value: '消防设备'
          },
          {
            label: '实验室仪器',
            value: '实验室仪器'
          },
          {
            label: '电机',
            value: '电机'
          },
          {
            label: '触控设备',
            value: '触控设备'
          },
          {
            label: '钻掘设备',
            value: '钻掘设备'
          },
          {
            label: '超声设备',
            value: '超声设备'
          },
          {
            label: '液压',
            value: '液压'
          }
        ]
      },
      {
        label: '五金交电',
        value: '五金交电'
      }
    ]
  },
  {
    label: '软件工具',
    value: '软件工具',
    children: [
      {
        label: '电子名片',
        value: '电子名片'
      },
      {
        label: '即时通讯',
        value: '即时通讯'
      },
      {
        label: '图片工具',
        value: '图片工具'
      },
      {
        label: '地图',
        value: '地图'
      },
      {
        label: '应用分发',
        value: '应用分发'
      },
      {
        label: '开发工具',
        value: '开发工具'
      },
      {
        label: '搜索引擎',
        value: '搜索引擎'
      },
      {
        label: '效率工具',
        value: '效率工具'
      },
      {
        label: '日常应用',
        value: '日常应用'
      },
      {
        label: '美颜',
        value: '美颜'
      },
      {
        label: '记账工具',
        value: '记账工具'
      },
      {
        label: '电子邮箱',
        value: '电子邮箱',
        children: [
          {
            label: '语音邮箱',
            value: '语音邮箱'
          }
        ]
      }
    ]
  },
  {
    label: '企业服务',
    value: '企业服务',
    children: [
      {
        label: '招聘',
        value: '招聘',
        children: [
          {
            label: '职场社交',
            value: '职场社交'
          },
          {
            label: '兼职招聘',
            value: '兼职招聘'
          },
          {
            label: '猎头',
            value: '猎头'
          },
          {
            label: '校园招聘',
            value: '校园招聘'
          },
          {
            label: '蓝领招聘',
            value: '蓝领招聘'
          }
        ]
      },
      {
        label: '企业安全',
        value: '企业安全',
        children: [
          {
            label: '网络安全',
            value: '网络安全'
          },
          {
            label: '防火墙',
            value: '防火墙'
          },
          {
            label: '视频监控',
            value: '视频监控'
          },
          {
            label: '物联网安全',
            value: '物联网安全'
          },
          {
            label: '电子签约',
            value: '电子签约'
          },
          {
            label: '防DDoS服务',
            value: '防DDoS服务'
          },
          {
            label: '信息安全',
            value: '信息安全'
          },
          {
            label: '数据安全',
            value: '数据安全'
          },
          {
            label: '漏洞众测',
            value: '漏洞众测'
          },
          {
            label: '漏洞分析',
            value: '漏洞分析'
          }
        ]
      },
      {
        label: '垂直SaaS',
        value: '垂直SaaS',
        children: [
          {
            label: '体育SaaS',
            value: '体育SaaS'
          },
          {
            label: '营销SaaS',
            value: '营销SaaS'
          },
          {
            label: '医疗SaaS',
            value: '医疗SaaS'
          },
          {
            label: '教育SaaS',
            value: '教育SaaS'
          },
          {
            label: '物流SaaS',
            value: '物流SaaS'
          },
          {
            label: '金融SaaS',
            value: '金融SaaS'
          },
          {
            label: '新零售SaaS',
            value: '新零售SaaS'
          },
          {
            label: '旅游SaaS',
            value: '旅游SaaS'
          },
          {
            label: '农业SaaS',
            value: '农业SaaS'
          },
          {
            label: '人力资源SaaS',
            value: '人力资源SaaS'
          },
          {
            label: '餐饮SaaS',
            value: '餐饮SaaS'
          },
          {
            label: '养老SaaS',
            value: '养老SaaS'
          },
          {
            label: '建筑SaaS',
            value: '建筑SaaS'
          },
          {
            label: '药店SaaS',
            value: '药店SaaS'
          },
          {
            label: '美业SaaS',
            value: '美业SaaS'
          },
          {
            label: '门店管理SaaS',
            value: '门店管理SaaS'
          }
        ]
      },
      {
        label: '企业管理软件',
        value: '企业管理软件',
        children: [
          {
            label: 'CRM',
            value: 'CRM'
          },
          {
            label: '协同办公',
            value: '协同办公'
          },
          {
            label: 'ERP',
            value: 'ERP'
          },
          {
            label: '进销存',
            value: '进销存'
          },
          {
            label: '办公自动化',
            value: '办公自动化'
          },
          {
            label: 'HRM',
            value: 'HRM'
          }
        ]
      },
      {
        label: '创业服务',
        value: '创业服务',
        children: [
          {
            label: '孵化器',
            value: '孵化器'
          },
          {
            label: '加速器',
            value: '加速器'
          },
          {
            label: '众创空间',
            value: '众创空间'
          },
          {
            label: '融资平台',
            value: '融资平台'
          },
          {
            label: '创业培训',
            value: '创业培训'
          },
          {
            label: '创业咨询',
            value: '创业咨询'
          },
          {
            label: '创业推广',
            value: '创业推广'
          },
          {
            label: '创业融资服务',
            value: '创业融资服务'
          }
        ]
      },
      {
        label: '开发者服务',
        value: '开发者服务',
        children: [
          {
            label: 'API',
            value: 'API'
          },
          {
            label: 'SDK',
            value: 'SDK'
          },
          {
            label: 'PaaS',
            value: 'PaaS'
          },
          {
            label: 'DaaS',
            value: 'DaaS'
          },
          {
            label: '开发平台',
            value: '开发平台'
          },
          {
            label: '测试服务',
            value: '测试服务'
          },
          {
            label: 'CaaS',
            value: 'CaaS'
          }
        ]
      },
      {
        label: '数据服务',
        value: '数据服务',
        children: [
          {
            label: '数据分析',
            value: '数据分析'
          },
          {
            label: '数据挖掘',
            value: '数据挖掘'
          },
          {
            label: '数据可视化',
            value: '数据可视化'
          },
          {
            label: '数据备份',
            value: '数据备份'
          },
          {
            label: '数据存储',
            value: '数据存储'
          }
        ]
      },
      {
        label: '企业IT服务',
        value: '企业IT服务',
        children: [
          {
            label: 'CDN',
            value: 'CDN'
          },
          {
            label: 'IDC',
            value: 'IDC'
          },
          {
            label: 'IT基础设施',
            value: 'IT基础设施'
          },
          {
            label: 'IT运维',
            value: 'IT运维'
          },
          {
            label: '外包开发',
            value: '外包开发'
          }
        ]
      },
      {
        label: '云服务',
        value: '云服务',
        children: [
          {
            label: 'Docker',
            value: 'Docker'
          },
          {
            label: '云基础架构',
            value: '云基础架构'
          },
          {
            label: '云存储',
            value: '云存储'
          },
          {
            label: '云安全',
            value: '云安全'
          },
          {
            label: '云爬虫',
            value: '云爬虫'
          },
          {
            label: '云端机器人',
            value: '云端机器人'
          },
          {
            label: '云视频',
            value: '云视频'
          },
          {
            label: '云计算',
            value: '云计算'
          },
          {
            label: '云通讯',
            value: '云通讯'
          },
          {
            label: '公有云',
            value: '公有云'
          },
          {
            label: '混合云',
            value: '混合云'
          },
          {
            label: '私有云',
            value: '私有云'
          }
        ]
      },
      {
        label: '广告营销',
        value: '广告营销',
        children: [
          {
            label: '广告技术',
            value: '广告技术'
          },
          {
            label: '户外广告',
            value: '户外广告'
          },
          {
            label: '整合营销',
            value: '整合营销'
          },
          {
            label: '新媒体营销',
            value: '新媒体营销'
          },
          {
            label: '精准营销',
            value: '精准营销'
          },
          {
            label: '公关服务',
            value: '公关服务'
          },
          {
            label: '社交营销',
            value: '社交营销'
          },
          {
            label: '会展服务',
            value: '会展服务'
          },
          {
            label: 'ASO优化',
            value: 'ASO优化'
          },
          {
            label: '电梯楼宇广告',
            value: '电梯楼宇广告'
          }
        ]
      },
      {
        label: '企业通用服务',
        value: '企业通用服务',
        children: [
          {
            label: '行业解决方案',
            value: '行业解决方案'
          },
          {
            label: '财税服务',
            value: '财税服务'
          },
          {
            label: '后勤服务',
            value: '后勤服务'
          },
          {
            label: '差旅管理',
            value: '差旅管理'
          },
          {
            label: '外包服务',
            value: '外包服务'
          },
          {
            label: '商业分析',
            value: '商业分析'
          },
          {
            label: '企业wifi',
            value: '企业wifi'
          },
          {
            label: '宣传片拍摄',
            value: '宣传片拍摄'
          },
          {
            label: '地推服务',
            value: '地推服务'
          },
          {
            label: '会务服务',
            value: '会务服务'
          },
          {
            label: '团建服务',
            value: '团建服务'
          },
          {
            label: '采购服务',
            value: '采购服务'
          },
          {
            label: '知识产权服务',
            value: '知识产权服务'
          },
          {
            label: '供应链服务',
            value: '供应链服务'
          },
          {
            label: '设计服务',
            value: '设计服务'
          },
          {
            label: '法律服务',
            value: '法律服务'
          },
          {
            label: '人力资源',
            value: '人力资源'
          }
        ]
      },
      {
        label: '咨询服务',
        value: '咨询服务',
        children: [
          {
            label: '财务咨询',
            value: '财务咨询'
          },
          {
            label: '科技咨询',
            value: '科技咨询'
          },
          {
            label: '人力资源咨询',
            value: '人力资源咨询'
          },
          {
            label: '法律咨询',
            value: '法律咨询'
          }
        ]
      },
      {
        label: '智能客服',
        value: '智能客服',
        children: [
          {
            label: '客服机器人',
            value: '客服机器人'
          },
          {
            label: '智能金融客服',
            value: '智能金融客服'
          },
          {
            label: '智能客服技术',
            value: '智能客服技术'
          },
          {
            label: '智能购物助理',
            value: '智能购物助理'
          },
          {
            label: '对话式商务',
            value: '对话式商务'
          }
        ]
      }
    ]
  },
  {
    label: 'VRAR',
    value: 'VRAR',
    children: [
      {
        label: 'VRAR内容',
        value: 'VRAR内容',
        children: [
          {
            label: 'AR游戏',
            value: 'AR游戏'
          },
          {
            label: 'VR电影',
            value: 'VR电影'
          },
          {
            label: 'VR视频',
            value: 'VR视频'
          }
        ]
      },
      {
        label: 'VRAR媒体',
        value: 'VRAR媒体',
        children: [
          {
            label: 'VR社区',
            value: 'VR社区'
          },
          {
            label: 'VR内容UGC平台',
            value: 'VR内容UGC平台'
          },
          {
            label: 'VR内容分发平台',
            value: 'VR内容分发平台'
          }
        ]
      },
      {
        label: 'VRAR应用',
        value: 'VRAR应用',
        children: [
          {
            label: 'VR旅游',
            value: 'VR旅游'
          },
          {
            label: 'AR社交',
            value: 'AR社交'
          },
          {
            label: 'VR社交',
            value: 'VR社交'
          },
          {
            label: 'VR看房',
            value: 'VR看房'
          },
          {
            label: 'VR娱乐',
            value: 'VR娱乐'
          },
          {
            label: 'VR教育',
            value: 'VR教育'
          },
          {
            label: 'VR学车',
            value: 'VR学车'
          },
          {
            label: 'VR医疗',
            value: 'VR医疗'
          },
          {
            label: 'VR直播',
            value: 'VR直播'
          },
          {
            label: 'VR线下体验',
            value: 'VR线下体验'
          },
          {
            label: 'VR情趣',
            value: 'VR情趣'
          }
        ]
      },
      {
        label: 'VRAR底层技术',
        value: 'VRAR底层技术',
        children: [
          {
            label: '动作捕捉',
            value: '动作捕捉'
          },
          {
            label: '手势捕捉',
            value: '手势捕捉'
          },
          {
            label: 'VR防眩晕技术',
            value: 'VR防眩晕技术'
          }
        ]
      },
      {
        label: 'VRAR支撑软件',
        value: 'VRAR支撑软件',
        children: [
          {
            label: 'VR系统平台',
            value: 'VR系统平台'
          },
          {
            label: 'VR开发sdk',
            value: 'VR开发sdk'
          },
          {
            label: 'VR转码',
            value: 'VR转码'
          },
          {
            label: 'VR软件',
            value: 'VR软件'
          },
          {
            label: 'AR软件',
            value: 'AR软件'
          }
        ]
      },
      {
        label: 'VRAR设备',
        value: 'VRAR设备',
        children: [
          {
            label: 'VR体感枪',
            value: 'VR体感枪'
          },
          {
            label: '运动捕捉设备',
            value: '运动捕捉设备'
          },
          {
            label: 'VR输入设备',
            value: 'VR输入设备'
          },
          {
            label: 'VR摄像头',
            value: 'VR摄像头'
          },
          {
            label: 'VR手柄',
            value: 'VR手柄'
          },
          {
            label: 'VR动作传感器',
            value: 'VR动作传感器'
          },
          {
            label: 'VR座椅',
            value: 'VR座椅'
          },
          {
            label: 'AR眼镜',
            value: 'AR眼镜'
          }
        ]
      },
      {
        label: '混合现实',
        value: '混合现实'
      }
    ]
  }
];

// 购地类型
export const BUY_AREA_TYPE = [
  {
    label: '仓储用地',
    value: '仓储用地'
  },
  {
    label: '工业用地',
    value: '工业用地'
  },
  {
    label: '科研用地',
    value: '科研用地'
  }
];

// 科技类企业类型
export const TECHNOLOGY = [
  {
    label: '高新技术企业',
    value: '1'
  },
  {
    label: '独角兽企业',
    value: '2'
  },
  {
    label: '瞪羚企业认定',
    value: '3'
  },
  {
    label: '雏鹰公司',
    value: '4'
  },
  {
    label: '创新型科技企业',
    value: '5'
  },
  {
    label: '科技小巨人企业',
    value: '6'
  },
  {
    label: '专精特新企业',
    value: '7'
  },
  {
    label: '企业技术中心',
    value: '8'
  },
  {
    label: '科技企业孵化器',
    value: '9'
  },
  {
    label: '技术创新示范企业',
    value: '10'
  },
  {
    label: '科技型中小企业',
    value: '11'
  },
  {
    label: '众创空间',
    value: '12'
  },
  {
    label: '隐形冠军企业',
    value: '13'
  },
  {
    label: '技术先进型服务企业',
    value: '14'
  },
  {
    label: '民营科技企业',
    value: '15'
  },
  {
    label: '牛羚企业',
    value: '16'
  },
  {
    label: '专精特新小巨人企业',
    value: '17'
  }
];

// 规上企业
export const ABOVECOMPANY = [
  {
    label: '规模以上工业企业',
    value: 'GUI_S1'
  },
  {
    label: '限额以上批发和零售业',
    value: 'GUI_S2'
  },
  {
    label: '限额以上住宿和餐饮业',
    value: 'GUI_S3'
  },
  {
    label: '规模以上服务业',
    value: 'GUI_S4'
  }
];

// 环保处罚
export const IS_ENP: CascaderOption[] = [
  {
    label: '有',
    value: 'ENP'
  },
  {
    label: '无',
    value: 'N_ENP'
  }
];

// 上市
export const IS_K: CascaderOption[] = [
  {
    label: '是',
    value: 'K'
  },
  {
    label: '否',
    value: 'N_K'
  }
];

// 高企
export const IS_H: CascaderOption[] = [
  {
    label: '是',
    value: 'HT001'
  },
  {
    label: '否',
    value: 'N_HT001'
  }
];

// 是否发生购地
export const IS_BUYAREA: CascaderOption[] = [
  {
    label: '是',
    value: 'BL'
  },
  {
    label: '否',
    value: 'N_BL'
  }
];

// 近三年是否有融资
export const IS_FANC: CascaderOption[] = [
  {
    label: '是',
    value: '1'
  },
  {
    label: '否',
    value: '0'
  }
];

// 营收水平(万元)
export const RLEVEL = [
  {
    label: '100万以内',
    value: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7']
  },
  {
    label: '100万-500万',
    value: ['P8', 'P9', 'P10', 'P11']
  },
  {
    label: '500万-1000万',
    value: ['P12']
  },
  {
    label: '1000万-5000万',
    value: ['P13', 'P14']
  },
  {
    label: '0.5亿-1亿',
    value: ['P15']
  },
  {
    label: '1亿-5亿',
    value: ['P16', 'P17']
  },
  {
    label: '5亿-10亿',
    value: ['P18']
  },
  {
    label: '10亿-50亿',
    value: ['P19']
  },
  {
    label: '50亿-100亿',
    value: ['P20']
  },
  {
    label: '100亿-500亿',
    value: ['P21', 'P22']
  },
  {
    label: '500亿-1000亿',
    value: ['P23']
  },
  {
    label: '1000亿以上',
    value: ['P24']
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
] as any; // 理论上cascader option value不应该传数组
