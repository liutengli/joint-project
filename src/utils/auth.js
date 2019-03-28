export function loginIn(user,token){
    sessionStorage.setItem('userName',user);
    sessionStorage.setItem('token',token);
}

export function isLogin() {
    if(sessionStorage.getItem('userName')){
        return true
    }else{
        return false
    }
  }
export function loginOut(){
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('token');
}
