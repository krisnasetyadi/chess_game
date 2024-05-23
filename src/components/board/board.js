import Ranks from './bits/ranks'
import Files from './bits/files'
import './board.css'
import Pieces from '../pieces/pieces'
import { useAppContext } from '../../context/context'

const Board = () => {

    const ranks = Array(8).fill().map((_, i) => 8 - i)
    const files = Array(8).fill().map((_, i) => i + 1)
    const {appState} = useAppContext()
    const currentPosition = appState.position[appState.position.length - 1]

    const getClassName  = (i, j) => {
        let className = 'tile '
        className += (i + j) % 2 === 0 ? 'tile--dark' : 'tile--light'

        if(appState.candidateMoves.find(move => move[0] === i && move[1] === j )) {
            if(currentPosition[i][j]) {
                className += ' attacking'
            } else {
                className += ' highlight'
            }
        }
        return className
    }
    
    return(
        <div className='board'>
            <Ranks ranks={ranks} />
            <div className='tiles'>
                {ranks.map((rank, i) => 
                    files.map((file, j) => 
                         (
                            <div key={file + '-' + rank} className={getClassName(7-i, j)} >
                                {/* {rank} {file} */}
                            </div>
                        )
                    )
                )}

            </div>
            <Pieces />
          
            <Files files={files} />
        </div>
    )
}

export default Board