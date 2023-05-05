import authReducer from './authReducer';
import userReducer from './userReducer';
import managerAdminReducer from './managerAdminReducer';
import managerUserReducer from './managerUserReducer';
import managerCategoryReducer from './managerCategoryReducer';
import managerProductReducer from './managerProductReducer';
import managerColorReducer from './managerColorReducer';
import managerProductColorReducer from './managerProductColorReducer';
import managerCartReducer from './managerCartReducer';

import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token'],
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
});

export default rootReducer;
