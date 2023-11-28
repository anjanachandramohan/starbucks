import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

function Home() {
  return (
    <>
    <Carousel >
      <Carousel.Item>
        <img style={{width:'100%',height:'600px'}} src='https://hips.hearstapps.com/hmg-prod/images/starbucks-holiday-drinks-65425c148fadd.png?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*'/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%',height:'600px'}} src='https://www.starbuckschilled.com/globalassets/new-campaignpages/frapphack/assets/chillclassic_mobile.jpg?preset=image375'/>
      
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'600px'}} src='https://www.bhg.com/thmb/JhhRDj7XiiTSWGSwaW_pnEMUbes=/3672x0/filters:no_upscale():strip_icc()/bhg-starbucks-psl-2023-d2a0685d3edb480489c88166d946784b.jpg'/>

        
      </Carousel.Item>
    </Carousel>
    
   <div className='d-flex flex-column mt-5 p-5' style={{width:'100%',height:'600px'}}>
    <h5>Promos And Announcement!</h5>
    <h2>Never miss a beat, or a drink</h2>
    <div className='d-flex ms-auto me-4' /*style={{marginTop:'-50px'}}*/>
    <button className='btn border border-black '>SEE ALL ANNOUNCEMENTS</button>
    </div>
    <div className='d-flex flex-column mt-3 p-3'>
      
        <img style={{width:'100%',height:'500px'}} src='https://www.starbucks.com.my/media/0a76d00a-251f-414c-b260-24137e4f8a22.png'></img>
     
    </div>
    </div>
   <Row className='bg p-3'style={{width:'100%',height:'400px',marginTop:'200px'}}>
    <Col md={6}>
     <h1>A loyalty program that’s all about you</h1>
     <h4>Join Starbucks Rewards for free. Start earning toward free rewards.</h4>
     <button className='btn border rounded me-3'>Register</button>
     <button className='btn border rounded'>Login</button>
    </Col>
    <Col md={6}>
    </Col>
   </Row>
   <div className='bgk p-2'style={{width:'100%',height:'400px',marginTop:'150px'}}>
    <h4>Stories and News</h4>
    <h1>The latest Starbucks stories and news around Malaysia</h1>
    <button  className='btn border rounded'>Click More</button>
   </div>
    
      
    </>
    
   
  )
}

export default Home