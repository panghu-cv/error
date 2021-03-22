import {HomeOutlined,UserSwitchOutlined,CopyrightOutlined,CloudSyncOutlined,ControlOutlined,CrownOutlined} from '@ant-design/icons'
export default  [
    { path: '/', component: '@/pages/home/index',name:'首页',icon:'HomeOutlined' },
    { path: '/user', name:'用户管理',icon:'UserSwitchOutlined' , routes: [
      {
        path: '/user/list',
        component: '@/pages/user-manger/UserList.tsx',
        name: '用户列表'
      }
    ] },
    { path: '/root', name:'权限管理',icon:'CopyrightOutlined' , routes: [
      {
        path: '/root/role',
        component: '@/pages/root-manger/RoleList.tsx',
        name: '角色列表'
      },
      {
        path: '/root/list',
        component: '@/pages/root-manger/RootList.tsx',
        name: '权限列表'
      },
    ] },
    { path: '/good', name:'商品管理',icon:'CloudSyncOutlined' , routes: [
      {
        path: '/good/list',
        component: '@/pages/good-manger/GoodList.tsx',
        name: '商品列表'
      },
      {
        path: '/good/props',
        component: '@/pages/good-manger/CateProps.tsx',
        name: '分类参数'
      },
      {
        path: '/good/Cate',
        component: '@/pages/good-manger/GoodCate.tsx',
        name: '商品分类'
      }
    ] },
    { path: '/order', name:'订单管理',icon:'ControlOutlined' , routes: [
      {
        path: '/order/list',
        component: '@/pages/order-manger/OrderList.tsx',
        name: '订单列表'
      }
    ] },
    { path: '/data', name:'数据统计',icon:'CrownOutlined' , routes: [
      {
        path: '/data/chart',
        component: '@/pages/data-manger/DataChart.tsx',
        name: '数据报表'
      }
    ] },
    {
      path: '/login',
      component: '@/pages/login/Login.tsx',
           // 不展示顶栏
           headerRender: false,
           // 不展示页脚
           footerRender: false,
           // 不展示菜单
           menuRender: false,
           // 不展示菜单顶栏
           menuHeaderRender: false,
    
    },
    { 
      // 页面不存在  跳转404
      component: '@/pages/not-found/index.tsx',

    }

  ]