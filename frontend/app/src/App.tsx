import './App.css'
import chamada from './scripts/api'

function App() {

  return (
    <>
      <h1>API</h1>
      <form onSubmit={chamada}>
        <input type="text" name='nomehtml' id='idnome' />
        <br/>
        <input type="text" name='emailhtml' id='idemail'/>
        <br/>
        <input type="text" name='msghtml'  id='idmsg'/>
        <br/>
        <button type='submit'>ENVIAR</button>
      </form>
      
    </>
  )
}

export default App
