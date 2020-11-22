// import {ADD_TO_CART,  CHECKOUT_REQUEST, CHECKOUT_SUCCESS , CHECKOUT_FAILURE, RECEIVE_PRODUCTS} from './cartActionTypes'

import * as types from './cartActionTypes'

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
  })

const addToCart = productId => ({
type: types.ADD_TO_CART,
productId
})

