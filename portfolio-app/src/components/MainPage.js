import React from 'react';
import './MainPage.css';
import About from './About';

function MainPage() {
  return (
    <div className="App">
      <div className="contentWrapper">
        <div className="flexWrapper">
          <div>
          <img 
          style ={{ borderRadius: "50%" }}
          src="https://media.licdn.com/dms/image/C4D03AQEHiT86U6W2xw/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=xHcUhH0gRY7V-QBXEi4CS8qidfI0--TmYCL9_l93bWA" alt=""
          />
          </div>
          <div style={{margin:"auto", fontSize:"60px"}}>
            Michael 
            <br/>
            Yohannes
          </div>
        </div>
        <About />
      </div>
    </div>
  );
}

export default MainPage;