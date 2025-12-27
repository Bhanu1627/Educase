import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
