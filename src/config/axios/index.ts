import { service } from './service'

import { config } from './config'

const { default_headers } = config

type AnyObj = Record<string, any>

const directReturnKeys = ['rows', 'token', 'total']

function shouldReturnRaw(res: AnyObj, keys: string[]) {
  return keys.some(k => Object.prototype.hasOwnProperty.call(res, k))
}

const request = (option: any) => {
  const { headersType, headers, ...otherOption } = option
  return service({
    ...otherOption,
    headers: {
      'Content-Type': headersType || default_headers,
      ...headers
    }
  })
}
export default {
  get: async <T = any>(option: any) => {
    const res = await request({ method: 'GET', ...option })
    
    if (shouldReturnRaw(res, directReturnKeys)) {
      return res
    }

    return res?.data as T
  },
  post: async <T = any>(option: any) => {
    const res = await request({ method: 'POST', ...option })
    
    if (shouldReturnRaw(res, directReturnKeys)) {
      return res
    }

    return res?.data as T
  },
  postOriginal: async (option: any) => {
    const res = await request({ method: 'POST', ...option })
    return res
  },
  delete: async <T = any>(option: any) => {
    const res = await request({ method: 'DELETE', ...option })
    return res.data as unknown as T
  },
  put: async <T = any>(option: any) => {
    const res = await request({ method: 'PUT', ...option })
    return res.data as unknown as T
  },
  download: async <T = any>(option: any) => {
    const res = await request({ method: 'GET', responseType: 'blob', ...option })
    return res as unknown as Promise<T>
  },
  upload: async <T = any>(option: any) => {
    option.headersType = 'multipart/form-data'
    const res = await request({ method: 'POST', ...option })
    return res as unknown as Promise<T>
  }
}
