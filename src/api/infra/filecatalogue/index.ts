import request from '@/config/axios'

/** 文件目录 VO */
export interface FileCatalogueVO {
    /** 主键 */
    id: number
    /** 父id */
    parentId: number
    /** 目录名称 */
    name: string
    /** 目录编码 */
    code: string
}

/** 文件目录 API */
export const FileCatalogueApi = {
    /**
     * 查询文件目录列表
     * @param {any} params 查询参数
     * @returns {Promise<any>} 文件目录列表
     */
    getFileCatalogueList: async (params) => {
        return await request.get({ url: `/infra/file-catalogue/list`, params })
    },

    /**
     * 查询文件目录详情
     * @param {number} id 目录编号
     * @returns {Promise<any>} 文件目录详情
     */
    getFileCatalogue: async (id: number) => {
        return await request.get({ url: `/infra/file-catalogue/get?id=` + id })
    },

    /**
     * 新增文件目录
     * @param {FileCatalogueVO} data 目录数据
     * @returns {Promise<any>} 新增结果
     */
    createFileCatalogue: async (data: FileCatalogueVO) => {
        return await request.post({ url: `/infra/file-catalogue/create`, data })
    },

    /**
     * 修改文件目录
     * @param {FileCatalogueVO} data 目录数据
     * @returns {Promise<any>} 修改结果
     */
    updateFileCatalogue: async (data: FileCatalogueVO) => {
        return await request.put({ url: `/infra/file-catalogue/update`, data })
    },

    /**
     * 删除文件目录
     * @param {number} id 目录编号
     * @returns {Promise<any>} 删除结果
     */
    deleteFileCatalogue: async (id: number) => {
        return await request.delete({ url: `/infra/file-catalogue/delete?id=` + id })
    },

}
