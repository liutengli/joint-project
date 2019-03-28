import axios from '../utils/request'
/**
 * 获取商品列表
 * @param {*} params
 * per 每一页显示数量
 * page 当前显示的页数
 */
export const getProducts = (params) => {
  return axios.get('/api/v1/products', {params});
}

/**
 * 获取商品详情
 * @param {*} id
 */
export const getProductDetail = (id) => {
  return axios.get(`/api/v1/products/${id}`)
}
