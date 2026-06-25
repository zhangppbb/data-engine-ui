import { Layout } from '@/utils/routerHelper'
import DataEngineLayout  from '@/layout/data-engine/PageLayout.vue'
import { RouterView } from 'vue-router'

const { t } = useI18n()
/**
 * redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'          设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
 hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)

 alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，
 只有一个时，会将那个子路由当做根路由显示在侧边栏，
 若你想不管路由下面的 children 声明的个数都显示你的根路由，
 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，
 一直显示根路由(默认 false)

 title: 'title'            设置该路由在侧边栏和面包屑中展示的名字

 icon: 'svg-name'          设置该路由的图标

 noCache: true             如果设置为true，则不会被 <keep-alive> 缓存(默认 false)

 breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)

 affix: true               如果设置为true，则会一直固定在tag项中(默认 false)

 noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)

 activeMenu: '/dashboard'  显示高亮的路由路径

 followAuth: '/dashboard'  跟随哪个路由进行权限过滤

 canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)
 }
 **/
const remainingRouter: AppRouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: '/welcome',
  //   name: 'welcome',
  //   meta: {
  //     hidden: true,
  //     noTagsView: true
  //   }
  // },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/Index.vue'),
    name: 'Screen',
    meta: {
      title: '大屏',
      hidden: true
    }
  },
  {
    path: '/',
    component: DataEngineLayout,
    redirect: '/index',
    name: 'Home',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'workspace',
        component: () => import('@/views/workspace/Index.vue'),
        name: 'Workspace',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true,
          hideBreadcrumb: true
        }
      },
        {
        path: 'index',
        component: () => import('@/views/index/Index.vue'),
        name: 'Index',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true,
          hideBreadcrumb: true
        }
      },
      {
        path: 'profile',
        component: () => import('@/views/personal-info/Index.vue'),
        name: 'PersonalInfo',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true,
          hideBreadcrumb: true
        }
      },

      // 应用管
     {
        path: 'apps',
        component: RouterView,
        name: 'Apps',
        redirect: '/apps/list',
        meta: {
          title: '应用馆',
        },
        children: [
          {
            path: 'list',
            component: () => import('@/views/apps/list/Index.vue'),
            name: 'AppsList',
            meta: {
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          },
          {
            path: 'details/:id',
            component: () => import('@/views/apps/details/Index.vue'),
            name: 'AppsDetails',
            meta: {
              title: '应用详情',
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          },

          // 专区
          {
            path: 'zone',
            component: () => import('@/views/apps/zone/Index.vue'),
            name: 'AppsZone',
            meta: {
              title: '专区',
              noCache: false,
              affix: true
            }
          },

          // 报告
          {
            path: 'report',
            component: RouterView,
            name: 'AppsReport',
            meta: {
              title: '研究报告'
            },
            children: [
              {
                path: '',
                component: () => import('@/views/apps/report/list/Index.vue'),
                name: 'AppsReportList',
                meta: {
                  title: '',
                  hidden: true
                }
              },
              {
                path: 'details/:id',
                component: () => import('@/views/apps/report/details/Index.vue'),
                name: 'AppsReportQuery',
                meta: {
                  title: '报告'
                }
              }
            ]
          }
        ]
      },

      // resources
      {
        path: 'resources',
        component: RouterView,
        name: 'Resources',
        redirect: '/resources/list',
        meta: {
          title: '资源馆',
          icon: 'ep:folder'
        },
        children: [
          {
            path: 'list',
            component: () => import('@/views/resources/list/Index.vue'),
            name: 'ResourcesList',
            meta: {
              title: '',
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          },
          {
            path: 'api',
            component: RouterView,
            name: 'ResourcesApi',
            redirect: '/resources/api/list',
            meta: {
              title: 'API集市'
            },
            children: [
              {
                path: '',
                component: () => import('@/views/resources/api/list/Index.vue'),
                name: 'ResourcesApiList',
                meta: {
                  icon: 'ep:home-filled',
                  noCache: false,
                  affix: true
                }
              },
              {
                path: 'details/:id',
                component: () => import('@/views/resources/api/details/Index.vue'),
                name: 'ResourcesApiDetails',
                meta: {
                  title: 'API详情',
                  icon: 'ep:home-filled',
                  noCache: false,
                  affix: true
                }
              },
              {
                path: 'access-guide',
                component: () => import('@/views/resources/api/access-guide/Index.vue'),
                name: 'ResourcesApiAccessGuide',
                meta: {
                  title: '接入指南',
                  icon: 'ep:home-filled',
                  noCache: false,
                  affix: true
                }
              }
            ]
          },
          {
            path: 'mcp',
            component: () => import('@/views/resources/mcp/list/Index.vue'),
            name: 'ResourcesMcp',
            meta: {
              title: 'MCP集市',
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          },
          {
            path: 'skill',
            component: RouterView,
            name: 'ResourcesSkillRouter',
            redirect: '/resources/skill/list',
            meta: {
              title: 'SKILL广场'
            },
            children: [
              {
                path: '',
                component: () => import('@/views/resources/skill/list/Index.vue'),
                name: 'ResourcesSkill',
                meta: {
                  icon: 'ep:home-filled',
                  noCache: false,
                  affix: true
                }
              },
              {
                path: 'access-guide',
                component: () => import('@/views/resources/skill/access-guide/Index.vue'),
                name: 'ResourcesSkillAccessGuide',
                meta: {
                  title: '接入指南',
                  icon: 'ep:home-filled',
                  noCache: false,
                  affix: true
                }
              },
              {
                path: 'kyb',
                component: () => import('@/views/resources/skill/kyb/list/Index.vue'),
                name: 'ResourcesSkillKyb',
                meta: {
                  title: '安装与使用',
                  icon: 'ep:home-filled',
                  noCache: false,
                  affix: true
                }
              }
            ]
          }
        ]
      },

      // cases
      {
        path: 'cases',
        component: RouterView,
        name: 'Cases',
        redirect: '/cases/list',
        meta: {
          title: '案例馆',
          icon: 'ep:list'
        },
        children: [
          {
            path: 'list',
            component: () => import('@/views/cases/list/Index.vue'),
            name: 'CasesList',
            meta: {
              // title: '案例馆',
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          },
          {
            path: 'details/:id',
            component: () => import('@/views/cases/details/Index.vue'),
            name: 'CasesDetails',
            meta: {
              title: '案例详情',
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          }
        ]
      },

      // 开发者中心
      {
        path: 'developer',
        component: RouterView,
        name: 'Developer',
        meta: {
          title: '开发者中心',
          icon: 'ep:tools'
        },
        children: [
          {
            path: 'personal-api-key',
            component: () => import('@/views/developer/personalApiKey/index.vue'),
            name: 'PersonalApiKey',
            meta: {
              title: '个人API Key',
              icon: 'ep:key'
            }
          },
          {
            path: 'team',
            component: () => import('@/views/developer/team/index.vue'),
            name: 'TeamManagement',
            meta: {
              title: '团队管理',
              icon: 'ep:user-filled'
            }
          },
          {
            path: 'team-api-key',
            component: () => import('@/views/developer/teamApiKey/index.vue'),
            name: 'TeamApiKey',
            meta: {
              title: '团队API Key',
              icon: 'ep:key'
            }
          },
          {
            path: 'api-access-log',
            component: () => import('@/views/developer/apiAccessLog/index.vue'),
            name: 'ApiAccessLog',
            meta: {
              title: '调用日志',
              icon: 'ep:document'
            }
          }
        ]
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/index',
  //   name: 'Home',
  //   meta: {},
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/Home/Index.vue'),
  //       name: 'Index',
  //       meta: {
  //         title: t('router.home'),
  //         icon: 'ep:home-filled',
  //         noCache: false,
  //         affix: true
  //       }
  //     }
  //   ]
  // },
  {
    path: '/user',
    component: Layout,
    name: 'UserInfo',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'profile',
        component: () => import('@/views/Profile/Index.vue'),
        name: 'Profile',
        meta: {
          canTo: true,
          hidden: true,
          noTagsView: false,
          icon: 'ep:user',
          title: t('common.profile')
        }
      },
      {
        path: 'notify-message',
        component: () => import('@/views/system/notify/my/index.vue'),
        name: 'MyNotifyMessage',
        meta: {
          canTo: true,
          hidden: true,
          noTagsView: false,
          icon: 'ep:message',
          title: '我的站内信'
        }
      }
    ]
  },
  {
    path: '/dict',
    component: Layout,
    name: 'dict',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'type/data/:dictType/:dictCategory',
        component: () => import('@/views/system/dict/data/index.vue'),
        name: 'SystemDictData',
        meta: {
          title: '字典数据',
          noCache: true,
          hidden: true,
          canTo: true,
          icon: '',
          activeMenu: '/system/dict'
        }
      }
    ]
  },
  {
    path: '/codegen',
    component: Layout,
    name: 'CodegenEdit',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'edit',
        component: () => import('@/views/infra/codegen/EditTable.vue'),
        name: 'InfraCodegenEditTable',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: 'ep:edit',
          title: '修改生成配置',
          activeMenu: 'infra/codegen/index'
        }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    name: 'JobL',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'job-log',
        component: () => import('@/views/infra/job/logger/index.vue'),
        name: 'InfraJobLog',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: 'ep:edit',
          title: '调度日志',
          activeMenu: 'infra/job/index'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/components/CeiShi.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/register',
    component: () => import('@/views/Login/Register.vue'),
    name: 'Register',
    meta: {
      hidden: true,
      title: '注册',
      noTagsView: true
    }
  },
  {
    path: '/ssocode',
    component: () => import('@/views/Login/SSO.vue'),
    name: 'Ssocode',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/sso',
    component: () => import('@/views/Login/Login.vue'),
    name: 'SSOLogin',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
    {
    path: '/jjtsso',
    component: () => import('@/views/Login/JJTSSO.vue'),
    name: 'Jjtsso',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/social-login',
    component: () => import('@/views/Login/SocialLogin.vue'),
    name: 'SocialLogin',
    meta: {
      hidden: true,
      title: t('router.socialLogin'),
      noTagsView: true
    }
  },
  {
    path: '/403',
    component: () => import('@/views/Error/403.vue'),
    name: 'NoAccess',
    meta: {
      hidden: true,
      title: '403',
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFound',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  },
  {
    path: '/500',
    component: () => import('@/views/Error/500.vue'),
    name: 'Error',
    meta: {
      hidden: true,
      title: '500',
      noTagsView: true
    }
  },
  {
    path: '/bpm',
    component: Layout,
    name: 'bpm',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'manager/form/edit',
        component: () => import('@/views/bpm/form/editor/index.vue'),
        name: 'BpmFormEditor',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '设计流程表单',
          activeMenu: '/bpm/manager/form'
        }
      },
      {
        path: 'manager/definition',
        component: () => import('@/views/bpm/model/definition/index.vue'),
        name: 'BpmProcessDefinition',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '流程定义',
          activeMenu: '/bpm/manager/model'
        }
      },
      {
        path: 'process-instance/detail',
        component: () => import('@/views/bpm/processInstance/detail/index.vue'),
        name: 'BpmProcessInstanceDetail',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '流程详情',
          activeMenu: '/bpm/task/my'
        },
        props: (route) => ({
          id: route.query.id,
          taskId: route.query.taskId,
          activityId: route.query.activityId
        })
      },
      {
        path: 'process-instance/report',
        component: () => import('@/views/bpm/processInstance/report/index.vue'),
        name: 'BpmProcessInstanceReport',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '数据报表',
          activeMenu: '/bpm/manager/model'
        }
      },
      {
        path: 'oa/leave/create',
        component: () => import('@/views/bpm/oa/leave/create.vue'),
        name: 'OALeaveCreate',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '发起 OA 请假',
          activeMenu: '/bpm/oa/leave'
        }
      },
      {
        path: 'oa/leave/detail',
        component: () => import('@/views/bpm/oa/leave/detail.vue'),
        name: 'OALeaveDetail',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '查看 OA 请假',
          activeMenu: '/bpm/oa/leave'
        }
      },
      {
        path: 'manager/model/create',
        component: () => import('@/views/bpm/model/form/index.vue'),
        name: 'BpmModelCreate',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '创建流程',
          activeMenu: '/bpm/manager/model'
        }
      },
      {
        path: 'manager/model/:type/:id',
        component: () => import('@/views/bpm/model/form/index.vue'),
        name: 'BpmModelUpdate',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '修改流程',
          activeMenu: '/bpm/manager/model'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Error/404.vue'),
    name: '',
    meta: {
      title: '404',
      hidden: true,
      breadcrumb: false
    }
  }
]

export default remainingRouter
