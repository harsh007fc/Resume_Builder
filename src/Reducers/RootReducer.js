import {combineReducers} from 'redux';
import contactReducer from './ContactReducer';
import educationReducer from './EducationReducer';
import documentReducer from './DocumentReducers';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    contactSection:contactReducer,
    educationSection:educationReducer,
    documentSection:documentReducer,
})
export default rootReducer;