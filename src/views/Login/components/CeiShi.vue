<template>
  <div class="app-container">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="header-left">
        <h1 class="logo">企业服务应用馆</h1>
      </div>
      <div class="header-right">
        <el-button v-if="!isLoggedIn" @click="openLoginDialog">登录</el-button>
        <el-button v-if="!isLoggedIn" type="primary" @click="openRegisterDialog">注册</el-button>
        <el-dropdown v-if="isLoggedIn" @command="handleUserCommand">
          <span class="user-info">
            <el-avatar :size="32">{{ username?.charAt(0) || 'U' }}</el-avatar>
            <span class="username">{{ username }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="apikeys">我的API Key</el-dropdown-item>
              <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </header>

    <!-- 流程说明区 -->
    <section class="flow-section">
      <h2>API 使用流程</h2>
      <div class="flow-chart">
        <el-steps :active="currentStep" align-center finish-status="success">
          <el-step title="访问系统" description="用户访问系统" />
          <el-step title="账号认证" description="登录/注册账号" />
          <el-step title="生成密钥" description="创建API Key" />
          <el-step title="调用API" description="使用密钥调用" />
          <el-step title="权限验证" description="网关验证执行" />
        </el-steps>
      </div>
    </section>

    <!-- API Key 管理区 -->
    <section class="apikey-section" v-if="isLoggedIn">
      <div class="apikey-card">
        <div class="card-header">
          <h3><el-icon><Key /></el-icon> 个人 API Key</h3>
          <el-button type="primary" @click="showGenerateKeyDialog = true">
            <el-icon><Plus /></el-icon> 生成新密钥
          </el-button>
        </div>
        <el-table :data="personalKeys" stripe>
          <el-table-column prop="name" label="密钥名称" />
          <el-table-column prop="key" label="API Key">
            <template #default="{ row }">
              <code class="api-key">{{ row.key }}</code>
              <el-button size="small" text @click="copyKey(row.key)">复制</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="类型">
            <template #default="{ row }">
              <el-tag :type="row.type === 'team' ? 'warning' : 'success'" size="small">
                {{ row.type === 'team' ? '团队' : '个人' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="teamName" label="所属团队" v-if="hasTeamKey">
            <template #default="{ row }">
              {{ row.teamName || '-' }}
            </template>
          </el-table-column>
          <el-table-column prop="createdAt" label="创建时间" />
          <el-table-column prop="status" label="状态">
            <template #default="{ row }">
              <el-tag :type="row.status === 'active' ? 'success' : 'info'" size="small">
                {{ row.status === 'active' ? '激活' : '禁用' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template #default="{ row }">
              <el-button size="small" type="danger" text @click="deleteKey(row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>

    <!-- API 调用示例 -->
    <section class="demo-section" v-if="isLoggedIn && hasValidKey">
      <h3>API 调用示例</h3>
      <el-card class="demo-card">
        <pre class="code-block">{{ demoCode }}</pre>
      </el-card>
    </section>

    <!-- ========== 登录弹窗 ========== -->
    <el-dialog v-model="showLoginDialog" title="登录" width="420px">
      <div class="login-tabs">
        <el-radio-group v-model="loginMethod" size="default">
          <el-radio-button value="account">账号登录</el-radio-button>
          <el-radio-button value="qrcode">扫码登录</el-radio-button>
        </el-radio-group>
      </div>

      <div v-if="loginMethod === 'account'" class="login-form">
        <el-form :model="loginForm" label-width="80px">
          <el-form-item label="手机号">
            <el-input v-model="loginForm.phone" placeholder="请输入手机号" maxlength="11">
              <template #prefix>+86</template>
            </el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <div class="code-input-row">
              <el-input v-model="loginForm.code" placeholder="请输入验证码" maxlength="6" style="flex:1" />
              <el-button 
                @click="sendLoginCode" 
                :disabled="loginCountdown > 0"
                style="margin-left: 8px; width: 100px"
              >
                {{ loginCountdown > 0 ? `${loginCountdown}s` : '获取验证码' }}
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>

      <div v-if="loginMethod === 'qrcode'" class="qrcode-section">
        <div class="qrcode-box">
          <div class="qrcode-placeholder">
            <el-icon :size="64" color="#409EFF"><Qrimage /></el-icon>
            <p>请使用手机扫码</p>
          </div>
        </div>
        <p class="qrcode-tip">打开应用馆App扫描二维码登录</p>
      </div>

      <template #footer>
        <el-button @click="showLoginDialog = false">取消</el-button>
        <el-button type="primary" @click="handleLogin" :disabled="!canLogin">
          登录
        </el-button>
      </template>
    </el-dialog>

    <!-- ========== 注册弹窗 ========== -->
    <el-dialog v-model="showRegisterDialog" title="注册账号" width="420px">
      <el-form :model="registerForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="registerForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="registerForm.phone" placeholder="请输入手机号" maxlength="11">
            <template #prefix>+86</template>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <div class="code-input-row">
            <el-input v-model="registerForm.code" placeholder="请输入验证码" maxlength="6" style="flex:1" />
            <el-button 
              @click="sendRegisterCode" 
              :disabled="registerCountdown > 0"
              style="margin-left: 8px; width: 100px"
            >
              {{ registerCountdown > 0 ? `${registerCountdown}s` : '获取验证码' }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item label="设置密码">
          <el-input v-model="registerForm.password" type="password" placeholder="请设置密码" show-password />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="registerForm.confirmPassword" type="password" placeholder="请确认密码" show-password />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showRegisterDialog = false">取消</el-button>
        <el-button type="primary" @click="handleRegister" :disabled="!canRegister">
          注册
        </el-button>
      </template>
    </el-dialog>

    <!-- ========== API Key 生成弹窗 ========== -->
    <el-dialog v-model="showGenerateKeyDialog" title="生成 API Key" width="400px">
      <el-form :model="keyForm" label-width="80px">
        <el-form-item label="密钥名称">
          <el-input v-model="keyForm.name" placeholder="请输入密钥名称" />
        </el-form-item>
        <el-form-item label="权限范围">
          <el-checkbox-group v-model="keyForm.permissions">
            <el-checkbox label="read">读取</el-checkbox>
            <el-checkbox label="write">写入</el-checkbox>
            <el-checkbox label="delete">删除</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showGenerateKeyDialog = false">取消</el-button>
        <el-button type="primary" @click="handleGenerateKey">生成</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { Key, Plus } from '@element-plus/icons-vue'

// ========== 登录状态 ==========
const isLoggedIn = ref(false)
const username = ref('')

// ========== 弹窗控制 ==========
const showLoginDialog = ref(false)
const showRegisterDialog = ref(false)
const showGenerateKeyDialog = ref(false)

// ========== 登录相关 ==========
const loginMethod = ref<'account' | 'qrcode'>('account')
const loginForm = reactive({ phone: '', code: '' })
const loginCountdown = ref(0)

const canLogin = computed(() => {
  return loginMethod.value === 'account' 
    ? loginForm.phone.length === 11 && loginForm.code.length === 6 
    : true
})

const sendLoginCode = () => {
  if (loginForm.phone.length !== 11) {
    ElMessage.warning('请输入正确的手机号')
    return
  }
  loginCountdown.value = 60
  const timer = setInterval(() => {
    loginCountdown.value--
    if (loginCountdown.value <= 0) clearInterval(timer)
  }, 1000)
  ElMessage.success(`验证码已发送至 ${loginForm.phone}`)
}

const openLoginDialog = () => {
  showLoginDialog.value = true
  loginMethod.value = 'account'
  loginForm.phone = ''
  loginForm.code = ''
}

const handleLogin = () => {
  isLoggedIn.value = true
  username.value = loginForm.phone || 'DemoUser'
  showLoginDialog.value = false
  ElMessage.success('登录成功')
}

// ========== 注册相关 ==========
const registerForm = reactive({
  username: '',
  phone: '',
  code: '',
  password: '',
  confirmPassword: ''
})
const registerCountdown = ref(0)

const canRegister = computed(() => {
  return registerForm.username.length > 0
    && registerForm.phone.length === 11
    && registerForm.code.length === 6
    && registerForm.password.length >= 6
    && registerForm.password === registerForm.confirmPassword
})

const sendRegisterCode = () => {
  if (registerForm.phone.length !== 11) {
    ElMessage.warning('请输入正确的手机号')
    return
  }
  registerCountdown.value = 60
  const timer = setInterval(() => {
    registerCountdown.value--
    if (registerCountdown.value <= 0) clearInterval(timer)
  }, 1000)
  ElMessage.success(`验证码已发送至 ${registerForm.phone}`)
}

const openRegisterDialog = () => {
  showRegisterDialog.value = true
  Object.assign(registerForm, { username: '', phone: '', code: '', password: '', confirmPassword: '' })
}

const handleRegister = () => {
  isLoggedIn.value = true
  username.value = registerForm.username || registerForm.phone || 'NewUser'
  showRegisterDialog.value = false
  ElMessage.success('注册成功')
}

// ========== 用户操作 ==========
const handleUserCommand = (command: string) => {
  if (command === 'logout') {
    isLoggedIn.value = false
    username.value = ''
    ElMessage.success('已退出登录')
  }
}

// ========== API Key 相关 ==========
const keyForm = reactive({ name: '', permissions: [] as string[] })

const personalKeys = ref([
  { id: 1, name: '测试密钥', key: 'pk_live_a1b2c3d4e5f6g7h8i9j0', type: 'personal', teamName: '', createdAt: '2026-06-01', status: 'active' }
])

const hasValidKey = computed(() => personalKeys.value.length > 0)
const hasTeamKey = computed(() => personalKeys.value.some(k => k.type === 'team'))

const currentStep = computed(() => {
  if (!isLoggedIn.value) return 0
  if (!hasValidKey.value) return 1
  return 3
})

const demoCode = computed(() => {
  const key = personalKeys.value[0]?.key || 'YOUR_API_KEY'
  return `# 使用 curl 调用 API
curl -X GET "https://api.example.com/v1/resource" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"
`
})

const handleGenerateKey = () => {
  const fakeKey = 'pk_live_' + Math.random().toString(36).substring(2, 20)
  personalKeys.value.push({
    id: Date.now(),
    name: keyForm.name || '新密钥',
    key: fakeKey,
    type: 'personal',
    teamName: '',
    createdAt: new Date().toISOString().split('T')[0],
    status: 'active'
  })
  showGenerateKeyDialog.value = false
  ElMessage.success('API Key 生成成功')
}

const deleteKey = (row: any) => {
  personalKeys.value = personalKeys.value.filter(k => k.id !== row.id)
  ElMessage.info('密钥已删除')
}

const copyKey = (key: string) => {
  navigator.clipboard.writeText(key)
  ElMessage.success('已复制到剪贴板')
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: #f5f7fa;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.logo {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.username {
  font-size: 14px;
  color: #606266;
}

.flow-section {
  padding: 32px 24px;
  background: white;
  margin: 16px 24px;
  border-radius: 8px;
}

.flow-section h2 {
  text-align: center;
  margin-bottom: 32px;
  color: #303133;
}

.apikey-section {
  padding: 0 24px 24px;
}

.apikey-card {
  background: white;
  padding: 24px;
  border-radius: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-header h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: #303133;
}

.api-key {
  background: #f5f7fa;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  margin-right: 8px;
}

.demo-section {
  padding: 0 24px 24px;
}

.demo-card {
  background: #1e1e1e;
  color: #d4d4d4;
}

.demo-section h3 {
  margin-bottom: 16px;
  color: #303133;
}

.code-block {
  margin: 0;
  padding: 16px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.login-tabs {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.login-form {
  padding-top: 8px;
}

.code-input-row {
  display: flex;
  align-items: center;
  width: 100%;
}

.qrcode-section {
  text-align: center;
  padding: 20px 0;
}

.qrcode-box {
  width: 180px;
  height: 180px;
  margin: 0 auto 16px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}

.qrcode-placeholder {
  text-align: center;
  color: #909399;
}

.qrcode-placeholder p {
  margin: 8px 0 0;
  font-size: 14px;
}

.qrcode-tip {
  color: #909399;
  font-size: 13px;
  margin: 0;
}
</style>
