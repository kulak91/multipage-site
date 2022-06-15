import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Auth from './pages/Auth';
function App() {
 
  return (
    <div className="App">
           
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>     
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
            <Route path='articles' element={<Articles/>}/>

              <Route path="articles/:id" element={<Article/>}/>
            
        </Route>

        <Route path='/auth' element={<Auth/>}/>
      </Routes>
     
    </div>
  );
}

export default App
