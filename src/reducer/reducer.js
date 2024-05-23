import actionTypes from "./action-types";

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.NEW_MOVE:
        let { turn, position } = state
        turn = turn === 'white' ? 'black' : 'white'
        position = [...position,  action.payload.newPosition]
        return {
            ...state,
            turn,
            position
        };
        case actionTypes.GENERATE_CANDIDATE_MOVES:
        return {
            ...state,
            candidateMoves: action.payload.candidateMoves
        };
        case actionTypes.CLEAR_CANDIDATES:
            return {
                ...state,
                candidateMoves: []
            }
        default:
        return state;
    }
}