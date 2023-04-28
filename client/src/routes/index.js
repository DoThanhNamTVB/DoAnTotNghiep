//import router config
import routesConfig from '~/config/routes';
// import layout
import HeaderFooterLayout from '~/components/Layout/HeaderFooter';
import { LayoutNone } from '~/components/Layout';
// import DefaultLayout from '~/components/Layout/DefaultLayout';

//import pages

import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Blog from '~/pages/Blog';

//pages of catagory
// import Catagory from '~/pages/Catagory';
import CasioPage from '~/pages/Catagory/Casio';
import CasioEdificePage from '~/pages/Catagory/CasioEdifice';
import CasioElectronicPage from '~/pages/Catagory/CasioElectronic';
import CasioBaByGPage from '~/pages/Catagory/CasioBaByG';
import CasioVintagePage from '~/pages/Catagory/CasioVintage';
import { CheckoutStep1 } from '~/pages/Checkout';
import { CheckoutStep2 } from '~/pages/Checkout';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ProductDetail from '~/pages/ProductDetail';
import UserManagerInfo from '~/pages/UserManagerInfo';
// import FeatureProduct from '~/pages/Catagory/FeatureProduct';

//admin layout
import AdminDefaultLayout from '~/components/Layout/Admin/DefaultLayout';
import AdminLayoutNone from '~/components/Layout/Admin/LayoutNone';
//admin page
import AdminLogin from '~/pages/Admin/AdminLogin';
import Dashboard from '~/pages/Admin/Dashboard';
import Manager from '~/pages/Admin/Manager';
import { AdminManagerAdd, AdminManagerEdit, AdminMangerEditDetail } from '~/pages/Admin/AdminManager';
//user
import UserManager from '~/pages/Admin/UserManager';
import UserDetail from '~/pages/Admin/UserManager/UserDetail';
//catagory
import { CategoryAdd, CategoryManager, CategoryEdit } from '~/pages/Admin/CatagoryManager';
//catagory
import {
    ProductManagerAdd,
    ImgProduct,
    ProductManagerEdit,
    ProductManagerEditDetail,
} from '~/pages/Admin/ProductManager';
//order
import OrderManager from '~/pages/Admin/OrderManager';

//No login required to access the route
const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: HeaderFooterLayout },
    { path: routesConfig.contact, component: Contact, layout: HeaderFooterLayout },
    { path: routesConfig.blog, component: Blog, layout: HeaderFooterLayout },
    { path: routesConfig.casioPage, component: CasioPage },
    { path: routesConfig.casioEdificePage, component: CasioEdificePage },
    { path: routesConfig.casioBabyGPage, component: CasioBaByGPage },
    { path: routesConfig.casioElectronicGPage, component: CasioElectronicPage },
    { path: routesConfig.casioVintagePage, component: CasioVintagePage },

    { path: routesConfig.cartPage, component: Cart, layout: HeaderFooterLayout },
    { path: routesConfig.checkoutstep1Page, component: CheckoutStep1, layout: LayoutNone },
    { path: routesConfig.checkoutstep2Page, component: CheckoutStep2, layout: LayoutNone },

    { path: routesConfig.loginPage, component: Login, layout: HeaderFooterLayout },
    { path: routesConfig.registerPage, component: Register, layout: HeaderFooterLayout },

    { path: routesConfig.productDetailPage, component: ProductDetail, layout: HeaderFooterLayout },
    { path: routesConfig.managerInfoPage, component: UserManagerInfo, layout: HeaderFooterLayout },
];

//Login required to access the route
const privateRoutes = [
    { path: routesConfig.adminLogin, component: AdminLogin, layout: AdminLayoutNone },
    { path: routesConfig.admin, component: Dashboard, layout: AdminDefaultLayout },
    { path: routesConfig.manager, component: Manager, layout: AdminDefaultLayout },

    //admin manager account
    { path: routesConfig.adminCreateAccount, component: AdminManagerAdd, layout: AdminDefaultLayout },
    { path: routesConfig.adminEditAccount, component: AdminMangerEditDetail, layout: AdminDefaultLayout },
    { path: routesConfig.adminManagerAccount, component: AdminManagerEdit, layout: AdminDefaultLayout },

    //user manager account
    { path: routesConfig.userManager, component: UserManager, layout: AdminDefaultLayout },
    { path: routesConfig.userDetail, component: UserDetail, layout: AdminDefaultLayout },

    //catagory manager
    { path: routesConfig.categoryAdd, component: CategoryAdd, layout: AdminDefaultLayout },
    { path: routesConfig.categoryManager, component: CategoryManager, layout: AdminDefaultLayout },
    { path: routesConfig.categoryEdit, component: CategoryEdit, layout: AdminDefaultLayout },

    //product manager
    { path: routesConfig.productManagerAdd, component: ProductManagerAdd, layout: AdminDefaultLayout },
    { path: routesConfig.imgProduct, component: ImgProduct, layout: AdminDefaultLayout },
    { path: routesConfig.productManagerEdit, component: ProductManagerEdit, layout: AdminDefaultLayout },
    { path: routesConfig.productManagerEditDetail, component: ProductManagerEditDetail, layout: AdminDefaultLayout },

    //order
    { path: routesConfig.orderManager, component: OrderManager, layout: AdminDefaultLayout },
];

export { publicRoutes, privateRoutes };
