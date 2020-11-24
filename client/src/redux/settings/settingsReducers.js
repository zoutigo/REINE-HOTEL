import {OPEN_BURGER_MENU} from './settingsActionTypes'

const initialState = {
    burgerMenuIsOpened : false
}

export const settingsReducers = (state=initialState, action)=> {
    switch (action.type) {
        case OPEN_BURGER_MENU:
            return {
                ...state,
                burgerMenuIsOpened : !state.burgerMenuIsOpened
            }
                
        default:
            return initialState
    }
}