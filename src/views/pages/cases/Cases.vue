<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <!-- 页面内容 -->
        <main class="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-16">
         
         
         <section class="relative overflow-hidden rounded-3xl glass-panel-base p-8 md:p-12">
          <div class="relative max-w-3xl mx-auto text-center">
           <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurora-cyan/10 border border-aurora-cyan/20 text-aurora-cyan text-xs font-bold uppercase tracking-wider mb-6">
            <span class="w-2 h-2 rounded-full bg-aurora-green animate-pulse">
            </span>
            实力鉴证
           </div>
           <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span class="text-gradient">
             专业团队
            </span>
            <br/>
            具备多行业解决方案
           </h1>
           <p class="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            我们拥有专业的技术团队和丰富的行业经验，致力于为各领域客户提供定制化解决方案
           </p>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="flex flex-col items-center gap-2 px-4 py-6 rounded-lg bg-white/5 border border-white/10">
             <Icon icon="fa-solid:users" :size="24" class="text-aurora-cyan" />
             <span class="text-white text-xl font-bold">
              500+
             </span>
             <span class="text-slate-400 text-sm">
              服务客户
             </span>
            </div>
            <div class="flex flex-col items-center gap-2 px-4 py-6 rounded-lg bg-white/5 border border-white/10">
             <Icon icon="fa-solid:certificate" :size="24" class="text-aurora-cyan" />
             <span class="text-white text-xl font-bold">
              100+
             </span>
             <span class="text-slate-400 text-sm">
              成功案例
             </span>
            </div>
            <div class="flex flex-col items-center gap-2 px-4 py-6 rounded-lg bg-white/5 border border-white/10">
             <Icon icon="fa-solid:industry" :size="24" class="text-aurora-cyan" />
             <span class="text-white text-xl font-bold">
              12+
             </span>
             <span class="text-slate-400 text-sm">
              覆盖行业
             </span>
            </div>
            <div class="flex flex-col items-center gap-2 px-4 py-6 rounded-lg bg-white/5 border border-white/10">
             <Icon icon="fa-solid:user-tie" :size="24" class="text-aurora-cyan" />
             <span class="text-white text-xl font-bold">
              150+
             </span>
             <span class="text-slate-400 text-sm">
              专业团队
             </span>
            </div>
           </div>
          </div>
         </section>
         
         
         
         <section class="glass-panel-base rounded-2xl p-6 bg-grid-white">
          <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
           <Icon icon="fa-solid:filter-list" :size="16" class="text-aurora-cyan" />
           行业筛选
          </h3>
          <div class="flex flex-wrap gap-3" ref="filter-container">
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105 active" data-filter="all">
            全部行业
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="market">
            市场竞争分析
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="enterprise">
            企业分析
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="chain">
            产业链
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="energy">
            交能融合
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="transport">
            交通数字底座
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="investment">
            产业招商
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="university">
            校企成果转化
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="supply">
            供应链金融
           </button>
           <button class="px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium shadow-glow-sm transition-all hover:scale-105" data-filter="research">
            投资研判
           </button>
          </div>
         </section>
         
         
         <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref="case-container">
          
          
          <div class="filter-item" data-category="market">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="电商行业竞争分析项目" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=business data analytics dashboard with market share bar charts and competitor analysis, dark professional background, modern data visualization&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               市场竞争分析
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors" >
              头部电商平台竞争格局分析
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              帮助头部电商平台梳理行业竞争格局，识别竞争对手优势劣势，提供战略发展建议。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               用户画像
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               竞品监测
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               战略咨询
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.03
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          <div class="filter-item" data-category="market">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="新能源汽车市场分析" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=new energy vehicle market trend analysis infographic, multiple brand logos, data visualization, dark professional background&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               市场竞争分析
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              新能源汽车细分市场进入分析
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              为传统车企进入新能源细分市场提供可行性分析，识别市场机会与风险点。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               进入分析
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               政策解读
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               机会识别
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.01
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="enterprise">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="集团企业数字化转型诊断" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=corporate organizational structure and financial health analysis dashboard, professional business charts, dark blue background&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               企业分析
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              大型制造集团数字化转型诊断
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              对大型制造集团进行全面数字化诊断分析，梳理现有能力短板，提供转型实施路径。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               能力诊断
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               路径规划
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               战略落地
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2023.12
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          <div class="filter-item" data-category="enterprise">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="科创企业估值分析" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=startup company valuation and business potential analysis, modern business report, dark professional style&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               企业分析
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              科创型企业估值与增长分析
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              为投资机构提供科创标的企业全方位分析，评估增长潜力与投资价值。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               估值建模
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               风险评估
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               投研支持
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.02
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="chain">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="半导体产业链梳理" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=semi-conductor industry supply chain map visualization, global chip industry chain diagram, dark technical background&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               产业链
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              半导体全产业链价值分析
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              全面梳理全球半导体产业链各个环节，分析价值分配格局与国产替代机会。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               图谱构建
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               价值分析
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               国产替代
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.04
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="energy">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="高速公路交能融合项目" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=highway with photovoltaic power stations along the road, smart transportation and energy integration, future smart infrastructure, blue tone professional photography&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               交能融合
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              高速公路光储充一体化项目
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              打造高速公路沿线光伏+储能+充电一体化解决方案，实现交通与能源深度融合。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               规划设计
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               商业模式
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               运营方案
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.01
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="transport">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="智慧交通数字底座项目" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=smart city digital twin traffic management system, 3d map visualization, blue glowing high tech background&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               交通数字底座
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              城市智慧交通数字孪生底座
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              构建城市级交通数字孪生底座，支撑各类智慧交通应用开发与运营决策。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               数字孪生
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               数据中台
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               底座建设
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2023.11
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          <div class="filter-item" data-category="transport">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="高铁运行监测平台" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=high-speed rail big data operation monitoring center, multiple large screens displaying train data, dark modern control room&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               交通数字底座
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              高铁运行安全监测数据平台
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              搭建高铁运行全维度数据采集与分析平台，支撑安全监测与预测性维护。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               大数据平台
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               安全监测
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               预测维护
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2023.09
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="investment">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="产业园招商规划项目" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=industrial park master planning modern industrial zone, drone aerial view of new industrial park, professional architectural photography&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               产业招商
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              新能源产业园招商定位规划
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              为地方政府新能源产业园提供产业定位、目标企业筛选与整体招商方案设计。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               产业定位
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               企业筛选
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               方案设计
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.02
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="university">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="高校科技成果转化项目" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=university laboratory with scientists working on new material technology, modern research center, blue scientific lighting&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               校企成果转化
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              新型材料实验室成果产业化
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              帮助顶尖高校科研团队梳理技术成果，对接产业资本，推动产业化落地。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               成果梳理
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               产业对接
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               孵化落地
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2023.10
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          <div class="filter-item" data-category="university">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="人工智能产学研项目" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=ai research lab with multiple computers running machine learning algorithms, modern university research environment, dark futuristic design&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               校企成果转化
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              人工智能产学研合作平台建设
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              搭建高校与企业人工智能领域合作平台，促进技术成果与产业需求精准对接。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               平台建设
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               需求对接
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               联合研发
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.03
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="supply">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="汽车供应链金融平台" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=global supply chain finance technology platform, digital trade and logistics data visualization, dark fintech background&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               供应链金融
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              汽车产业链供应链金融服务平台
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              搭建核心企业主导的供应链金融服务平台，解决中小企业融资难问题。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               平台设计
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               风控模型
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               生态搭建
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2023.08
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
          
          
          <div class="filter-item" data-category="research">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="硬科技项目投资研判" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=venture capital investment analysis meeting, business people discussing startup investment opportunities, modern office, dark professional style&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               投资研判
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              硬科技赛道投资机会系统性研判
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              为头部PE机构提供硬科技赛道系统性梳理，识别细分领域投资机会与潜在风险。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               赛道梳理
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               机会识别
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               风险提示
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.04
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          <div class="filter-item" data-category="research">
           <router-link to="/pages/cases/detail/demo" class="block">
           <div class="card-glass p-0 overflow-hidden group cursor-pointer">
            <div class="h-48 overflow-hidden relative">
             <img alt="绿色能源投资组合分析" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://design.gemcoder.com/api/searchImage?query=green energy investment portfolio financial data chart, renewable energy investment analysis, dark modern financial background&amp;width=600&amp;height=400"/>
             <div class="absolute top-4 left-4">
              <span class="badge">
               投资研判
              </span>
             </div>
            </div>
            <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
              绿色能源领域投资组合配置分析
             </h3>
             <p class="text-sm text-slate-400 mb-4">
              为主权基金提供绿色能源领域投资组合配置研究，提供中长期配置建议。
             </p>
             <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan text-xs">
               配置研究
              </span>
              <span class="px-2 py-1 rounded-full bg-aurora-green/10 text-aurora-green text-xs">
               趋势预测
              </span>
              <span class="px-2 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
               策略建议
              </span>
             </div>
             <div class="flex justify-between items-center pt-4 border-t border-white/5">
              <span class="text-xs text-slate-500">
               更新于 2024.02
              </span>
              <Icon icon="fa-solid:arrow-right" :size="12" class="text-white/20 group-hover:text-aurora-green transition-colors" />
             </div>
            </div>
           </div>
           </router-link>
          </div>
          
         </section>
         
         
         <section class="glass-panel-base rounded-2xl p-8">
          <div class="flex flex-col md:flex-row items-center gap-6">
           <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora-cyan/20 to-aurora-purple/10 flex items-center justify-center flex-shrink-0">
            <Icon icon="fa-solid:lightbulb" :size="24" class="text-aurora-cyan" />
           </div>
           <div class="flex-1 text-center md:text-left">
            <h3 class="text-2xl font-bold text-white mb-2">
             筛选对应行业，查看各领域落地项目
            </h3>
            <p class="text-slate-400">
             了解多场景解决方案实操效果，我们在多个行业拥有丰富的项目经验，可根据您的具体需求提供定制化服务。
            </p>
           </div>
           <div class="flex-shrink-0">
            <a class="btn-secondary" href="javascript:void(0);">
             <Icon icon="fa-solid:handshake" :size="16" class="mr-2" />
             咨询需求
            </a>
           </div>
          </div>
         </section>
         
        </main>
        
        <footer class="border-t border-white/10 mt-12 bg-void-900 z-10 relative">
         <div class="max-w-7xl mx-auto px-6 py-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
           <div>
            <h4 class="text-white font-bold mb-4">
             关于我们
            </h4>
            <ul class="space-y-2 text-sm text-slate-400">
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               公司简介
              </a>
             </li>
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               团队介绍
              </a>
             </li>
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               发展历程
              </a>
             </li>
            </ul>
           </div>
           <div>
            <h4 class="text-white font-bold mb-4">
             解决方案
            </h4>
            <ul class="space-y-2 text-sm text-slate-400">
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               产业研究
              </a>
             </li>
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               战略咨询
              </a>
             </li>
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               数字转型
              </a>
             </li>
            </ul>
           </div>
           <div>
            <h4 class="text-white font-bold mb-4">
             客户服务
            </h4>
            <ul class="space-y-2 text-sm text-slate-400">
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               需求咨询
              </a>
             </li>
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               项目流程
              </a>
             </li>
             <li>
              <a class="hover:text-aurora-cyan transition" href="javascript:void(0);">
               售后服务
              </a>
             </li>
            </ul>
           </div>
           <div>
            <h4 class="text-white font-bold mb-4">
             联系我们
            </h4>
            <ul class="space-y-2 text-sm text-slate-400">
             <li class="flex items-center gap-2">
              <Icon icon="fa-solid:map-marker-alt" :size="14" class="text-aurora-cyan" />
              北京市朝阳区
             </li>
             <li class="flex items-center gap-2">
              <Icon icon="fa-solid:phone" :size="14" class="text-aurora-cyan" />
              400-888-8888
             </li>
             <li class="flex items-center gap-2">
              <Icon icon="fa-solid:envelope" :size="14" class="text-aurora-cyan" />
              contact@example.com
             </li>
            </ul>
           </div>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
           <div class="flex items-center gap-2 mb-4 md:mb-0">
            <div class="w-6 h-6 rounded bg-gradient-to-tr from-aurora-cyan to-aurora-green">
            </div>
            <span class="font-bold text-white text-lg">
             智策数字
            </span>
           </div>
           <div class="flex gap-4">
            <a class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-aurora-cyan hover:text-void-900 transition" href="javascript:void(0);">
             <i class="fa-brands fa-weixin">
             </i>
            </a>
            <a class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-aurora-cyan hover:text-void-900 transition" href="javascript:void(0);">
             <i class="fa-brands fa-weibo">
             </i>
            </a>
            <a class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-aurora-cyan hover:text-void-900 transition" href="javascript:void(0);">
             <i class="fa-brands fa-linkedin">
             </i>
            </a>
           </div>
          </div>
          <div class="text-center text-slate-500 text-xs mt-8">
           © 2024 智策数字科技有限公司. All rights reserved.
          </div>
         </div>
        </footer>
        
        <div class="fixed inset-0 z-50 hidden items-center justify-center" ref="contact-modal">
         <div class="absolute inset-0 bg-black/70 backdrop-blur-sm">
         </div>
         <div class="relative glass-panel-base rounded-2xl p-8 max-w-md w-full mx-4">
          <div class="flex justify-between items-center mb-6">
           <h3 class="text-2xl font-bold text-white">
            联系我们
           </h3>
           <button class="text-slate-400 hover:text-white transition-colors" ref="close-modal">
            <Icon icon="fa-solid:xmark" :size="20" />
           </button>
          </div>
          <div class="space-y-4">
           <div class="flex items-center gap-3">
            <Icon icon="fa-solid:phone" :size="20" class="text-aurora-cyan w-8" />
            <div>
             <p class="text-slate-400 text-sm">
              联系电话
             </p>
             <p class="text-white font-medium">
              400-888-8888
             </p>
            </div>
           </div>
           <div class="flex items-center gap-3">
            <Icon icon="fa-solid:envelope" :size="20" class="text-aurora-cyan w-8" />
            <div>
             <p class="text-slate-400 text-sm">
              邮箱地址
             </p>
             <p class="text-white font-medium">
              contact@example.com
             </p>
            </div>
           </div>
           <div class="flex items-center gap-3">
            <i class="fa-solid fa-map-marker-alt text-aurora-cyan text-xl w-8">
            </i>
            <div>
             <p class="text-slate-400 text-sm">
              公司地址
             </p>
             <p class="text-white font-medium">
              北京市朝阳区建国路88号
             </p>
            </div>
           </div>
          </div>
          <div class="mt-8">
           <button class="btn-primary w-full" ref="modal-contact-btn">
            <i class="fa-solid fa-phone mr-2">
            </i>
            立即联系
           </button>
          </div>
         </div>
        </div>
    </main>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 页面状态
const loading = ref(false)

// 导航方法
const navigateTo = (path: string) => {
  const routeMap: Record<string, string> = {
    'index.html': '/pages/index',
    'dashboard.html': '/pages/dashboard',
    'workspace.html': '/pages/workspace',
    'profile.html': '/pages/profile',
    'search-results.html': '/pages/search-results',
    'apps/apps.html': '/pages/apps/list',
    'cases/cases.html': '/pages/cases/list',
    'resources/resources.html': '/pages/resources/list'
  }
  const route = routeMap[path] || path.replace('.html', '')
  router.push(route)
}

onMounted(() => {
  // 页面初始化
  console.log('案例列表 页面加载完成')
})
</script>

<style scoped lang="scss">


@layer utilities {
            /* 星空粒子背景模拟 */
            .bg-stars {
                background-color: #02040a;
                background-image: 
                    radial-gradient(white, rgb(255 255 255 / 20%) 2px, transparent 3px),
                    radial-gradient(white, rgb(255 255 255 / 15%) 1px, transparent 2px),
                    radial-gradient(white, rgb(255 255 255 / 10%) 2px, transparent 3px);
                background-position: 0 0, 40px 60px, 130px 270px;
                background-size: 550px 550px, 350px 350px, 250px 250px;
            }

            /* 文本渐变 */
            .text-gradient {
                color: transparent;
                background: linear-gradient(to right, #00d2ff, #00ffa3);
                background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            /* 极光背景光晕 */
            .aurora-blur {
                position: absolute;
                z-index: 0;
                pointer-events: none;
                border-radius: 50%;
                opacity: 0.4;
                filter: blur(80px);
            }

            /* 磨砂玻璃面板工具类 */
            .glass-panel-base {
                background: rgb(255 255 255 / 3%);
                border: 1px solid rgb(255 255 255 / 8%);
                box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
                backdrop-filter: blur(12px);
                backdrop-filter: blur(12px);
            }
            
            /* 细微的网格背景 */
            .bg-grid-white {
                background-image: linear-gradient(to right, rgb(255 255 255 / 5%) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgb(255 255 255 / 5%) 1px, transparent 1px);
                background-size: 40px 40px;
            }
        }

        @layer components {
            /* 按钮组件 */
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

            .filter-tag {
                @apply px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-slate-300 cursor-pointer transition-all duration-300 hover:border-aurora-cyan/50 hover:text-aurora-cyan;
            }
            
            .filter-tag.active {
                @apply bg-accent-gradient text-void-900 border-transparent font-semibold shadow-glow-sm;
            }

            /* 卡片组件 */
            .card-glass {
                @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
            }

            /* 标签徽章 */
            .badge {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
            }

            /* 输入框 */
            .input-glass {
                @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
            }
        }
        
        body {
            @apply selection:bg-aurora-cyan/30 selection:text-white font-body;
        }

        .filter-item.hidden {
            display: none !important;
        }

// 页面特定样式
.pages-container {
  min-height: calc(100vh - 84px);
}


</style>
