import './App.css';
//import './css/1.css'
import Home from './page/home';
import Eaproduct from './page/EaProduct';
import About from './page/About';
import Signin from './page/Signin';
import UserHome from './page/UserHome';
import Admin from './page/Admin';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/"element={<Home/>} ></Route>
        <Route path="/About" element={ <About/>} ></Route>
        <Route path="/Eaproduct" element={<Eaproduct/>} ></Route>
        <Route path="/Signin" element={<Signin/>} ></Route>
        <Route path="/UserHome" element={<UserHome/>} ></Route>
        <Route path="/Admin" element={<Admin/>} ></Route>
      </Routes> 
    </div>


  );
}

export default App;
