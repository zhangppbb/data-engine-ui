<template>
  <ContentWrap>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">团队管理</h2>
      <el-button type="primary" @click="openCreateModal">
        <Icon icon="ep:plus" /> 创建团队
      </el-button>
    </div>

    <el-table :data="teamList" border>
      <el-table-column label="团队名称" prop="name" />
      <el-table-column label="团队描述" prop="description" />
      <el-table-column label="成员数量" prop="memberCount" />
      <el-table-column label="创建时间" prop="createTime" />
      <el-table-column label="操作" width="250">
        <template #default="scope">
          <el-button size="small" @click="viewMembers(scope.row)">成员管理</el-button>
          <el-button size="small" @click="openUpdateModal(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteTeam(scope.row)">解散</el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>

  <el-dialog title="创建团队" v-model="createModalVisible">
    <el-form :model="createForm" label-width="100px">
      <el-form-item label="团队名称" prop="name">
        <el-input v-model="createForm.name" placeholder="请输入团队名称" />
      </el-form-item>
      <el-form-item label="团队描述" prop="description">
        <el-input v-model="createForm.description" placeholder="请输入团队描述" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeCreateModal">取消</el-button>
      <el-button type="primary" @click="submitCreate">创建</el-button>
    </template>
  </el-dialog>

  <el-dialog title="编辑团队" v-model="updateModalVisible">
    <el-form :model="updateForm" label-width="100px">
      <el-form-item label="团队名称" prop="name">
        <el-input v-model="updateForm.name" placeholder="请输入团队名称" />
      </el-form-item>
      <el-form-item label="团队描述" prop="description">
        <el-input v-model="updateForm.description" placeholder="请输入团队描述" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeUpdateModal">取消</el-button>
      <el-button type="primary" @click="submitUpdate">保存</el-button>
    </template>
  </el-dialog>

  <el-dialog title="团队成员管理" v-model="membersModalVisible" width="800px">
    <div class="flex justify-between items-center mb-4">
      <span>{{ currentTeam?.name }} - 成员列表</span>
      <el-button size="small" type="primary" @click="openInviteModal">邀请成员</el-button>
    </div>
    <el-table :data="memberList" border>
      <el-table-column label="用户ID" prop="userId" />
      <el-table-column label="角色">
        <template #default="scope">
          <el-select 
            v-model="scope.row.role" 
            :disabled="scope.row.role === 'OWNER'"
            @change="(val) => updateRole(scope.row, val)"
          >
            <el-option label="所有者" value="OWNER" :disabled="scope.row.role !== 'OWNER'" />
            <el-option label="管理员" value="ADMIN" />
            <el-option label="成员" value="MEMBER" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="加入时间" prop="joinTime" />
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-button 
            size="small" 
            type="danger" 
            v-if="scope.row.role !== 'OWNER'"
            @click="removeMember(scope.row)"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>

  <el-dialog title="邀请成员" v-model="inviteModalVisible">
    <el-form :model="inviteForm" label-width="100px">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="inviteForm.email" placeholder="请输入被邀请人的邮箱" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeInviteModal">取消</el-button>
      <el-button type="primary" @click="submitInvite">发送邀请</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Icon } from '@/components/Icon'
import * as TeamApi from '@/api/developer/team'
import type { TeamVO, TeamMemberVO, CreateTeamDTO, UpdateTeamDTO, TeamInviteDTO } from '@/api/developer/team'

const teamList = ref<TeamVO[]>([])
const memberList = ref<TeamMemberVO[]>([])
const currentTeam = ref<TeamVO | null>(null)

const createModalVisible = ref(false)
const updateModalVisible = ref(false)
const membersModalVisible = ref(false)
const inviteModalVisible = ref(false)

const createForm = reactive({
  name: '',
  description: ''
})

const updateForm = reactive({
  id: 0,
  name: '',
  description: ''
})

const inviteForm = reactive({
  email: ''
})

const loadTeams = async () => {
  const res = await TeamApi.listUserTeams()
  teamList.value = res.data
}

const openCreateModal = () => {
  createForm.name = ''
  createForm.description = ''
  createModalVisible.value = true
}

const closeCreateModal = () => {
  createModalVisible.value = false
}

const submitCreate = async () => {
  if (!createForm.name.trim()) {
    ElMessage.error('请输入团队名称')
    return
  }

  const data: CreateTeamDTO = {
    name: createForm.name,
    description: createForm.description
  }

  await TeamApi.createTeam(data)
  createModalVisible.value = false
  loadTeams()
  ElMessage.success('团队创建成功')
}

const openUpdateModal = (team: TeamVO) => {
  updateForm.id = team.id
  updateForm.name = team.name
  updateForm.description = team.description
  updateModalVisible.value = true
}

const closeUpdateModal = () => {
  updateModalVisible.value = false
}

const submitUpdate = async () => {
  if (!updateForm.name.trim()) {
    ElMessage.error('请输入团队名称')
    return
  }

  const data: UpdateTeamDTO = {
    id: updateForm.id,
    name: updateForm.name,
    description: updateForm.description
  }

  await TeamApi.updateTeam(data)
  updateModalVisible.value = false
  loadTeams()
  ElMessage.success('团队信息已更新')
}

const deleteTeam = async (team: TeamVO) => {
  await TeamApi.deleteTeam(team.id)
  loadTeams()
  ElMessage.success('团队已解散')
}

const viewMembers = async (team: TeamVO) => {
  currentTeam.value = team
  const res = await TeamApi.listTeamMembers(team.id)
  memberList.value = res.data
  membersModalVisible.value = true
}

const openInviteModal = () => {
  inviteForm.email = ''
  inviteModalVisible.value = true
}

const closeInviteModal = () => {
  inviteModalVisible.value = false
}

const submitInvite = async () => {
  if (!inviteForm.email.trim()) {
    ElMessage.error('请输入邮箱')
    return
  }

  const data: TeamInviteDTO = {
    teamId: currentTeam.value!.id,
    email: inviteForm.email
  }

  await TeamApi.inviteMember(data)
  inviteModalVisible.value = false
  ElMessage.success('邀请已发送')
}

const updateRole = async (member: TeamMemberVO, role: string) => {
  await TeamApi.updateMemberRole(currentTeam.value!.id, member.userId, role)
  member.role = role
  member.roleName = role === 'OWNER' ? '所有者' : role === 'ADMIN' ? '管理员' : '成员'
  ElMessage.success('角色已更新')
}

const removeMember = async (member: TeamMemberVO) => {
  await TeamApi.removeMember(currentTeam.value!.id, member.userId)
  memberList.value = memberList.value.filter(m => m.id !== member.id)
  ElMessage.success('成员已移除')
}

onMounted(() => {
  loadTeams()
})
</script>
