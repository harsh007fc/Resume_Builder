import initialState from './InitialState.json'
import * as actionTypes from '../Actions/ActionTypes'

export default function educationReducer(state=initialState.educationSection,action){
    switch (action.type) {
        case actionTypes.ADD_EDUCATION:
            return{...action.educationSection} ///yeh state pehle null hai isliye spread state ki zrurat nhi hai yahaan
            break;
        case actionTypes.UPDATE_EDUCATION:
            return{...action.educationSection}
            break;
        
        default:
            return state;
    }
}