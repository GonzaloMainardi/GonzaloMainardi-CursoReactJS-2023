import React, { useState } from 'react';
import {
  HomeOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  WhatsAppOutlined,
  BarsOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('INICIO', '1', <HomeOutlined />),
  getItem('NOSOTROS', '2', <TeamOutlined />),
  getItem('PRODUCTOS', '3', <BarsOutlined />),
  getItem('CARRITO', '4', <ShoppingCartOutlined />),
  getItem('CONTACTO', '5', <WhatsAppOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
            minWidth: '85vw',

          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              
            }}
          >
          </div>
        </Content>
        <Footer
          style={{
            minWidth: '85vw',
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;