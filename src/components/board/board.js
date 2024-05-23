import Ranks from './bits/ranks'
import Files from './bits/files'
import './board.css'
import Pieces from '../pieces/pieces'

const Board = () => {

    const getClassName  = (i, j) => {
        let className = 'tile '
        className += (i + j) % 2 === 0 ? 'tile--dark' : 'tile--light'
        return className
    }
    const ranks = Array(8).fill().map((_, i) => 8 - i)
    const files = Array(8).fill().map((_, i) => i + 1)

    console.log('ranks', ranks)
    console.log('files', files)
    return(
        <div className='board'>
            <Ranks ranks={ranks} />
            <div className='tiles'>
                {ranks.map((rank, i) => 
                    files.map((file, j) => 
                         (
                            <div key={file + '-' + rank} className={getClassName(9-i, j)} >
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