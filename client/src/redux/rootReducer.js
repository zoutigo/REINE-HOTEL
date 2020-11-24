import {combineReducers} from 'redux'
import cart from './cart/cartReducers'
import {token, setCredential} from './user/userReducers'
import { settingsReducers } from './settings/settingsReducers'

export const rootReducer = combineReducers({
    cart,
    token,
    credentials : setCredential,
    settings : settingsReducers
   
})