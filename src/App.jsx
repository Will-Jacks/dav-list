import './App.css'
import DavCreator from './components/DavCreator/DavCreator'
import RenderDav from './components/RenderDav/RenderDav'
import { DavProvider } from './context/DavContext'

function App() {

  return (
    <>
      <DavProvider>
        <DavCreator />
        <RenderDav />
      </DavProvider>
    </>
  )
}

export default App
