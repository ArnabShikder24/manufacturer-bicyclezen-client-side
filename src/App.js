import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
