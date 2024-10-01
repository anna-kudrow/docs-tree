import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';



export const TreeNode = ({ node }) => {
    const [state, setState] = useState(false);
    
    const handleClick = () => {
        setState(!state);
    }
    const file = <button> <FontAwesomeIcon icon={ faFile } style={{color: "#725db1"}} /></button>;
    
    const folder = <button onClick={handleClick}>
            {state ? <FontAwesomeIcon icon={faFolderOpen} style={{color: "#725db1"}} /> : <FontAwesomeIcon icon={faFolder} style={{color: "#725db1",}} />}
        </button>

  return (
    <li>
        {node.type === 'file' 
        ? {file} 
        : {folder}};
        {node.children && node.children.length > 0 && (
            <ul>
                {node.children.map((childNode) => (
                    <TreeNode key={childNode.name} node={childNode} />
                ))}
            </ul>
        )}
    </li>
  )
};
