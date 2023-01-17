import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';

function App() {
  return (
    <>
  <Navbar/>
  <Home/>
  <Footer/>
    </>
  );
}

export default App;
