import React from 'react';
import './style.css';

const Contact = () => (

     
     <div className="ccontainer">
     <h1 className="brand" ><span>Sites-By-Andrew</span></h1>
     <div className="wrapper" >
     <div className="company-info" >
     <h3>Sites-By-Andrew</h3>
     <ul>
          <li>Riverton ,Utah</li>
          <li>801-889-3943</li>
          <li><a href="mailto:andrew.smith@sitesbyandrew.me" >Andrew Smith</a></li>
     </ul>
     </div>
     <div className="contact" ></div>
     <h2>Email Us</h2>
               <form action="https://formspree.io/85.andrewsmith@gmail.com"
                    method="POST" >
          <p>
          <lable>Name</lable></p>
          <input type="text" name="name" />
          
          <p>
          <lable>Company Name</lable>  </p>
          <input type="text" name="company" />
        
          <p>
          <lable>Email Address</lable> </p>
          <input type="email" name="email" />
         
          <p>
          <lable>Phone Number</lable> </p>
          <input type="text" name="phone" />
         
          <p className="full" >
          <lable>Message</lable></p>
          <textarea name="message" rows="5" ></textarea>
        
          <p className="full" >
               <input type="submit" value="Send" />
          </p>
     </form>

     
     
     </div>
     </div>
     
)

export default Contact
