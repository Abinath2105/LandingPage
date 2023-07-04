import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Coursedisplay from './pages/Coursedisplay';
import Topcourse from './pages/Topcourse';
import Teacher from './pages/Teacher';
import Testimonial from './pages/Testimonial';
import Ctc from './pages/Ctc';
import Footer from './pages/Footer';
import Video from './pages/Video';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
  //  <>
  //   <Router>
  //    <Routes>
  //     <Route path='/Navbar' element={<Navbar/>}/>
  //     <Route path='/About' element={<About/>}/>
  //     <Route path='/Coursedisplay' element={<Coursedisplay/>}/>
  //     <Route path='/Topcourse' element={<Topcourse/>}/>
  //     <Route path='/Teacher' element={<Teacher/>}/>
  //     <Route path='/Testimonial' element={<Testimonial/>}/>
  //     <Route path='/Ctc' element={<Ctc/>}/>
  //     <Route path='/Footer' element={<Footer/>}/> 
  //     <Route path='/Video' element={<Video/>}/>
  //    </Routes>
  //   </Router>
//  </>
<div>
<Navbar/>
<Video/>
<About/>
<Coursedisplay/>
<Topcourse/>
<Teacher/>
<Testimonial/>
<Ctc/>
<Footer/>
</div>

  );
}

export default App;
