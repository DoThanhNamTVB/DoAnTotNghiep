const routes = {
    home: '/',
    contact: '/contact',
    store: '/store',
    blog: '/blog',
    casioPage: '/casio',
    casioEdificePage: '/casio-edifice',
    casioBabyGPage: '/casio-baby-g',
    casioElectronicGPage: '/casio-electronic',
    casioVintagePage: '/casio-vintage',

    cartPage: '/cart',
    checkoutstep1Page: '/checkoutstep1',
    checkoutstep2Page: '/checkoutstep2',

    loginPage: '/login',
    registerPage: '/register',

    productDetailPage: '/product-detail',
    managerInfoPage: '/manager-info',

    //admin
    admin: '/admin',
    adminLogin: '/admin/login',
    manager: '/admin/manager',

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
    categoryEdit: '/admin/catagory/edit/:id',

    //product manager
    productManagerAdd: '/product-manager-add',
    imgProduct: '/product-manager-add/img-product',
    productManagerEdit: '/product-manager-edit',
    productManagerEditDetail: '/product-manager-edit-detail',

    //order manager
    orderManager: '/admin/order-manager',
};

export default routes;
