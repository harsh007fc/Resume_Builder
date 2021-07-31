import * as actionTypes from './ActionTypes'

const {v4:uuid4} = require('uuid');

export const setSkinCd = () => {
    let id = uuid4();
    return { type:actionTypes.SET_SKIN,document:{skinCd:skinCd,id:id}}
}

export const updateSkinCd = () => {
    return {type:actionTypes.UPDATE_SKIN,document:{skinCd:skinCd}}
}
