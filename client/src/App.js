
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './pages/AboutPage';
import CreateCharacter from './components/CreateCharacter';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Layout/Header'
import Characters from './components/Characters';
import SingleCharacter from './components/SingleCharacter';

import CharactersState from './context/Characters/CharactersState';

function App() {
  return (
    <>

    <CharactersState>

     <BrowserRouter>

      <Header/>

       <Routes>
       {/*rutas privadas */}
       {/*seccion de mi perfil */}
       {/*rutas de autenticacion */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
        {/*rutas de publicas */}
        <Route path='/' element={<HomePage/>}/>
        <Route exact path="/characters/:id" element={<SingleCharacter/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/create' element={<CreateCharacter/>}/>
        <Route path='/characters' element={<Characters/>}/>        
       </Routes>

     </BrowserRouter>

     </CharactersState>

    </>
  );
}

export default App;
