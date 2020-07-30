import * as types from 'Redux/action-types';

const initialState = {
    siteConfig: {}, // 站点配置
    mainMenu: []
}


export default function(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case types.SET_PARAMS:
            return {
                ...state,
                [`${payload['paramsName']}`]: payload.paramsValue
            }
            break;
        default:
            return state;
    }
}