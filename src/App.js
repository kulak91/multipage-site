import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Home />}/>     
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
