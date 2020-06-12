import { get, post, upload,postJson } from './http'

// 提交表单
export const apiAllRocketByCountry = () => get('/rocket')
export const apiGetRocketById = (id) => get(`/rocket/${id}`)

export const apiForm = (data) => post('/add?_ajax=1',data)
export const apiProgress = (data) => post('/progress',data)
export const apiLogin = (data) => post('/login',data)

//管理员
//获取数据
export const apiGetAll = () => get('/admin/rockets') 
// 删除数据
export const apiDelete = (id) => get(`/admin/delete/${id}`)
export const apiAdd = (data) => postJson(`/admin/rockets`, data)
export const apiUpload = (file) => upload('/upload/image', file)
// 添加
