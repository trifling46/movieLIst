/**
 * @Description:
 * @author shengling li
 * @date: 2021-08-22 11:23
 */
import axios from "../util/http";
import qs from 'qs'

const baseUrl = 'https://m.douban.com/rexxar/api/v2/'
const fetchMovieList = (params)=>{
  return axios.get(baseUrl + 'movie/suggestion',{params})
}
export  {
  fetchMovieList
}
