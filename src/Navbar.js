import React from "react";
import logo from './assets/images/learning_and_education.png'
function Navbar(){
    
    return(

    <div className="header" >
    <div className="container">

      <div className="overlay"></div>

      <a href="#" className="logo">
        <img src={logo} alt=""/>
      </a>
      

      <div className="menu-open-btn button" >
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      <nav className="navbar" data-navbar>

        <button className="menu-close-btn" data-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" alt="EduSmart logo"/>
        </a>

        <ul className="navbar-list">

          <li>
            <a href="index.html" className="navbar-link">Home</a>
           
          </li>

          <li>
            <a href="about.html" className="navbar-link">About</a>
          </li>

          <li>
            <a href="course.html" className="navbar-link">Courses</a>
          </li>

          <li>
            <a href="teacher.html" className="navbar-link">Teachers</a>
          </li>
          <li>
            <a href="contact.html" className="navbar-link">Contact</a>
          </li>

        </ul>

        <button className="btn btn-secondary">Get Started</button>

      </nav>

    </div>
  </div>

    );
}
export default Navbar;