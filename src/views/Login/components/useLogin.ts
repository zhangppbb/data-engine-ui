import { ref, computed } from 'vue'

export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE_LOGIN
}

const currentLoginState = ref<LoginStateEnum>(LoginStateEnum.LOGIN)

export function useLoginState() {
  const getLoginState = computed(() => currentLoginState.value)
  
  const setLoginState = (state: LoginStateEnum) => {
    currentLoginState.value = state
  }
  
  const handleBackLogin = () => {
    currentLoginState.value = LoginStateEnum.LOGIN
  }
  
  return { getLoginState, setLoginState, handleBackLogin }
}

export function useFormValid(formRef: any) {
  const validForm = async () => {
    const form = formRef.value
    if (!form) return false
    
    try {
      await form.validate()
      return true
    } catch {
      return false
    }
  }
  
  return { validForm }
}
