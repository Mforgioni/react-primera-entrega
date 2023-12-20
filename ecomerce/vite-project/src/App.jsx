
import ItenContainer from './component/itemContainer/itemcontainer'
import NavBar from './component/navbar/navbar'
import './App.css'


function App() {
 
  return (
      <div className='App'>
         <NavBar />
         <ItenContainer greeting= {'¡¡¡Bienvenidos!!!'} />
      </div>
  )
}

export default App
