import {combineReducers} from 'redux'
import cart from './cart/cartReducers'
import {token, setCredential} from './user/userReducers'

export const rootReducer = combineReducers({
    cart,
    token,
    credetials : setCredential
   
})