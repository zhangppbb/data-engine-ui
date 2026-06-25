import { defineStore } from 'pinia'
import { store } from '../index'
// @ts-ignore
import * as CodegenApi from '@/api/infra/codegen'
import { CACHE_KEY, useCache } from '@/hooks/web/useCache'
const { wsCache } = useCache('sessionStorage')

export interface ModuleState {
    moduleMap: Map<string, any>
    isSetModule: boolean
}

export const useModuleStore = defineStore('module', {
    state: (): ModuleState => ({
        moduleMap: new Map<string, any>(),
        isSetModule: false
    }),
    getters: {
        getModuleMap(): Recordable {
            const moduleMap = wsCache.get(CACHE_KEY.MODULE)
            if (moduleMap) {
                this.moduleMap = moduleMap
            }
            return this.moduleMap
        },
        getIsSetModule(): boolean {
            return this.isSetModule
        }
    },
    actions: {
        async setModuleMap() {
            const moduleMap = wsCache.get(CACHE_KEY.MODULE)
            if (moduleMap) {
                this.moduleMap = moduleMap
                this.isSetModule = true
            } else {
                const moduleMap = await CodegenApi.getCodegenSimpleMap()
                // 设置数据
                this.moduleMap = moduleMap
                this.isSetModule = true
                wsCache.set(CACHE_KEY.MODULE, moduleMap, { exp: 60 }) // 60 秒 过期
            }
        },
        getModuleByCode(code: string) {
            if (!this.isSetModule) {
                this.setModuleMap()
            }
            return this.moduleMap[code]
        },
        async resetModule() {
            wsCache.delete(CACHE_KEY.MODULE)
            const moduleMap = await CodegenApi.getCodegenSimpleMap()
            // 设置数据
            this.moduleMap = moduleMap
            this.isSetModule = true
            wsCache.set(CACHE_KEY.MODULE, moduleMap, { exp: 60 }) // 60 秒 过期
        }
    }
})

export const useModuleStoreWithOut = () => {
    return useModuleStore(store)
}
