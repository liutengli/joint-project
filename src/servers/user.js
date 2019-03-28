import axios from '../utils/request'

/**
 *用户登录
 * @param {*} userName
 * @param {*} pwd
 */
export function login(userName,pwd){
  return axios.post('/api/v1/auth/login',{
    userName:userName,
    password:pwd
  })
}

/**
 * 用户注册
 * 参数为对象形式
 * @param {*} user
 * {
 * userName 用户名
 * password  密码
 *
 * }
 * 
 */
export function reg(user){
  return axios.post('/api/v1/auth/reg',user)
}

/**
 * 添加购物车
 * @param {*} product  商品id
 * @param {*} quantity 商品数量，默认写1
 */
export function addToShopCrt(product,quantity){
  let myCarts=getShopCart()
  //console.log(myCarts)
  //查询当前商品在购物车数组中的索引
  const index=myCarts.findIndex(cart=>cart.product==product);
 // console.log(index)
  if(index>-1){
    myCarts[index].quantity+=quantity;
  }else{
    myCarts.push({
      product,
      quantity
    })
  }
  localStorage.setItem('my-carts',JSON.stringify(myCarts));//保存购物车信息
}

/**
 * 获取购物车信息
 */
export function getShopCart(){
  return axios({
    method:'get',
    url:'/api/v1/shop_carts',
    headers:{
      'Authorization':'Bearer'+' '+sessionStorage.getItem('token')
    }
  })
}

export function DelShopCartList(id){
  return axios({
    method:'delete',
    url:`/api/v1/shop_carts/${id}`,
    headers:{
      'Authorization':'Bearer'+' '+sessionStorage.getItem('token')
    }
  })
}





/**
 * 获取用户信息
 */

 export function getUserInfo(){
   //console.log(sessionStorage.getItem('token'))
    return axios({
     method:'get',
     url:'/api/v1/users/info',
     headers:{
       'Authorization':'Bearer'+' '+sessionStorage.getItem('token')
     }
   }) 
 }