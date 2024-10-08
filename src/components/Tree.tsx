import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { TreeItem } from "@/types/types";
import styles from './Tree.module.css';

type Props = {
	node: TreeItem
};

export const Tree = ({ node }: Props) => {
	const [state, setState] = useState(false);

	const handleClick = () => {
		setState(!state);
	};



const renderDocumentItem = (node: TreeItem) => {
	if (node.type === 'file') {
		return <button>
				<FontAwesomeIcon icon={faFile} style={{ color: "#725db1" }} />
				<span style={{color: "#725db1"}}> {node.name}</span>
			</button>
	}
	return <button onClick={handleClick}>
				{state ? (
					<FontAwesomeIcon icon={faFolderOpen} style={{ color: "#725db1" }} />
				) : (
					<FontAwesomeIcon icon={faFolder} style={{ color: "#725db1" }} />
				)}
				<span style={{color: "#725db1"}}> {node.name}</span>
			</button>
	
}

	return (

		<ul className={styles['tree-list']} >
			{renderDocumentItem(node)}
			{node.children && node.children.length > 0 && state &&  (
				<li>
					{node.children.map((childNode) => (
						<Tree key={childNode.name} node={childNode} />
					))}
				</li>
			)}
		</ul>
	);
};
