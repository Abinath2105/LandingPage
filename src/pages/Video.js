import React from 'react';
import video from './../../src/assets/video/video.mp4'

const Video = () => {
  return (
    <div className="video">
      <video className="back-video" autoPlay loop muted>
        <source src={video}type="video/mp4" />
        
      </video>
      
      
      <div className="video-content">
          <h1>
          <br/></h1>
            <h1>A better learning starts here</h1>
            <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
  
  );
};

export default Video;