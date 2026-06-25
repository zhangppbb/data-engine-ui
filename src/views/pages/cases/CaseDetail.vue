<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class='relative z-10 max-w-7xl mx-auto px-6 py-12'>
      <!-- [MODULE] 7k2_案例展示主模块 -->
      <div class='grid grid-cols-1 lg:grid-cols-3 gap-8' id='case-showcase'>
        <!-- 左侧主内容区域 -->
        <div class='lg:col-span-2 space-y-12'>
          <!-- [MODULE] 9b2_基本信息板块 -->
          <section class='card-glass' id='case-basic-info'>
            <div class='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
              <div>
                <span class='badge mb-3'>
                  案例展示
                </span>
                <h1 class='text-4xl font-bold text-white mb-2'>
                  城投集团供应商准入分析系统
                </h1>
                <p class='text-lg text-slate-400'>
                  帮助大型城投集团构建全维度供应商评估能力，降低采购风险
                </p>
              </div>
              <div class='grid grid-cols-2 gap-4'>
                <div class='glass-panel-base px-4 py-3 rounded-xl'>
                  <p class='text-xs text-slate-500 mb-1'>
                    客户名称
                  </p>
                  <p class='text-white font-semibold'>
                    城市发展投资控股集团
                  </p>
                </div>
                <div class='glass-panel-base px-4 py-3 rounded-xl'>
                  <p class='text-xs text-slate-500 mb-1'>
                    所属行业
                  </p>
                  <p class='text-white font-semibold'>
                    城市基础设施建设
                  </p>
                </div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] 9b2_基本信息板块 -- 展示客户名称和所属行业核心基本信息 -->
          
          <!-- [MODULE] a3f_背景痛点板块 -->
          <section class='card-glass' id='case-background'>
            <h2 class='text-2xl font-bold text-white mb-6 flex items-center'>
              <Icon icon='fa-solid:bullseye' :size='20' class='text-aurora-cyan mr-3' />
              业务背景与痛点
            </h2>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div class='flex gap-4'>
                <div class='w-10 h-10 rounded-lg bg-aurora-cyan/20 flex-shrink-0 flex items-center justify-center'>
                  <Icon icon='fa-solid:triangle-exclamation' :size='16' class='text-aurora-cyan' />
                </div>
                <div>
                  <h3 class='text-white font-semibold mb-1'>
                    传统采购模式风险高
                  </h3>
                  <p class='text-sm text-slate-400'>
                    缺乏对供应商全方位风险监控，围串标行为难以识别，给企业带来巨大经济损失。
                  </p>
                </div>
              </div>
              <div class='flex gap-4'>
                <div class='w-10 h-10 rounded-lg bg-aurora-cyan/20 flex-shrink-0 flex items-center justify-center'>
                  <Icon icon='fa-solid:question-circle' :size='16' class='text-aurora-cyan' />
                </div>
                <div>
                  <h3 class='text-white font-semibold mb-1'>
                    企业实力评估不精准
                  </h3>
                  <p class='text-sm text-slate-400'>
                    仅靠资质文件无法判断真实信用状况，不良企业容易蒙混过关，影响项目交付质量。
                  </p>
                </div>
              </div>
              <div class='flex gap-4'>
                <div class='w-10 h-10 rounded-lg bg-aurora-cyan/20 flex-shrink-0 flex items-center justify-center'>
                  <Icon icon='fa-solid:users' :size='16' class='text-aurora-cyan' />
                </div>
                <div>
                  <h3 class='text-white font-semibold mb-1'>
                    企业信息碎片化
                  </h3>
                  <p class='text-sm text-slate-400'>
                    数据分散在不同系统，难以形成完整企业视图，无法支撑精准决策，效率低下。
                  </p>
                </div>
              </div>
            </div>
            <div class='mt-6 p-4 rounded-xl bg-aurora-cyan/10 border border-aurora-cyan/20'>
              <p class='text-aurora-cyan text-sm font-medium'>
                <Icon icon='fa-solid:lightbulb' :size='14' class='mr-2' />
                项目必要性：迫切需要一套智能化企业分析体系，从风险、信用、画像三个维度全面评估供应商能力，从源头规避采购风险。
              </p>
            </div>
          </section>
          <!-- [/MODULE] a3f_背景痛点板块 -- 展示业务背景和存在的问题，说明项目建设必要性 -->
          
          <!-- [MODULE] 4d8_解决方案板块 -->
          <section class='card-glass' id='case-solution'>
            <h2 class='text-2xl font-bold text-white mb-6 flex items-center'>
              <Icon icon='fa-solid:lightbulb' :size='20' class='text-aurora-green mr-3' />
              智能分析解决方案
            </h2>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <!-- [MODULE] 5c6_解决方案：企业风险评价 -->
              <div class='glass-panel-base rounded-xl p-6 bg-gradient-to-br from-void-800 to-void-900 group hover:border-aurora-cyan/40 transition-all'>
                <div class='w-14 h-14 rounded-xl bg-aurora-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                  <Icon icon='fa-solid:shield-virus' :size='24' class='text-aurora-cyan' />
                </div>
                <h3 class='text-xl font-bold text-white mb-3'>
                  企业风险评价
                </h3>
                <p class='text-slate-400 text-sm leading-relaxed'>
                  基于大数据关联分析，在招投标场景自动识别企业关联关系，智能预警围串标风险，帮助采购方提前识别异常供应商。
                </p>
                <div class='mt-4 pt-4 border-t border-white/5'>
                  <span class='text-xs text-aurora-cyan font-medium'>
                    核心能力
                  </span>
                  <ul class='mt-2 space-y-1'>
                    <li class='text-xs text-slate-400 flex items-center'>
                      <Icon icon='fa-solid:check' :size='12' class='text-aurora-green mr-2' />
                      关联关系穿透识别
                    </li>
                    <li class='text-xs text-slate-400 flex items-center'>
                      <Icon icon='fa-solid:check' :size='12' class='text-aurora-green mr-2' />
                      异常投标行为预警
                    </li>
                  </ul>
                </div>
              </div>
              <!-- [/MODULE] 5c6_解决方案：企业风险评价 -- 介绍企业风险评价模块核心能力，主要针对围串标防范 -->
              
              <!-- [MODULE] 8e1_解决方案：企业信用评价 -->
              <div class='glass-panel-base rounded-xl p-6 bg-gradient-to-br from-void-800 to-void-900 group hover:border-aurora-cyan/40 transition-all'>
                <div class='w-14 h-14 rounded-xl bg-aurora-green/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                  <Icon icon='fa-solid:star-half-stroke' :size='24' class='text-aurora-green' />
                </div>
                <h3 class='text-xl font-bold text-white mb-3'>
                  企业信用评价
                </h3>
                <p class='text-slate-400 text-sm leading-relaxed'>
                  从五大核心维度构建科学评价体系，对企业信用进行全方位打分，客观反映企业真实经营状况和履约能力。
                </p>
                <div class='mt-4 pt-4 border-t border-white/5'>
                  <span class='text-xs text-aurora-green font-medium'>
                    五大评价维度
                  </span>
                  <ul class='mt-2 space-y-1'>
                    <li class='text-xs text-slate-400 flex items-center'>
                      <Icon icon='fa-solid:check' :size='12' class='text-aurora-green mr-2' />
                      综合实力、发展潜力
                    </li>
                    <li class='text-xs text-slate-400 flex items-center'>
                      <Icon icon='fa-solid:check' :size='12' class='text-aurora-green mr-2' />
                      合规经营、财务能力、合作履约
                    </li>
                  </ul>
                </div>
              </div>
              <!-- [/MODULE] 8e1_解决方案：企业信用评价 -- 介绍企业信用评价模块五大核心评价维度 -->
              
              <!-- [MODULE] 2a7_解决方案：企业画像分析 -->
              <div class='glass-panel-base rounded-xl p-6 bg-gradient-to-br from-void-800 to-void-900 group hover:border-aurora-cyan/40 transition-all'>
                <div class='w-14 h-14 rounded-xl bg-aurora-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                  <Icon icon='fa-solid:id-card' :size='24' class='text-aurora-purple' />
                </div>
                <h3 class='text-xl font-bold text-white mb-3'>
                  企业画像分析
                </h3>
                <p class='text-slate-400 text-sm leading-relaxed'>
                  通过多维度标签体系对企业进行精准画像，从多个角度还原企业真实特征，支持精准筛选和智能匹配。
                </p>
                <div class='mt-4 pt-4 border-t border-white/5'>
                  <span class='text-xs text-aurora-purple font-medium'>
                    核心能力
                  </span>
                  <ul class='mt-2 space-y-1'>
                    <li class='text-xs text-slate-400 flex items-center'>
                      <Icon icon='fa-solid:check' :size='12' class='text-aurora-green mr-2' />
                      多维度自动化打标签
                    </li>
                    <li class='text-xs text-slate-400 flex items-center'>
                      <Icon icon='fa-solid:check' :size='12' class='text-aurora-green mr-2' />
                      可视化全景图谱展示
                    </li>
                  </ul>
                </div>
              </div>
              <!-- [/MODULE] 2a7_解决方案：企业画像分析 -- 介绍企业画像分析模块标签化核心能力 -->
            </div>
          </section>
          <!-- [/MODULE] 4d8_解决方案板块 -- 展示三大核心解决方案差异化亮点和创新点 -->
          
          <!-- [MODULE] c5x_系统功能板块 -->
          <section class='card-glass' id='case-system-functions'>
            <h2 class='text-2xl font-bold text-white mb-6 flex items-center'>
              <Icon icon='fa-solid:desktop' :size='20' class='text-aurora-purple mr-3' />
              核心系统功能界面
            </h2>
            <div class='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <!-- [MODULE] 7g9_系统功能：企业风险评价界面 -->
              <div class='space-y-3'>
                <h3 class='text-white font-semibold flex items-center'>
                  <Icon icon='fa-solid:shield' :size='16' class='text-aurora-cyan mr-2' />
                  企业风险评价（招投标预警）
                </h3>
                <div class='rounded-xl overflow-hidden border border-white/10'>
                  <img alt='企业风险评价界面' class='w-full h-auto object-cover' src='https://design.gemcoder.com/staticResource/echoAiSystemImages/d2e8bb63a00e5bdb5173af49a4da60bf.png' />
                </div>
                <p class='text-xs text-slate-400'>
                  自动识别投标企业关联关系，高亮提示潜在围串标风险，帮助采购方快速决策
                </p>
              </div>
              <!-- [/MODULE] 7g9_系统功能：企业风险评价界面 -- 预留企业风险评价招投标关联信息提示界面展示区 -->
              
              <!-- [MODULE] 3h2_系统功能：企业信用评价界面 -->
              <div class='space-y-3'>
                <h3 class='text-white font-semibold flex items-center'>
                  <Icon icon='fa-solid:star' :size='16' class='text-aurora-green mr-2' />
                  企业信用评价（五大维度评分）
                </h3>
                <div class='rounded-xl overflow-hidden border border-white/10'>
                  <img alt='企业信用评价界面' class='w-full h-auto object-cover' src='https://design.gemcoder.com/staticResource/echoAiSystemImages/9e3a40bc03e4c99d98253576518674f4.png' />
                </div>
                <p class='text-xs text-slate-400'>
                  雷达图直观展示五大维度评分，输出综合信用等级，辅助客观评价企业能力
                </p>
              </div>
              <!-- [/MODULE] 3h2_系统功能：企业信用评价界面 -- 预留企业信用评价五大维度评分界面展示区 -->
              
              <!-- [MODULE] 4k8_系统功能：企业画像分析界面 -->
              <div class='space-y-3'>
                <h3 class='text-white font-semibold flex items-center'>
                  <Icon icon='fa-solid:tags' :size='16' class='text-aurora-purple mr-2' />
                  企业画像分析（标签化展示）
                </h3>
                <div class='rounded-xl overflow-hidden border border-white/10'>
                  <img alt='企业画像分析界面' class='w-full h-auto object-cover' src='https://design.gemcoder.com/staticResource/echoAiSystemImages/5475887653e857b54d725df3d74ba423.png' />
                </div>
                <p class='text-xs text-slate-400'>
                  多维度标签云展示企业特征，可视化呈现完整企业画像，帮助用户快速掌握企业特点
                </p>
              </div>
              <!-- [/MODULE] 4k8_系统功能：企业画像分析界面 -- 预留企业画像分析标签化画像展示界面展示区 -->
            </div>
          </section>
          <!-- [/MODULE] c5x_系统功能板块 -- 展示三大核心功能系统界面图片 -->
          
          <!-- [MODULE] 9m1_落地成果板块 -->
          <section class='card-glass' id='case-results'>
            <h2 class='text-2xl font-bold text-white mb-6 flex items-center'>
              <Icon icon='fa-solid:trophy' :size='20' class='text-aurora-green mr-3' />
              项目落地成果
            </h2>
            <!-- [MODULE] 6p2_量化数据成果 -->
            <div class='mb-8'>
              <h3 class='text-lg font-semibold text-white mb-4'>
                核心量化成果
              </h3>
              <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div class='h-[200px] glass-panel-base rounded-xl p-4' ref='risk-success-chart'></div>
                <div class='h-[200px] glass-panel-base rounded-xl p-4' ref='credit-accuracy-chart'></div>
                <div class='h-[200px] glass-panel-base rounded-xl p-4' ref='profile-match-chart'></div>
              </div>
            </div>
            <!-- [/MODULE] 6p2_量化数据成果 -- 用ECharts展示三大核心量化数据成果 -->
            
            <!-- [MODULE] 1z3_成果展示 -->
            <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h3 class='text-lg font-semibold text-white mb-4'>
                  系统与文档成果
                </h3>
                <div class='grid grid-cols-2 gap-4'>
                  <div class='glass-panel-base rounded-lg overflow-hidden'>
                    <img alt='企业分析系统主界面' class='w-full h-auto object-cover' src='https://design.gemcoder.com/staticResource/echoAiSystemImages/920ad565c608ac0de2107dec3ef01ee2.png' />
                    <div class='p-2'>
                      <p class='text-xs text-white text-center'>
                        企业分析系统主界面
                      </p>
                    </div>
                  </div>
                  <div class='glass-panel-base rounded-lg overflow-hidden'>
                    <img alt='信用评价报告' class='w-full h-auto object-cover' src='https://design.gemcoder.com/staticResource/echoAiSystemImages/176c4d100d919d228a81d1c0c2798315.png' />
                    <div class='p-2'>
                      <p class='text-xs text-white text-center'>
                        企业信用评价报告
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 class='text-lg font-semibold text-white mb-4'>
                  实物与荣誉成果
                </h3>
                <div class='grid grid-cols-2 gap-4'>
                  <div class='glass-panel-base rounded-lg overflow-hidden'>
                    <img alt='资质牌匾' class='w-full h-auto object-cover' src='https://design.gemcoder.com/staticResource/echoAiSystemImages/2a66e8a5589b016fc50c58a98f4dbd2a.png' />
                    <div class='p-2'>
                      <p class='text-xs text-white text-center'>
                        高新技术企业资质
                      </p>
                    </div>
                  </div>
                  <div class='glass-panel-base rounded-lg overflow-hidden'>
                    <img alt='客户认可证书' class='w-full h-auto object-cover' src='https://design.gemcoder.com/staticResource/echoAiSystemImages/0984b5db05b6f19f4d2d3fbcd2081996.png' />
                    <div class='p-2'>
                      <p class='text-xs text-white text-center'>
                        优秀供应商证书
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [/MODULE] 1z3_成果展示 -- 展示系统界面、文档成果、实物荣誉成果图片 -->
          </section>
          <!-- [/MODULE] 9m1_落地成果板块 -- 图文结合展示项目落地各项成果 -->
          
          <!-- [MODULE] f4x_客户价值板块 -->
          <section class='card-glass' id='case-customer-value'>
            <h2 class='text-2xl font-bold text-white mb-6 flex items-center'>
              <Icon icon='fa-solid:handshake' :size='20' class='text-aurora-cyan mr-3' />
              客户价值与行业意义
            </h2>
            <div class='space-y-6'>
              <div>
                <h3 class='text-lg font-semibold text-white mb-4'>
                  核心业务提升
                </h3>
                <div class='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div class='flex items-start gap-3'>
                    <div class='w-8 h-8 rounded-full bg-aurora-cyan/20 flex items-center justify-center flex-shrink-0 mt-1'>
                      <Icon icon='fa-solid:shield-halved' :size='14' class='text-aurora-cyan' />
                    </div>
                    <div>
                      <h4 class='text-white font-medium mb-1'>
                        招投标风险防控
                      </h4>
                      <p class='text-sm text-slate-400'>
                        有效识别围串标行为，每年帮助客户避免超过千万元的潜在经济损失。
                      </p>
                    </div>
                  </div>
                  <div class='flex items-start gap-3'>
                    <div class='w-8 h-8 rounded-full bg-aurora-green/20 flex items-center justify-center flex-shrink-0 mt-1'>
                      <Icon icon='fa-solid:balance-scale' :size='14' class='text-aurora-green' />
                    </div>
                    <div>
                      <h4 class='text-white font-medium mb-1'>
                        企业实力精准评估
                      </h4>
                      <p class='text-sm text-slate-400'>
                        五大维度科学评价体系，客观反映企业真实能力，大大降低不合格供应商入选率。
                      </p>
                    </div>
                  </div>
                  <div class='flex items-start gap-3'>
                    <div class='w-8 h-8 rounded-full bg-aurora-purple/20 flex items-center justify-center flex-shrink-0 mt-1'>
                      <Icon icon='fa-solid:rocket' :size='14' class='text-aurora-purple' />
                    </div>
                    <div>
                      <h4 class='text-white font-medium mb-1'>
                        决策效率大幅提升
                      </h4>
                      <p class='text-sm text-slate-400'>
                        从人工一周的评估工作量缩短到系统自动完成，决策效率提升90%以上。
                      </p>
                    </div>
                  </div>
                  <div class='flex items-start gap-3'>
                    <div class='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1'>
                      <Icon icon='fa-solid:sitemap' :size='14' class='text-white' />
                    </div>
                    <div>
                      <h4 class='text-white font-medium mb-1'>
                        供应商全生命周期管理
                      </h4>
                      <p class='text-sm text-slate-400'>
                        建立动态评估机制，持续监控供应商风险变化，保障项目全周期质量稳定。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='p-4 rounded-xl bg-gradient-to-r from-aurora-cyan/10 to-aurora-green/10 border border-aurora-green/20'>
                <h3 class='text-aurora-green font-semibold mb-2 flex items-center'>
                  <Icon icon='fa-solid:industry' :size='16' class='mr-2' />
                  行业示范价值
                </h3>
                <p class='text-slate-300 text-sm'>
                  本项目为大型基础设施建设行业供应商管理提供了可复制的智能化解决方案，成功实现了从传统人工评估向数据驱动智能评估的转型，其核心分析方法和系统架构可推广应用至政府采购、国企采购、金融信贷准入等多个行业场景，具备极高推广价值。
                </p>
              </div>
            </div>
          </section>
        </div>
        
        <!-- 右侧侧边栏区域 -->
        <div class='lg:col-span-1 space-y-8 lg:fixed lg:right-6 lg:w-[32%]'>
          <!-- [MODULE] 2d9_工具卡片区域 -->
          <section class='card-glass'>
            <h2 class='text-xl font-bold text-white mb-4 flex items-center'>
              <Icon icon='fa-solid:wrench' :size='18' class='text-aurora-cyan mr-2' />
              相关工具
            </h2>
            <div class='space-y-4'>
              <div class='glass-panel-base rounded-xl p-4 hover:bg-white/5 transition-all'>
                <h3 class='text-white font-medium mb-1'>
                  企业分析报告生成
                </h3>
                <p class='text-sm text-slate-400'>
                  一键生成专业的企业能力评估报告
                </p>
              </div>
              <div class='glass-panel-base rounded-xl p-4 hover:bg-white/5 transition-all'>
                <h3 class='text-white font-medium mb-1'>
                  风险监控预警系统
                </h3>
                <p class='text-sm text-slate-400'>
                  实时监控供应商风险动态
                </p>
              </div>
              <div class='glass-panel-base rounded-xl p-4 hover:bg-white/5 transition-all'>
                <h3 class='text-white font-medium mb-1'>
                  供应商画像分析
                </h3>
                <p class='text-sm text-slate-400'>
                  多维度构建供应商立体画像
                </p>
              </div>
            </div>
          </section>
          <!-- [/MODULE] 2d9_工具卡片区域 -- 展示相关业务工具，包含报告生成、风险监控、画像分析工具卡片 -->
          
          <!-- [MODULE] 7s3_解决方案咨询区域 -->
          <section class='card-glass bg-gradient-to-br from-aurora-cyan/10 to-aurora-green/10 border-aurora-cyan/30'>
            <h2 class='text-xl font-bold text-white mb-4 flex items-center'>
              <Icon icon='fa-solid:comments' :size='18' class='text-aurora-green mr-2' />
              获取定制方案
            </h2>
            <p class='text-slate-300 text-sm mb-6'>
              我们的团队可以根据您的实际业务需求，为您定制专属的智能分析解决方案
            </p>
            <div class='flex flex-col space-y-3'>
              <button class='btn-primary' @click='handleConsult'>
                <Icon icon='fa-solid:headset' :size='14' class='mr-2' />
                立即咨询
              </button>
              <button class='btn-secondary' @click='goBack'>
                <Icon icon='fa-solid:arrow-left' :size='14' class='mr-2' />
                返回案例列表
              </button>
              <button class='btn-primary' @click='viewOtherCases'>
                <Icon icon='fa-solid:arrow-right' :size='14' class='mr-2' />
                查看其他案例
              </button>
            </div>
          </section>
          <!-- [/MODULE] 7s3_解决方案咨询区域 -- 提供定制方案咨询服务，包含立即咨询和查看其他案例按钮 -->
          
          <!-- [MODULE] 9x7_联系我们区域 -->
          <section class='card-glass'>
            <h2 class='text-xl font-bold text-white mb-4 flex items-center'>
              <Icon icon='fa-solid:address-card' :size='18' class='text-aurora-purple mr-2' />
              联系我们
            </h2>
            <div class='space-y-3'>
              <div class='flex items-center gap-3'>
                <div class='w-8 h-8 rounded-full bg-aurora-purple/20 flex items-center justify-center'>
                  <Icon icon='fa-solid:envelope' :size='14' class='text-aurora-purple' />
                </div>
                <div>
                  <p class='text-sm text-slate-400'>
                    邮箱
                  </p>
                  <p class='text-white text-sm'>
                    contact@example.com
                  </p>
                </div>
              </div>
              <div class='flex items-center gap-3'>
                <div class='w-8 h-8 rounded-full bg-aurora-cyan/20 flex items-center justify-center'>
                  <Icon icon='fa-solid:phone' :size='14' class='text-aurora-cyan' />
                </div>
                <div>
                  <p class='text-sm text-slate-400'>
                    电话
                  </p>
                  <p class='text-white text-sm'>
                    400-123-4567
                  </p>
                </div>
              </div>
              <div class='flex items-center gap-3'>
                <div class='w-8 h-8 rounded-full bg-aurora-green/20 flex items-center justify-center'>
                  <Icon icon='fa-solid:map-marker-alt' :size='14' class='text-aurora-green' />
                </div>
                <div>
                  <p class='text-sm text-slate-400'>
                    地址
                  </p>
                  <p class='text-white text-sm'>
                    北京市朝阳区科技园8号
                  </p>
                </div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] 9x7_联系我们区域 -- 展示联系方式，包含邮箱、电话和地址信息 -->
        </div>
      </div>
      <!-- [/MODULE] 7k2_案例展示主模块 -- 完整企业分析案例展示，包含六大标准板块 -->
    </main>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts'
import Icon from '@/components/Icon/src/Icon.vue'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 响应式引用
const riskSuccessChart = ref()
const creditAccuracyChart = ref()
const profileMatchChart = ref()

// 方法
const handleConsult = () => {
  // 立即咨询逻辑
  console.log('立即咨询')
}

const goBack = () => {
  router.push('/pages/cases/list')
}

const viewOtherCases = () => {
  router.push('/pages/cases/list')
}

// 初始化图表
const initCharts = () => {
  nextTick(() => {
    // 围串标防范成功率
    if (riskSuccessChart.value) {
      const riskChart = echarts.init(riskSuccessChart.value)
      riskChart.setOption({
        title: {
          text: '围串标防范成功率',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: 14
          }
        },
        series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            width: 6
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: '#00d2ff'
                }, {
                  offset: 1,
                  color: '#00ffa3'
                }]
              }
            }
          },
          axisLine: {
            lineStyle: {
              color: [[1, 'rgba(255,255,255,0.1)']]
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 20,
            offsetCenter: [0, 70],
            formatter: '{value}%',
            color: '#00ffa3'
          },
          data: [{
            value: 96.2
          }]
        }],
        backgroundColor: 'transparent'
      })
    }

    // 信用评价准确率
    if (creditAccuracyChart.value) {
      const creditChart = echarts.init(creditAccuracyChart.value)
      creditChart.setOption({
        title: {
          text: '信用评价准确率',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: 14
          }
        },
        series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            width: 6
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: '#00ffa3'
                }, {
                  offset: 1,
                  color: '#7000ff'
                }]
              }
            }
          },
          axisLine: {
            lineStyle: {
              color: [[1, 'rgba(255,255,255,0.1)']]
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 20,
            offsetCenter: [0, 70],
            formatter: '{value}%',
            color: '#00ffa3'
          },
          data: [{
            value: 92.8
          }]
        }],
        backgroundColor: 'transparent'
      })
    }

    // 画像匹配度
    if (profileMatchChart.value) {
      const profileChart = echarts.init(profileMatchChart.value)
      profileChart.setOption({
        title: {
          text: '画像需求匹配度',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: 14
          }
        },
        series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            width: 6
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: '#7000ff'
                }, {
                  offset: 1,
                  color: '#00d2ff'
                }]
              }
            }
          },
          axisLine: {
            lineStyle: {
              color: [[1, 'rgba(255,255,255,0.1)']]
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 20,
            offsetCenter: [0, 70],
            formatter: '{value}%',
            color: '#00d2ff'
          },
          data: [{
            value: 89.5
          }]
        }],
        backgroundColor: 'transparent'
      })
    }

    // 监听窗口变化，自动调整图表大小
    window.addEventListener('resize', () => {
      if (riskChart) riskChart.resize()
      if (creditChart) creditChart.resize()
      if (profileChart) profileChart.resize()
    })
  })
}

// 组件挂载
onMounted(() => {
  initCharts()
})
</script>

<style lang="scss" scoped>
.text-gradient {
  color: transparent;
  background: linear-gradient(to right, #00d2ff, #00ffa3);
  background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-glass {
  @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
}

.btn-primary {
  @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-void-900 transition-all duration-300;

  background: linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%);
}

.btn-primary:hover {
  @apply shadow-glow-md transform -translate-y-0.5 scale-105;
}

.btn-secondary {
  @apply inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white transition-all duration-300 border border-white/20 hover:border-aurora-cyan/50 hover:bg-white/5;
}

.btn-link {
  @apply inline-flex items-center text-aurora-cyan hover:text-aurora-green transition-colors font-medium text-sm;
}

.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
}

.aurora-blur {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(80px);
}

.glass-panel-base {
  background: rgb(255 255 255 / 3%);
  border: 1px solid rgb(255 255 255 / 8%);
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

.bg-stars {
  background-color: #02040a;
  background-image: 
    radial-gradient(white, rgb(255 255 255 / 20%) 2px, transparent 3px),
    radial-gradient(white, rgb(255 255 255 / 15%) 1px, transparent 2px),
    radial-gradient(white, rgb(255 255 255 / 10%) 2px, transparent 3px);
  background-position: 0 0, 40px 60px, 130px 270px;
  background-size: 550px 550px, 350px 350px, 250px 250px;
}

.bg-grid-white {
  background-image: linear-gradient(to right, rgb(255 255 255 / 5%) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(255 255 255 / 5%) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
