/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  namespace Common {
    /** common params of paginating */
    interface PaginatingCommonParams {
      /** current page number */
      pageNo: number;
      /** page size */
      pageSize: number;
    }

    interface Chart extends Record<string, any> {
      title: string;
      option: import('echarts').EChartsOption | null;
      hasData: boolean;
      loading?: boolean;
      tableData?: Record<string, any>[];
      tableColumns?: Record<string, any>[];
    }

    /** common params of paginating query list data */
    interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
      list: T[];
      total: number;
    }

     /** common params of paginating */
    interface PaginatingCompanyParams {
      /** current page number */
      pageIndex: number;
      /** page size */
      pageSize: number;
    }

    /** Company params of paginating query list data */
    interface PaginatingCompanyRecord<T = any> {
      paging: {
        pageIndex: number;
        pageSize: number;
        totalRecords: number;
      };
      result: T[];
    }

    /** common search params of table */
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'pageNum' | 'pageSize'> &
      CommonType.RecordNullable<{
        orderByColumn: string;
        isAsc: 'asc' | 'desc';
        params: { [key: string]: any };
      }>;

    /**
     * 启用状态
     *
     * - "0": 正常
     * - "1": 停用
     */
    type EnableStatus = '0' | '1';

    /**
     * 显示状态
     *
     * - "0": 显示
     * - "1": 隐藏
     */
    type VisibleStatus = '0' | '1';

    /**
     * 是否状态
     *
     * - "Y": 是
     * - "N": 否
     */
    type YesOrNoStatus = 'Y' | 'N';

    /** common record */
    type CommonRecord<T = any> = {
      /** record creator */
      createBy?: string | null;
      /** record dept */
      createDept?: any;
      /** record create time */
      createTime?: string | null;
      /** record updater */
      updateBy?: string | null;
      /** record update time */
      updateTime?: string | null;
    } & T;

    type CommonTenantRecord<T = any> = {
      /** record tenant id */
      tenantId: string;
    } & CommonRecord<T>;

    /** common tree record */
    type CommonTreeRecord = {
      /** record id */
      id: CommonType.IdType;
      /** record parent id */
      parentId: CommonType.IdType;
      /** record label */
      label: string;
      /** record weight */
      weight: number;
      /** record children */
      children: CommonTreeRecord[];
    }[];
  }

  /**
   * 蓝舟平台类型声明
   */
  namespace LZ {
    // 文件
    interface File {
      /** 返回码，0 表示成功 */
      code: number

      /** 提示信息 */
      message: string

      /** 追踪 ID（用于链路追踪、日志定位） */
      traceId: string

      /** 实际返回数据，这里为文件访问 URL */
      data: string
    }

    interface DictItem {
    /**
     * 背景颜色，通常为十六进制或 CSS 可识别颜色字符串
     * 例如: "#F5F5F5"
     */
    backgroundColor: string

    /**
     * 边框颜色，通常为十六进制或 CSS 可识别颜色字符串
     * 例如: "#B7B7B7"
     */
    border: string

    /**
     * 字体颜色，通常为 CSS 颜色字符串（如 "black"、"#000"）
     */
    fontColor: string

    /**
     * 字典显示标签（中文/本地化文本）
     * 例如: "默认"
     */
    syLabel: string

    /**
     * 排序值，用于列表或展示时的排序
     * 数值越小通常表示越靠前
     */
    sort: number

    /**
     * 字典值（字符串形式），用于业务逻辑或作为枚举值
     * 例如: "0"
     */
    syValue: string

    /**
     * 字典编码（用于区分不同字典集合）
     * 例如: "node_strength"
     */
    code: string

    /**
     * 标签类型（业务自定义数值）
     * 通常用于标识标签显示样式或业务含义
     */
    labelType: number
  }
  }

  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    /** base login form */
    interface LoginForm {
      /** 客户端 ID */
      clientId?: string;
      /** 授权类型 */
      grantType?: string;
      /** 租户ID */
      tenantId?: string;
      /** 验证码 */
      code?: string;
      /** 唯一标识 */
      uuid?: string;
    }

    /** password login form */
    interface PwdLoginForm extends LoginForm {
      /** 用户名 */
      username?: string;
      /** 密码 */
      password?: string;
    }

    /** social login form */
    interface SocialLoginForm extends LoginForm {
      /** 授权码 */
      socialCode?: string;
      /** 授权状态 */
      socialState?: string;
      /** 来源 */
      source?: string;
    }

    /** register form */
    interface RegisterForm extends LoginForm {
      /** 用户名 */
      username?: string;
      /** 密码 */
      password?: string;
      /** 确认密码 */
      confirmPassword?: string;
      /** 用户类型 */
      userType?: string;
    }

    /** login token data */
    interface LoginToken {
      /** 授权令牌 */
      access_token?: string;
      /** 授权令牌 */
      token?: string;
      /** 应用id */
      client_id?: string;
      /** 授权令牌 access_token 的有效期 */
      expire_in?: number;
      /** 用户 openid */
      openid?: string;
      /** 刷新令牌 refresh_token 的有效期 */
      refresh_expire_in?: number;
      /** 刷新令牌 */
      refresh_token?: string;
      /** 令牌权限 */
      scope?: string;
    }

    /** userinfo */
    interface UserInfo {
      /** 用户信息 */
      user?: Api.System.User & {
        /** 所属角色 */
        roles: Api.System.Role[];
      };
      /** 角色列表 */
      roles: string[];
      /** 菜单权限 */
      permissions: string[];
    }

    /** tenant */
    interface Tenant {
      /** 企业名称 */
      companyName: string;
      /** 域名 */
      domain: string;
      /** 租户编号 */
      tenantId: string;
    }

    /** login tenant */
    interface LoginTenant {
      /** 租户开关 */
      tenantEnabled: boolean;
      /** 租户列表 */
      voList: Tenant[];
    }

    interface CaptchaCode {
      /** 是否开启验证码 */
      captchaEnabled: boolean;
      /** 唯一标识 */
      uuid?: string;
      /** 验证码图片 */
      img?: string;
    }
  }

  /**
   * namespace Route
   *
   * backend api module: "route"
   */
  namespace Route {
    type ElegantConstRoute = import('@elegant-router/types').ElegantConstRoute;

    interface MenuRoute extends ElegantConstRoute {
      id: string;
    }

    interface UserRoute {
      routes: MenuRoute[];
      home: import('@elegant-router/types').LastLevelRouteKey;
    }
  }
}
