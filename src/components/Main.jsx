import React from 'react';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon, Switch } from 'antd';
import { renderRoutes } from 'react-router-config';

const SubMenu = Menu.SubMenu;
class Sider extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    theme: 'dark',
    current: '1'
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  }
  render() {
    return (
      <div className="clear container-main">
        <div className="fl">
          <Switch
            className="s-btn"
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <br />
          <br />
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 240 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>操作</span></span>}>
              <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/about">购物车</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/topics">购物记录</Link></Menu.Item>
              <Menu.Item key="4">未开放</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        
          {renderRoutes(this.props.route.routes)}
    
           
      </div>
    )
  }
}


export default connect()(Sider)