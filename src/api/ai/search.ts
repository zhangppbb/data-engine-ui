/** AI会话请求参数 */
export interface ConversationRequest {
  app_id: string
  department_id: string
}

/** AI会话响应 */
export interface ConversationResponse {
  conversation_id: string
}

/** AI搜索请求参数 */
export interface SearchRequest {
  app_id: string
  department_id: string
  query: string
  stream?: boolean
  conversation_id?: string
}

/** AI搜索结果项 */
export interface SearchResultItem {
  type: 'app' | 'case' | 'api' | string
  content: string
  name?: string
  short_desc?: string
  long_desc?: string
  tags?: string[]
  category?: string
  scenarios?: string[]
  link?: string
  score?: number
}

/** AI搜索响应 */
export interface SearchResponse {
  request_id: string
  date: string
  answer: string
  items: SearchResultItem[]
}


const CONVERSATION_ID_KEY = 'ai_conversation_id'
const CONVERSATION_EXPIRE_KEY = 'ai_conversation_expire'
const CONVERSATION_TOKEN = `Bearer private-x|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZDA2MWY5NC1jYWU2LTQwZDAtYTdkNC1kOWJlMmE2OGE2OGQiLCJzdWIiOiI1NDI2YTgzYzczMDM0YWIwOWU3ZTUzMmQ1NzFlYzhlNyIsImFpYmFzZV9wcm9qZWN0X2lkIjoiZWE0OGNhZmFlYjkyNDVjN2ExMGU4N2M3YzBiZTk1NTUifQ.CI2eGkWaFIbrqcnnENNzHY93SSWTcGjMQD16p1vE1Uo`

/**
 * 创建AI会话
 * @param {ConversationRequest} params 会话请求参数，包含应用ID和部门ID
 * @returns {Promise<ConversationResponse>} 会话响应，包含会话ID
 */
export const fetchCreateConversation = async (params: ConversationRequest): Promise<ConversationResponse> => {
  const url = `/lanyi-api/api/ai_apaas/v1/app/conversation`
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': CONVERSATION_TOKEN,
      'X-Authorization': CONVERSATION_TOKEN
    },
    body: JSON.stringify(params)
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  const result = await response.json()
  
  localStorage.setItem(CONVERSATION_ID_KEY, result.conversation_id)
  localStorage.setItem(CONVERSATION_EXPIRE_KEY, String(Date.now() + 24 * 60 * 60 * 1000))
  
  return result
}

/**
 * 获取会话ID（优先从本地缓存获取，过期则自动重新创建）
 * @param {ConversationRequest} params 会话请求参数，包含应用ID和部门ID
 * @returns {Promise<string>} 会话ID
 */
export const getConversationId = async (params: ConversationRequest): Promise<string> => {
  const conversationId = localStorage.getItem(CONVERSATION_ID_KEY)
  const expireTime = localStorage.getItem(CONVERSATION_EXPIRE_KEY)
  
  if (conversationId && expireTime && Date.now() < Number(expireTime)) {
    return conversationId
  }
  
  const result = await fetchCreateConversation(params)
  return result.conversation_id
}

/**
 * 智能搜索
 * @param {SearchRequest} params 搜索请求参数，包含应用ID、部门ID、查询内容、会话ID等
 * @returns {Promise<SearchResponse>} 搜索响应，包含AI回答和搜索结果列表
 */
export const fetchSmartSearch = async (params: SearchRequest): Promise<SearchResponse> => {
  const url = `/lanyi-api/api/ai_apaas/v1/app/conversation/runs`
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': CONVERSATION_TOKEN,
      'X-Authorization': CONVERSATION_TOKEN
    },
    body: JSON.stringify(params)
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  return response.json()
}
