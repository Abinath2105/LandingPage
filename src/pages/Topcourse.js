import React from "react";
import img1 from './../assets/images/topcourse1.jpg'
import img2 from './../assets/images/topcourse2.jpg'
import img3 from './../assets/images/topcourse3.jpg'
import img4 from './../assets/images/topcourse4.jpg'
import img5 from './../assets/images/topcourse5.jpg'
import img6 from './../assets/images/phyton.jpg'
import img9 from './../assets/images/departmets-vector.svg'
function Topcourse(){
    return(
<div class="departments">
        <div class="container">

          <img src={img9} alt="Vector line art" class="vector-line"/>

          <h2 class="departments-title">We Have Most of Popular Courses</h2>

          <ul class="departments-list">

            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img1} alt="Artificial Intelligence"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Artificial Intelligence</h3>
                </a>

                <p class="card-text">
                  Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications!
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img2} alt="Machine Learning"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Machine Learning</h3>
                </a>

                <p class="card-text">
                  Learn Data Science, Data Analysis, Machine Learning (Artificial Intelligence) and Python with Tensorflow, Pandas & more!
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>
            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img3} alt="Big Data"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Big Data</h3>
                </a>

                <p class="card-text">
                  Big data certifications can help you go after more diverse roles than specific data science jobs.
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>
            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img4} alt="Cloud Computing"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title"> Cloud Computing</h3>
                </a>

                <p class="card-text">
                  Cloud computing is one of the top IT fields that is experiencing an emerging trend in 2023. 
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>
            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img5} alt="Civil Engineering"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Blockchain</h3>
                </a>

                <p class="card-text">
                  The syllabus of blockchain development certifications comprises Ethereum, Composer, Javascript, NodeJS, Solidity, etc. </p>
                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>


            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img6} alt="Phyton"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Phyton</h3>
                </a>
                       
                <p class="card-text">
                  Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

          <button class="btn btn-primary">View All Courses</button>

        </div>
      </div>

    );
}
export default Topcourse;