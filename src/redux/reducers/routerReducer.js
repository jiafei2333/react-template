import * as types from 'Redux/action-types';
import Loadable from 'react-loadable';
import Loading from 'Components/Base/Loading';


const initialState = {
    routeData: [
        {
            path: '/',
            needAuth: true, // true 需要判断是否登录
            component:  Loadable({
                loader: () => import('Pages/Home/Home'),
                loading: Loading,
            })
        },
        {
            path: '/login',
            needAuth: false,
            component: Loadable({
                loader: () => import('Pages/Home/LoginIndex'),
                loading: Loading,
            })
        },
        {
            path: '/list',
            needAuth: true,
            component: Loadable({
                loader: () => import('Pages/Demo/List'),
                loading: Loading,
            })
        }
    ]
};

export default function(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        // 通用 直接赋值
        case types.SET_PARAMS_DATA:
            return {
                ...state,
                [`${payload['paramsName']}`]: payload.paramsValue
            }
            break;
        // 通用 对象类型数据赋值
        case types.SET_PARAMS_OBJECT:
            return {
                ...state,
                [`${payload.paramsNameObj}`]: {
                    ...state[`${payload.paramsNameObj}`],
                    [`${payload.paramsName}`]: payload.paramsValue
                }
            }
            break;
        default:
            return state;
    }
}