import { getBishopMoves, getKingMoves, getKnightMoves, getPawnCaptures, getPawnMoves, getQueenMoves, getRookMoves } from "./get-moves"

const arbiter = {
    getRegularMoves: function({position, prevPosition, piece, rank, file}) {
        if(piece.endsWith('rook')) {
            return getRookMoves({position, piece, rank, file})
        }
        if(piece.endsWith('knight')) {
            return getKnightMoves({position, rank, file})    
        }
        if(piece.endsWith('bishop')) {
            return getBishopMoves({position, piece, rank, file})
        }
        if(piece.endsWith('queen')) {
            return getQueenMoves({position, piece, rank, file})
        }
        if(piece.endsWith('king')) {
            return getKingMoves({position, piece, rank, file})
        }
        if(piece.endsWith('pawn')) {
            return getPawnMoves({position, piece, rank, file})
        }
    },
    getValidMoves: function({position, prevPosition, piece, rank, file}) {
        let moves = this.getRegularMoves({position, prevPosition, piece, rank, file})
        if(piece.endsWith('pawn')) {
             moves = [
                ...moves, 
                ...getPawnCaptures({position, prevPosition, piece, rank, file})
             ]
        }

        return moves
    }
}

export default arbiter