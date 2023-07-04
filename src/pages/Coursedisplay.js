import React from "react";
import img1 from './../assets/images/img1.jpg'
import img2 from './../assets/images/img2.jpg'
import img3 from './../assets/images/img3.png'
import img4 from './../assets/images/img4.jpg'
import img5 from './../assets/images/img5.jpg'
import img6 from './../assets/images/img6.jpg'
import img7 from './../assets/images/img7.png'
import img8 from './../assets/images/img8.jpg'




function Coursedisplay(){
    return(
  
<div className="top-courses">
  <h4 className="subject">Subjects</h4>
  <h2 className="topcourse-title">Explore Top Subjects</h2>
    <div className="flex-container">
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img1} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">AWS Certification</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img2} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Data Science</h4>
              <span>100 Courses</span>
          </a>
      </div> 
         
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img3} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Machine Learning</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img4} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Ethical Hacking</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img5} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Digital Marketing</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img6} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium"> Graphic Design </h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img7} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Deep Learning</h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img8} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Cyber Security</h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      </div>
      <button className="btn btn-primary">Discover More</button>
</div>
      
    );
}
export default Coursedisplay;