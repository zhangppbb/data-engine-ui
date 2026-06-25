import request from '@/config/axios'

/** 创建团队DTO */
export interface CreateTeamDTO {
  name: string
  description?: string
}

/** 更新团队DTO */
export interface UpdateTeamDTO {
  id: number
  name: string
  description?: string
}

/** 团队邀请DTO */
export interface TeamInviteDTO {
  teamId: number
  email: string
}

/** 团队VO */
export interface TeamVO {
  id: number
  name: string
  description: string
  ownerId: number
  ownerName: string
  status: number
  memberCount: number
  createTime: string
}

/** 团队成员VO */
export interface TeamMemberVO {
  id: number
  teamId: number
  teamName: string
  userId: number
  username: string
  nickname: string
  email: string
  role: string
  roleName: string
  joinTime: string
  status: number
}

/**
 * 创建团队
 * @param {CreateTeamDTO} data 创建参数，包含团队名称和描述
 * @returns {Promise} 创建结果
 */
export const createTeam = (data: CreateTeamDTO) => {
  return request.post({ url: '/admin-api/team/create', data })
}

/**
 * 更新团队信息
 * @param {UpdateTeamDTO} data 更新参数，包含团队ID、名称和描述
 * @returns {Promise} 更新结果
 */
export const updateTeam = (data: UpdateTeamDTO) => {
  return request.post({ url: '/admin-api/team/update', data })
}

/**
 * 删除团队
 * @param {number} teamId 团队ID
 * @returns {Promise} 删除结果
 */
export const deleteTeam = (teamId: number) => {
  return request.post({ url: `/team/delete/${teamId}` })
}

/**
 * 获取团队详情
 * @param {number} teamId 团队ID
 * @returns {Promise} 团队详情
 */
export const getTeam = (teamId: number) => {
  return request.get({ url: `/team/get/${teamId}` })
}

/**
 * 获取当前用户所属团队列表
 * @returns {Promise} 团队列表
 */
export const listUserTeams = () => {
  return request.get({ url: '/admin-api/team/list' })
}

/**
 * 邀请成员加入团队
 * @param {TeamInviteDTO} data 邀请参数，包含团队ID和被邀请人邮箱
 * @returns {Promise} 邀请结果
 */
export const inviteMember = (data: TeamInviteDTO) => {
  return request.post({ url: '/admin-api/team/invite', data })
}

/**
 * 接受团队邀请
 * @param {string} token 邀请令牌
 * @returns {Promise} 接受结果
 */
export const acceptInvite = (token: string) => {
  return request.post({ url: `/team/accept-invite/${token}` })
}

/**
 * 退出团队
 * @param {number} teamId 团队ID
 * @returns {Promise} 退出结果
 */
export const exitTeam = (teamId: number) => {
  return request.post({ url: `/team/exit/${teamId}` })
}

/**
 * 移除团队成员
 * @param {number} teamId 团队ID
 * @param {number} userId 待移除的用户ID
 * @returns {Promise} 移除结果
 */
export const removeMember = (teamId: number, userId: number) => {
  return request.post({ url: '/admin-api/team/remove-member', params: { teamId, userId } })
}

/**
 * 更新团队成员角色
 * @param {number} teamId 团队ID
 * @param {number} userId 用户ID
 * @param {string} role 新角色标识
 * @returns {Promise} 更新结果
 */
export const updateMemberRole = (teamId: number, userId: number, role: string) => {
  return request.post({ url: '/admin-api/team/update-role', params: { teamId, userId, role } })
}

/**
 * 获取团队成员列表
 * @param {number} teamId 团队ID
 * @returns {Promise} 团队成员列表
 */
export const listTeamMembers = (teamId: number) => {
  return request.get({ url: `/team/members/${teamId}` })
}
