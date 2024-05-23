import { getBishopMoves, getKnightMoves, getRookMoves } from "./get-moves"

const arbiter = {
    getRegularMoves: function({position, piece, rank, file}) {
        if(piece.endsWith('rook')) {
            return getRookMoves({position, piece, rank, file})
        }
        if(piece.endsWith('knight')) {
            return getKnightMoves({position, rank, file})    
        }
        if(piece.endsWith('bishop')) {
            return getBishopMoves({position, piece, rank, file})
        }
    }
}

export default arbiter