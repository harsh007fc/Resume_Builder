import * as actionTypes from './ActionTypes'

export const add = (educationSection) => {
    return {type:actionTypes.ADD_EDUCATION,educationSection:educationSection}
}



export const update = (educationSection) => {
    return {type:actionTypes.UPDATE_EDUCATION,contaceducationSectiontSection:educationSection}
}