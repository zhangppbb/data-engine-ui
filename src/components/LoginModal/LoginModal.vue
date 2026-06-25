<template>
  <div>
    <!-- 登录弹窗 -->
    <el-dialog
      v-model="showLoginDialog"
      title="用户登录"
      width="400px"
      :close-on-click-modal="false"
      append-to-body
      :lock-scroll="false"
    >
      <div class="text-center py-[32px] pb-[24px] bg-gradient-to-br from-[#667eea] to-[#764ba2]  rounded-[8px]">
        <div class="w-[80px] overflow-hidden h-[80px] mx-auto mb-[16px] bg-white/20 rounded-full flex items-center justify-center backdrop-blur-[10px]">
          <img :src="logo" class="w-[32px]" />
        </div>
        <div class="text-[24px] font-semibold text-white mb-[8px]">用户登录</div>
        <div class="text-[14px] text-white/80">欢迎使用数据引擎平台</div>
      </div>

      <div class="p-16px">
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginFormRef"
          label-width="0"
        >
          <el-form-item prop="phone">
            <el-input
              v-model="loginForm.phone"
              placeholder="请输入手机号"
              maxlength="11"
              size="large"
              class="rounded-[8px]"
            >
              <template #prefix>
                <el-icon :size="20" color="#909399"><Phone /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <div class="flex gap-[12px]">
              <el-input
                v-model="loginForm.code"
                placeholder="请输入验证码"
                maxlength="6"
                size="large"
                class="flex-1 rounded-[8px]"
              >
                <template #prefix>
                  <el-icon :size="20" color="#909399"><Lock /></el-icon>
                </template>
              </el-input>
              <el-button
                @click="sendLoginCode"
                :disabled="loginCountdown > 0 || !isPhoneValid"
                type="primary"
                plain
                size="large"
                class="w-[110px] rounded-[8px] text-[13px] disabled:opacity-50"
              >
                {{ loginCountdown > 0 ? `${loginCountdown}s` : '获取验证码' }}
              </el-button>
            </div>
          </el-form-item>
        </el-form>

        <!-- 提示文案 -->
        <div class="text-#666 text-12px">如果账号未注册，系统将自动完成注册。</div>
      </div>

      <div class="px-[24px] pb-[24px]">
        <el-button
          type="primary"
          size="large"
          class="w-full h-[44px] rounded-[8px] text-[16px] font-medium bg-gradient-to-br from-[#667eea] to-[#764ba2] border-none hover:opacity-90 disabled:opacity-50 disabled:bg-gray-400"
          @click="handleLogin"
          :disabled="!canLogin"
          :loading="loginLoading"
        >
          登 录
        </el-button>
      </div>
    </el-dialog>

    <!-- 注册弹窗 -->
    <el-dialog
      v-model="showRegisterDialog"
      title="注册账号"
      width="400px"
      :close-on-click-modal="false"
      :show-close="false"
      :lock-scroll="false"
      append-to-body
      class="login-modal"
    >
      <div class="text-center py-[32px] pb-[24px] bg-gradient-to-br from-[#11998e] to-[#38ef7d]">
        <div class="w-[80px] h-[80px] mx-auto mb-[16px] bg-white/20 rounded-full flex items-center justify-center backdrop-blur-[10px]">
          <el-icon :size="48" color="#fff"><User /></el-icon>
        </div>
        <h2 class="text-[24px] font-semibold text-white mb-[8px]">注册账号</h2>
        <p class="text-[14px] text-white/80">创建您的数据引擎账号</p>
      </div>

      <el-form
        :model="registerForm"
        :rules="registerRules"
        ref="registerFormRef"
        label-width="0"
        class="p-[24px]"
      >
        <el-form-item prop="username">
          <el-input
            v-model="registerForm.username"
            placeholder="请输入用户名"
            maxlength="20"
            size="large"
            class="rounded-[8px]"
          >
            <template #prefix>
              <el-icon :size="20" color="#909399"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input
            v-model="registerForm.phone"
            placeholder="请输入手机号"
            maxlength="11"
            size="large"
            class="rounded-[8px]"
          >
            <template #prefix>
              <el-icon :size="20" color="#909399"><Phone /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="flex gap-[12px]">
            <el-input
              v-model="registerForm.code"
              placeholder="请输入验证码"
              maxlength="6"
              size="large"
              class="flex-1 rounded-[8px]"
            >
              <template #prefix>
                <el-icon :size="20" color="#909399"><Lock /></el-icon>
              </template>
            </el-input>
            <el-button
              @click="sendRegisterCode"
              :disabled="registerCountdown > 0 || !isRegisterPhoneValid"
              type="primary"
              plain
              size="large"
              class="w-[110px] rounded-[8px] text-[13px] disabled:opacity-50"
            >
              {{ registerCountdown > 0 ? `${registerCountdown}s` : '获取验证码' }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            type="password"
            placeholder="请设置密码（6-20位，支持字母、数字、特殊字符）"
            maxlength="20"
            size="large"
            class="rounded-[8px]"
            show-password
          >
            <template #prefix>
              <el-icon :size="20" color="#909399"><Key /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            v-model="registerForm.confirmPassword"
            type="password"
            placeholder="请确认密码"
            maxlength="20"
            size="large"
            class="rounded-[8px]"
            show-password
          >
            <template #prefix>
              <el-icon :size="20" color="#909399"><Key /></el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>

      <div class="px-[24px] pb-[24px]">
        <el-button
          type="primary"
          size="large"
          class="w-full h-[44px] rounded-[8px] text-[16px] font-medium bg-gradient-to-br from-[#11998e] to-[#38ef7d] border-none hover:opacity-90 disabled:opacity-50 disabled:bg-gray-400"
          @click="handleRegister"
          :disabled="!canRegister"
        >
          注 册
        </el-button>
        <div class="flex items-center justify-center gap-[16px] mt-[16px] text-[14px] text-gray-600">
          <span class="cursor-pointer text-blue-500 hover:underline" @click="switchToLogin">已有账号，立即登录</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { ElMessage, ElIcon } from 'element-plus'
import type { FormInstance, FormItemRule } from 'element-plus'
import { User, Phone, Lock, Key } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
import { sendSmsCode, smsLogin } from '@/api/auth'
import * as authUtil from '@/utils/auth'
import logo from '@/assets/imgs/logo.png'
import { usePermissionStore } from '@/store/modules/permission'

const permissionStore = usePermissionStore()


const userStore = useUserStore()

const showRegisterDialog = computed(() => userStore.getShowRegisterDialog)


const { currentRoute, push } = useRouter()

const showLoginDialog = computed({
  get: () => userStore.getShowLoginDialog,
  set: (val: boolean) => userStore.setShowLoginDialog(val) // 或者直接修改 store 状态
})

const phoneReg = /^1[3-9]\d{9}$/
const codeReg = /^\d{6}$/
const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()_+\-=]{8,20}$/

const loginFormRef = ref<FormInstance>()
const loginForm = ref({ phone: '', code: '' })
const loginCountdown = ref(0)
const loginLoading = ref(false)
let loginTimer: ReturnType<typeof setInterval> | undefined

const loginRules = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: phoneReg, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ]
}

const isPhoneValid = computed(() => phoneReg.test(loginForm.value.phone))

const canLogin = computed(() => {
  return phoneReg.test(loginForm.value.phone) && codeReg.test(loginForm.value.code)
})

const redirect = ref<string>('')


const sendLoginCode = async () => {
  if (!phoneReg.test(loginForm.value.phone)) {
    ElMessage.warning('请输入正确的手机号')
    return
  }
  try {
    const result = await sendSmsCode({ phone: loginForm.value.phone })
    if (result) {
      loginCountdown.value = 60
      if (loginTimer) clearInterval(loginTimer)
      loginTimer = setInterval(() => {
        loginCountdown.value--
        if (loginCountdown.value <= 0 && loginTimer) clearInterval(loginTimer)
      }, 1000)
      ElMessage.success(`验证码已发送至 ${loginForm.value.phone}`)
    } else {
      ElMessage.error('验证码发送失败，请稍后重试')
    }
  } catch (error) {
    ElMessage.error('验证码发送失败，请稍后重试')
  }
}

const handleLogin = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate()
  loginLoading.value = true
  try {
    const res = await smsLogin({
      phone: loginForm.value.phone,
      code: loginForm.value.code
    })
    authUtil.setToken(res?.token || '')

    await userStore.fetchClientUserInfoAction()

    if (!redirect.value) {
      redirect.value = '/'
    }

    userStore.setShowLoginDialog(false)

    if (redirect.value.indexOf('sso') !== -1) {
      window.location.href = window.location.href.replace('/login?redirect=', '')
    } else {
      window.location.href = redirect.value || permissionStore.addRouters[0].path
    }
    ElMessage.success('登录成功')
  } catch {
    loginLoading.value = false
  }
}

const registerFormRef = ref<FormInstance>()
const registerForm = ref({
  username: '',
  phone: '',
  code: '',
  password: '',
  confirmPassword: ''
})
const registerCountdown = ref(0)
let registerTimer: ReturnType<typeof setInterval> | undefined

const registerRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 20, message: '用户名长度在2-20个字符之间', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: phoneReg, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: codeReg, message: '验证码必须为6位数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: passwordReg, message: '密码需为8-20位，且至少包含字母和数字', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (_rule: FormItemRule, value: string, callback: (error?: Error) => void) => {
        if (value !== registerForm.value.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const isRegisterPhoneValid = computed(() => phoneReg.test(registerForm.value.phone))

const canRegister = computed(() => {
  return registerForm.value.username.length >= 2
    && phoneReg.test(registerForm.value.phone)
    && codeReg.test(registerForm.value.code)
    && passwordReg.test(registerForm.value.password)
    && registerForm.value.password === registerForm.value.confirmPassword
})

const sendRegisterCode = async () => {
  if (!phoneReg.test(registerForm.value.phone)) {
    ElMessage.warning('请输入正确的手机号')
    return
  }
  try {
    const result = await sendSmsCode({ phone: registerForm.value.phone })
    if (result) {
      registerCountdown.value = 60
      if (registerTimer) clearInterval(registerTimer)
      registerTimer = setInterval(() => {
        registerCountdown.value--
        if (registerCountdown.value <= 0 && registerTimer) clearInterval(registerTimer)
      }, 1000)
      ElMessage.success(`验证码已发送至 ${registerForm.value.phone}`)
    } else {
      ElMessage.error('验证码发送失败，请稍后重试')
    }
  } catch (error) {
    ElMessage.error('验证码发送失败，请稍后重试')
  }
}

const handleRegister = async () => {
  if (!registerFormRef.value) return
  try {
    await registerFormRef.value.validate()
    const res = await smsLogin({
      phone: registerForm.value.phone,
      code: registerForm.value.code
    })
    authUtil.setToken(res.token)
    userStore.registerAction({
      nickname: res.nickname || res.username || registerForm.value.username,
      avatar: res.avatar
    })
    registerForm.value = { username: '', phone: '', code: '', password: '', confirmPassword: '' }
    userStore.closeRegisterDialog()
    ElMessage.success('注册成功')
  } catch {
    // ElMessage.warning('注册失败，请检查填写信息')
  }
}

const switchToLogin = () => {
  userStore.closeRegisterDialog()
  userStore.openLoginDialog()
}

const clearLoginTimer = () => {
  if (loginTimer) {
    clearInterval(loginTimer)
    loginTimer = undefined
  }
  loginCountdown.value = 0
}

const clearRegisterTimer = () => {
  if (registerTimer) {
    clearInterval(registerTimer)
    registerTimer = undefined
  }
  registerCountdown.value = 0
}

watch(showLoginDialog, (val) => {
  if (!val) {
    clearLoginTimer()
    if (loginFormRef.value) {
      loginFormRef.value.resetFields()
      loginForm.value = { phone: '', code: '' }
    }
  }
})

watch(showRegisterDialog, (val) => {
  if (!val) {
    clearRegisterTimer()
    if (registerFormRef.value) {
      registerFormRef.value.resetFields()
      registerForm.value = { username: '', phone: '', code: '', password: '', confirmPassword: '' }
    }
  }
})

onUnmounted(() => {
  clearLoginTimer()
  clearRegisterTimer()
})
</script>

