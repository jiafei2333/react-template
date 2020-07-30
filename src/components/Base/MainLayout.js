import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LogoPic from 'Assets/logo.png';
import './style.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export class MainLayout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {children, siteConfig, history, mainMenu} = this.props;
       
        return (
            <>
            {
                history.location.pathname === '/login' ? 
                    <>{children}</> 
                    :
                    <Layout  className="layout">
                        <div className={'topBox'}>
                            <div className={'topAbsolute'} style={{ float:'left', marginLeft: '40px', }}>
                                <Link to="/" >
                                <img className={'logo'} src={LogoPic}/>
                                </Link>
                            </div>
                            <Header>
                                {/* 菜单权限 mainMenu */}
                                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                                    <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/list">列表Demo</Link></Menu.Item>
                                </Menu>
                            </Header> 
                        </div>
                        <Layout>
                            <Layout style={{ flexDirection: 'column'}}>
                                <content className={'contentBox'}>
                                    <Sider width={200} className="site-layout-background">
                                        <Menu
                                        mode="inline"
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        style={{ height: '100%', borderRight: 0 }}
                                        >
                                        <SubMenu key="sub1"  title="subnav 1">
                                            <Menu.Item key="1">option1</Menu.Item>
                                            <Menu.Item key="2">option2</Menu.Item>
                                            <Menu.Item key="3">option3</Menu.Item>
                                            <Menu.Item key="4">option4</Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="sub2" title="subnav 2">
                                            <Menu.Item key="5">option5</Menu.Item>
                                            <Menu.Item key="6">option6</Menu.Item>
                                            <Menu.Item key="7">option7</Menu.Item>
                                            <Menu.Item key="8">option8</Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="sub3"  title="subnav 3">
                                            <Menu.Item key="9">option9</Menu.Item>
                                            <Menu.Item key="10">option10</Menu.Item>
                                            <Menu.Item key="11">option11</Menu.Item>
                                            <Menu.Item key="12">option12</Menu.Item>
                                        </SubMenu>
                                        </Menu>
                                    </Sider>
                                    <Content style={{ paddingLeft: 20 }}>
                                        {children}
                                    </Content>
                                </content>
                                
                                <Footer style={{
                                    textAlign: 'center',
                                    }}>
                                    <p style={{marginBottom: '0'}}> {siteConfig.CopyrightName} </p>
                                    <p style={{marginBottom: '0'}}> 杭州XXXX技术有限公司 提供技术支持 </p>
                                    <p> {siteConfig.ICPName} </p>
                                </Footer>
                            </Layout>
                        </Layout>
                    </Layout>
                    
                }
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    siteConfig: state.appReducer.siteConfig,
    mainMenu: state.appReducer.mainMenu
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)


