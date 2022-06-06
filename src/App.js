import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';


function App() {
  return (
    <div className="App">
           
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>     
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App
