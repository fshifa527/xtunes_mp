import React from 'react'
import { Link, generatePath } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex bg-light w-100 flex-column'>

      <div className='row p-5'> 

       <div className='col'>
          <h4> Media Player 2024</h4>
          <p style={{textAlign:'justify',color:'#f5f8ff'}}>MediaWeb is a cloud-based production accounting software with a simple setup and extended support.
           For film, TV, web and sports media.</p>
       </div>
       <div className='col'>
        <h4>Page L!nks</h4>
        <Link to={''} style={{color:'#f5f8ff'}}>Landing</Link> <br />
        <Link to={'dash'}  style={{color:'#f5f8ff'}}>Dashboard</Link> <br />
        <Link to={'hist'}  style={{color:'#f5f8ff'}}>History</Link>
       </div>
       <div className='col'>
        <h4>Reference</h4>
        <a href="https://react-bootstrap.netlify.app/" style={{color:'#f5f8ff'}}>React-Bootstrap</a> <br />
        <a href="https://getbootstrap.com/" style={{color:'#f5f8ff'}}>Bootstrap</a><br />
        <a href="https://react.dev/" style={{color:'#f5f8ff'}}>React</a>
       </div>

      
      </div>

      <div className='text-center'>
         <p>&copy;Media Player 2024</p>
      </div>

    </div>
  )
}

export default Footer