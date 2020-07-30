import {requestGet, requestPost} from 'Util/request';
import {E} from 'Config/E';
// 获取列表 
export async function getEditorialCenterListReviewJson(params) {
    let result = await requestGet(`${E.SERVER_HOME}Article/GetReviewArticles`, params)
    return result
}
