import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { SideNav } from './components/SideNav';
import { ForgotPassword } from './components/ForgotPassword';


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
     <Route exact path={"/"} element={<Login />} />
      <Route exact path="/register" element={<Register/>} /> 
      <Route exact path="/forgot-password" element={<ForgotPassword/>} /> 
      <Route exact path="/dashboard" element={ <>
              <Header />
              <SideNav />
              <Dashboard />
              <Footer />
            </>} /> 
     </Routes>
      </BrowserRouter>
  );
}

export default App;
