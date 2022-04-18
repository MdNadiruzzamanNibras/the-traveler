import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import CheckOut from './Component/CheckOut/CheckOut';
import Home from './Component/Home/Home/Home';
import Services from './Component/Home/Service/Services/Services';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import NotFound from './Component/NotFound/NotFound';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path ='/service' element={<Services></Services>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/checkout' element={<RequireAuth>
      <CheckOut></CheckOut>
     </RequireAuth>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login'  element ={<Login></Login>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
