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
                <div class="title-text">用户注册</div>
                <div class="title-sub">数擎2.0</div>
              </div>
              <el-form
                ref="formRegister"
                :model="registerData.registerForm"
                :rules="registerRules"
                class="bg-white rounded-2xl p-8 shadow-lg"
                label-position="top"
                label-width="120px"
                size="large"
              >
                <!-- 手机号 -->
                <el-form-item prop="mobile">
                  <template #label>
                    <el-icon :size="18" class="form-item-icon">
                      <Phone />
                    </el-icon>
                    手机号
                  </template>
                  <el-input
                    v-model="registerData.registerForm.mobile"
                    placeholder="请输入手机号"
                    maxlength="11"
                  />
                </el-form-item>
                <!-- 验证码 -->
                <el-form-item prop="code">
                  <template #label>
                    <el-icon :size="18" class="form-item-icon">
                      <Key />
                    </el-icon>
                    验证码
                  </template>
                  <el-input
                    v-model="registerData.registerForm.code"
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
                <!-- 昵称 -->
                <el-form-item prop="nickname">
                  <template #label>
                    <el-icon :size="18" class="form-item-icon">
                      <User />
                    </el-icon>
                    昵称
                  </template>
                  <el-input
                    v-model="registerData.registerForm.nickname"
                    placeholder="请输入昵称"
                  />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                  <template #label>
                    <el-icon :size="18" class="form-item-icon">
                      <Lock />
                    </el-icon>
                    密码
                  </template>
                  <el-input
                    v-model="registerData.registerForm.password"
                    type="password"
                    placeholder="请输入密码"
                    show-password
                  />
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item prop="confirmPassword">
                  <template #label>
                    <el-icon :size="18" class="form-item-icon">
                      <Lock />
                    </el-icon>
                    确认密码
                  </template>
                  <el-input
                    v-model="registerData.registerForm.confirmPassword"
                    type="password"
                    placeholder="请再次输入密码"
                    show-password
                  />
                </el-form-item>
                <!-- 注册按钮 -->
                <el-form-item class="register-btn">
                  <XButton
                    :loading="registerLoading"
                    title="注册"
                    class="w-full"
                    type="primary"
                    @click="handleRegister"
                  />
                </el-form-item>
                <!-- 返回登录 -->
                <el-form-item class="text-center">
                  <el-link type="primary" :underline="false" @click="goLogin">
                    已有账号？立即登录
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
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElLoading } from 'element-plus'
import { Phone, Lock, User, Key } from '@element-plus/icons-vue'
import { useDesign } from '@/hooks/web/useDesign'
import { XButton } from '@/components/XButton'
import * as LoginApi from '@/api/login'
import * as authUtil from '@/utils/auth'

defineOptions({ name: 'Register' })

const router = useRouter()
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('register')

const formRegister = ref()
const registerLoading = ref(false)
const codeTimer = ref(0)

const registerData = reactive({
  registerForm: {
    mobile: '',
    code: '',
    nickname: '',
    password: '',
    confirmPassword: ''
  }
})

const canSendCode = computed(() => {
  const mobile = registerData.registerForm.mobile
  return mobile.length === 11 && /^1[3-9]\d{9}$/.test(mobile)
})

const registerRules = {
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '请输入6位数字验证码', trigger: 'blur' }
  ],
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 2, max: 20, message: '昵称长度必须介于 2 和 20 之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度必须介于 6 和 20 之间', trigger: 'blur' },
    { pattern: /^[^<>"'|\\]+$/, message: '不能包含非法字符：< > " \' \ |', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (_rule, value, callback) => {
        if (registerData.registerForm.password !== value) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const sendCode = async () => {
  if (!canSendCode.value || codeTimer.value > 0) return

  try {
    await LoginApi.sendSmsCode({
      mobile: registerData.registerForm.mobile,
      scene: 2
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

const handleRegister = async () => {
  const form = formRegister.value
  if (!form) return

  try {
    await form.validate()
  } catch {
    return
  }

  registerLoading.value = true
  const loading = ElLoading.service({
    lock: true,
    text: '正在注册...',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  try {
    const res = await LoginApi.register({
      mobile: registerData.registerForm.mobile,
      code: registerData.registerForm.code,
      nickname: registerData.registerForm.nickname,
      password: registerData.registerForm.password
    })

    if (!res) return
    authUtil.setToken(res)
    ElMessage.success('注册成功')
    await router.push('/')
  } catch (error) {
    ElMessage.error('注册失败，请稍后重试')
  } finally {
    registerLoading.value = false
    loading.close()
  }
}

const goLogin = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
$prefix-cls: #{$namespace}-register;

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

.register-btn {
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
