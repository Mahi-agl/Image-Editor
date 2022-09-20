import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ImageEditor from './components/ImageEditor';
import Header from './components/Header';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Home/>} path="/home"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<SignUp/>} path="/signup"/>
      <Route element={<ImageEditor/>} path="/editor"/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
