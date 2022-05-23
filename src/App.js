import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>     
        <Route path='/login' element={<Login></Login>}></Route>     
        <Route path='/signup' element={<SignUp></SignUp>}></Route>     
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        ></ToastContainer>
    </div>
  );
}

export default App;
