type StringObj = { [k: string]: string }
type UrlParamResponse = null | string | StringObj
/**
 * 获取url的具名参数
 * @param name 参数名称，不传则返回全部参数的对象
 */
export function getUrlParams(name = ''): UrlParamResponse {
  const href = window.location.href,
    i = href.indexOf('?')
  if (i < 0) return null
  const str = href.slice(i)
  if (!str) return null
  const arr = str.match(/([^?&=#]+)=([^?&=#/]*)/g)
  if (!arr) return null
  const obj: StringObj = {}
  arr.forEach((v) => {
    const temp = v.split('=')
    if (temp.length > 0) {
      obj[temp[0]] = temp[1]
    }
  })
  if (name) return obj[name]
  return obj
}
