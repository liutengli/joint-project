import axios from 'axios'
import {serverurl} from './config'


const instance=axios.create({
  baseURL:serverurl,
  timeout:5000,
})



export default instance
