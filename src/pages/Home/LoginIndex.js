import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import get from 'lodash/get';
import './style.less';
import Login from './components/Login';
import {GET_SITE_CONFIG, POST_LOGIN_IN} from 'Redux/action-types';
import LogoPic from 'Assets/logo.png';
import BackgroundPic from 'Assets/Background.png';
import CenterImagePic from 'Assets/CenterImage.png';
import BottomImagePic from 'Assets/BottomImage.png';


const tabListNoTitle = [{
    key: 'login',
    tab: '账号密码登录',
  }, {
    key: 'weixin',
    tab: '微信登录',
  }];

export class LoginIndex extends Component {
    constructor(props){
        super(props);
        this.state = {  
            key: 'tab1', 
            noTitleKey: 'login' ,
            number: 0,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    /** 生命周期*********************************** */
    componentDidMount(){
        this.props.getSiteConfig();
    }
   

    /** 生命周期*********************************** */
    onTabChange = (key) =>{

    }
    onSubmit(value){
        this.props.postLoginIn({userName: value.username, password: value.password});
    }
    render() {
        const {siteConfig} = this.props;
        const loginBgStyle = {
            background: `url(${BackgroundPic})`,
          }
        const contentListNoTitle = { login: <Login onSubmit={this.onSubmit} />, weixin: <div>2</div> };

      
        return (
            <div className='loginIndex' style={loginBgStyle}>
                <div>
                <img src={LogoPic} className='loginLogo'/>
                <img src={CenterImagePic} className='loginTitle'/>
                <img  src={BottomImagePic} className='loginImg'/>
                </div>
                <div className={'CopyRight'}>
                    <p style={{marginBottom: '0'}}> {get(siteConfig,"CopyrightName")}  </p>
                    <p style={{marginBottom: '0'}}> XXXXXX有限公司 提供技术支持 </p>
                    <p> {get(siteConfig,"ICPName")} </p>
                </div>
                <Card
                    className={'cardMain'}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => {
                        this.onTabChange(key, 'noTitleKey');
                    }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    siteConfig: state.appReducer.siteConfig
})

const mapDispatchToProps = dispatch => {
    return {
        getSiteConfig: ()=> dispatch({type: GET_SITE_CONFIG}),
        postLoginIn: (data) => dispatch({type: POST_LOGIN_IN,payload:data})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginIndex);