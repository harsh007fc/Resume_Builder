import initialState from './InitialState.json'
import * as actionTypes from '../Actions/ActionTypes'

export default function documentReducer(state=initialState.document,action){
    switch (action.type) {
        case actionTypes.SET_SKIN:
            return {...state,id:action.document.id,skinCd:action.document.skinCd}
            break;
        case actionTypes.UPDATE_SKIN:
            return {...state,skinCd:action.document.skinCd}
            break; 
        default:
            return state
    }
}