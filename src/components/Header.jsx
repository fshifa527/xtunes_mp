import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Header() {
  return (
    <div style={{color:'whitesmoke',border:'2px solid black'}} >
      <Navbar  style={{border:'none',color:'whitesmoke'}}>
      <Container>
    
      <Navbar.Brand href="#home" style={{color:'black'}}>
        
      <i className="fa-brands fa-pix fa-fade fa-xl"  style={{color:'black'}} ></i> 
      &nbsp; &nbsp;
       {''}
        X-Tunes
      </Navbar.Brand>
      </Container>
  </Navbar>
  
    </div>
    

  )
}

export default Header