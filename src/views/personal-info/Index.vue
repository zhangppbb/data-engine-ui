<template>
  <div class="max-w-1440px mx-auto pb-20px">
    <!-- 标题 -->
    <div class="card text-center mt-20px">
        <div
        class="flex flex-col items-center justify-center gap-8px text-24px font-600 leading-tight md:flex-row md:text-30px"
        >
        <span
            class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent"
        >
            个人中心
        </span>
        </div>

        <div
        class="mx-auto mt-18px max-w-960px px-12px text-12px text-#8F99B7 md:text-16px"
        >
        管理您的账户、点数、API密钥和使用记录
        </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-[386px_1fr] gap-[20px] mt-20px">
      <!-- 左侧栏 -->
      <aside class="space-y-[20px]">
        <!-- 用户信息 -->
        <div class="card p-[20px] bg-white rounded-[8px]">
          <div class="flex flex-col items-center space-y-[12px]">
            <div class="w-[80px] h-[80px] rounded-full bg-brandColor text-white flex items-center justify-center font-medium text-[32px] text-white leading-[32px] text-left not-italic">
              黄
            </div>
            <div class="font-normal text-[20px] text-[#222222] leading-[20px] text-left not-italic">黄经理</div>

            <div class="w-full grid grid-cols-2 mt-[20px] gap-x-20px">
              <div class="py-16px flex flex-col w-full flex-center font-semibold text-[24px] text-[#FF7532] border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)]">
                1,234
                <span class="font-normal text-[16px] text-[#666666] not-italic">剩余点数</span>
              </div>
              <div class="py-16px flex flex-col w-full flex-center font-semibold text-[24px] text-[#006BFD] border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)]">
                128
                <span class="font-normal text-[16px] text-[#666666] not-italic">调用次数</span>
              </div>
            </div>

            <el-button  type="primary" class="w-full mt-[20px]" round><el-icon size="18px" class="mr-4px"><checked /></el-icon>每日签到</el-button>
          </div>
        </div>

        <!-- 设置 -->
        <div class="card p-0!">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">设置</div>
          <div class="font-normal text-[16px] leading-16px text-[#666666] not-italic p-20px">
            <div class="space-y-20px" style="

--el-checkbox-height: auto;">
             <div class="font-medium text-[16px] leading-16px text-[#222222] leading-[16px] text-left not-italic">通知设置</div>
             <div class="flex justify-between items-center">
                <div>接收服务更新通知</div>
                <el-checkbox checked></el-checkbox>
             </div>
              <div class="flex justify-between items-center">
                <div>接收使用提醒</div>
                <el-checkbox checked></el-checkbox>
             </div>
              <div class="flex justify-between items-center">
                <div>接收营销活动</div>
                <el-checkbox></el-checkbox>
             </div>
            </div>
        </div>

        <div class="font-normal text-[16px] leading-16px text-[#666666] not-italic p-20px">
            <div class="space-y-20px">
             <div class="font-medium text-[16px] leading-16px text-[#222222] leading-[16px] text-left not-italic">安全设置</div>
             <div class="flex justify-between items-center">
                <div>修改登录密码</div>
                <el-icon><ArrowRight /></el-icon>
             </div>
              <div class="flex justify-between items-center">
                <div>绑定二次验证</div>
                <el-icon><ArrowRight /></el-icon>
             </div>
              <div class="flex justify-between items-center">
                <div>查看登录日志</div>
                <el-icon><ArrowRight /></el-icon>
             </div>
            </div>
        </div>


         <div class="font-normal text-[16px] leading-16px text-[#666666] not-italic p-20px">
            <div class="space-y-20px">
             <div class="font-medium text-[16px] leading-16px text-[#222222] leading-[16px] text-left not-italic">其他设置</div>
             <div class="flex justify-between items-center">
                <div>API使用限制</div>
                <el-icon><ArrowRight /></el-icon>
             </div>
              <div class="flex justify-between items-center">
                <div>导出账户数据</div>
                <el-icon><ArrowRight /></el-icon>
             </div>
            </div>
        </div>
    </div>
      </aside>

      <!-- 右侧主内容 -->
      <main class="space-y-[20px]">
        <!-- 账户信息 -->
        <div class="card p-0!">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">账户信息</div>
          <div class="px-20px pb-20px font-normal text-[16px] text-[#666666] leading-[16px] not-italic">
            <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">用户名</div>
                <div class="text-#222222">{{ account.username }}</div>
            </div>
             <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">邮箱</div>
                <div class="text-#222222">{{ account.email }}</div>
            </div>
               <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">手机号</div>
                <div class="text-#222222">{{ account.phone }}</div>
            </div>
               <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">注册时间</div>
                <div class="text-#222222">{{ account.registeredAt }}</div>
            </div>

            <div class="mt-[20px]">
              <el-button type="primary">编辑资料</el-button>
              <el-button class="ml-[12px]" style="

--el-border-color: var(--brand-color);--el-text-color-regular: var(--brand-color)">修改密码</el-button>
            </div>
          </div>
        </div>

        <!-- API密钥管理 -->
         <div class="card p-0!">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">API密钥管理</div>
          <div v-for="key in apiKeys" :key="key.env" class="p-20px border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)]">
            <div class="flex items-center">
              <div class="font-medium text-[16px] text-[#222222] leading-[16px]">{{ key.env }}环境</div>

              <div class="flex items-center">
                <div class="flex px-12px h-24px leading-24px  text-[12px" :class="key.tagClass">{{ key.tag }}</div>
              </div>
            </div>
            <div class="font-normal text-[14px] text-[#999999] leading-[14px] mt-8px">{{ key.key }}</div>
            <div class="flex mt-[20px] gap-20px font-normal text-[16px] text-[#666666] leading-[16px] text-left not-italic ">
              <div class="bg-#fff rounded-[4px] py-10px px-20px">
                <div>今日调用</div>
                <div class="font-500 text-brandColor mt-8px">{{ key.today }}</div>
              </div>
              <div class="bg-#fff rounded-[4px] py-10px px-20px">
                <div>今日调用</div>
                <div class="font-500 text-brandColor mt-8px">{{ key.month }}</div>
              </div>
                <div class="bg-#fff rounded-[4px] py-10px px-20px">
                <div>额度限制</div>
                <div class="font-500 text-#222222 mt-8px">{{ key.limit }}</div>
              </div>
            </div> 
          </div>
        </div>

        <!-- 使用记录 -->
          <div class="card p-0!">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">使用记录</div>
            <div class="p-20px">
              <!-- <AppTable :data="usageRecords" border style="width: 100%">
              <el-table-column prop="time" label="时间"></el-table-column>
              <el-table-column prop="service" label="服务"></el-table-column>
              <el-table-column prop="content" label="调用内容"></el-table-column>
              <el-table-column prop="points" label="消耗点数"></el-table-column>
              <el-table-column prop="status" label="状态">
                <template #default="scope">
                  <el-tag :type="scope.row.status === '成功' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
                </template>
              </el-table-column>
            </AppTable> -->

            <AppTable
              :data="usageRecords"
              :columns="columns"
            >
               <template #status="scope">
                <el-tag :type="scope.row.status === '成功' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
                </template>
            </AppTable>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { Checked, ArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue'
import { AppTable } from '@/components/AppTable'

const account = ref({
  username: '黄经理',
  email: 'zhangming@example.com',
  phone: '13839209382',
  registeredAt: '2024-01-05'
})

const apiKeys = ref([
  { env: '生产', key: 'sk-prod-****83gdjw2qx', today: '1,234', month: '45,678', limit: '100,000', tag: '活跃', tagClass: 'text-#37C532 bg-[rgba(55,197,50,.1)]' },
  { env: '测试', key: 'sk-prod-****83gdjw2qx', today: '89', month: '2,345', limit: '10,000', tag: '受限', tagClass: 'text-#999999 bg-[rgba(153,153,153,.1)]' }
])


const usageRecords = [
  { time: '2014-12-24 23:12:00', service: '企业风险分析', content: '查询某科技有限公司风险信息', points: -5, status: '成功' },
  { time: '2014-12-24 23:12:00', service: '工商信息查询', content: '获取企业工商基本信息', points: -2, status: '成功' },
  { time: '2014-12-24 23:12:00', service: '市场竞争分析', content: '分析行业竞争格局', points: -10, status: '失败' },
  { time: '2014-12-24 23:12:00', service: '舆情监控', content: '监控企业舆情动态', points: -3, status: '成功' },
]

const columns = [
  { prop: 'time', label: '时间', width: '180' },
  { prop: 'service', label: '服务', width: '180' },
  { prop: 'content', label: '调用内容' },
  { prop: 'points', label: '消耗点数', width: '100' },
  {
    prop: 'status',
    label: '状态',
    width: '100',
    slot: 'status'
  }
]
</script>
