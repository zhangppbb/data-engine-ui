import request from '@/config/axios'

/** 岗位 VO */
export interface PostVO {
  id?: number
  name: string
  code: string
  sort: number
  status: number
  remark: string
  createTime?: Date
}

/** 岗位用户关联 VO */
export interface PostUserVO {
  postId: number
  userIds: number[]
}

/** 用户岗位关联 VO */
export interface UserPostVO {
  userId: number
  deptId: number
  postIds: number[]
}

/**
 * 查询岗位分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 岗位分页数据
 */
export const getPostPage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/post/page', params })
}

/**
 * 获取岗位精简信息列表
 * @returns {Promise<PostVO[]>} 岗位精简列表
 */
export const getSimplePostList = async (): Promise<PostVO[]> => {
  return await request.get({ url: '/admin-api/system/post/simple-list' })
}

/**
 * 查询岗位详情
 * @param {number} id 岗位ID
 * @returns {Promise<any>} 岗位详情
 */
export const getPost = async (id: number) => {
  return await request.get({ url: '/admin-api/system/post/get?id=' + id })
}

/**
 * 新增岗位
 * @param {PostVO} data 岗位数据
 * @returns {Promise<any>} 新增结果
 */
export const createPost = async (data: PostVO) => {
  return await request.post({ url: '/admin-api/system/post/create', data })
}

/**
 * 修改岗位
 * @param {PostVO} data 岗位数据
 * @returns {Promise<any>} 修改结果
 */
export const updatePost = async (data: PostVO) => {
  return await request.put({ url: '/admin-api/system/post/update', data })
}

/**
 * 删除岗位
 * @param {number} id 岗位ID
 * @returns {Promise<any>} 删除结果
 */
export const deletePost = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/post/delete?id=' + id })
}

/**
 * 导出岗位
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportPost = async (params) => {
  return await request.download({ url: '/admin-api/system/post/export-excel', params })
}

/**
 * 获得岗位关联的所有用户ID
 * @param {number} id 岗位ID
 * @returns {Promise<any>} 关联用户ID列表
 */
export const getPostUsers = async (id: number) => {
  return await request.get({ url: '/admin-api/system/post/get-post-users?id=' + id })
}

/**
 * 批量赋予岗位用户
 * @param {PostUserVO} data 分配参数，包含岗位ID和用户ID列表
 * @returns {Promise<any>} 分配结果
 */
export const assignPostUser = async (data: PostUserVO) => {
  return await request.post({ url: '/admin-api/system/post/assign-post-user', data })
}

/**
 * 查询用户拥有的岗位数组
 * @param {number} userId 用户ID
 * @param {number} deptId 部门ID
 * @returns {Promise<any>} 用户岗位列表
 */
export const getUserPosts = async (userId: number, deptId: number) => {
  return await request.get({
    url: '/admin-api/system/post/get-user-posts?userId=' + userId + '&deptId=' + deptId
  })
}

/**
 * 赋予用户岗位
 * @param {UserPostVO} data 分配参数，包含用户ID、部门ID和岗位ID列表
 * @returns {Promise<any>} 分配结果
 */
export const assignUserPost = async (data: UserPostVO) => {
  return await request.post({ url: '/admin-api/system/post/assign-user-post', data })
}
