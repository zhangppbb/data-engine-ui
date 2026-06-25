import request from '@/config/axios'


export const updateBpmSimpleModel = async (data) => {
  return await request.post({
    url: '/admin-api/bpm/model/simple/update',
    data: data
  })
}

export const getBpmSimpleModel = async (id) => {
  return await request.get({
    url: '/admin-api/bpm/model/simple/get?id=' + id
  })
}
