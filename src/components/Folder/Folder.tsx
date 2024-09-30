import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

export const Folder = () => {
    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(!state);
    }

    return ( 
        <button onClick={handleClick}>
            {state ? <FontAwesomeIcon icon={faFolderOpen} style={{color: "#725db1"}} /> : <FontAwesomeIcon icon={faFolder} style={{color: "#725db1",}} />}
        </button>
     );
}

export default Folder;