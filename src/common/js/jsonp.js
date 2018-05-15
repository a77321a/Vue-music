import Ojsonp from 'jsonp'

//封装jsonp
export default function jsonp(url,data,option) {
  url += (url.indexOf('?')<0 ? '?':'&') + param(data)
  console.log(url)
  return new Promise((resolve, reject) => {
    Ojsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

//合并参数

export function param(data) {
  let url = ''
  for(let k in data){
    let value  = data[k] !== undefined ?data[k]:''
    url +=  '&' + k + '=' + encodeURIComponent(value)
  }
  console.log(url)
  return url ? url.substring(1): ''
}
