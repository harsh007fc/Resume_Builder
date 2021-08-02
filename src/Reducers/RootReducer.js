import {combineReducers} from 'redux';
import contactReducer from './ContactReducer';
import educationReducer from './EducationReducer';
import documentReducer from './DocumentReducers';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import authReducer from './AuthReducer';
import initialState from './InitialState.json'
import * as actionTypes from '../Actions/ActionTypes'


const appReducer = combineReducers({
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    contactSection:contactReducer,
    educationSection:educationReducer,
    document:documentReducer,
    auth:authReducer
})


const rootReducer = (state=initialState,action) =>{
    if(action.type === actionTypes.SIGN_OUT){
        state=undefined;
    }
    return appReducer(state,action)
}
export default rootReducer;