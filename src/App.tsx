
import './App.css'
import Folder from './components/Folder/Folder'

function App() {

  const documentsList = [
    {
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
    }
  ]


  return (
    <>
     <Folder/>
    </>
  )
}

export default App
