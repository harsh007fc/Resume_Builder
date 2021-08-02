import * as actionsTypes from './ActionTypes'


export const signInRequest = () => {
    return {
        type:actionsTypes.SIGN_IN_REQUEST
    }
}

export const signInSuccess = () => {
    return {
        type:actionsTypes.SIGN_IN_SUCCESS
    }
}

export const signInFailed = (error) => {
    return {
        type:actionsTypes.SIGN_IN_FAILED,
        error:error
    }
}


export const removeError = () => {
    return {type:actionsTypes.REMOVE_ERROR}
}

export const signIn = (userData) => {
    return async(dispatch,{getFirebase,getFirestore})=>{
        dispatch(signInRequest())
        const firebase = getFirebase();
        try{
            let data = await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password);
            dispatch(signInSuccess());
        }
        catch(error){
            dispatch(signInFailed(error));
            setTimeout(() => {
                dispatch(removeError())
            }, 2000);
        }
    }
}

export const registerRequest = () => {
    return{
        type:actionsTypes.REGISTER_REQUEST
    }
}
export const registerSuccess = () => {
    return{
        type:actionsTypes.REGISTER_SUCCESS
    }
}
export const registerFailed = (error) => {
    return{
        type:actionsTypes.REGISTER_FAILED,
        error:error
    }
}

export const register = (userData) => {
    return(dispatch,{getFirebase,getFirestore}) => {

        dispatch(registerRequest());
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password).then(async(data)=>{
            const res = await firestore.collection('users').doc(data.user.uid).set({
                email:userData.email,
                resumeIds:[]
            });
            dispatch(registerSuccess());
        }).catch((error)=>{dispatch(registerFailed(error));
            setTimeout(() => {
                dispatch(removeError())
            }, 2000);
        })
    }
}

export const signout = () =>{
    return(dispatch,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:actionsTypes.SIGN_OUT})
        }).catch((error)=>{
            dispatch({type:actionsTypes.SIGN_OUT_FAILED,error:error})
        })
    }
}