import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './components/Purchase/Purchase';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>     
        <Route path='/purchase/:productId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>     
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='dashaddreview' element={<AddReview></AddReview>}></Route>
          <Route path='dashprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>     
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
