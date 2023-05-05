const routes = {
    home: '/',
    contact: '/contact',
    store: '/store',
    blog: '/blog',
    categoryPage: '/:categorySlug',
    // casioEdificePage: '/casio-edifice',
    // casioBabyGPage: '/casio-baby-g',
    // casioElectronicGPage: '/casio-electronic',
    // casioVintagePage: '/casio-vintage',

    cartPage: '/cart',
    checkoutstep1Page: '/checkoutstep1',
    checkoutstep2Page: '/checkoutstep2',

    loginPage: '/login',
    registerPage: '/register',

    productDetailPage: '/:categorySlug/product-detail/:productId',
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
    categoryEdit: '/admin/category/edit/:id',

    //catagory manager
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
    orderManager: '/admin/order-manager',
};

export default routes;
