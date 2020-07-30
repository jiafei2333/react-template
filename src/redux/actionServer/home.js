import {requestGet, requestPost} from 'Util/request';
import {E} from 'Config/E';
// 登录
export async function getLoginAdd(params){
    let result = await requestPost(`${E.SERVER_HOME}Token/Login`,params);
    return result;
}
// 获取站点基础配置项
export async function getProjectSettings(params) {
    let result = await requestGet(`${E.SERVER_HOME}Configs/GetProjectSettings`)
    return result
}
// 获取目录权限
export async function getAccountRightsJson(params) {
    let result = await requestGet(`${E.SERVER_HOME}Power/GetAccountRights`,params)
    return result
}