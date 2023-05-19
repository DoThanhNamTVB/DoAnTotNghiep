import authReducer from './authReducer';
import userReducer from './userReducer';
import managerAdminReducer from './managerAdminReducer';
import managerUserReducer from './managerUserReducer';
import managerCategoryReducer from './managerCategoryReducer';
import managerProductReducer from './managerProductReducer';
import managerColorReducer from './managerColorReducer';
import managerProductColorReducer from './managerProductColorReducer';
import managerCartReducer from './managerCartReducer';
import settingReducer from './settingReducer';
import orderReducer from './managerOrderReduce';
import managerProductFavourite from './managerProductFavouriteReducer';

import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';
import chartReducer from './chartReducer';

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token', 'role'],
};

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,
    managerAdmin: managerAdminReducer,
    managerUser: managerUserReducer,
    managerCategory: managerCategoryReducer,
    managerColor: managerColorReducer,
    managerProduct: managerProductReducer,
    managerProductColor: managerProductColorReducer,
    managerCart: managerCartReducer,
    setting: settingReducer,
    managerOrder: orderReducer,
    managerProductFavourite: managerProductFavourite,
    chart: chartReducer,
});

export default rootReducer;
