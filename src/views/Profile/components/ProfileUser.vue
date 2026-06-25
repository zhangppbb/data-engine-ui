<template>
  <div>
    <div class="text-center">
      <UserAvatar :img="userInfo?.avatar" />
    </div>
    <ul class="list-group list-group-striped">
      <li class="list-group-item">
        <Icon class="mr-5px" icon="ep:user" />
        {{ t('profile.user.username') }}
        <div class="pull-right">{{ userInfo?.username }}</div>
      </li>
      <li class="list-group-item">
        <Icon class="mr-5px" icon="ep:phone" />
        {{ t('profile.user.mobile') }}
        <div class="pull-right">{{ userInfo?.mobile }}</div>
      </li>
      <li class="list-group-item">
        <Icon class="mr-5px" icon="fontisto:email" />
        {{ t('profile.user.email') }}
        <div class="pull-right">{{ userInfo?.email }}</div>
      </li>
    </ul>
    <!-- 列表 -->
    <!-- <ContentWrap>
      <el-table :data="userInfo.depts">
        <el-table-column :label="t('profile.user.dept')" align="center" prop="deptName" />
        <el-table-column :label="t('profile.user.roles')" align="center" prop="roles" />
        <el-table-column :label="t('profile.user.posts')" align="center" prop="posts" />
        <el-table-column label="是否主职" align="center" prop="mainJob">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.INFRA_BOOLEAN_STRING" :value="scope.row.mainJob" />
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center" prop="status">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.status" />
          </template>
        </el-table-column>
        <el-table-column :label="t('profile.user.createTime')" align="center" prop="createTime">
          <template #default="scope">
            {{ formatDatetime(scope.row.createTime) }}
          </template>
        </el-table-column>
      </el-table>
    </ContentWrap> -->
  </div>
</template>
<script lang="ts" setup>
import { formatDatetime } from '@/utils/formatTime'
import { DICT_TYPE } from '@/utils/dict'
import UserAvatar from './UserAvatar.vue'

import { getUserProfile, ProfileVO } from '@/api/system/user/profile'

defineOptions({ name: 'ProfileUser' })

const { t } = useI18n()
const userInfo = ref({} as ProfileVO)
const getUserInfo = async () => {
  const users = await getUserProfile()
  userInfo.value = users
}

// 暴露刷新方法
defineExpose({
  refresh: getUserInfo
})

onMounted(async () => {
  await getUserInfo()
})
</script>

<style scoped>
.text-center {
  position: relative;
  height: 120px;
  text-align: center;
}

.list-group-striped > .list-group-item {
  padding-right: 0;
  padding-left: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}

.list-group {
  padding-left: 0;
  list-style: none;
}

.list-group-item {
  padding: 11px 0;
  margin-bottom: -1px;
  font-size: 13px;
  border-top: 1px solid #e7eaec;
  border-bottom: 1px solid #e7eaec;
}

.pull-right {
  float: right !important;
}
</style>
