import React from "react";
import img from './../assets/images/cta-vector.svg'

function Ctc(){
    return(
        <div>
<div class="cta">
        <div class="container">

          <div class="title-wrapper">

            <h2 class="h2 cta-title">
              <span>Create Free Account & Get Register</span>

              <img src={img}alt="Vector arrow art" class="vector-line"/>
            </h2>

            <button class="btn btn-primary">Register Now</button>

          </div>

          <div class="cta-banner"></div>

        </div>
      </div>
      </div>
    );
}
export default Ctc;