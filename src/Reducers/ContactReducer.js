import initialState from './InitialState.json'
import * as actionTypes from '../Actions/ActionTypes'

export default function contactReducer(state=initialState.contactSection,action){
    switch (action.type) {
        case actionTypes.ADD_CONTACT:
            return{...action.contactSection} ///yeh state pehle null hai isliye spread state ki zrurat nhi hai yahaan
            break;
        case actionTypes.UPDATE_CONTACT:
            return{...action.contactSection}
            break;
        
        default:
            return state;
    }
}