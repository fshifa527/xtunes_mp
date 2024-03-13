import React,{useState}from 'react'
import { ModalHeader } from 'react-bootstrap';
import  Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import  Modal from 'react-bootstrap/Modal';
import {addhistory, deleteVideo} from '../services/allApis';
import { toast } from 'react-toastify';


function Videocard({video,Setdel,cat}) {
    const [show, setShow] = useState(false);
    const [his,setHis]=useState({
      caption:video.caption,url:video.url,datetime:''
    })

    

    const handleDelete = async(id)=>{
      const res =await deleteVideo(id)
      if (res.status>=200 && res.status<300){
           Setdel("success")
           toast.success("Video Deleted")
      }
      else {
        toast.error("Deletion Failed")
      }
    }
    // console.log(video);

    const handleClose = () =>{
      console.log(his)
      addhistory(his)
      setShow(false)
    }
  
    
    const handleShow = () => {
      setHis({...his,datetime:new Date()})
      setShow(true);
    }

    const handleDrag=(e,id)=>{
      // e.preventDefault()

      console.log("Video ID:"+id)
      e.dataTransfer.setData("videoId",id)
    }

  
  return (
   <>
    <Card style={cat?{ width: '12rem',backgroundColor:'black'}:{width:'18rem',backgroundColor:'black'}} className='ms-5 mt-3 ' draggable onDragStart={(e)=>{handleDrag(e,video?.id)}}>
      <Card.Img variant="top" onClick={handleShow} src={video.image} />
      <Card.Body style={{backgroundColor:'black'}}>
        <Card.Title style={{color:'whitesmoke',backgroundColor:'black'}}>
          {video.caption} 
       
       {
        !cat &&
        <Button className='rounded float-end'onClick={()=>{handleDelete(video.id)}} style={{backgroundColor:'black'}}>
          <i className="fa-solid fa-trash fa-sm"style={{color:'white'}} ></i>
        </Button>

       }
        </Card.Title>
      </Card.Body>
     
    </Card>
    <Modal
         show={show}
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
         
     >
       

        <Modal.Body>
          <Modal.Header closeButton
          ></Modal.Header>
        <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>


         </Modal>
   </>

  )
}

export default Videocard