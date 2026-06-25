declare namespace Api {
  namespace Company {
    interface CompanyParams {
      /**
       * 统一社会信用代码
       */
      searchKey: string;
      
      /**
       * 产业链 ID
       */
      id?: string;
    }

    
    // 股东列表
    interface ShareHolder {
      stockName: string;
    }

    // 变更记录
    interface ChangeItem {
      projectName: string;
      changeDate: string;
      beforeList: string[];
      afterList: string[];
    }

    // 员工信息
    interface Employee {
      name: string;
      job: string;
    }

    // 电话列表
    interface TelItem {
      contactNumber: string;
      source: string;
    }

    // 控股企业
    interface ControlItem {
      province: string;
      name: string;
      industry: string;
      status: string;
    }

    // 企业标签
    interface EntTag {
      name: string;
      type: string;
    }

    // 分支机构
    interface BranchItem {
      name: string;
    }

    // 区域信息
    interface Area {
      province: string;
      city: string;
      county: string;
    }

    // 收入信息
    interface RevenueInfo {
      revenue: string;
      revenueType: string;
    }

    // 曾用名
    interface UsedName {
      // 名称
      name: string;
      // 修改日期
      changeDate: string;
    }

    interface Industry {
      subIndustry: string;
      industry: string;
    }

    interface ActualControl {
      controlName: string;
    }

    // 最终企业主体
    interface Company {
      creditCode: string;
      recCap: string;
      imageUrl: string;
      termStart: string;
      termEnd: string;
      controlName: string;
      actualControlList: ActualControl[];
      insuredCount: string;
      branchesCount: string;
      email: string;
      belongOrg: string;
      taxpayerType: string;
      scope: string;
      name: string;
      industry: Industry;
      econKind: string;
      address: string;
      phoneList: string[];
      englishName: string;
      orgNo: string;
      taxPayerType: string;
      registCapi: string;
      startDate: string;
      status: string;
      personScope: string;
      isOnStock: string;
      stockNumber: string;
      areaCode: string;
      groupName: string;
      webSiteUrl: string;
      phoneNumber: string;
      shareHolderList: ShareHolder[];
      changeList: ChangeItem[];
      employeeList: Employee[];
      telList: TelItem[];
      moreTelList: TelItem[];
      controlList: ControlItem[];
      entTagList: EntTag[];
      branchList: BranchItem[];
      area: Area;
      revenueInfo: RevenueInfo;
      investTotalCount: string;
      usedNameList: UsedName[];
    }
  }
}
