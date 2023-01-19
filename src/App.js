import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    </>
  );
}

export default App;
