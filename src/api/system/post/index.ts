import request from '@/config/axios'

export interface PostVO {
  id?: number
  name: string
  code: string
  sort: number
  status: number
  remark: string
  createTime?: Date
}

export interface PostUserVO {
  postId: number
  userIds: number[]
}

export interface UserPostVO {
  userId: number
  deptId: number
  postIds: number[]
}

// 查询岗位列表
export const getPostPage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/post/page', params })
}

// 获取岗位精简信息列表
export const getSimplePostList = async (): Promise<PostVO[]> => {
  return await request.get({ url: '/admin-api/system/post/simple-list' })
}

// 查询岗位详情
export const getPost = async (id: number) => {
  return await request.get({ url: '/admin-api/system/post/get?id=' + id })
}

// 新增岗位
export const createPost = async (data: PostVO) => {
  return await request.post({ url: '/admin-api/system/post/create', data })
}

// 修改岗位
export const updatePost = async (data: PostVO) => {
  return await request.put({ url: '/admin-api/system/post/update', data })
}

// 删除岗位
export const deletePost = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/post/delete?id=' + id })
}

// 导出岗位
export const exportPost = async (params) => {
  return await request.download({ url: '/admin-api/system/post/export-excel', params })
}

// 获得岗位关联的所有用户id
export const getPostUsers = async (id: number) => {
  return await request.get({ url: '/admin-api/system/post/get-post-users?id=' + id })
}

// 批量赋予岗位用户
export const assignPostUser = async (data: PostUserVO) => {
  return await request.post({ url: '/admin-api/system/post/assign-post-user', data })
}

// 查询用户拥有的岗位数组
export const getUserPosts = async (userId: number, deptId: number) => {
  return await request.get({
    url: '/admin-api/system/post/get-user-posts?userId=' + userId + '&deptId=' + deptId
  })
}

// 赋予用户岗位
export const assignUserPost = async (data: UserPostVO) => {
  return await request.post({ url: '/admin-api/system/post/assign-user-post', data })
}
