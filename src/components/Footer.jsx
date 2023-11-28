import React from 'react'
import './Footer.css'

function Footer() {
  return (
   
    <div className='footer d-flex justify-content-between p-5'style={{height:'500px',color:'black',marginTop:'50px'}}>
      <div className='abouts  me-3'>
            <p className='about  mb-3'>ABOUT US</p>
            <p>Our Company</p>
            <p>Our Heritage</p>
            <p>Starbucks Malaysia</p>
            <p>Newsroom</p>
        </div>
        <div className='coffees d-flex flex-column'>
        <p className='coffee mb-3'>COFFEE</p>
        <p>Our Coffee</p>
        <p>Brewing Guides</p>
        <p>Starbucks Reserve™</p>
        <p>Ethical Sourcin</p>
        </div>
        <div className='contacts d-flex flex-column '>
         <p className='contact mb-3'>CONTACT US</p>
         <p>Customer Service</p>
         <p>FAQ's</p>
        </div>
      
      <div className='mb-3 d-flex flex-column'>
      <i class="fa-brands fa-instagram fa-2x "></i>
      <i class="fa-brands fa-twitter fa-2x "></i>
      <i class="fa-brands fa-facebook fa-2x"></i>
      </div>
      <div>
      <p className='ms-5'>© Berjaya Starbucks Coffee Company Sdn Bhd (462026-H). All rights reserved.</p>

      </div>
     
    </div>
    /*<div className='footer w-100 p-3 d-flex justify-content-center align-items-center' style={{height:'500px',color:'black',marginTop:'50px'}}>

      <div className='d-flex justify-contenenter align-items-center w-100 '>t-c
        <div className='abouts  me-3'>
            <p className='about  mb-3'>ABOUT US</p>
            <p>Our Company</p>
            <p>Our Heritage</p>
            <p>Starbucks Malaysia</p>
            <p>Newsroom</p>
        </div>
        <div className='coffees d-flex flex-column'>
        <p className='coffee mb-3'>COFFEE</p>
        <p>Our Coffee</p>
        <p>Brewing Guides</p>
        <p>Starbucks Reserve™</p>
        <p>Ethical Sourcin</p>
        </div>
       
       
        <div className='contacts d-flex flex-column '>
         <p className='contact mb-3'>CONTACT US</p>
         <p>Customer Service</p>
         <p>FAQ's</p>
        </div>
      </div>
      <div className='mb-3 d-flex'>
      <i class="fa-brands fa-instagram fa-2x me-3 ms-4"></i>
      <i class="fa-brands fa-twitter fa-2x me-3"></i>
      <i class="fa-brands fa-facebook fa-2x"></i>
      </div>
      <hr className='mt-16'></hr>
      <div className='mt-4'>
        <div className='d-flex justify-content-center align-items-center'> 
        <p className='me-3'>WEB ACCESSIBILITY</p>
        <p className='me-3'>PRIVACY POLICY</p>
        <p className='me-3'>TERMS OF USE</p>
        <p className='me-3'>SITE MAP</p>
        <p className='me-3'>COOKIE PREFERENCE</p>
        <p className='ms-5'>© Berjaya Starbucks Coffee Company Sdn Bhd (462026-H). All rights reserved.</p></div>
        
      </div>
    </div>*/

  )
}

export default Footer