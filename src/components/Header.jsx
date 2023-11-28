import React from 'react'
import './Footer.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (

    <Navbar expand="lg" className="bg-white fixed-top">
    <Container style={{marginRight:'100px'}}>
      <Navbar.Brand><img style={{width:'60px',height:'60px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'/>
</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <p className='me-3'>COFFEE</p>
      <p className='me-3'>MENU</p>
      <p className='me-3'>REWARDS</p>
      <p className='me-3'>RESPONSIBILITY</p>
      <p className='me-3'>CAREER CENTER</p>
      <p className='me-3'>ABOUT US</p>
      <Nav className="ms-auto">
     
      <Nav className='me-3'>
          FIND A STORE
          </Nav>
          <Nav className='me-3'>LOGIN</Nav>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
    
    
    
    
    
    /*<div className='flex'>
      <header className='bg-white w-100'>
      <div className=''>
  <img style={{width:'60px',height:'60px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'/>
   </div>
   <nav className='flex'>
    <p>COFFEE</p>
    <p>MENU</p>
    <p>REWARDS</p>
  )
    <p>RESPONSIBILITY</p>
    <p>CAREER CENTER</p>
    <p>ABOUT US</p>
    <p>FIND A STORE</p>
    <p>LOGIN</p>
   </nav>
   </header>
   </div>*/  
   
   
  
}

export default Header