import React from 'react';
import Pic1 from './06-thumbnail.jpg';
import peapod from './pepod.png'




const Gallery = () => (
  <div className=" portcontainer" >
  <h1 className="porth1" >Some of Our Work</h1>
    <div className="portfolio " ><img src={peapod} alt="Placeholder" />
    <div className=" port-info">
    <h3>PeaPodTravel</h3>
    <p>A travel blog that focus's on traviling with Kids and Pets.<hr/>
          <a href="http://www.peapodtravel.me" target="_blank" rel="noopener noreferrer" ><button>Visit Site</button></a></p></div></div>
    <div className="portfolio " ><img src={Pic1} alt="Placeholder" />
      <div className=" port-info">
        <h3>TechtoTank</h3>
        <p>My Personal Journey from Tank Welder to Web Developer<hr />
          <a href="http://www.tanktoTech.website" target="_blank" rel="noopener noreferrer" ><button>Visit Site</button></a></p></div></div>
          
    
    
      
      
  </div>
)

export default Gallery