const routes = {
    home: '/',
    contact: '/contact',
    store: '/store',
    blog: '/blog',
    categoryPage: '/:categorySlug',
    categoryLimit: '/danhmuc',
    searchAdvanced: '/search-advanced',
    historyOrder: '/history-order',
    historyOrderDetail: '/history-order/detail/:orderId',

    cartPage: '/cart',
    checkoutstep1Page: '/checkoutstep1',
    checkoutstep2Page: '/checkoutstep2',

    loginPage: '/login',
    registerPage: '/register',

    productDetailPage: '/:categorySlug/product-detail/:productId',
    managerInfoPage: '/manager-info',
    changePass: '/change-password',

    //admin
    admin: '/admin',
    adminLogin: '/admin/login',
    manager: '/admin/manager',
    setting: '/admin/settingInfo',

    //admin manager (account admin)

    adminCreateAccount: '/admin/create',
    adminEditAccount: '/admin/:id',
    adminManagerAccount: '/admin/account',

    //user manager account and status
    userManager: '/admin/user-manager',
    userDetail: '/admin/user-manager/:id',

    //catagory manager
    categoryAdd: '/admin/catagory/add',
    categoryManager: '/admin/catagory',
    categoryEdit: '/admin/category/edit/:id',

    //color manager
    colorAdd: '/admin/color/add',
    colorManager: '/admin/color',
    colorEdit: '/admin/color/edit/:id',

    //product manager
    productManagerAdd: '/admin/product/add',
    imgProduct: '/admin/product/img',
    productManagerEdit: '/admin/product',
    productManagerEditDetail: '/admin/product/edit/:id',

    //productColor manager
    productColorAdd: '/admin/productColor/add/:idProduct',
    productColorEdit: '/admin/productColor/edit/:idProduct/:idColor',

    //order manager
    orderComfirming: '/admin/order-confirming',
    orderConfirmed: '/admin/order-confirmed',
    orderSuccess: '/admin/order-success',
    OrderDetail: '/admin/:orderType/:orderId',
    orderCancel: '/admin/order-cancel',
};

export default routes;
