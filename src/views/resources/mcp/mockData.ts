const data = [
  {
    "id": 1,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "实际控制人",
    "toolNameEn": "get_actual_controller",
    "toolDescription": "查询企业的实际控制人详情，适用于企业风险评估、关联交易识别及商业竞争分析场景。",
    "apiInterface": "实际控制人",
    "tableName": "工商公示股东信息表"
  },
  {
    "id": 2,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "企业年报",
    "toolNameEn": "get_annual_reports",
    "toolDescription": "查询企业年度报告，包括报告年度、经营状态、从业人数、股东股权转让、投资信息等，数据每年公示后同步（通常6月前）。",
    "apiInterface": "企业年报",
    "tableName": "企业年报（工商公示）"
  },
  {
    "id": 3,
    "mcpServer": "企业基座 Server",
    "mcpName": "企业基座 MCP Server",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "受益所有人",
    "toolNameEn": "get_beneficial_owners",
    "toolDescription": "查询企业的受益所有人（UBO）信息，适用于反洗钱合规（AML）、尽职调查及穿透式监管分析场景。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 4,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "分支机构",
    "toolNameEn": "get_branches",
    "toolDescription": "查询企业的分支机构信息，包括名称、负责人、地区、成立日期、登记状态，适用于了解企业组织架构。",
    "apiInterface": "分支机构",
    "tableName": "企业分支机构"
  },
  {
    "id": 5,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "变更记录",
    "toolNameEn": "get_change_records",
    "toolDescription": "查询企业历史变更记录，包括变更事项、变更前后内容、变更日期，适用于股权变更跟踪、经营范围调整了解、重要事项变更历史查询。",
    "apiInterface": "变更记录",
    "tableName": "企业变更记录（工商公示）"
  },
  {
    "id": 6,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "企业简介",
    "toolNameEn": "get_company_profile",
    "toolDescription": "查询企业的简介信息，包括企业名称、简介，适用于企业画像构建、企业业务分析场景。",
    "apiInterface": "企业基本信息",
    "tableName": "企业基本信息"
  },
  {
    "id": 7,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "企业工商信息",
    "toolNameEn": "get_company_registration_info",
    "toolDescription": "查询企业核心登记信息：法定代表人、注册资本、成立日期、登记状态、注册地址等，支持企业名称或统一社会信用代码精确查询。",
    "apiInterface": "企业基本信息",
    "tableName": "企业基本信息"
  },
  {
    "id": 8,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "联系方式",
    "toolNameEn": "get_contact_info",
    "toolDescription": "查询企业联系方式，包括电话号码、用途标签、邮箱、企业网站、是否官网、ICP备案，适用于拓客、获取联系方式场景。",
    "apiInterface": "企业基本信息",
    "tableName": "企业地址（工商公示），企业邮箱（工商公示），企业电话（工商公示），企业网址（工商公示），企业社保信息（工商公示）"
  },
  {
    "id": 9,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "对外投资",
    "toolNameEn": "get_external_investments",
    "toolDescription": "查询企业对外投资信息，包括被投资企业名称、状态、成立日期、持股比例、认缴出资额，适用于分析企业投资布局。",
    "apiInterface": "对外投资",
    "tableName": "企业对外投资"
  },
  {
    "id": 10,
    "mcpServer": "企业基座 Server",
    "mcpName": "企业基座 MCP Server",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "财务数据",
    "toolNameEn": "get_financial_data",
    "toolDescription": "用于检索指定企业的核心财务数据，涵盖资产负债、利润表现、营运能力、偿还能力、成长能力及关键财务比率。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 11,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "主要人员",
    "toolNameEn": "get_key_personnel",
    "toolDescription": "查询企业主要管理人员，包括姓名、职务等高管构成情况，适用于企业管理团队了解、核心人员识别、公司治理结构分析。",
    "apiInterface": "主要人员",
    "tableName": "主要人员工商公示表"
  },
  {
    "id": 12,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "上市信息",
    "toolNameEn": "get_listing_info",
    "toolDescription": "查询企业上市信息，包括上市日期、股票简称、股票代码、上市交易所、总市值、总股本、发行日期，适用于投资分析。",
    "apiInterface": "订制接口_上市公司实时市值查询",
    "tableName": ""
  },
  {
    "id": 13,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "股东信息",
    "toolNameEn": "get_shareholder_info",
    "toolDescription": "查询企业股东构成，包括投资人姓名、持股比例、认缴出资额、出资时间等股权结构情况，适用于股权结构分析、实控人识别。",
    "apiInterface": "",
    "tableName": "工商公示股东信息表"
  },
  {
    "id": 14,
    "mcpServer": "企业基座 Server",
    "mcpName": "企业基座 MCP Server",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "税号开票信息",
    "toolNameEn": "get_tax_invoice_info",
    "toolDescription": "查询企业税号开票信息，包括纳税人识别号、企业类型、地址、联系电话、开户行、开户行账号，适用于财务开票场景。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 15,
    "mcpServer": "企业基座 Server",
    "mcpName": "sc-ent",
    "mcpDescription": "提供工商登记维度的结构化数据，含实控人、受益所有人、财务数据等。以事实记录为基准，从源头压制AI幻觉风险。",
    "tags": [
      "工商登记",
      "股东信息",
      "实控人",
      "受益所有人",
      "财务数据"
    ],
    "toolName": "企业准确性验证",
    "toolNameEn": "verify_company_accuracy",
    "toolDescription": "核实企业名称、法定代表人与统一社会信用代码的匹配性，适用于企业实名认证、准入资质初审及基础信息准确性校验。",
    "apiInterface": "企业验证/企业基本信息",
    "tableName": "企业基本信息"
  },
  {
    "id": 16,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "行政处罚",
    "toolNameEn": "get_administrative_penalty",
    "toolDescription": "查询企业受到的行政处罚记录，包括处罚结果、处罚日期、处罚金额、处罚机关，适用于企业合规经营情况评估。",
    "apiInterface": "行政处罚",
    "tableName": "行政处罚多源综合表（全行业）"
  },
  {
    "id": 17,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "破产重整",
    "toolNameEn": "get_bankruptcy_reorganization",
    "toolDescription": "查询企业破产重整信息，包括案号、申请人、被申请人、公开日期，适用于企业破产风险识别、重整程序跟踪、债权人申请情况了解。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 18,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "经营异常",
    "toolNameEn": "get_business_exception",
    "toolDescription": "查询企业是否被列入经营异常名录，包括列入日期、移出原因和决定机关，适用于企业正常经营状态判断。",
    "apiInterface": "经营异常",
    "tableName": "经营异常工商公示表"
  },
  {
    "id": 19,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "注销备案",
    "toolNameEn": "get_cancellation_record_info",
    "toolDescription": "查询企业注销备案情况，包括注销原因、注销日期、公告状态等企业终止经营信息，适用于企业存续状态确认。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 20,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "立案信息",
    "toolNameEn": "get_case_filing_info",
    "toolDescription": "查询企业涉及的法院立案信息，包括案号、案由、立案日期、原被告双方，适用于企业诉讼情况初步了解、法律纠纷数量统计。",
    "apiInterface": "立案信息",
    "tableName": "立案信息表、立案信息关系表"
  },
  {
    "id": 21,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "动产抵押",
    "toolNameEn": "get_chattel_mortgage_info",
    "toolDescription": "查询企业动产抵押信息，包括登记编号、抵押人、抵押权人、债务人履行债务的期限、被担保主债权数额，适用于动产融资评估。",
    "apiInterface": "动产抵押",
    "tableName": "动产抵押工商公示表"
  },
  {
    "id": 22,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "法院公告",
    "toolNameEn": "get_court_notice",
    "toolDescription": "查询企业涉及的法院公告，包括公告类型、案由、原告被告信息、刊登日期，适用于企业法律事务公告查询、司法程序进展跟踪。",
    "apiInterface": "法院公告",
    "tableName": "法院公告表、法院公告关系表"
  },
  {
    "id": 23,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "违约事项",
    "toolNameEn": "get_default_info",
    "toolDescription": "查询企业债券违约、票据违约、非标资产违约信息，包括违约状态、首次违约日期、累计违约本金，适用于债券投资风险分析。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 24,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "惩戒名单",
    "toolNameEn": "get_disciplinary_list",
    "toolDescription": "查询企业惩戒名单信息，包括类型、惩戒名单领域、列入原因、列入机关、列入日期，适用于信用评估。来源：国家信用信息共享平台。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 25,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "失信信息",
    "toolNameEn": "get_dishonest_info",
    "toolDescription": "查询企业失信被执行人信息，包括涉案金额、执行法院、立案日期、发布日期，适用于企业信用评估、法律风险分析。来源：最高人民法院。",
    "apiInterface": "失信人",
    "tableName": "企业失信被执行表"
  },
  {
    "id": 26,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "环保处罚",
    "toolNameEn": "get_environmental_penalty",
    "toolDescription": "查询企业受到的环保行政处罚，包括处罚结果、处罚日期、处罚单位、处罚金额，适用于企业环保合规评估、ESG分析。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 27,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "股权冻结",
    "toolNameEn": "get_equity_freeze",
    "toolDescription": "查询企业股权被司法冻结的情况，包括被冻结股权数额、冻结期限、执行法院，适用于股东权益风险评估。",
    "apiInterface": "",
    "tableName": "股权冻结工商公示表"
  },
  {
    "id": 28,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "股权出质",
    "toolNameEn": "get_equity_pledge_info",
    "toolDescription": "查询企业股权出质情况，包括出质人、质权人、出质股权数额、登记日期、出质状态，适用于企业融资状况分析、股权风险评估。",
    "apiInterface": "股权出质",
    "tableName": "股权出质工商公示表"
  },
  {
    "id": 29,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "限制出境",
    "toolNameEn": "get_exit_restriction",
    "toolDescription": "查询企业相关人员被法院限制出境的情况，适用于高管个人风险排查、重大案件执行跟踪及司法强制措施预警。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 30,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "担保信息",
    "toolNameEn": "get_guarantee_info",
    "toolDescription": "查询企业担保信息，包括担保方、被担保方、担保方式、担保金额、履行状态、公告日期，适用于评估企业担保风险。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 31,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "开庭公告",
    "toolNameEn": "get_hearing_notice",
    "toolDescription": "查询企业作为当事人的开庭公告，包括案号、案由、开庭时间、当事人身份，适用于企业诉讼动态跟踪、庭审时间查询。",
    "apiInterface": "开庭公告",
    "tableName": "开庭公告表、开庭公告关系表"
  },
  {
    "id": 32,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "限制高消费",
    "toolNameEn": "get_high_consumption_restriction",
    "toolDescription": "查询企业被法院限制高消费的情况，包括限制法定代表人、申请人、立案日期，适用于信用风险评估、合作伙伴风险排查。",
    "apiInterface": "限制高消费",
    "tableName": "限制高消费"
  },
  {
    "id": 33,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "被执行人",
    "toolNameEn": "get_judgment_debtor_info",
    "toolDescription": "查询企业作为被执行人的案件信息，包括执行标的、立案时间、执行法院，适用于企业债务执行情况了解、强制执行风险判断。",
    "apiInterface": "被执行人",
    "tableName": "企业被执行表"
  },
  {
    "id": 34,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "司法拍卖",
    "toolNameEn": "get_judicial_auction",
    "toolDescription": "查询企业资产被司法拍卖的信息，包括拍卖标题、起拍价、评估价、拍卖时间、处置单位，适用于资产处置分析、债权人受偿评估。",
    "apiInterface": "司法拍卖",
    "tableName": "司法拍卖表、司法拍卖关系表"
  },
  {
    "id": 35,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "裁判文书",
    "toolNameEn": "get_judicial_documents",
    "toolDescription": "查询企业涉及的法院判决文书，包括案件案由、裁判结果、涉案金额、当事人信息，适用于法律纠纷历史分析、诉讼风险评估。",
    "apiInterface": "裁判文书",
    "tableName": "裁判文书企业关系表"
  },
  {
    "id": 36,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "土地抵押",
    "toolNameEn": "get_land_mortgage_info",
    "toolDescription": "查询企业土地抵押信息，包括土地坐落、抵押人、抵押权人、抵押起止日期、抵押面积、抵押金额，适用于土地资产抵押分析。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 37,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "清算信息",
    "toolNameEn": "get_liquidation_info",
    "toolDescription": "查询企业清算信息，包括清算组负责人、清算组成员，适用于企业破产或解散清算分析场景。",
    "apiInterface": "",
    "tableName": "清算组成员信息（工商公示）"
  },
  {
    "id": 38,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "诉前调解",
    "toolNameEn": "get_pre_litigation_mediation",
    "toolDescription": "查询企业诉前调解记录，包括案号、案由、当事人、法院、立案日期，适用于纠纷解决跟踪场景。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 39,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "公示催告",
    "toolNameEn": "get_public_exhortation",
    "toolDescription": "查询企业公示催告信息，包括票据号、申请人、持票人、票面金额、票据类型、发布机关、公告日期，适用于票据遗失等法律程序查询。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 40,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "严重违法",
    "toolNameEn": "get_serious_violation",
    "toolDescription": "查询企业是否被列入严重违法失信名单，适用于企业准入严选、重大合规性审查及最高等级信用风险评估。来源：市场监管总局。",
    "apiInterface": "严重违法",
    "tableName": "严重违法工商公示表"
  },
  {
    "id": 41,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "劳动仲裁",
    "toolNameEn": "get_service_announcement",
    "toolDescription": "查询企业涉及的劳动仲裁开庭公告和送达公告，包括仲裁案号、申请人、被申请人及公告发布日期，适用于企业劳动纠纷监控、用工风险排查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 42,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "送达公告",
    "toolNameEn": "get_service_notice",
    "toolDescription": "查询企业相关送达公告，包括案号、案由、当事人、法院、发布日期，适用于法律文书送达情况查询。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 43,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "简易注销",
    "toolNameEn": "get_simple_cancellation_info",
    "toolDescription": "查询企业简易注销相关信息，包括公告期、注销结果、登记机关等简化注销程序情况，适用于企业注销程序了解。",
    "apiInterface": "",
    "tableName": "简易注销公告表"
  },
  {
    "id": 44,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "股权质押",
    "toolNameEn": "get_stock_pledge_info",
    "toolDescription": "查询企业股权质押信息，包括质押人、质权人、质押股份总数、质押市值、状态、公告日期，适用于股票质押风险分析。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 45,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "税务非正常户",
    "toolNameEn": "get_tax_abnormal",
    "toolDescription": "查询企业税务非正常户记录，适用于企业税务合规性扫描、税务黑名单核查及合作伙伴财务风险预警。来源：国家税务总局。",
    "apiInterface": "",
    "tableName": "非正常户表"
  },
  {
    "id": 46,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "欠税公告",
    "toolNameEn": "get_tax_arrears_notice",
    "toolDescription": "查询企业欠税情况，包括欠税税种、欠税余额、新发生欠税金额、发布单位和发布日期，适用于企业纳税信用评估、税务风险判断。",
    "apiInterface": "欠税公告",
    "tableName": "欠税信息表"
  },
  {
    "id": 47,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "税收违法",
    "toolNameEn": "get_tax_violation",
    "toolDescription": "查询企业税收违法信息，包括案件性质、所属税务机关、发布日期，适用于纳税信用评估、税务合规风险识别。来源：国家税务总局。",
    "apiInterface": "",
    "tableName": "重大税收违法表"
  },
  {
    "id": 48,
    "mcpServer": "风控大脑 Server",
    "mcpName": "sc-risk",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "终本案件",
    "toolNameEn": "get_terminated_cases",
    "toolDescription": "查询企业涉及的终结本次执行程序案件信息，包括终本日期、执行标的、未履行金额，适用于企业执行风险了解、债务清偿能力评估。",
    "apiInterface": "",
    "tableName": "终本案件表"
  },
  {
    "id": 49,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "询价评估",
    "toolNameEn": "get_valuation_inquiry",
    "toolDescription": "查询企业资产询价评估信息，包括案号、标的物、所有人、当事人、询价结果、法院、发布日期，适用于资产评估场景。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 50,
    "mcpServer": "风控大脑 Server",
    "mcpName": "风控大脑 MCP Server",
    "mcpDescription": "覆盖失信、被执行、严重违法、财产悬赏等核心红线。触发即熔断，同步输出穿透关联分析，帮助Agent在风险节点自动止损。",
    "tags": [
      "失信黑名单",
      "被执行人",
      "限高消费",
      "司法拍卖",
      "破产重整",
      "财产悬赏"
    ],
    "toolName": "财产悬赏公告",
    "toolNameEn": "get_property_asset_announcement",
    "toolDescription": "查询企业相关的财产悬赏公告，返回案号、被执行人、执行标的金额、未履行金额、执行法院、更新日期及内容。适用于资产追踪与追偿分析、识别被执行主体尚存未履行债务。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 51,
    "mcpServer": "知产引擎 Server",
    "mcpName": "sc-ipe",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "作品著作权",
    "toolNameEn": "get_copyright_work_info",
    "toolDescription": "查询企业作品著作权信息，适用于文创资产价值评估、版权保护现状分析及内容产业背调场景。来源：国家版权局。",
    "apiInterface": "",
    "tableName": "著作权关系表"
  },
  {
    "id": 52,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "网络服务备案",
    "toolNameEn": "get_internet_service_info",
    "toolDescription": "查询企业网站ICP备案、APP备案、小程序备案、算法备案信息，包括名称、备案号、许可证号、审核日期，适用于软件资产分析。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 53,
    "mcpServer": "知产引擎 Server",
    "mcpName": "sc-ipe",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "知产出质",
    "toolNameEn": "get_ipr_pledge",
    "toolDescription": "用于查询企业知识产权出质记录，包括出质知产类型、名称、商标/专利类型、出质公告日、出质期限，仅返回已注销或已解除的知产出质记录，不含当前仍有效的出质登记。",
    "apiInterface": "",
    "tableName": "知识产权出质工商公示表"
  },
  {
    "id": 54,
    "mcpServer": "知产引擎 Server",
    "mcpName": "sc-ipe",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "专利",
    "toolNameEn": "get_patent_info",
    "toolDescription": "查询企业专利信息，适用于企业技术创新能力评估、核心技术储备分析及行业技术壁垒研究场景。来源：国家知识产权局。",
    "apiInterface": "专利查询",
    "tableName": "专利信息（新）、专利关系表（新）"
  },
  {
    "id": 55,
    "mcpServer": "知产引擎 Server",
    "mcpName": "sc-ipe",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "软件著作权",
    "toolNameEn": "get_software_copyright_info",
    "toolDescription": "查询企业软件著作权信息，包括软件名称、软件简称、登记号、版本号、登记日期、权利取得方式，适用于知识产权保护场景。",
    "apiInterface": "",
    "tableName": "著作权关系表"
  },
  {
    "id": 56,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "标准信息",
    "toolNameEn": "get_standard_info",
    "toolDescription": "查询企业参与制定的各类标准，适用于评估企业行业影响力、技术领先地位及标准化合规核查场景。来源：国家标准全文公开系统。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 57,
    "mcpServer": "知产引擎 Server",
    "mcpName": "sc-ipe",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "商标",
    "toolNameEn": "get_trademark_info",
    "toolDescription": "查询企业商标注册信息，适用于企业品牌资产评估、知识产权布局分析及商标侵权风险核查场景。来源：国家知识产权局商标局。",
    "apiInterface": "",
    "tableName": "商标表"
  },
  {
    "id": 58,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "集成电路布图",
    "toolNameEn": "get_integrated_circuit_layout",
    "toolDescription": "查询企业集成电路布图设计登记信息，返回布图设计名称、登记号、申请日期、公告日期、公告号及创作人。适用于半导体/芯片企业知识产权能力评估、投资前技术资产核查。 APP",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 59,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "集成电路布图",
    "toolNameEn": "get_app_info",
    "toolDescription": "查询企业相关 APP 基本信息，返回 APP 名称、下载量级、iOS/安卓最新版本及简介。适用于互联网企业产品矩阵分析、移动端业务规模评估、竞品分析。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 60,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "小程序",
    "toolNameEn": "get_mini_program",
    "toolDescription": "查询企业相关的微信小程序信息，返回小程序名称及类型。适用于企业数字化业务布局分析、微信生态运营能力评估、竞品小程序矩阵了解。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 61,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "微信公众号",
    "toolNameEn": "get_wechat_official_account",
    "toolDescription": "查询企业相关的微信公众号信息，返回公众号名称、微信号、账号类型及简介。适用于企业新媒体运营能力评估、品牌数字化矩阵分析、公众号认证主体核实。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 62,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "线上店铺",
    "toolNameEn": "get_online_store",
    "toolDescription": "查询企业相关的线上电商店铺信息，返回店铺名称及简介。适用于电商渠道分析、品牌在主流电商平台的开店情况核查、零售企业数字化运营评估。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 63,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "微博",
    "toolNameEn": "get_weibo_account",
    "toolDescription": "查询企业相关的微博账号信息，返回微博昵称及简介。适用于企业社交媒体存在感分析、品牌微博运营评估、公关危机前的企业社交媒体矩阵摸底。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 64,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "抖音",
    "toolNameEn": "get_douyin_account",
    "toolDescription": "查询企业相关的抖音账号信息，返回头像、抖音昵称、抖音号及简介。适用于企业短视频平台运营能力评估、品牌抖音矩阵分析、竞品抖音账号信息核查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 65,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "快手",
    "toolNameEn": "get_kuaishou_account",
    "toolDescription": "查询企业相关的快手账号信息，返回头像、快手昵称、快手号及简介。适用于企业短视频平台运营能力评估、品牌快手矩阵分析、竞品快手账号信息核查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 66,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "商业特许经营",
    "toolNameEn": "get_commercial_franchise",
    "toolDescription": "查询企业的商业特许经营备案信息，返回备案公告日期、特许人名称及备案号。适用于加盟连锁品牌资质核查、特许经营合规背景调查、连锁项目投资前的合规验证。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 67,
    "mcpServer": "知产引擎 Server",
    "mcpName": "sc-ipe",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "商标文书",
    "toolNameEn": "get_trademark_document",
    "toolDescription": "查询企业相关的商标评审文书信息，返回商标文书号、申请人、申请人委托代理人、被申请人、被申请人委托代理人、文书类型及公布日期。适用于商标权属争议评估、品牌防御策略制定、商标代理机构选择参考。",
    "apiInterface": "",
    "tableName": "商标表"
  },
  {
    "id": 68,
    "mcpServer": "知产引擎 Server",
    "mcpName": "企查告知产引擎 MCP Server",
    "mcpDescription": "全维度盘点企业专利、商标、软著、国际专利、数字资产矩阵（APP/小程序/公众号/抖音/快手/微博/线上店铺）与商业特许经营。",
    "tags": [
      "专利",
      "商标",
      "国际专利",
      "软件著作权",
      "数字矩阵",
      "APP/小程序",
      "公众号/抖音",
      "商业特许"
    ],
    "toolName": "国际专利",
    "toolNameEn": "get_international_patent",
    "toolDescription": "查询企业的国际专利信息，返回发明名称、法律状态、申请号、申请日期、公开（公告）号、公开（公告）日期及发明人。适用于企业全球知识产权布局分析、竞争对手技术研究、海外业务拓展前的专利尽调。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 69,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "行政许可",
    "toolNameEn": "get_administrative_license",
    "toolDescription": "查询企业行政许可信息，适用于企业合法经营资质核查、业务准入资格审查及合规性分析场景。来源：各行政审批机关公示系统。",
    "apiInterface": "",
    "tableName": "行政许可工商公示表"
  },
  {
    "id": 70,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "招投标信息",
    "toolNameEn": "get_bidding_info",
    "toolDescription": "查询企业参与的招投标项目，包括项目名称、中标情况、项目金额、招标单位，适用于企业业务拓展分析、市场份额评估、竞争对手中标分析。",
    "apiInterface": "招投标信息",
    "tableName": ""
  },
  {
    "id": 71,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "企业公告",
    "toolNameEn": "get_company_announcement",
    "toolDescription": "查询企业发布的各类公告，适用于追踪上市企业重大动态、披露信息核查及企业信息透明度评估场景。来源：沪深港等交易所公告系统。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 72,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "信用评价",
    "toolNameEn": "get_credit_evaluation",
    "toolDescription": "查询企业官方信用评级，包括国家税务总局纳税信用等级及海关总署海关信用等级（高级认证/一般认证等），适用于供应商信用背调及政府采购资格审查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 73,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "融资信息",
    "toolNameEn": "get_financing_records",
    "toolDescription": "查询企业融资信息，包括创投融资、上市融资、增发融资，适用于追踪企业成长轨迹、投融资历史分析及市场认可度评估。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 74,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "荣誉信息",
    "toolNameEn": "get_honor_info",
    "toolDescription": "查询企业获得的荣誉信息，包括名称、荣誉类型、级别、认证年份、发布日期、发布单位，适用于企业声誉评估场景。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 75,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "进出口信用",
    "toolNameEn": "get_import_export_credit",
    "toolDescription": "查询企业进出口信用信息，包括所在地海关、经营类别、统计经济区划、行业种类、跨境贸易电子商务类型、信用等级、备案日期，适用于国际贸易合作评估。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 76,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "新闻舆情",
    "toolNameEn": "get_news_sentiment",
    "toolDescription": "查询企业相关新闻报道和舆情，包括新闻标题、发布时间和情感倾向，适用于声誉监控、品牌形象分析、危机公关预警、企业重大事项跟踪。",
    "apiInterface": "新闻舆情",
    "tableName": ""
  },
  {
    "id": 77,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "资质证书",
    "toolNameEn": "get_qualifications",
    "toolDescription": "查询企业获得的各类资质证书，包括证书类型、等级、有效期、证书状态，适用于企业专业能力评估、行业准入资格确认、资质有效性检查。",
    "apiInterface": "",
    "tableName": "资质证书主表"
  },
  {
    "id": 78,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "双随机抽查",
    "toolNameEn": "get_random_check",
    "toolDescription": "用于查询企业双随机抽查记录，包括计划编号、计划名称、任务编号、任务名称、抽查类型、抽查机关、完成日期，仅返回已完成的双随机抽查记录。适用于企业监管合规情况评估、市场监管记录核查、行业合规尽调等场景。",
    "apiInterface": "",
    "tableName": "双随机抽查结果工商公示表"
  },
  {
    "id": 79,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "上榜榜单",
    "toolNameEn": "get_ranking_list_info",
    "toolDescription": "查询企业上榜的各类榜单，包括榜单名称、榜内排名、来源、榜单类型、榜内名称、发布日期，适用于资本运作分析场景。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 80,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "招聘信息",
    "toolNameEn": "get_recruitment_info",
    "toolDescription": "查询企业招聘信息，包括发布日期、招聘职位、月薪、学历、经验、办公地点，适用于企业人才需求分析、经营活跃度判断场景。",
    "apiInterface": "",
    "tableName": "招聘信息表"
  },
  {
    "id": 81,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "抽查检查",
    "toolNameEn": "get_spot_check_info",
    "toolDescription": "查询企业抽查检查记录，包括检查实施机关、类型、日期、结果，适用于经营资质核查场景。来源：国家双随机抽查结果公示系统。",
    "apiInterface": "",
    "tableName": "抽查检查工商公示表"
  },
  {
    "id": 82,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "电信许可",
    "toolNameEn": "get_telecom_license",
    "toolDescription": "查询企业电信业务经营许可信息，包括许可证号、业务分类、业务种类、覆盖范围、是否有效，适用于企业合规性评估场景。来源：工业和信息化部。",
    "apiInterface": "",
    "tableName": "电信许可证书"
  },
  {
    "id": 83,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "纳税人资质",
    "toolNameEn": "get_taxpayer_qualification",
    "toolDescription": "查询企业的增值税纳税人资质信息，返回纳税人识别号、资格类型（一般纳税人/小规模纳税人）、主管税务机关、有效期起止及当前状态。适用于采购商确认供应商开票资质、税务筹划前的资格核查。",
    "apiInterface": "税务评级/一般纳税人",
    "tableName": "纳税A级/一般纳税人"
  },
  {
    "id": 84,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "游戏审批",
    "toolNameEn": "get_game_approval",
    "toolDescription": "查询企业相关游戏产品的审批版号信息，返回游戏名称、申报类别、审批类型、运营单位、出版单位、文号、出版物号及批准时间。适用于游戏行业合规核查、投资游戏企业前的版号资产盘点。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 85,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "科技成果",
    "toolNameEn": "get_tech_achievement",
    "toolDescription": "查询企业的科技成果登记信息，返回成果名称、登记号、完成单位、登记单位、登记日期、完成人及合作完成单位。适用于企业技术创新能力评估、科技型企业资质核查、高新技术企业认定辅助。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 86,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "政府公告",
    "toolNameEn": "get_government_announcement",
    "toolDescription": "查询与企业相关的政府部门公告信息，返回公告标题、发布机构、发布日期、公告类型及内容。适用于政策影响分析、企业涉及政府监管公告的快速检索、招标合规/项目申报核查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 87,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "相关公告",
    "toolNameEn": "get_related_announcement",
    "toolDescription": "查询企业相关的证券类公告信息，返回公告标题、公告类型、证券类型、证券简称、证券代码及日期。适用于上市企业信息披露跟踪、证券类重大事项监控、投资决策前的公告检索。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 88,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "政府约谈",
    "toolNameEn": "get_government_interview",
    "toolDescription": "查询企业被政府部门约谈的相关信息，返回新闻标题、约谈问题、约谈机关、约谈日期及发布日期。适用于企业合规监管风险跟踪、供应商准入前的监管风险评估、识别曾受监管关注的主体。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 89,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "软件违规",
    "toolNameEn": "get_software_violation",
    "toolDescription": "查询企业相关软件（APP 等）的违规通报信息，返回应用名称、版本号、所涉问题、数据来源及发布日期。适用于互联网企业软件合规评估、数据安全/隐私合规核查、供应商准入前的合规背调。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 90,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "未准入境",
    "toolNameEn": "get_entry_denied",
    "toolDescription": "查询企业相关产品未获准入境的通报记录，返回产品名称、产品类型、生产企业信息、品牌、数量/重量、未准入境原因、进境口岸、报送时间及发布日期。适用于进出口企业贸易合规风险评估、海关监管信息核查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 91,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "产品召回",
    "toolNameEn": "get_product_recall",
    "toolDescription": "查询企业涉及的产品召回信息，返回召回产品名称、召回企业及发布日期。适用于产品质量安全风险评估、消费品企业供应链准入核查、品牌声誉背调。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 92,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "假冒化妆品",
    "toolNameEn": "get_counterfeit_cosmetics",
    "toolDescription": "查询企业涉及的假冒化妆品公告信息，返回产品名称、规格、生产商、授权商、运营单位及公告时间。适用于化妆品行业渠道合规评估、品牌方识别未授权假冒产品、化妆品供应链准入核查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 93,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "国有土地受让",
    "toolNameEn": "get_land_grant_info",
    "toolDescription": "查询企业国有土地受让信息，返回土地位置、面积（平方米）、成交价格（万元）、土地用途、发布/批准单位及发布/签订日期。适用于企业土地资产规模评估、工业/房地产企业资产盘点、招商引资分析。",
    "apiInterface": "",
    "tableName": "购地数据表"
  },
  {
    "id": 94,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "土地转让",
    "toolNameEn": "get_land_transfer_info",
    "toolDescription": "查询企业参与的土地转让信息，返回土地位置、面积（公顷）、转让价格（万元）、土地用途、原土地使用权人、现有土地使用权人及成交日期。适用于企业土地资产流转历史分析、不动产投资前的资产核查。",
    "apiInterface": "",
    "tableName": "购地数据表"
  },
  {
    "id": 95,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "sc-compass",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "产品抽查",
    "toolNameEn": "get_product_spot_check",
    "toolDescription": "查询企业的产品抽查结果信息，返回产品名称、规格型号、生产日期/批号、生产单位、经营单位、抽查/公告时间及抽查结果。适用于产品质量合规风险核查、供应商准入前的质量背调。",
    "apiInterface": "",
    "tableName": "双随机抽查结果工商公示表"
  },
  {
    "id": 96,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "广告审查",
    "toolNameEn": "get_advertising_review",
    "toolDescription": "查询企业相关产品的广告审查批准信息，返回广告批准文号、产品名称、批准文号/注册号、所属类别、广告审查机关及广告审查日期。适用于医药、保健品等特殊行业广告合规核查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 97,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "产权交易",
    "toolNameEn": "get_property_rights_transaction",
    "toolDescription": "查询企业参与的产权交易挂牌信息，返回标的名称、交易价格、标的企业、转让/处置方及起始日期。适用于并购尽调中了解目标企业资产处置历史、资产重组分析、国资企业产权流转跟踪。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 98,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "资产拍卖",
    "toolNameEn": "get_asset_auction",
    "toolDescription": "查询企业相关的资产拍卖信息，返回拍卖标题、起拍价、竞拍时间、结束时间及处置单位。适用于企业资产处置风险识别、法拍资产信息获取、资产交易投资机会分析。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 99,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "食品安全",
    "toolNameEn": "get_food_safety",
    "toolDescription": "查询企业相关的食品安全抽检信息，返回食品名称、抽检次数、被抽检企业、标称生产企业、地址、规格型号、生产日期/批号及抽检结果。适用于食品行业供应链准入、食品安全风险跟踪。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 100,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "私募基金管理人",
    "toolNameEn": "get_private_fund_manager",
    "toolDescription": "查询企业的私募基金管理人登记信息，返回机构名称、登记编号、登记日期、机构类型、管理规模区间及管理基金数。适用于私募基金管理人资质核查、金融机构合作前背景调查。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 101,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "投资机构",
    "toolNameEn": "get_investment_institution",
    "toolDescription": "查询企业的投资机构基本信息，返回机构名称、机构类型、总部地区、成立年份、管理资金规模及机构简介。适用于创业企业了解潜在投资人背景、投融资市场分析、投资机构画像研究。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 102,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "信用承诺",
    "toolNameEn": "get_credit_commitments",
    "toolDescription": "查询企业向监管机构或社会做出的公开信用承诺记录，返回承诺编码、类型、承诺事由、承诺内容、承诺作出日期、履行状态及受理单位。适用于企业合规诚信度评估、审查企业信用承诺履行情况。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 103,
    "mcpServer": "经营罗盘 Server",
    "mcpName": "经营罗盘 MCP Server",
    "mcpDescription": "覆盖招投标、资质荣誉、信用评级、新闻舆情、融资租赁、产品抽查、土地受让、私募基金管理人等经营全维度。",
    "tags": [
      "招投标",
      "资质荣誉",
      "新闻舆情",
      "纳税人资质",
      "产品召回",
      "食品安全",
      "土地受让",
      "私募基金",
      "广告审查"
    ],
    "toolName": "融资租赁",
    "toolNameEn": "get_financing_lease_info",
    "toolDescription": "查询企业融资租赁相关登记信息，返回登记编号、出租人名称、承租人名称、租赁物描述、合同金额及登记日期。适用于企业融资结构分析、金融机构授信前资产负债评估。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 104,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史行政许可",
    "toolNameEn": "get_historical_admin_license",
    "toolDescription": "查询企业历史行政许可记录，包括许可证名称、编号、许可机关及有效期，适用于追溯企业历史资质情况，识别曾持有特定资质的主体。",
    "apiInterface": "",
    "tableName": "行政许可工商公示表"
  },
  {
    "id": 105,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史行政处罚",
    "toolNameEn": "get_historical_admin_penalty",
    "toolDescription": "查询企业历史行政处罚记录，包括处罚结果、处罚单位、处罚日期和处罚金额，用于企业合规历史深度排查。",
    "apiInterface": "历史行政处罚",
    "tableName": "行政处罚多源综合表（全行业）"
  },
  {
    "id": 106,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史破产重整",
    "toolNameEn": "get_historical_bankruptcy",
    "toolDescription": "查询企业历史破产重整程序记录，包括案号、当事人、公开日期等，用于识别企业曾经历的极端历史风险事件。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 107,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史经营异常",
    "toolNameEn": "get_historical_business_exception",
    "toolDescription": "查询企业历史上曾被列入经营异常名录的记录，包括列入原因、列入日期、移出原因、移出日期及决定机关，用于识别经营异常修复型主体。",
    "apiInterface": "",
    "tableName": "经营异常工商公示表"
  },
  {
    "id": 108,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史立案信息",
    "toolNameEn": "get_historical_case_filing",
    "toolDescription": "查询企业历史立案信息，包括案号、案由、当事人、立案日期等，用于掌握企业历史进入司法程序的起点记录。",
    "apiInterface": "",
    "tableName": "立案信息表、立案信息关系表"
  },
  {
    "id": 109,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史动产抵押",
    "toolNameEn": "get_historical_chattel_mortgage",
    "toolDescription": "查询企业历史动产抵押记录，包括登记编号、抵押权人、抵押人、债务人履行债务的期限、被担保主债权数额、状态、登记日期，适用于追溯企业历史融资担保行为与资产处置轨迹。",
    "apiInterface": "",
    "tableName": "动产抵押工商公示表"
  },
  {
    "id": 110,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史法院公告",
    "toolNameEn": "get_historical_court_notice",
    "toolDescription": "查询企业历史涉及的法院公告记录，包括公告类型、案号、案由、公告人、刊登日期、原被告信息（仅返回对手方），用于历史司法公告全面梳理与法律事务历史回溯。",
    "apiInterface": "",
    "tableName": "法院公告表、法院公告关系表"
  },
  {
    "id": 111,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史失信被执行人",
    "toolNameEn": "get_historical_dishonest",
    "toolDescription": "查询企业历史上曾被列入失信被执行人名单但现已移出的记录，包含案号、执行法院、涉案金额、立案日期等，适用于识别信用修复型主体曾失信但已移出名单需评估修复真实性、授信场景中对合作方历史失信的深度排查、评估…",
    "apiInterface": "",
    "tableName": "企业失信被执行表"
  },
  {
    "id": 112,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史环保处罚",
    "toolNameEn": "get_historical_environmental_penalty",
    "toolDescription": "查询企业历史环保行政处罚记录，包括处罚结果、处罚金额及处罚机关，适用于ESG合规审查和企业环境风险历史评估。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 113,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史股权冻结",
    "toolNameEn": "get_historical_equity_freeze",
    "toolDescription": "查询企业历史股权被司法冻结的记录，包括被执行人、股权数额、执行法院、冻结起止日期等，用于分析股权历史受限情况。",
    "apiInterface": "",
    "tableName": "股权冻结工商公示表"
  },
  {
    "id": 114,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史股权出质",
    "toolNameEn": "get_historical_equity_pledge",
    "toolDescription": "查询企业历史股权出质记录，包括质权登记编号、出质人、质权人、出质股权数额、登记日期及状态，用于企业历史融资行为与质押风险分析。",
    "apiInterface": "",
    "tableName": "股权出质工商公示表"
  },
  {
    "id": 115,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史主要人员",
    "toolNameEn": "get_historical_executives",
    "toolDescription": "查询企业历史高管任职信息，包括历任高管姓名、职务、任职日期及卸任日期，适用于追溯企业历史管理团队构成与公司治理结构历史分析。",
    "apiInterface": "",
    "tableName": "主要人员工商公示表"
  },
  {
    "id": 116,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史开庭公告",
    "toolNameEn": "get_historical_hearing_notice",
    "toolDescription": "查询企业历史作为当事人的开庭公告记录，包括案号、案由、开庭时间、当事人信息等，用于历史诉讼频率统计和法律纠纷历史全貌了解。",
    "apiInterface": "",
    "tableName": "开庭公告表、开庭公告关系表"
  },
  {
    "id": 117,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史限制高消费",
    "toolNameEn": "get_historical_high_consumption_ban",
    "toolDescription": "查询企业历史上曾被法院限制高消费但现已解除的记录，包括案号、申请人、立案日期等，用于评估历史执行风险频率。",
    "apiInterface": "",
    "tableName": "限制高消费"
  },
  {
    "id": 118,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史荣誉信息",
    "toolNameEn": "get_historical_honor",
    "toolDescription": "查询企业历史荣誉记录，包括曾获得但已过期或不再有效的资质、奖项、称号等，适用于企业历史社会信用与品牌声誉回溯。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 119,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史备案网站",
    "toolNameEn": "get_historical_internet_service",
    "toolDescription": "查询企业历史备案网站记录，包括网站域名、备案号、主办单位及审核时间，适用于追溯企业互联网资产历史轨迹。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 120,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史对外投资",
    "toolNameEn": "get_historical_investments",
    "toolDescription": "查询企业历史上曾持有但已退出的对外投资记录，包括被投资企业名称、曾持有股权比例、退出日期等，还原企业历史投资版图。",
    "apiInterface": "",
    "tableName": "企业对外投资"
  },
  {
    "id": 121,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史知产出质",
    "toolNameEn": "get_historical_ipr_pledge",
    "toolDescription": "查询企业历史知识产权出质记录，包括质权登记编号、出质人、质权人、出质知识产权名称、登记日期及状态，适用于企业历史无形资产融资行为分析。",
    "apiInterface": "",
    "tableName": "知识产权出质工商公示表"
  },
  {
    "id": 122,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史被执行人",
    "toolNameEn": "get_historical_judgment_debtor",
    "toolDescription": "查询企业历史上曾作为被执行人的案件记录。适用于评估企业历史偿债能力与债务清偿习惯、深度了解企业过往执行情况，识别历史重大债务风险、授信合作前的历史被执行深度排查、风控模型历史执行特征维度等场景。",
    "apiInterface": "",
    "tableName": "企业被执行表"
  },
  {
    "id": 123,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史裁判文书",
    "toolNameEn": "get_historical_judicial_docs",
    "toolDescription": "查询企业历史裁判文书记录，包括文书标题、案由、案号、案件金额、裁判结果及当事人信息，适用于历史司法纠纷全面梳理。",
    "apiInterface": "",
    "tableName": "裁判文书企业关系表"
  },
  {
    "id": 124,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史土地抵押",
    "toolNameEn": "get_historical_land_mortgage",
    "toolDescription": "查询企业历史土地抵押记录，包括土地坐落、面积、抵押人、抵押权人，适用于追溯企业历史不动产抵押融资行为。",
    "apiInterface": "",
    "tableName": "购地数据表"
  },
  {
    "id": 125,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史法定代表人",
    "toolNameEn": "get_historical_legal_rep",
    "toolDescription": "查询企业历任法定代表人信息，还原企业法人更迭全链路，包含各任法定代表人姓名、任职起止日期。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 126,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史上市信息",
    "toolNameEn": "get_historical_listing",
    "toolDescription": "查询企业历史上市挂牌信息，包括上市/挂牌日期、退市/摘牌日期、股票简称、股票代码，适用于追溯企业资本运作历史。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 127,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史专利信息",
    "toolNameEn": "get_historical_patent",
    "toolDescription": "查询企业历史专利信息，包括专利名称、专利号、类型、申请日及权利人，适用于追溯企业技术资产历史积累。",
    "apiInterface": "",
    "tableName": "专利信息（新）、专利关系表（新）"
  },
  {
    "id": 128,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史诉前调解",
    "toolNameEn": "get_historical_pre_litigation_mediation",
    "toolDescription": "查询企业历史诉前调解记录，包括案由、当事人、立案日期，适用于了解企业历史商业纠纷的非诉讼处理情况。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 129,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史双随机抽查",
    "toolNameEn": "get_historical_random_check",
    "toolDescription": "查询企业历史双随机抽查记录，包括抽查事项、检查机关、抽查结果、抽查日期等，适用于企业历史日常监管表现回溯。",
    "apiInterface": "",
    "tableName": "双随机抽查结果工商公示表"
  },
  {
    "id": 130,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史工商信息",
    "toolNameEn": "get_historical_registration",
    "toolDescription": "查询企业历史上曾使用过但已变更的工商登记信息，包括历史曾用名、历史注册资本、历史注册地址、历史经营范围等变更轨迹。",
    "apiInterface": "",
    "tableName": "曾用名"
  },
  {
    "id": 131,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史严重违法",
    "toolNameEn": "get_historical_serious_violation",
    "toolDescription": "查询企业历史上曾被列入严重违法失信企业名单的记录，包括列入原因、列入日期、移出原因、移出日期，是最高等级历史信用风险回溯工具。",
    "apiInterface": "",
    "tableName": "严重违法工商公示表"
  },
  {
    "id": 132,
    "mcpServer": "历史存档 Server",
    "mcpName": "历史存档 MCP Server",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史送达公告",
    "toolNameEn": "get_historical_service_notice",
    "toolDescription": "查询企业历史司法送达公告记录，包括案号、发布法院，适用于追溯企业历史司法被通知情况与诉讼参与记录。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 133,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史股东信息",
    "toolNameEn": "get_historical_shareholders",
    "toolDescription": "查询企业历史股东信息，包括已完全退出的股东名称、曾持有股份比例、认缴出资额、参股日期及退出日期，还原企业历史股权结构全貌。",
    "apiInterface": "",
    "tableName": "工商公示股东信息表"
  },
  {
    "id": 134,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史抽查检查",
    "toolNameEn": "get_historical_spot_check",
    "toolDescription": "查询企业历史抽查检查记录，包括检查实施机关、检查类型、检查结果、检查日期等，用于企业历史监管合规表现回溯。",
    "apiInterface": "",
    "tableName": "抽查检查工商公示表"
  },
  {
    "id": 135,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史欠税公告",
    "toolNameEn": "get_historical_tax_arrears",
    "toolDescription": "查询企业历史欠税公告记录，包括欠税税种、欠税余额、税务机关及公告日期，适用于识别企业历史税务合规情况，发现曾存在欠税问题的主体。",
    "apiInterface": "",
    "tableName": "欠税信息表"
  },
  {
    "id": 136,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史终本案件",
    "toolNameEn": "get_historical_terminated_cases",
    "toolDescription": "查询企业历史终结本次执行程序案件记录，包括案号、执行法院、终本日期、立案日期、执行标的及未履行金额等，用于评估企业历史债务清偿能力。",
    "apiInterface": "",
    "tableName": "终本案件表"
  },
  {
    "id": 137,
    "mcpServer": "历史存档 Server",
    "mcpName": "sc-history",
    "mcpDescription": "追溯企业过往行为轨迹，识别\"洗白型\"主体。企业认证后开通。",
    "tags": [
      "历史股东",
      "历史法代",
      "历史失信",
      "历史投资",
      "历史风险"
    ],
    "toolName": "历史商标信息",
    "toolNameEn": "get_historical_trademark",
    "toolDescription": "查询企业历史商标信息，包括商标名称、注册号、类别、状态，适用于追溯企业品牌资产历史布局。",
    "apiInterface": "",
    "tableName": "商标表"
  },
  {
    "id": 138,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-行政处罚",
    "toolNameEn": "get_executive_admin_penalty",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史行政处罚记录已解除/过期，包括决定文书号、处罚结果、处罚金额、处罚单位、处罚日期，适用于法代/高管候选人入职背调中核查个人监管处罚记录、授信申请中…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 139,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-作为最终受益人",
    "toolNameEn": "get_executive_beneficial_owner",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高作为最终受益人的企业列表，基于央行3号令受益所有人识别标准，返回受益股份比例、受益类型、任职类型。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 140,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-立案信息",
    "toolNameEn": "get_executive_case_filing",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高涉及的法院立案信息，包括案号、立案日期、当事人、法院名称等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 141,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-控制企业",
    "toolNameEn": "get_executive_controlled_companies",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前实际控制的企业列表，包括控制企业名称、登记状态、成立日期、所属地区、所属行业及投资比例。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 142,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-法院公告",
    "toolNameEn": "get_executive_court_notice",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高涉及的法院公告信息，包括公告类型、案号、案由、执行法院、公布日期、原被告信息等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 143,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-失信被执行人",
    "toolNameEn": "get_executive_dishonest",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前是否存在失信被执行人记录，包括案号、执行法院、涉案金额等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 144,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-股权冻结",
    "toolNameEn": "get_executive_equity_freeze",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高名下股权当前是否被司法冻结，包括股权数额、执行法院、通知文书号、冻结状态及期限等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 145,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-股权出质",
    "toolNameEn": "get_executive_equity_pledge",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高名下股权出质情况，包括质权登记编号、出质人、质权人、出质股权数额、登记日期及状态等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 146,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-限制出境",
    "toolNameEn": "get_executive_exit_restriction",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高是否被法院限制出境，包括案号、限制出境对象、被执行人信息、执行标的金额等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 147,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-开庭公告",
    "toolNameEn": "get_executive_hearing_notice",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高涉及的开庭公告信息，包括案号、案由、开庭日期、当事人信息等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 148,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-限制高消费",
    "toolNameEn": "get_executive_high_consumption_ban",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前是否被法院限制高消费，包括案号、限制令对象、关联对象、立案日期、申请人等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 149,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史行政处罚",
    "toolNameEn": "get_executive_historical_admin_penalty",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史行政处罚记录已解除/过期，包括处罚当事人、违法事实、处罚单位、处罚日期，适用于法代/高管候选人入职背调中核查个人监管处罚记录、授信申请中评估关键人…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 150,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史立案信息",
    "toolNameEn": "get_executive_historical_case_filing",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史立案信息，仅返回已结案或已撤案的立案记录，适用于追溯该人员历史涉诉参与全貌。数据更新频率：T+0。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 151,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史法院公告",
    "toolNameEn": "get_executive_historical_court_notice",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史法院公告记录，返回与该人员相关的已过期历史法院公告，适用于追溯该人员历史司法被通知情况。数据更新频率：T+0。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 152,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史失信被执行人",
    "toolNameEn": "get_executive_historical_dishonest",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史上曾被列入失信被执行人名单已移出的记录，包括案号、执行法院、涉案金额等，用于个人深度背调。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 153,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史股权冻结",
    "toolNameEn": "get_executive_historical_equity_freeze",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史股权冻结记录，仅返回已解冻或已到期的冻结记录，适用于评估该人员历史资产风险与债务处置轨迹。数据更新频率：T+1。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 154,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史股权出质",
    "toolNameEn": "get_executive_historical_equity_pledge",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史股权出质记录，仅返回已注销或已到期的出质记录，适用于评估该人员历史融资担保行为与资产处置轨迹。数据更新频率：T+1。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 155,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史开庭公告",
    "toolNameEn": "get_executive_historical_hearing_notice",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史开庭公告记录，仅返回已开庭完毕的历史公告，适用于追溯该人员历史庭审参与情况。数据更新频率：T+0。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 156,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史限制高消费",
    "toolNameEn": "get_executive_historical_high_consumption_ban",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史上曾被限制高消费已解除的记录，包括案号、限制令对象、关联对象、立案日期等，用于关键人物历史信用修复识别。",
    "apiInterface": "",
    "tableName": " "
  },
  {
    "id": 157,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史对外投资",
    "toolNameEn": "get_executive_historical_investments",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史上曾持有但已退出的对外投资记录，包括被投资企业名称、注册资本、持股起止时间等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 158,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史被执行人",
    "toolNameEn": "get_executive_historical_judgment_debtor",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史上曾作为被执行人的案件记录，包括案号、执行标的、执行法院、立案日期。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 159,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史裁判文书",
    "toolNameEn": "get_executive_historical_judicial_docs",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史裁判文书记录，包括文书标题、案号、当事人、案件金额、裁判日期、发布日期，适用于追溯个人历史涉诉判决记录，评估历史司法纠纷严重程度、配合历史立案、历…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 160,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史担任法定代表人",
    "toolNameEn": "get_executive_historical_legal_rep_roles",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史上曾担任法定代表人的企业列表，包括企业名称、注册资本、地区、企业状态、担任起止时间等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 161,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史合作伙伴",
    "toolNameEn": "get_executive_historical_partners",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史合作伙伴记录，返回该人员历史上曾有业务往来但已终止的合作企业，适用于追溯该人员历史商业关系网络。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 162,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史在外任职",
    "toolNameEn": "get_executive_historical_positions",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史上曾在其他企业任职已离职的记录，包括曾任职企业名称、职位、任职起止时间、行业等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 163,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史诉前调解",
    "toolNameEn": "get_executive_historical_pre_litigation_mediation",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史诉前调解记录已结案，包括案号、案由、当事人、法院、立案日期，适用于核查个人商业纠纷调解记录，评估个人信用与纠纷处理历史、配合其他司法工具评估个人纠…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 164,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史全部关联企业",
    "toolNameEn": "get_executive_historical_related_companies",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史全部关联企业，汇聚该人员历史上曾担任法代、股东、高管或进行投资的所有企业已退出/卸任，适用于全面梳理个人历史商业版图，了解其过往控制/参与企业、识…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 165,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史送达公告",
    "toolNameEn": "get_executive_historical_service_notice",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史司法送达公告记录，返回已结案的历史法律文书送达公告，适用于追溯该人员历史司法被通知情况。数据更新频率：T+0。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 166,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-历史终本案件",
    "toolNameEn": "get_executive_historical_terminated_cases",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高历史终本案件记录，仅返回已移出终本名单的历史记录，适用于追溯个人历史偿债能力，识别曾出现终本但已处置的主体、配合历史失信、历史被执行构建完整历史个人风…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 167,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-对外投资",
    "toolNameEn": "get_executive_investments",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前对外投资情况，同时返回直接投资和间接投资两个维度的完整数据。直接投资含持股比例与持股起止时间；间接投资含间接持股比例。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 168,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-被执行人",
    "toolNameEn": "get_executive_judgment_debtor",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前是否作为被执行人，包括案号、执行标的、执行法院、立案时间等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 169,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-裁判文书",
    "toolNameEn": "get_executive_judicial_docs",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高涉及的司法裁判文书，包括文书标题、案号、案件金额等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 170,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-担任法定代表人",
    "toolNameEn": "get_executive_legal_rep_roles",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前正在担任法定代表人的企业列表，包括企业名称、登记状态、持股比例、担任法定代表人起止时间、注册资本、地区及行业。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 171,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-在外任职",
    "toolNameEn": "get_executive_positions",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前在外担任职务的企业列表，包括职位名称、任职起止时间、企业登记状态、注册资本、地区及行业。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 172,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-诉前调解",
    "toolNameEn": "get_executive_pre_litigation_mediation",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前涉及的诉前调解记录，包括案号、案由、当事人、法院、立案日期，适用于核查个人商业纠纷调解记录，评估个人信用与纠纷处理历史、配合其他司法工具评估个人纠…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 173,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-财产悬赏公告",
    "toolNameEn": "get_executive_property_reward_notice",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高相关财产悬赏公告记录，包括发布法院、案号、更新日期，适用于核查个人是否存在法院财产悬赏公告，识别严重失信被执行人、配合失信、被执行、终本案件工具识别极…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 174,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-全部关联企业",
    "toolNameEn": "get_executive_related_companies",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高当前全部关联企业，涵盖其以股东、法定代表人、高管等任意角色关联的所有企业，包括企业名称、登记状态、关联角色、持股比例、注册资本、成立日期、地区及行业。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 175,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-送达公告",
    "toolNameEn": "get_executive_service_notice",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高涉及的法律文书送达公告，包括案号、当事人、法院、发布日期等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 176,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-股权质押",
    "toolNameEn": "get_executive_stock_pledge",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高上市公司股东股票质押情况，包括质押人、参股企业、质押股份总数、质押市值、状态等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 177,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-税收违法",
    "toolNameEn": "get_executive_tax_violation",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高税收违法记录，包括案件性质、处罚金额、所属税务机关、发布日期，适用于高管候选人背调中核查个人税务合规情况、授信/尽调中评估关键人员的个人税务风险、识别…",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 178,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-终本案件",
    "toolNameEn": "get_executive_terminated_cases",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高涉及的终结本次执行程序案件，包括案号、执行法院、终本日期、执行标的及未履行金额等。",
    "apiInterface": "",
    "tableName": ""
  },
  {
    "id": 179,
    "mcpServer": "董监高画像 Server",
    "mcpName": "董监高画像 MCP Server",
    "mcpDescription": "以人查风险：董监高个人风险 + 关联企业穿透（企业征信视角）。需「企业名称 + 董监高姓名」双参数锚定。",
    "tags": [
      "董监高",
      "UBO识别",
      "关联企业",
      "法代背调",
      "高管穿透"
    ],
    "toolName": "董监高-询价评估",
    "toolNameEn": "get_executive_valuation_inquiry",
    "toolDescription": "以企业名称+董监高姓名双参数实体强锚定，查询目标董监高涉及的资产询价评估记录，包括案号、标的物、标的物所有人、询价结果、法院、发布日期等。 ",
    "apiInterface": "",
    "tableName": ""
  }
]

export default data