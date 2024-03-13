import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import  Modal  from 'react-bootstrap/Modal';
import  Form  from 'react-bootstrap/Form';
import { toast} from 'react-toastify';
import { addCategori } from '../services/allApis';
import CategoryList from './CategoryList';

function Categori(status) {

  const [show, setShow] = useState(false);
  const [category,setCategory]=useState("")
  const[addStatus,setAddStatus]=useState({})
 

  const getData=(val)=>{
    if (val){
      setCategory(val)
    }
  }

  const handleSubmit=async()=>{
    if(!category){
      toast.info("Enter Valid Data")
    }
    else{
      console.log(category)
      const data={name:category,videos:[]}
      const res=await addCategori(data)
      if(res.status>=200 && res.status<300){
        
        toast.success("Category Added")
        setCategory("")
        handleClose()
        setAddStatus(res.data)
      }
      else{
        toast.error("Category Adding Failed")
      }
    }
    
  }

  const handleClose = () =>
   {
    setShow(false)
    setCategory("")
  }
  const handleShow = () => setShow(true);

  return (
   
  <>
  <div>
 <Button variant='btn' onClick={handleShow}style={{backgroundColor:'#98A9BE',color:'black'}}> <b>Categor!es</b>  </Button>
 </div>

 <Modal 
 show={show} 
 onHide={handleClose}
 backdrop='static'
 keyboard={false}

 >
        <Modal.Header closeButton>
          <Modal.Title>Enter Categor!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
      <Form.Group className="mb-3" >
        <Form.Label>Category Name</Form.Label>
        <Form.Control  onChange={(e)=>{getData(e.target.value)}} type="text" placeholder="Enter Category Name" />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
           Add 
          </Button>
        </Modal.Footer>
      </Modal>
      <CategoryList status={addStatus} />
  </>
    )
}

export default Categori