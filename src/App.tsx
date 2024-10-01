import './App.css'
import { Tree } from './components/Tree/Tree';

interface treeProp{
  data: IntrinsicAttributes & object;
}

function App() {

  const docsTree = {
      type: 'folder',
      name: 'src',
      children: [
        {
          type: 'file',
          name: 'app.tsx',
        },
        {
          type: 'folder',
          name: 'components',
          children: [
            {
              type: 'folder',
              name: 'pages',
              children: [
                {
                  type: 'file',
                  name: 'interface.ts'
                },
              ]
            } 
          ]
        },
        {
          type: 'folder',
          name: 'ui',
          children: [],
        },
      ]     
    };

  return (
    <div className='documents-list'>
      <Tree data={docsTree} />
    </div>
  )
}

export default App


