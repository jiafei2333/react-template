import { hot } from 'react-hot-loader/root';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect } from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Page404 from 'Pages/404';
import MainLayout from 'Components/Base/MainLayout';


class RouteApp  extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const {routeData} = this.props;
        
        return (
            <>
            <Switch>
                {
                    routeData.map(({path, needAuth, component}, index)=>{
                        return <Route key={index} exact path={path} component={component} />
                    })
                }
               <Redirect to="/"></Redirect>
            </Switch>
            
            </> 
        )
    }
    
};
const mapStateToProps = (state) => ({
    routeData: state.routerReducer.routeData
})
const mapDispatchToProps = dispatch =>{
    return { 
    }
}
RouteApp =  connect(mapStateToProps, mapDispatchToProps)(RouteApp)




const App = ({history, store}) =>{
    console.log("App----------------------------完全刷新");
    // 监听路由
    history.listen((location, action) => {
        console.log("路由监听~~~~~~~~~~~~", location);
        
    })
    return (
        <ConnectedRouter history={history} >
            <ConfigProvider locale={zhCN}>
                <MainLayout history={history}>
                    <RouteApp />
                </MainLayout>
            </ConfigProvider>
        </ConnectedRouter>
    )
}
export default hot(App);