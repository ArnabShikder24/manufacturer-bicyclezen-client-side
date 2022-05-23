import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navber from './components/Navber/Navber';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>        
      </Routes>
    </div>
  );
}

export default App;
