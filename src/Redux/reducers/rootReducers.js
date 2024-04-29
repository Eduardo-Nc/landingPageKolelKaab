import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { uiReducer } from './uiReducer';
import { usersReducer } from './usersReducer';
import { rolesReducer } from './rolesReducer';
import { ocupationsReducer } from './ocupationsReducer';
import { modulesReducer } from './modulesReducer';
import { permitsReducer } from './permitsReducer';
import { planReducer } from './planReducer';
import { contractsReducer } from './contractsReducer';
import { notificationReducer } from './notificationReducer';
import { propiedadesReducer } from './propiedadesReducer';
import { blogsReducer } from './blogsReducer';
import { desarrollosReducer } from './desarrollosReducer';
import { loteReducer } from './loteReducer';



export const rootReducers = combineReducers({
    login: loginReducer,
    menu: uiReducer,
    users: usersReducer,
    permits: permitsReducer,
    roles: rolesReducer,
    ocupation: ocupationsReducer,
    module: modulesReducer,
    plans: planReducer,
    contract: contractsReducer,
    notifications: notificationReducer,
    propiedades: propiedadesReducer,
    blogs: blogsReducer,
    desarrollos: desarrollosReducer,
    lotes: loteReducer,

})

