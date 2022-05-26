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
import ManageAdmin from './Pages/Dashboard/ManageAdmin';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>     
        <Route path='/purchase/:productId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>     
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
          <Route path='dashaddreview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:orderId' element={<Payment></Payment>}></Route>
          <Route path='dashadmin' element={<RequireAdmin><ManageAdmin></ManageAdmin></RequireAdmin>}></Route>
          <Route path='dashaddproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='dashproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
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
