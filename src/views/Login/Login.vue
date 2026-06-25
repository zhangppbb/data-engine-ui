<template>
  <div
    :class="prefixCls"
    class="relative h-[100%] lt-md:px-10px lt-sm:px-10px lt-xl:px-10px lt-xl:px-10px box-bg"
  >
    <div class="relative mx-auto h-full flex">
      <div
        class="relative flex-1 p-30px dark:bg-[var(--login-bg-color)] lt-sm:p-10px overflow-x-hidden overflow-y-auto"
      >
        <Transition appear enter-active-class="animate__animated animate__bounceInRight">
          <div
            class="m-auto h-[calc(100%-60px)] w-[100%] flex items-center at-2xl:max-w-500px at-lg:max-w-500px at-md:max-w-500px at-xl:max-w-500px"
          >
            <div class="w-full">
              <div class="login-title mb-8">
                <div class="title-text">欢迎登录</div>
                <div class="title-sub">数擎2.0</div>
              </div>
              <!-- 登录方式切换 -->
              <div class="flex mb-6 bg-white rounded-2xl p-2 shadow-lg">
                <button
                  class="flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300"
                  :class="loginType === 'password' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'"
                  @click="loginType = 'password'"
                >
                  账号密码
                </button>
                <button
                  class="flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300"
                  :class="loginType === 'mobile' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'"
                  @click="loginType = 'mobile'"
                >
                  手机号登录
                </button>
              </div>
              <el-form
                ref="formLogin"
                :model="loginData.loginForm"
                :rules="loginType === 'password' ? passwordRules : mobileRules"
                class="bg-white rounded-2xl p-8 shadow-lg"
                label-position="top"
                label-width="120px"
                size="large"
                require-asterisk-position="right"
              >
                <!-- 账号密码登录 -->
                <template v-if="loginType === 'password'">
                  <el-form-item prop="username">
                    <template #label>
                      <el-icon :size="18" class="form-item-icon">
                        <User />
                      </el-icon>
                      账号
                    </template>
                    <el-input
                      v-model="loginData.loginForm.username"
                      placeholder="请输入账号"
                    />
                  </el-form-item>
                  <el-form-item prop="password">
                    <template #label>
                      <el-icon :size="18" class="form-item-icon">
                        <Lock />
                      </el-icon>
                      密码
                    </template>
                    <el-input
                      v-model="loginData.loginForm.password"
                      placeholder="请输入密码"
                      show-password
                      type="password"
                      @keyup.enter="handlePasswordLogin"
                    />
                  </el-form-item>
                  <el-form-item>
                    <el-row justify="space-between" class="w-full">
                      <el-col :span="6">
                        <el-checkbox v-model="loginData.loginForm.rememberMe">
                          {{ t('login.remember') }}
                        </el-checkbox>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item class="login-btn">
                    <XButton
                      :loading="loginLoading"
                      title="登录"
                      class="w-full"
                      type="primary"
                      @click="handlePasswordLogin"
                    />
                  </el-form-item>
                </template>
                <!-- 手机号验证码登录 -->
                <template v-else>
                  <el-form-item prop="mobile">
                    <template #label>
                      <el-icon :size="18" class="form-item-icon">
                        <Phone />
                      </el-icon>
                      手机号
                    </template>
                    <el-input
                      v-model="loginData.loginForm.mobile"
                      placeholder="请输入手机号"
                      maxlength="11"
                    />
                  </el-form-item>
                  <el-form-item prop="code">
                    <template #label>
                      <el-icon :size="18" class="form-item-icon">
                        <Key />
                      </el-icon>
                      验证码
                    </template>
                    <el-input
                      v-model="loginData.loginForm.code"
                      placeholder="请输入验证码"
                      maxlength="6"
                    >
                      <template #append>
                        <span
                          v-if="codeTimer <= 0"
                          class="get-code-btn"
                          :class="{ disabled: !canSendCode }"
                          @click="sendCode"
                        >
                          获取验证码
                        </span>
                        <span v-else class="get-code-btn disabled">
                          {{ codeTimer }}s 后重新获取
                        </span>
                      </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item class="login-btn">
                    <XButton
                      :loading="loginLoading"
                      title="登录"
                      class="w-full"
                      type="primary"
                      @click="handleMobileLogin"
                    />
                  </el-form-item>
                </template>
                <el-form-item class="text-center">
                  <el-link type="primary" :underline="false" @click="goRegister">
                    还没有账号？立即注册
                  </el-link>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElLoading, ElMessage } from 'element-plus'
import { User, Lock, Phone, Key } from '@element-plus/icons-vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import * as authUtil from '@/utils/auth'
import { usePermissionStore } from '@/store/modules/permission'
import * as LoginApi from '@/api/login'
import { XButton } from '@/components/XButton'
import { useDesign } from '@/hooks/web/useDesign'

defineOptions({ name: 'Login' })

const { t } = useI18n()
const router = useRouter()
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('login')

const formLogin = ref()
const { currentRoute, push } = useRouter()
const permissionStore = usePermissionStore()
const redirect = ref<string>('')
const loginLoading = ref(false)
const loginType = ref('password')
const codeTimer = ref(0)

const loginData = reactive({
  loginForm: {
    username: import.meta.env.VITE_APP_DEFAULT_LOGIN_USERNAME || '',
    password: import.meta.env.VITE_APP_DEFAULT_LOGIN_PASSWORD || '',
    mobile: '',
    code: '',
    rememberMe: true
  }
})

const passwordRules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const mobileRules = {
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '请输入6位数字验证码', trigger: 'blur' }
  ]
}

const canSendCode = computed(() => {
  const mobile = loginData.loginForm.mobile
  return mobile.length === 11 && /^1[3-9]\d{9}$/.test(mobile)
})

const sendCode = async () => {
  if (!canSendCode.value || codeTimer.value > 0) return

  try {
    await LoginApi.sendSmsCode({
      mobile: loginData.loginForm.mobile,
      scene: 1
    })
    ElMessage.success('验证码发送成功')
    codeTimer.value = 60
    const timer = setInterval(() => {
      codeTimer.value--
      if (codeTimer.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  } catch (error) {
    ElMessage.error('验证码发送失败，请稍后重试')
  }
}

const handlePasswordLogin = async () => {
  const form = formLogin.value
  if (!form) return

  try {
    await form.validate()
  } catch {
    return
  }

  loginLoading.value = true
  const loading = ElLoading.service({
    lock: true,
    text: '正在登录...',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  try {
    const res = await LoginApi.login({
      username: loginData.loginForm.username,
      password: loginData.loginForm.password
    })

    if (!res) return

    if (loginData.loginForm.rememberMe) {
      authUtil.setLoginForm(loginData.loginForm)
    } else {
      authUtil.removeLoginForm()
    }

    authUtil.setTenantId(res.tenantId)
    authUtil.setUserTenants(res.userTenants)
    authUtil.setManagedTenantId(res.managedTenantIds)
    authUtil.setToken(res)

    if (!redirect.value) {
      redirect.value = '/'
    }

    if (redirect.value.indexOf('sso') !== -1) {
      window.location.href = window.location.href.replace('/login?redirect=', '')
    } else {
      await push({ path: redirect.value || permissionStore.addRouters[0].path })
    }
  } catch (error) {
    ElMessage.error('登录失败，请检查账号密码是否正确')
  } finally {
    loginLoading.value = false
    loading.close()
  }
}

const handleMobileLogin = async () => {
  const form = formLogin.value
  if (!form) return

  try {
    await form.validate()
  } catch {
    return
  }

  loginLoading.value = true
  const loading = ElLoading.service({
    lock: true,
    text: '正在登录...',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  try {
    const res = await LoginApi.smsLogin({
      mobile: loginData.loginForm.mobile,
      code: loginData.loginForm.code
    })

    if (!res) return

    authUtil.setTenantId(res.tenantId)
    authUtil.setUserTenants(res.userTenants)
    authUtil.setManagedTenantId(res.managedTenantIds)
    authUtil.setToken(res)

    if (!redirect.value) {
      redirect.value = '/'
    }

    if (redirect.value.indexOf('sso') !== -1) {
      window.location.href = window.location.href.replace('/login?redirect=', '')
    } else {
      await push({ path: redirect.value || permissionStore.addRouters[0].path })
    }
  } catch (error) {
    ElMessage.error('登录失败，请检查验证码是否正确')
  } finally {
    loginLoading.value = false
    loading.close()
  }
}

const goRegister = () => {
  router.push('/register')
}

watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    redirect.value = route?.query?.redirect as string
  },
  {
    immediate: true
  }
)

onMounted(() => {
  const loginForm = authUtil.getLoginForm()
  if (loginForm) {
    loginData.loginForm.username = loginForm.username || loginData.loginForm.username
    loginData.loginForm.password = loginForm.password || loginData.loginForm.password
    loginData.loginForm.rememberMe = loginForm.rememberMe
  }
})
</script>

<style lang="scss" scoped>
$prefix-cls: #{$namespace}-login;

.box-bg {
  background-image: url('@/assets/svgs/login_bg.jpg');
  background-size: cover;
  background-position: center;
}

.#{$prefix-cls} {
  overflow: auto;
}

.login-title {
  text-align: center;

  .title-text {
    display: block;
    font-family: YouSheBiaoTiHei, YouSheBiaoTiHei;
    font-size: 32px;
    font-weight: 600;
    color: transparent;
    background: linear-gradient(90deg, #FFF 13%, #1FB1FF 97%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-sub {
    display: block;
    margin-top: 8px;
    font-size: 16px;
    color: #8eb6ff;
  }
}

.form-item-icon {
  margin-right: 6px;
  color: #005DCF;
}

.login-btn {
  :deep(.el-form-item__content) {
    margin-left: 0 !important;
  }
}

:deep(.el-input__wrapper) {
  background: #EFF3F8;
  border-radius: 0;
  box-shadow: none;
}

.get-code-btn {
  padding: 0 15px;
  color: var(--el-color-primary);
  cursor: pointer;
  font-size: 14px;

  &.disabled {
    color: #999;
    cursor: not-allowed;
  }

  &:hover:not(.disabled) {
    color: var(--el-color-primary-light-3);
  }
}
</style>
