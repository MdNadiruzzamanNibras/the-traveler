import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login'  element ={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
