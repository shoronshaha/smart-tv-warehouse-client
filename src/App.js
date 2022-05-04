import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddItems from './Components/AddItems/AddItems';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AllManageItem from './Components/ManageItems/AllManageItem/AllManageItem';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import ItemDetails from './Components/ItemDetails/ItemDetails';

function App() {

  return (

    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/manageItems' element={<AllManageItem></AllManageItem>}></Route>
        <Route path='/item/:itemId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
