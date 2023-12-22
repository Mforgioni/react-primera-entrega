
import ItemListConteiner from './component/itemListContainer/itemlistcontainer'
import NavBar from './component/navbar/navbar'
import './App.css'


function App() {
 
  return (
      <div className='App'>
         <NavBar />
         <ItemListConteiner greeting= {'¡¡¡Bienvenidos!!!'} />
      </div>
  )
}

export default App
