import $http from 'axios'

export function getMenu() {
  const url = '/api/navmenu.json'
  return $http.get(url).then(res => {
    return Promise.resolve(res)
  })
}
