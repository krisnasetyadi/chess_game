import { getCharacter } from '../../../helper'
import './files.css'

function Files ({files}) {
    return (
        <div className="files">
        {files.map(file => <span key={file}>{getCharacter(file - 1)}</span>)}
    </div>
    )
}

export default Files