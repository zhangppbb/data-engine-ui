import type { CascaderNode, CascaderNodePathValue, CascaderOption } from 'element-plus'
import treeTool from 'tree-tool'
import { last, isEmpty } from 'lodash-es'
interface TreeHelperConfig {
  id: string
  children: string
  pid: string
}

const DEFAULT_CONFIG: TreeHelperConfig = {
  id: 'id',
  children: 'children',
  pid: 'pid'
}
export const defaultProps = {
  children: 'children',
  label: 'name',
  value: 'id',
  isLeaf: 'leaf',
  emitPath: false // 用于 cascader 组件：在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
}

const getConfig = (config: Partial<TreeHelperConfig>) => Object.assign({}, DEFAULT_CONFIG, config)


/**
 * 过滤节点
 * @param {CascaderNode[]} nodes
 */
export const filterElementTree = (nodes: CascaderNode[]) => {
  let r: CascaderNode[] = [];

  nodes.forEach((node) => {
    // 递归遍历到parent的checked为false的node
    let parent = node.parent;
    if (parent) {
      while (parent?.checked && parent?.level !== 1) {
        parent = parent.parent;
      }
      if (parent) {
        r.push(parent);
      }
    } else {
      if (node.checked) {
        r.push(node);
      }
    }
  });
  r = [...new Set(r)];
  const path: Array<CascaderNodePathValue> = [];
  r.forEach((node) => {
    if (node.level === 1 && node.checked) {
      // root
      path.push(node.pathValues);
    } else {
      const children = node.children || [];
      if (children) {
        children.forEach((c) => {
          if (c.checked) {
            path.push(c.pathValues);
          }
        });
      }
    }
  });

  return path;
};

// tree from list
export const listToTree = <T = any>(list: any[], config: Partial<TreeHelperConfig> = {}): T[] => {
  const conf = getConfig(config) as TreeHelperConfig
  const nodeMap = new Map()
  const result: T[] = []
  const { id, children, pid } = conf

  for (const node of list) {
    node[children] = node[children] || []
    nodeMap.set(node[id], node)
  }
  for (const node of list) {
    const parent = nodeMap.get(node[pid])
    ;(parent ? parent.children : result).push(node)
  }
  return result
}

export const treeToList = <T = any>(tree: any, config: Partial<TreeHelperConfig> = {}): T => {
  config = getConfig(config)
  const { children } = config
  const result: any = [...tree]
  for (let i = 0; i < result.length; i++) {
    if (!result[i][children!]) continue
    result.splice(i + 1, 0, ...result[i][children!])
  }
  return result
}

export const findNode = <T = any>(
  tree: any,
  func: Fn,
  config: Partial<TreeHelperConfig> = {}
): T | null => {
  config = getConfig(config)
  const { children } = config
  const list = [...tree]
  for (const node of list) {
    if (func(node)) return node
    node[children!] && list.push(...node[children!])
  }
  return null
}

export const findNodeAll = <T = any>(
  tree: any,
  func: Fn,
  config: Partial<TreeHelperConfig> = {}
): T[] => {
  config = getConfig(config)
  const { children } = config
  const list = [...tree]
  const result: T[] = []
  for (const node of list) {
    func(node) && result.push(node)
    node[children!] && list.push(...node[children!])
  }
  return result
}

export const findPath = <T = any>(
  tree: any,
  func: Fn,
  config: Partial<TreeHelperConfig> = {}
): T | T[] | null => {
  config = getConfig(config)
  const path: T[] = []
  const list = [...tree]
  const visitedSet = new Set()
  const { children } = config
  while (list.length) {
    const node = list[0]
    if (visitedSet.has(node)) {
      path.pop()
      list.shift()
    } else {
      visitedSet.add(node)
      node[children!] && list.unshift(...node[children!])
      path.push(node)
      if (func(node)) {
        return path
      }
    }
  }
  return null
}

export const findPathAll = (tree: any, func: Fn, config: Partial<TreeHelperConfig> = {}) => {
  config = getConfig(config)
  const path: any[] = []
  const list = [...tree]
  const result: any[] = []
  const visitedSet = new Set(),
    { children } = config
  while (list.length) {
    const node = list[0]
    if (visitedSet.has(node)) {
      path.pop()
      list.shift()
    } else {
      visitedSet.add(node)
      node[children!] && list.unshift(...node[children!])
      path.push(node)
      func(node) && result.push([...path])
    }
  }
  return result
}

export const filter = <T = any>(
  tree: T[],
  func: (n: T) => boolean,
  config: Partial<TreeHelperConfig> = {}
): T[] => {
  config = getConfig(config)
  const children = config.children as string

  function listFilter(list: T[]) {
    return list
      .map((node: any) => ({ ...node }))
      .filter((node) => {
        node[children] = node[children] && listFilter(node[children])
        return func(node) || (node[children] && node[children].length)
      })
  }

  return listFilter(tree)
}

export const forEach = <T = any>(
  tree: T[],
  func: (n: T) => any,
  config: Partial<TreeHelperConfig> = {}
): void => {
  config = getConfig(config)
  const list: any[] = [...tree]
  const { children } = config
  for (let i = 0; i < list.length; i++) {
    // func 返回true就终止遍历，避免大量节点场景下无意义循环，引起浏览器卡顿
    if (func(list[i])) {
      return
    }
    children && list[i][children] && list.splice(i + 1, 0, ...list[i][children])
  }
}

/**
 * @description: Extract tree specified structure
 */
export const treeMap = <T = any>(
  treeData: T[],
  opt: { children?: string; conversion: Fn }
): T[] => {
  return treeData.map((item) => treeMapEach(item, opt))
}

/**
 * @description: Extract tree specified structure
 */
export const treeMapEach = (
  data: any,
  { children = 'children', conversion }: { children?: string; conversion: Fn }
) => {
  const haveChildren = Array.isArray(data[children]) && data[children].length > 0
  const conversionData = conversion(data) || {}
  if (haveChildren) {
    return {
      ...conversionData,
      [children]: data[children].map((i: number) =>
        treeMapEach(i, {
          children,
          conversion
        })
      )
    }
  } else {
    return {
      ...conversionData
    }
  }
}

/**
 * 递归遍历树结构
 * @param treeDatas 树
 * @param callBack 回调
 * @param parentNode 父节点
 */
export const eachTree = (treeDatas: any[], callBack: Fn, parentNode = {}) => {
  treeDatas.forEach((element) => {
    const newNode = callBack(element, parentNode) || element
    if (element.children) {
      eachTree(element.children, callBack, newNode)
    }
  })
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export const handleTree = (data: any[], id?: string, parentId?: string, children?: string) => {
  if (!Array.isArray(data)) {
    console.warn('data must be an array')
    return []
  }
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  }

  const childrenListMap = {}
  const nodeIds = {}
  const tree: any[] = []

  for (const d of data) {
    const parentId = d[config.parentId]
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = []
    }
    nodeIds[d[config.id]] = d
    childrenListMap[parentId].push(d)
  }

  for (const d of data) {
    const parentId = d[config.parentId]
    if (nodeIds[parentId] == null) {
      tree.push(d)
    }
  }

  for (const t of tree) {
    adaptToChildrenList(t)
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]]
    }
    if (o[config.childrenList]) {
      for (const c of o[config.childrenList]) {
        adaptToChildrenList(c)
      }
    }
  }

  return tree
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * @param {*} rootId 根Id 默认 0
 */
// @ts-ignore
export const handleTree2 = (data, id, parentId, children, rootId) => {
  id = id || 'id'
  parentId = parentId || 'parentId'
  // children = children || 'children'
  rootId =
    rootId ||
    Math.min(
      ...data.map((item) => {
        return item[parentId]
      })
    ) ||
    0
  // 对源数据深度克隆
  const cloneData = JSON.parse(JSON.stringify(data))
  // 循环所有项
  const treeData = cloneData.filter((father) => {
    const branchArr = cloneData.filter((child) => {
      // 返回每一项的子级数组
      return father[id] === child[parentId]
    })
    branchArr.length > 0 ? (father.children = branchArr) : ''
    // 返回第一层
    return father[parentId] === rootId
  })
  return treeData !== '' ? treeData : data
}

/**
 * 校验选中的节点，是否为指定 level
 *
 * @param tree 要操作的树结构数据
 * @param nodeId 需要判断在什么层级的数据
 * @param level 检查的级别, 默认检查到二级
 * @return true 是；false 否
 */
export const checkSelectedNode = (tree: any[], nodeId: any, level = 2): boolean => {
  if (typeof tree === 'undefined' || !Array.isArray(tree) || tree.length === 0) {
    console.warn('tree must be an array')
    return false
  }

  // 校验是否是一级节点
  if (tree.some((item) => item.id === nodeId)) {
    return false
  }

  // 递归计数
  let count = 1

  // 深层次校验
  function performAThoroughValidation(arr: any[]): boolean {
    count += 1
    for (const item of arr) {
      if (item.id === nodeId) {
        return true
      } else if (typeof item.children !== 'undefined' && item.children.length !== 0) {
        if (performAThoroughValidation(item.children)) {
          return true
        }
      }
    }
    return false
  }

  for (const item of tree) {
    count = 1
    if (performAThoroughValidation(item.children)) {
      // 找到后对比是否是期望的层级
      if (count >= level) {
        return true
      }
    }
  }

  return false
}

/**
 * 获取节点的完整结构
 * @param tree 树数据
 * @param nodeId 节点 id
 */
export const treeToString = (tree: any[], nodeId) => {
  if (typeof tree === 'undefined' || !Array.isArray(tree) || tree.length === 0) {
    console.warn('tree must be an array')
    return ''
  }
  // 校验是否是一级节点
  const node = tree.find((item) => item.id === nodeId)
  if (typeof node !== 'undefined') {
    return node.name
  }
  let str = ''

  function performAThoroughValidation(arr) {
    if (typeof arr === 'undefined' || !Array.isArray(arr) || arr.length === 0) {
      return false
    }
    for (const item of arr) {
      if (item.id === nodeId) {
        str += ` / ${item.name}`
        return true
      } else if (typeof item.children !== 'undefined' && item.children.length !== 0) {
        str += ` / ${item.name}`
        if (performAThoroughValidation(item.children)) {
          return true
        }
      }
    }
    return false
  }

  for (const item of tree) {
    str = `${item.name}`
    if (performAThoroughValidation(item.children)) {
      break
    }
  }
  return str
}

/**
 * key 转换成 label
 * @param {string} key
 * @param {CascaderOption[]} options
 * @param {string} labelKey
 */
export const getConvertKeyToLabel = (
  key: string,
  options: CascaderOption[],
  labelKey: string = 'label'
): string => {
  const pathList: CascaderOption[] = treeTool.findPath(
    options,
    (n: CascaderOption) => String(n.value) === String(key)
  ) // pathList所有父级data组成的

  return String(last(pathList)?.[labelKey] || '')
}

/**
 * Paths
 * @param {string|boolean|number} value
 * @param {CascaderOption[]} options
 * @param {string} value
 */
export const getTreePaths = (
  value: string | boolean | number,
  options: CascaderOption[] = [],
  valueKey: string = 'value'
): CascaderOption[] => {
  const pathList: CascaderOption[] = treeTool.findPath(
    options || [],
    (n: CascaderOption) => String(n[valueKey]) === String(value)
  ) // pathList所有父级data组成的

  return isEmpty(pathList) ? [] : pathList
}

/**
 * 合并两个树结构的函数。
 *
 * @param {CascaderOption | CascaderOption[]} tree1 - 第一个树结构，数组形式，每个元素都是一个 TreeNode。
 * @param {CascaderOption | CascaderOption[]} tree2 - 第二个树结构，数组形式，每个元素都是一个 TreeNode。
 * @param idKey - 可选的唯一标识符键，默认为 'value'。用于指定用于合并的唯一标识符。
 * @returns 返回合并后的树结构，数组形式。
 */
export const mergeTrees = (
  tree1: CascaderOption | CascaderOption[],
  tree2: CascaderOption | CascaderOption[],
  key: string = 'value' // 默认唯一标识符键为 'value'
): CascaderOption[] => {
  if (!Array.isArray(tree1)) tree1 = [tree1]
  if (!Array.isArray(tree2)) tree2 = [tree2]
  return [...tree1, ...tree2].reduce((r: CascaderOption[], o) => {
    const item: CascaderOption | undefined = r.find((v) => o[key] === v[key])
    if (item) item.children = mergeTrees(item.children || [], o?.children || [])
    else r.push(o)
    return r
  }, [])
}

/**
 * 删除树结构中指定属性值的节点（性能优化版，不修改原始数据）
 * @param data 树结构数组
 * @param key 要匹配的属性名，如 'id'
 * @param values 要删除的值或值数组
 * @param childrenKey 子节点字段名，默认为 'children'
 * @returns 新树结构（不修改原始 data）
 */
export const removeTreeNode = <T>(
  data: T[],
  key: keyof T,
  values: any | any[],
  childrenKey: keyof T = 'children' as keyof T
): T[] => {
  const valueSet = new Set(Array.isArray(values) ? values : [values])

  // 递归处理，每次仅在必要时拷贝节点
  const deepFilter = (nodes: T[]): T[] => {
    const result: T[] = []

    for (const node of nodes) {
      // @ts-ignore
      if (valueSet.has(node[key])) continue // 过滤目标节点

      const newNode: any = { ...node } // 浅拷贝当前节点

      // 递归处理子节点
      const children = node[childrenKey] as unknown as T[]
      if (Array.isArray(children) && children.length > 0) {
        const newChildren = deepFilter(children)
        if (newChildren.length > 0) {
          newNode[childrenKey] = newChildren
        } else {
          delete newNode[childrenKey] // 无子节点则移除属性
        }
      }

      result.push(newNode)
    }

    return result
  }

  return deepFilter(data)
}


/**
 * 获取 CascaderOption 树中第一个有效叶子路径（高性能 + 可配置 key）
 * @param options 树形级联选项数组
 * @param keys 自定义字段映射 { valueKey, childrenKey }
 * @returns string[] 第一个叶子节点的完整路径
 */
export const getFirstCascaderPath = (
  options: any[],
  keys: { valueKey?: string; childrenKey?: string } = {}
): string[] => {
  if (!options || options.length === 0) return []

  const VALUE_KEY = keys.valueKey || 'value'
  const CHILDREN_KEY = keys.childrenKey || 'children'

  const path: string[] = []
  let node = options[0]

  // ⚡ 使用 while 循环提高性能（O(depth)）
  while (node) {
    path.push(node[VALUE_KEY])
    const children = node[CHILDREN_KEY]
    if (children && children.length > 0) {
      node = children[0]
    } else {
      break
    }
  }

  return path
}
