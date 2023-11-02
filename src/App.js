import './App.css';
import Top from './components/Top/Top.js'
import Home from './pages/Home/Home.js'
import Single from './pages/Single/Single.js'
import Write from './pages/Write/Write.js'
import Setting from './pages/Setting/Setting.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from './components/context/Context.jsx';

function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
     <BrowserRouter>
      <Top  />
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/register' element = {<Register/>} />
        <Route path ='/login' element = {<Login/>} />
        <Route path ='/write' element = {<Write/>} />
        <Route path ='/setting' element = {<Setting/>} />
        <Route path ='/read/:id' element = {<Single/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
