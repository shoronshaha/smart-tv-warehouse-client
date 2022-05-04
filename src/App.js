import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AllManageItem from './Components/ManageItems/AllManageItem/AllManageItem';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {

  return (

    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageItems' element={<AllManageItem></AllManageItem>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
