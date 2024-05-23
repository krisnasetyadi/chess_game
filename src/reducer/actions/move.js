import actionTypes from "../action-types"

export const makeNewMove = ({newPosition}) => {
    return {
        type: actionTypes.NEW_MOVE,
        payload: { newPosition }
    }
}