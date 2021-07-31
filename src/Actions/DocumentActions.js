import * as actionTypes from './ActionTypes'

const {v4:uuid4} = require('uuid');

export const setSkinCd = (skinCd) => {
    let id = uuid4();
    return { type:actionTypes.SET_SKIN,document:{skinCd:skinCd,id:id}}
}

export const updateSkinCd = (skinCd) => {
    return {type:actionTypes.UPDATE_SKIN,document:{skinCd:skinCd}}
}
