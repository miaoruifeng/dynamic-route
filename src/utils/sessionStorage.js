export const SET_SESSION_STORAGE = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value))
}
export const GET_SESSION_STORAGE = (name) => {
  return JSON.parse(sessionStorage.getItem(name))
}
