/**
 * Created by 芋道源码
 *
 * 枚举类
 */

// ========== COMMON 模块 ==========
// 全局通用状态枚举
export const CommonStatusEnum = {
  ENABLE: 0, // 开启
  DISABLE: 1 // 禁用
}

// 全局用户类型枚举
export const UserTypeEnum = {
  MEMBER: 1, // 会员
  ADMIN: 2 // 管理员
}

// 图片文件扩展名
export const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg', 'webp']

// 非图片文件图标映射
export const FILE_ICON_MAP = {
  doc: '/src/assets/imgs/file-icons/docx.png',
  docx: '/src/assets/imgs/file-icons/docx.png',
  xls: '/src/assets/imgs/file-icons/xlsx.png',
  xlsx: '/src/assets/imgs/file-icons/xlsx.png',
  ppt: '/src/assets/imgs/file-icons/pptx.png',
  pptx: '/src/assets/imgs/file-icons/pptx.png',
  txt: '/src/assets/imgs/file-icons/txt.png',
  pdf: '/src/assets/imgs/file-icons/pdf.png',
  zip: '/src/assets/imgs/file-icons/zip.png',
  rar: '/src/assets/imgs/file-icons/rar.png',
  unknown: '/src/assets/imgs/file-icons/unknown.png'
}

// ========== SYSTEM 模块 ==========
/**
 * 菜单的类型枚举
 */
export const SystemMenuTypeEnum = {
  DIR: 1, // 目录
  MENU: 2, // 菜单
  BUTTON: 3 // 按钮
}

/**
 * 角色的类型枚举
 */
export const SystemRoleTypeEnum = {
  SYSTEM: 1, // 内置角色
  CUSTOM: 2 // 自定义角色
}

/**
 * 数据权限的范围枚举
 */
export const SystemDataScopeEnum = {
  ALL: 1, // 全部数据权限
  DEPT_CUSTOM: 2, // 指定部门数据权限
  DEPT_ONLY: 3, // 部门数据权限
  DEPT_AND_CHILD: 4, // 部门及以下数据权限
  DEPT_SELF: 5 // 仅本人数据权限
}

/**
 * 用户的社交平台的类型枚举
 */
export const SystemUserSocialTypeEnum = {
  DINGTALK: {
    title: '钉钉',
    type: 20,
    source: 'dingtalk',
    img: 'https://s1.ax1x.com/2022/05/22/OzMDRs.png'
  },
  WECHAT_ENTERPRISE: {
    title: '企业微信',
    type: 30,
    source: 'wechat_enterprise',
    img: 'https://s1.ax1x.com/2022/05/22/OzMrzn.png'
  }
}

/**
 * 租户类型枚举
 */
export const SystemTenantTypeEnum = {
  SINGLE: 1, // 单租户
  MULTIPLE: 2 // 多租户
}

/**
 * 字典类别枚举
 */
export const SystemDictCategoryEnum = {
  LIST: 1, // 列表
  CASCADE: 2 // 级联
}

/**
 * 部门类别枚举
 */
export const SystemDeptCategoryEnum = {
  UNIT: 1, // 单位
  DEPARTMENT: 2 // 部门
}

// ========== INFRA 模块 ==========
/**
 * 代码生成模板类型
 */
export const InfraCodegenTemplateTypeEnum = {
  ONE: 1, // 单表
  TREE: 2, // 树表
  MASTER_NORMAL: 10, // 主表（标准模式）
  MASTER_ERP: 11, // 主表（ERP）
  MASTER_INNER: 12, // 主表（内嵌模式）
  SUB: 15 // 子表
}

/**
 * 任务状态的枚举
 */
export const InfraJobStatusEnum = {
  INIT: 0, // 初始化中
  NORMAL: 1, // 运行中
  STOP: 2 // 暂停运行
}

/**
 * API 异常数据的处理状态
 */
export const InfraApiErrorLogProcessStatusEnum = {
  INIT: 0, // 未处理
  DONE: 1, // 已处理
  IGNORE: 2 // 已忽略
}

/**
 * boolean是否类型
 */
export const InfraBooleanStringEnum = {
  TRUE: 'true', // 是
  FALSE: 'false' // 否
}

export const InfraModuleTemplateEnum = {
  IMPORT: '1', // 导入模板
  EXPORT: '2', // 导出模板
  APPROVAL: '3' // 审批单模板
}

// ========== BPM 模块 ==========

export const BpmModelType = {
  BPMN: 10, // BPMN 设计器
  SIMPLE: 20 // 简易设计器
}

export const BpmModelFormType = {
  NORMAL: 10, // 流程表单
  CUSTOM: 20 // 业务表单
}

export const BpmProcessInstanceStatus = {
  NOT_START: -1, // 未开始
  RUNNING: 1, // 审批中
  APPROVE: 2, // 审批通过
  REJECT: 3, // 审批不通过
  CANCEL: 4 // 已取消
}

export const BpmAutoApproveType = {
  NONE: 0, // 不自动通过
  APPROVE_ALL: 1, // 仅审批一次，后续重复的审批节点均自动通过
  APPROVE_SEQUENT: 2 // 仅针对连续审批的节点自动通过
}
