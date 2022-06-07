import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Article from './pages/Article';

function App() {
  let {id} = useParams()
  return (
    <div className="App">
           
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>     
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
            <Route path="articles" >
              <Route path=":id" element={<Article/>}/>
            </Route>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App
