import request from '@/config/axios'

// 文件目录 VO
export interface FileCatalogueVO {
    id: number // 主键
    parentId: number // 父id
    name: string // 目录名称
    code: string // 目录编码
}

// 文件目录 API
export const FileCatalogueApi = {
    // 查询文件目录列表
    getFileCatalogueList: async (params) => {
        return await request.get({ url: `/infra/file-catalogue/list`, params })
    },

    // 查询文件目录详情
    getFileCatalogue: async (id: number) => {
        return await request.get({ url: `/infra/file-catalogue/get?id=` + id })
    },

    // 新增文件目录
    createFileCatalogue: async (data: FileCatalogueVO) => {
        return await request.post({ url: `/infra/file-catalogue/create`, data })
    },

    // 修改文件目录
    updateFileCatalogue: async (data: FileCatalogueVO) => {
        return await request.put({ url: `/infra/file-catalogue/update`, data })
    },

    // 删除文件目录
    deleteFileCatalogue: async (id: number) => {
        return await request.delete({ url: `/infra/file-catalogue/delete?id=` + id })
    },

}
