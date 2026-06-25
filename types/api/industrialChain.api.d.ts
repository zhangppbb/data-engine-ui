declare namespace Api {
  namespace IndustrialChain {
    /**
     * 子公司信息
     */
    interface ChainCompany {
      /** 组织编号 */
      orgNo: string
      /** 组织名称 */
      orgName: string
    }

    /**
     * 产业链信息
     */
    interface IndustryChain {
      /** 主键ID */
      id: string
      /** 主链ID（无上级时为 null） */
      masterId: string | null
      /** 创建时间（时间戳） */
      insertDt: number
      /** 更新时间（时间戳） */
      updateDt: number
      /** 创建人编号 */
      insertUserNo: string
      /** 更新人编号 */
      updateUserNo: string
      /** 来源应用编号 */
      sourceAppNo: string
      /** 创建机构编号 */
      insertOrgNo: string
      /** 记录版本号 */
      recordVer: number
      /** 删除标识：0=未删除，1=已删除 */
      deleted: number
      /** 是否禁用：01=启用，02=禁用 */
      isDisabled: string
      /** 子公司列表 */
      masterChainChildCompany: ChainCompany[]
      /** 主公司信息 */
      masterChainCompany?: ChainCompany
      /** 禁用状态名称（扩展字段） */
      isDisabledEXName: string | null
      /** 产业链名称 */
      name: string
      /** 工具栏列（系统字段，可为空） */
      sysToolbarColumn: string | null
      /** 封面图片ID */
      coverImage: string
      /** 摘要或简介 */
      summary: string
      /** 公司总数 */
      companyTotal: number
      /** 默认节点ID */
      defaultNodeId: string | null
      /** 节点总数 */
      nodeTotal: number
      /** 访问总数 */
      visitTotal: number
      /**链长单位 */
      masterChainCompanyStr: string;
    }

    interface IndustryChainParams {
      id: IndustryChain['id'];
      dataId?: string | number;
    }

    interface IndustryChainListParams extends Api.Common.PaginatingCommonParams {
      /**
       * 产业链名称
       */
      name?: string;
    }

    /**
     * 获取指标
     */
    interface PreviewTotalParams extends IndustryChainParams {
      /**
       * 节点 ID
       */
      chainNodeId: string;

      /**
       * 指标类型
       */
      type: number | string;
    }

    /**
     * 企业标签信息
     */
    interface EntTag {
      /** 标签名称 */
      name: string
      /** 标签类型编码 */
      type: string
    }

    /**
     * 企业信息（节点下属企业）
     */
    interface AtlasManageCompany {
      /** 主键ID */
      id: string
      /** 所属节点ID */
      masterId: string
      /** 创建时间（字符串时间戳或日期） */
      insertDt: string
      /** 更新时间 */
      updateDt: string
      /** 创建人编号 */
      insertUserNo: string
      /** 更新人编号 */
      updateUserNo: string
      /** 来源应用编号 */
      sourceAppNo: string
      /** 创建机构编号 */
      insertOrgNo: string
      /** 记录版本号 */
      recordVer: number
      /** 删除标识 */
      deleted: number
      /** 扩展字段（可能为空对象） */
      extendObject: Record<string, any>
      /** 经营状态，如“正常” */
      businessStatus: string
      /** 企业名称 */
      name: string
      /** 信用代码 */
      creditCode: string
      creditcode: string
      /** 注册资本（带单位） */
      registeredCapital: string
      /** 注册日期（YYYY-MM-DD） */
      registeredDate: string
      /** 所属省份 */
      provinceName: string
      /** 所属城市 */
      cityName: string
      /** 所属区县 */
      districtName: string
      /** 排序号 */
      sort: string
      /** 数据来源 */
      resource: string
      /** 企业标签列表 */
      entTagList: EntTag[]
    }

    /**
     * 策略配置对象（检索与筛选策略）
     */
    interface AtlasManageStrategy {
      /** 主键ID */
      id: string
      /** 所属节点ID */
      masterId: string
      /** 创建时间 */
      insertDt: string
      /** 更新时间 */
      updateDt: string
      /** 创建人编号 */
      insertUserNo: string
      /** 更新人编号 */
      updateUserNo: string
      /** 来源应用编号 */
      sourceAppNo: string
      /** 创建机构编号 */
      insertOrgNo: string
      /** 记录版本号 */
      recordVer: number
      /** 删除标识 */
      deleted: number
      /** 公司类型（可多选） */
      companyType: string[]
      /** 行业类型 */
      industryType: string
      /** 国家行业分类（嵌套编码层级） */
      nationalIndustry: string[][]
      /** 经营状态编码列表 */
      operateStatus: string[]
      /** 关键词（搜索关键字） */
      keyword?: string
      /** 搜索类型（1=默认） */
      searchType: string
    }

    /**
     * 产业链节点（树结构）
     */
    interface AtlasTreeNode {
      /** 节点ID */
      id: string
      /** 节点名称 */
      nodeName: string
      /** 父节点ID */
      parId: string
      /** 是否叶子节点（01=否，02=是） */
      isLeaf: string
      /** 是否叶子节点中文名（是/否） */
      isLeafEXName: string
      /** 节点类型（行业/区域/企业等） */
      nodeType?: string
      /** 树类型标识：1=根节点, 2=分支节点, 3=末级节点, 4=企业节点 */
      treeType: string
      /** 节点强度编码 */
      nodeStrength?: string
      /** 节点强度中文值 */
      nodeStrengthEXName?: string
      /** 节点层级编码 */
      levelCode?: string
      /** 层级名称 */
      levelName?: string
      /** 产业链区域编码（上游/中游/下游） */
      chainArea?: string
      /** 产业链区域中文名 */
      chainAreaEXName?: string
      /** 子节点 */
      children?: AtlasTreeNode[]
      /** 策略配置对象 */
      atlasManageStrategyBo?: AtlasManageStrategy
      /** 企业列表 */
      atlasManageCompanyBoList?: AtlasManageCompany[]
    }

    /**
     * 产业链树根节点结构
     */
    interface AtlasTreeRoot extends AtlasTreeNode {
      /** 根节点类型固定为 1 */
      treeType: string;
      /** 顶层子节点（上游/中游/下游） */
      children: AtlasTreeNode[]
    }

    /**
     * 结构图查询参数
     */
    interface QueryTreeParams extends IndustryChainParams {
      /**
       * 结构图类型
       */
      chainArea: string;
    }

    interface ListedCompanyTotalParams extends IndustryChainParams {
      chainNodeId: string;
    }

    /**
     * 头部企业
     */
    interface TopThreeCompanyListParams extends Api.Common.PaginatingCommonParams, IndustryChainParams {
      /**
       * 节点 ID
       */
      masterId: string;
    }

     /**
     * 上市公司
     */
    interface ListedCompanyListParams extends Api.Common.PaginatingCommonParams, IndustryChainParams {
      /**
       * 节点 ID
       */
      chainNodeId: string;
    }

    /**
     * 企业列表
     */
    interface CompanyListParams extends Api.Common.PaginatingCompanyParams, IndustryChainParams {
      // 节点ID
      chainNodeId: IndustrialChain['id'],
    }

    /**
     * 区域信息分析
     */
    interface CompanyAnalysisParams extends IndustryChainParams {
      // 节点ID
      chainNodeId: IndustrialChain['id'],

      /**
       * 省编码
       */
      province?: string;
      
      /**
       * 地区编码
       */
      areaCode?: string;
    }

    /**
     * 单项统计信息
     */
    interface AnalysisItem {
      /** 数量（字符串类型） */
      count: string
      /** 键值，如行业编码、年份、分级标识等 */
      key: string
      /** 描述信息（可为空） */
      desc: string
    }

    /**
     * 单组分析结果
     */
    interface AnalysisGroup {
      /** 分组键，如 industry、listingStatus、tm 等 */
      key: string
      /** 分组描述，如“国民行业”、“上市信息” */
      desc: string
      /** 当前分组下的统计项列表 */
      items: AnalysisItem[]
    }

    interface HeadCompanyParams extends IndustryChainParams {
      chainNodeId: string;
    }

    /**
     * 分析结果接口响应体
     */
    interface CompanyAnalysis {
      /** 状态码 */
      status: string
      /** 返回消息 */
      message: string
      /** 结果总数量 */
      totalCount: string
      /** 订单编号或任务编号 */
      orderNumber: string
      /** 分析结果数组 */
      result: AnalysisGroup[]
    }

    interface IndustryStandardParams extends Api.Common.PaginatingCommonParams, IndustryChainParams {
      nodeIds: string[]
    }

    interface IndustryStandardQuery extends IndustryChainParams {
      dataId: string;
    }

    /**
     * 行业标准信息
     */
    interface IndustryStandard {
      /** 主键ID */
      id: string
      /** 发布单位 */
      dispatchTime?: string;
      /** 标准状态 */
      criterionStateEXName?: string;
      /** 主表ID（无上级时为 null） */
      masterId: string | null
      /** 创建时间（时间戳） */
      insertDt: number
      /** 更新时间（时间戳） */
      updateDt: number
      /** 创建人编号 */
      insertUserNo: string
      /** 更新人编号 */
      updateUserNo: string
      /** 来源应用编号 */
      sourceAppNo: string
      /** 创建机构编号 */
      insertOrgNo: string
      /** 记录版本号 */
      recordVer: number
      /** 删除标识：0=未删除，1=已删除 */
      deleted: number
      /** 中国标准分类号（如 "P32"） */
      chinaCriterion: string
      /** 标准编号（如 "DB42/T 1776-2021"） */
      standardNum: string
      /** 中文名称 */
      chineseName: string
      /** 发布日期（年、月、日） */
      releaseDate: string;
      /** 实施日期（年、月、日） */
      effectDate: string;
      /** 标准等级（如 "05"） */
      criterionGrade: string
      /** 标准状态（如 "01" 表示现行） */
      criterionState: string
      /** 数据ID */
      dataId: string
      /** 英文名称（可为空） */
      englishName: string | null
      /** 标准详情链接 */
      gather: string
      /** 国际标准分类号（如 "91.120.10"） */
      interCriterion: string
      /** 关键词（可为空） */
      keywords: string | null
      /** 管理部门（可为空） */
      managerDep: string | null
      /** 归口单位（可为空） */
      putUnder: string | null
      /** 发布单位 */
      releaseUnit: string
      /** 备注（可为空） */
      remark: string | null
      /** 采集ID（可为空） */
      collectId: string | null
      /** 附件文件ID */
      fileId: string
      /** 节点ID数组 */
      nodeId: string[]
      /** 节点组（二维结构） */
      nodeIds: string[][]
      /** 国家行业分类（可为空） */
      nationalIndustry: string | null
      /** 中交行业分类（可为空） */
      zxIndustry: string | null
    }

    /**
    * 政策信息数据结构
    */
    interface Policy {
      /** 主键ID */
      id: string
      /** 主表ID（无上级时为 null） */
      masterId: string | null
      /** 政策等级 */
      policyLevelEXName: string;
      /** 政策类型 */
      policyTypeEXName: string;
      /** 创建时间（时间戳） */
      insertDt: number
      /** 更新时间（时间戳） */
      updateDt: number
      /** 创建人编号 */
      insertUserNo: string
      /** 更新人编号 */
      updateUserNo: string
      /** 来源应用编号 */
      sourceAppNo: string
      /** 创建机构编号 */
      insertOrgNo: string
      /** 记录版本号 */
      recordVer: number
      /** 删除标识：0=未删除，1=已删除 */
      deleted: number
      /** 政策名称（标题） */
      policyName: string
      /** 发文时间（年、月、日） */
      dispatchTime: string
      /** 发文机构（可为空） */
      dispatchInstitution: string | null
      /** 数据唯一ID */
      dataId: string
      /** 发文字号（可为空） */
      dispatchCharacter: string | null
      /** 行业类型（可为空） */
      industryType: string | null
      /** 关键词 */
      keywords: string | null
      /** 政策原文链接 */
      original: string
      /** 政策级别（如“国家级”、“省级”），如值 "02" */
      policyLevel: string
      /** 政策类型（如 "05"） */
      policyType: string
      /** 政策正文 HTML 内容 */
      zxContent: string
      /** 城市（可为空） */
      city: string | null
      /** 省份（如“山东”） */
      province: string | null
      /** 区域（可为空） */
      area: string | null
      /** 城市行政区划代码 */
      cityCode: string
      /** 省份行政区划代码 */
      provinceCode: string
      /** 区县行政区划代码 */
      areaCode: string
      /** 采集ID（可为空） */
      collectId: string | null
      /** 节点ID数组 */
      nodeId: string[]
      /** 节点组（二维结构） */
      nodeIds: string[][]
      /** 国家行业分类（可为空） */
      nationalIndustry: string | null
      /** 中交行业分类（可为空） */
      zxIndustry: string | null
    }

    interface ProductOperation {
      /** 当前年份 */
      currentYear: number

      /** 产品收入（单位：元） */
      productRevenue: number

      /** 产品成本（单位：元） */
      productCost: number

      /** 产品利润（单位：元） */
      productProfit: number

      /** 研发费用（单位：元） */
      rdExpenses: number

      /** 营业收入同比增长率（单位：%），可为空 */
      revenueGrowthRate: number | null

      /** 成本同比增长率（单位：%），可为空 */
      costGrowthRate: number | null

      /** 利润同比增长率（单位：%），可为空 */
      profitGrowthRate: number | null

      /** 研发费用同比增长率（单位：%），可为空 */
      rdExpensesGrowthRate: number | null
    }


    /**
     * 产业链层级节点结构
     */
    interface ChainLevelNode {
      /** 当前节点 ID */
      id: string

      /** 层级 ID（一般与 id 相同） */
      levelId: string

      /** 所属产业链 ID */
      chainId: string

      /** 层级 ID 数组（包含本级及父级） */
      levelIdArray: string[]

      /** 层级名称（如“简介”、“产业布局”等） */
      levelName: string

      /** 是否为叶子节点："1" 表示是，"0" 表示否 */
      isLeaf: string

      /** 排序序号 */
      sort: number

      /** 关联的节点 ID（可能为空） */
      nodeId: string | null

      /** 层级深度（1 表示顶级） */
      nodeLevel: number

      /** 分区 ID，默认 0 */
      partId: number

      /** 目录名称 */
      catalogueName: string

      /** 组件名称（与展示标题通常一致） */
      componentName: string

      /** 组件 ID（后台管理中的组件标识） */
      componentId: string

      /** 组件文件路径（相对前端项目路径） */
      filePath: string

      /** 关联的请求接口路径列表 */
      requestPaths: string[]

      /** 子节点集合（若为叶子节点则为 null） */
      children: ChainLevelNode[] | null
    }


    // 水务相关

    interface WaterEcoParams extends IndustryChainParams {
      /**
       * 年份
       */
      year: string | number;
    }

    /**
     * 水质类别项
     */
    interface WaterQualityItem {
      typeName: string;              // 类别名称（地表水、河流、湖泊）
      oneCategoryValue: number;      // I~III类
      twoCategoryValue: number;      // IV~V类
      threeCategoryValue: number;    // 劣V类
    }

    interface SewageHandleInvestItem {
      year: number;               // 年份
      investAmount: number;   // 投资金额（万元）
    }

    interface SewageHandleFactoryBuildItem {
      year: number;            // 年份
      factoryCount: number;   // 工厂数量
      handleAbility: number;   // 处理能力
    }

    interface SewageHandleSituationItem {
      year: number;            // 年份
      emissionCount: number;   // 排放口数量
      handleCount: number;   // 处理厂数量
      handleRatio: number;   // 处理率
    }

    interface ReclaimedHandleSituationItem {
      year: number;            // 年份
      utilizeCount: number;   // 再利用口数量
      productCount: number;   // 产水口数量
    }

    interface ReclaimedHandleSituationParams extends IndustryChainParams {
    }


    interface SewageHandleInvestMapItem {
      /**
       * 省份名称
       * 示例："安徽省"
       */
      province: string;

      /**
       * 市级名称
       * - 若为 null 表示该数据为省级统计，无具体市区
       * 示例：null | "合肥市"
       */
      city: string | null;

      /**
       * 区/县名称
       * - 若为 null 表示无区县维度
       * 示例：null | "蜀山区"
       */
      area: string | null;

      /**
       * 行政区划代码
       * - 通常为国家统计局行政区划码（6 位）
       * 示例："340000"
       */
      areaValue: string;

      /**
       * 统计年份
       * 示例：2023
       */
      years: number;

      /**
       * 指标名称
       * 示例："污水处理资产投资"
       */
      indicator: string;

      /**
       * 指标级别
       * - 示例可能包括："省级"、"市级"、"区县级"
       * 示例："省级"
       */
      indicatorType: string;

      /**
       * 数据值
       * - 数字型，单位配合 unit 字段确认
       * 示例：369974
       */
      dataValue: number;

      /**
       * 数值单位
       * 示例："万元"
       */
      unit: string;

      /**
       * 同比增长率
       * - 百分比字符串（带 %）
       * 示例："40.07%"
       */
      rateOfIncrease: string;
    }

    interface SewageHandleInvestMapParams extends IndustryChainParams {
      /**
       * 类型
       */
      type: string;

      /**
       * 地区下钻
       */
      areaCode?: string;
    }

    interface SewageHandleInvestMap {
      year: number;            // 年份
      dataRespList: SewageHandleInvestMapItem[];   // 数据列表
    }

    /**
       * 企业水业影响力数据结构
       *
       * 说明：
       * - enterpriseName / year / rank 后端可能返回 null，因此类型中必须包含 null。
       * - names、years 可能是逗号分隔的字符串（后端习惯返回 string），如果需要数组，可在后续做解析。
       */
      interface CompanyRankFilterCondition {
        /** 企业名称；如果没有对应企业会返回 null */
        enterpriseName: string | null;

        /** 排名年份（如 2023），后端可能返回 null */
        year: number | null;

        /** 排名数值（第几名），后端可能返回 null */
        rank: number | null;

        /**
         * 企业名称列表（逗号分隔字符串）
         * 示例："水业影响力企业, 水业影响力企业3"
         * 若需数组，可用辅助函数 parseCommaList()
         */
        names: string;

        /**
         * 年份列表（逗号分隔字符串）
         * 示例："2023, 2024"
         */
        years: string;
      }

      interface CompanyRankFilterListParams extends IndustryChainParams {
        /**
         * 年份
         */
        year?: string;
        /**
         * 排名名称
         */
        rankingName?: string;
      }

      interface CompanyRankFilterItem {
         /**
         * 排名
         */
        rank: number;
        /**
         * 企业名称
         */
        enterpriseName?: string;
      }

      /** 
       * 月度统计数据项 
       * 用于公招市场月度金额对比与增长率展示
       */
      interface PubRecruitMonthlyItem {
        /** 年份，例如 2024 */
        year: number

        /** 月份，1-12 */
        month: number

        /** 本年同期金额（元） */
        currentYearAmount: number

        /** 上年同期金额（元） */
        lastYearAmount: number

        /** 同比增长率，例如 0.12 表示 12% */
        growthRate: number
      }


      /**
       * 公招市场未拆分数据列表查询参数
       * 继承公共分页参数 + 行业链参数
       */
      interface PubRecruitUnsplitParams extends Api.Common.PaginatingCommonParams, IndustryChainParams {
        /** 项目名称（精确匹配） */
        projectName?: string

        /**
         * 数据编码
         */
        dataCode?: string

        /** 所在区域（如：华东、华南等） */
        locationArea?: string

        /** 中标金额最小值（元，字符串用于大数处理） */
        winningAmountMin?: string | number

        /** 中标金额最大值（元） */
        winningAmountMax?: string | number

        /** 发布开始时间（yyyy-MM-dd） */
        releaseDateStart?: string

        /** 发布结束时间（yyyy-MM-dd） */
        releaseDateEnd?: string

        /** 行业类别 */
        industry?: string

        /** 项目名称是否模糊查询（true = 模糊） */
        projectNameFuzzy?: boolean

        /**
         * 地区 省市区
         */
        provinceName?: string;
        cityName?: string;
        districtName?: string;
      }

      /**
       * 获取清环网数据
       * 继承公共分页参数 + 行业链参数
       */
      interface TechnologyListParams extends Api.Common.PaginatingCommonParams, IndustryChainParams {
        /**
         * 标题
         */
        title?: string;

        /**
         * 企业名称
         */
        companyName?: string;

        /**
         * 行业分类
         */
        secondCategoryCode?: string;
      }

      /** 产品详情数据结构 */
      interface TechnologyItem {
        /** 创建人 ID */
        creator: string | null
        /** 技术列表数据 ID */
        localImgs?: string[]
        /** 创建人姓名 */
        creatorName: string | null
        /** 创建部门 ID */
        createDept: string | null
        /** 创建部门名称 */
        createDeptName: string | null
        /** 创建时间（时间戳，毫秒） */
        createTime: number | null
        /** 唯一记录 ID */
        id: number
        /** 产品或条目编号 */
        itemId: string
        /** 产品详情页 URL */
        detailUrl: string
        /** 产品标题 */
        title: string
        /** 产品描述 */
        description: string | null
        /** 发布时间（时间戳，毫秒） */
        pubTime: number
        /** 所属地区信息 */
        areaInfo: string
        /** 省份编码 */
        provinceCode: string
        /** 城市编码 */
        cityCode: string | null
        /** 公司名称 */
        companyName: string
        /** 企业统一社会信用代码 */
        creditNo: string
        /** 核实状态，例如“未核实” */
        verifyStatus: string
        /** 数据来源网站 */
        webSource: string
        /** 数据日期 [年, 月, 日] */
        dataDate: number[]
        /** 产品或技术说明 */
        expound: string
        /** 一级分类名称 */
        firstCategory: string
        /** 二级分类名称 */
        secondCategory: string
        /** 三级分类名称 */
        thirdCategory: string
        /** 一级分类编码 */
        firstCategoryCode: string
        /** 二级分类编码 */
        secondCategoryCode: string
        /** 三级分类编码 */
        thirdCategoryCode: string
        /** 品牌 */
        brand: string | null
        /** 单价（可能是面议） */
        unitPrice: string
        /** 最小起订量 */
        minimumOrder: string | null
        /** 总供应量 */
        supplyTotal: string | null
        /** 发货时间说明 */
        deliveryTime: string
        /** 有效期 */
        validityPeriod: string
        /** 保证金金额 */
        marginDeposit: string
        /** 联系人姓名及称呼 */
        contact: string
        /** 产品图片 JSON 字符串，格式：{"imgs": ["url1", "url2"]} */
        imgs: string
        /** 邮箱图片 */
        emailImg: string | null
        /** 电话图片 */
        telImg: string | null
        /** 手机图片 */
        phoneImg: string | null
        /** 手机信息 */
        phoneInfo: string | null
        /** 电话信息 */
        telInfo: string | null
        /** 公司地址 */
        address: string
      }


      interface PubrecruitSplitDataCodeParams extends IndustryChainParams {
        /**
       * 数据编码
       */
        dataCode?: string
      }

      
      interface TechnologyQueryByIdParams extends IndustryChainParams {
        /**
         * 数据 ID
         */
        dataId?: string
      }

      /**
       * 联营体成员中标信息（用于未拆分数据）
       */
      interface SubMemberBid {
        /** 拆分后的中标单位名称 */
        splitWinningCompany: string

        /** 中标单位所属集团（例如：中国交建） */
        leaderCompanyGroup: string

        /** 拆分后中标金额（元） */
        splitWinningAmount: string
      }


      /**
       * 公招市场未拆分数据列表单项
       */
      interface PubRecruitUnsplitItem {
        /** 项目名称 */
        projectName: string

        /** 省份名称 */
        provinceName: string

        /** 城市名称 */
        cityName: string

        /** 联合体牵头单位 */
        consortiumLeader: string

        /** 项目总中标金额（元，字符串保证精度） */
        totalWinningAmount: string

        /** 区县名称 */
        districtName: string

        /** 所属行业类别 */
        industry: string

        /** 中标金额（元，未拆分金额） */
        winningAmount: number

        /** 中标单位（未拆分时可能为多个公司字符串） */
        winningCompanies: string

        /** 资金来源（如财政资金、自筹资金等） */
        projectFunding: string

        /** 是否联合体 */
        isConsortium: boolean

        /** 所在区域（如华北、华东） */
        locationArea: string

        /** 所属大区（如中交内部区域划分） */
        belongingRegion: string

        /** 建设单位 */
        constructionUnit: string

        /** 发布日期（yyyy-MM-dd） */
        releaseDate: string

        /** 原始链接 */
        originalLinks: string

        /** 数据级别（如省级、市级） */
        dataLevel: string

        /** 中交系统内部项目编号 */
        cccId: string

        /** 数据归属月份（如：2024-10） */
        statisticsMonth: string

        /** 项目状态（在建、已完成、公告等） */
        projectStatus: string[]

        /** 联营体成员拆分后的中标列表 */
        subMemberBidList: SubMemberBid[]

        /** 数据唯一编码 */
        dataCode: string

        /** 数据入库时间（yyyy-MM-dd HH:mm:ss） */
        dataStorageTime: string
      }

      interface ChinaWaterListParams extends Api.Common.PaginatingCommonParams, IndustryChainParams {
        type: string; // 数据类型
      }

      /**
       * 税务网数据
       */
      interface ChinaWaterDataItem {
        /** 新闻详情数据结构 */
        /** 主键ID */
        id: number

        /** 新闻唯一ID */
        newsId: string

        /** 新闻链接地址 */
        newsHref: string

        /** 新闻标题 */
        newsTitle: string

        /** 导航分类，例如：项目 */
        newsNavb: string

        /** 来源网站名称 */
        webSource: string

        /** 附件下载地址 */
        fileUrl: string

        /** 发布时间（时间戳） */
        pubTime: number

        /** 日期数组：[年, 月, 日] */
        dataDate: number[]

        /** 内容来源，如：商务部网站 */
        source: string

        /** 作者（可能为空） */
        author: string | null

        /** 新闻描述摘要 */
        description: string
      }

      /** 企业基础信息项 */
    interface EchelonCompanyItem {
      /** 指标类型，如：designScale, registeredCapital */
      type: string

      /** 判断条件，例如：<400万吨/日 */
      criteria: string

      /** 所属梯队，如：一梯队、二梯队、三梯队 */
      echelon: string

      /** 主键 ID */
      id: number

      /** 企业名称 */
      name: string

      /** 统一社会信用代码 */
      unifiedSocialCreditCode: string

      /** 企业简称 */
      abbreviation: string
    }

    /** 三个梯队的通用结构 */
    interface EchelonGroup {
      /** 一梯队 */
      level1: EchelonCompanyItem[]

      /** 二梯队 */
      level2: EchelonCompanyItem[]

      /** 三梯队 */
      level3: EchelonCompanyItem[]
    }

    /** 总体结构 */
    interface EchelonCompanyRank {
      /** 设计规模 */
      designScale: EchelonGroup

      /** 注册资本 */
      registeredCapital: EchelonGroup
    }
  }
}
