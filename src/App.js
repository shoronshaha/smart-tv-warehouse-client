import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddItems from './Components/AddItems/AddItems';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AllManageItem from './Components/ManageItems/AllManageItem/AllManageItem';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import { ToastContainer } from 'react-toastify';
import MyItems from './Components/MyItems/MyItems';


function App() {

  return (

    <div className='bg-pink-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <AllManageItem></AllManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/item/:itemId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />} />

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
