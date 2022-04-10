
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import RecaureAuth from './components/RecaureAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RecaureAuth>
            <Inventory />
          </RecaureAuth>
        }></Route>
        <Route path='/shipment' element={
          <RecaureAuth>
            <Shipment />
          </RecaureAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
