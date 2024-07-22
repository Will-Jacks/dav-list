import './App.css';
import DavCreator from './components/DavCreator/DavCreator.jsx';
import RenderDavCriada from './components/RenderDav/RenderDavCriada.jsx';
import RenderDavFaturada from './components/RenderDav/RenderDavFaturada.jsx';
import { DavProvider } from './context/DavContext.jsx';
function App() {

  function clearLocalStorage() {
    if(confirm('Você tem certeza que deseja apagar TUDO?')){
      localStorage.clear();
      window.location.reload();
    }

  }

  return (
    <>
      <DavProvider>
        <DavCreator />
        <button onClick={()=> clearLocalStorage()}>Limpar tudo</button>
        
        <div className='rendered-davs-container'>
          <RenderDavFaturada />
          <RenderDavCriada />
        </div>


      </DavProvider>
    </>
  )
}

export default App
