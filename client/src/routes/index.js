// import layout
import HeaderFooterLayout from '~/components/Layout/HeaderFooter';

//import pages

import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Store from '~/pages/Store';
import Cart from '~/pages/Cart';

//No login required to access the route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact, layout: HeaderFooterLayout },
    { path: '/store', component: Store, layout: null },
    { path: '/cart', component: Cart, layout: HeaderFooterLayout },
];

//Login required to access the route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
