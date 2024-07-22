import './App.css';
import DavCreator from './components/DavCreator/DavCreator.jsx';
import Header from './components/Header/Header.jsx';
import RenderDavCriada from './components/RenderDav/RenderDavCriada.jsx';
import RenderDavFaturada from './components/RenderDav/RenderDavFaturada.jsx';
import { DavProvider } from './context/DavContext.jsx';
function App() {

  return (
    <>
      <Header />
      <DavProvider>
        <DavCreator />

        
        <div className='rendered-davs-container'>
          <RenderDavFaturada />
          <RenderDavCriada />
        </div>


      </DavProvider>
    </>
  )
}

export default App
