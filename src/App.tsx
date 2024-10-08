import "./App.css";
import { Tree } from "./components/Tree";
import { docsTree } from "./lib/data";

function App() {
	return (
		<div className="documents-list">
			<Tree node={docsTree} />
		</div>
	);
}

export default App;
