import arbiter from "../../arbiter/arbiter"
import { useAppContext } from "../../context/context"
import { generateCandidateMoves } from "../../reducer/actions/move"

function Piece ({file, rank, piece}) {

    const {appState, dispatch} = useAppContext()
    const {turn, position} = appState
    const currentPosition = position[position.length - 1]

    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`)
        setTimeout(() => {
            e.target.style.display = 'none'
        }, 0)

        if(turn === piece.split('-')[0]) {
            const candidateMoves = arbiter.getRegularMoves({position: currentPosition, piece, rank, file})
            dispatch(generateCandidateMoves({candidateMoves}))
        }

    }
    return (
        <div 
            className={`piece ${piece} p-${file}${rank}`} 
            onDragStart={onDragStart}
            onDragEnd={(e) => e.target.style.display = 'block'}
            draggable 
        />
    )
}

export default Piece