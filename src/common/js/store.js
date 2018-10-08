/*
* 本地缓存的读取
* */
// 存
export function saveToLocal (id, key, value) {
  let seller = window.localStorage.__seller__
  if (!seller) { // 用户缓存没有该字段，即对任何商品都无操作
    alert('444')
    seller = {}
    seller[id] = {}
  } else {
    alert('555')
    seller = JSON.parse(seller) // 如果已经有这个字段则先取出来
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  // 存值
  seller[id][key] = value
  window.localStorage.__seller__ = JSON.stringify(seller)
}
export function loadFromLocal (id, key, def) {
  let seller = window.localStorage.__seller__
  if (!seller) { // 用户对任何id的商品都没进行过操作，即localStorage没有该字段
    alert('111')
    return def
  }
  seller = JSON.parse(seller)[id] // 取值
  if (!seller) { // 如果某id的seller对象为空返回默认值，即用户对该商品没有进行任何操作
    alert('222')
    return def
  }
  let ret = seller[key]
  return ret || def
}
