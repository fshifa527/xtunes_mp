import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



function Landing() {
  return (
    <>
    
      <div className='w-100 d-flex justify-content-center align-items-center p-5' style={{height:'80vh'}}>
        <div className='row'>
          <div className='col shadow'>
          <h2> Media Player</h2> 
          <p style={{textAlign:'justify',color:'#f5f8ff'}}>This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more,
           please see go through our website.</p>
           <Link className='btn btn-primary' style={{color:'#f5f8ff'}} >Explore</Link>
      </div>
      <div className='col'>
       <img className='img-fluid rounded shadow' style={{}} src="https://blog.icons8.com/wp-content/uploads/2021/06/Cover-7-1200x600.png" alt="" />
     </div>

      </div>
      </div>

      <div className='mt-3'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex flex-row justify-content-between p-3'>
        <Card style={{ width: '18rem',color:'#590611'}}>
      <Card.Img variant="top" style={{ height: '300px',color:'#590611'}} src="https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-08-190_512.gif" />
      <Card.Body>
        <Card.Title style={{color:'black'}}>Upload</Card.Title>
        <Card.Text  style={{color:'#f5f8ff'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',color:'#590611'}}>
      <Card.Img variant="top" style={{ height: '300px',color:'#590611'}} src="https://i.gifer.com/origin/10/10288e59552bc4fb27529bb8795c8b01_w200.gif " />
      <Card.Body>
        <Card.Title style={{color:'black'}}>You tube</Card.Title>
        <Card.Text  style={{color:'#f5f8ff'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>  

    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{ height: '300px'}} src="https://img.pikbest.com/png-images/20190917/mouse-click-effect-gif-element-dynamic-image_2515114.png!sw800" />
      <Card.Body>
        <Card.Title style={{color:'black'}}>Watch History</Card.Title>
        <Card.Text style={{color:'#f5f8ff'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>

        </div>

      </div>
    <div className='mt-3 p-5'>
      <h2 className='text-center'> Why X-Media Player ? </h2>
      <div className='d-flex mt-2 flex-row justify-content-center align-items-center'>
      <div>
        <h4>Innovative , Secure and Friendly ...</h4>
        <p style={{textAlign:'justify',color:'#f5f8ff'}}>The X-Media app is the ultimate music streaming experience on Mac. 
        Explore a library with millions of songs, discover new artists and tracks.The Apple Music app is the ultimate music streaming experience on Mac. 
        Explore a library with millions of songs, discover new artists and tracks</p>
      </div>
      
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A5zpNKMMHV4?si=8zpuUuUk79qae473" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>

    </div>
    

   
    </>
  )
}

export default Landing