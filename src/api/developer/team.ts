import request from '@/config/axios'

export interface CreateTeamDTO {
  name: string
  description?: string
}

export interface UpdateTeamDTO {
  id: number
  name: string
  description?: string
}

export interface TeamInviteDTO {
  teamId: number
  email: string
}

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

export const createTeam = (data: CreateTeamDTO) => {
  return request.post({ url: '/admin-api/team/create', data })
}

export const updateTeam = (data: UpdateTeamDTO) => {
  return request.post({ url: '/admin-api/team/update', data })
}

export const deleteTeam = (teamId: number) => {
  return request.post({ url: `/team/delete/${teamId}` })
}

export const getTeam = (teamId: number) => {
  return request.get({ url: `/team/get/${teamId}` })
}

export const listUserTeams = () => {
  return request.get({ url: '/admin-api/team/list' })
}

export const inviteMember = (data: TeamInviteDTO) => {
  return request.post({ url: '/admin-api/team/invite', data })
}

export const acceptInvite = (token: string) => {
  return request.post({ url: `/team/accept-invite/${token}` })
}

export const exitTeam = (teamId: number) => {
  return request.post({ url: `/team/exit/${teamId}` })
}

export const removeMember = (teamId: number, userId: number) => {
  return request.post({ url: '/admin-api/team/remove-member', params: { teamId, userId } })
}

export const updateMemberRole = (teamId: number, userId: number, role: string) => {
  return request.post({ url: '/admin-api/team/update-role', params: { teamId, userId, role } })
}

export const listTeamMembers = (teamId: number) => {
  return request.get({ url: `/team/members/${teamId}` })
}
