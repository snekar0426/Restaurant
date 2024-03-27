import './App.scss';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import OTPPage from './OTPPage';
import ResetPassword from './ResetPassword';


function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <div className='head'>
      <Routes> 

     <Route path='/login' element={<Login />} /> 
     <Route path='/register' element={<Register />} /> 
     <Route path='/forgotpassword' element={<ForgotPassword />} />
     <Route path='/otp' element={<OTPPage />} />
     <Route path='/resetpassword' element={<ResetPassword />} />

    </Routes></div>

      </BrowserRouter>
    </div>
  );
}

export default App;
