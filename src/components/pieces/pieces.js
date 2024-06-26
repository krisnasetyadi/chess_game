import './pieces.css'
import Piece from './piece'
import { useRef } from 'react'
import { copyPosition } from '../../helper'
import { useAppContext } from '../../context/context'
import { clearCandidates, makeNewMove } from '../../reducer/actions/move'

function Pieces () {
    const ref = useRef()
    const { appState, dispatch } = useAppContext()
    // get the last position from the state
    const currentPosition = appState.position[appState.position.length - 1]
    // const [state, setState] = useState(createPosition())

    const calculateCoords = (e) => {
        const { width, left, top } = ref.current.getBoundingClientRect()
        const size = width / 8
        const y = Math.floor((e.clientX - left) / size)
        const x = 7 - Math.floor((e.clientY - top) / size)

        return {x, y}
    }
  
    const onDrop  = (e) => {
        const newPosition = copyPosition(currentPosition)
        const {x, y} = calculateCoords(e)

        const [piece, rank, file] = e.dataTransfer.getData('text/plain').split(',')

        if(appState.candidateMoves.find(m => m[0] === x && m[1] === y)) {
            // en passant capture
            if(piece.endsWith('pawn') && !newPosition[x][y] && y !== file && x !== rank) {
              newPosition[rank][y] = ''
            }
            newPosition[rank][file] = ''
            newPosition[x][y] = piece
            // setState(newPosition)
            dispatch(makeNewMove({newPosition}))
        }

        dispatch(clearCandidates())
    }

    const onDragOver = (e) => {
        e.preventDefault()
    }

    return (
        <div 
            ref={ref}
            className='pieces'
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            
            {currentPosition.map((r, rank) => 
                r.map((f, file) => {

                    return currentPosition[rank][file] ? <Piece key={rank+'-'+ file} rank={rank} file={file} piece={currentPosition[rank][file]}/> : null
                })
            )}
        </div>
    )
}

export default Pieces