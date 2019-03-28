import axios from '../utils/request'

/**
 *用户登录
 * @param {*} userName
 * @param {*} pwd
 */
export function login(userName, pwd) {
  return axios.post('/api/v1/auth/login', {
    userName: userName,
    password: pwd
  })
}

/**
 * 参数为对象形式
 * @param {*} user 
 * {
 * userName 用户名
 * password  密码
 * nickName  昵称
 * avatar  头像
 * }
 */
export function reg(user) {
  return axios.post('/api/v1/auth/reg', user)
}

/**
 * 添加购物车
 * @param {*} product  商品id
 * @param {*} quantity 商品数量，默认写1
 */
export function addToShopCrt(product, quantity) {
  let myCarts = getShopCart()
  //console.log(myCarts)
  //查询当前商品在购物车数组中的索引
  const index = myCarts.findIndex(cart => cart.product == product);
  // console.log(index)
  if (index > -1) {
    myCarts[index].quantity += quantity;
  } else {
    myCarts.push({
      product,
      quantity
    })
  }
  localStorage.setItem('my-carts', JSON.stringify(myCarts));//保存购物车信息
}

/**
 * 获取购物车信息
 */
export function getShopCart() {
  return axios({
    method: 'get',
    url: '/api/v1/shop_carts',
    headers: {
      'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token')
    }
  })
}

export function DelShopCartList(id) {
  return axios({
    method: 'delete',
    url: `/api/v1/shop_carts/${id}`,
    headers: {
      'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token')
    }
  })
}


/**
 * 获取用户信息
 */

export function getUserInfo() {
  //console.log(sessionStorage.getItem('token'))
  return axios({
    method: 'get',
    url: '/api/v1/users/info',
    headers: {
      'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token')
    }
  })
}

//获取收货地址
export function addressList() {
  return axios.get('/api/v1/addresses', {
    headers: {
      'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token')
    }
  })
}

//添加收货地址
export function addAddress(address) {
  console.log(address)
  return axios.post('/api/v1/addresses', address, {
    headers: {
      'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token')
    }
  })
}

//修改收货地址
export function editAddress(id, address) {
  return axios.put(`/api/v1/addresses/${id}`, address, {
    headers: {
      'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token')
    }
  })
}

//删除收货地址
export function delAddress(id) {
  return axios.delete(`/api/v1/addresses/${id}`, {
    headers: {
      'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token')
    }
  })
}