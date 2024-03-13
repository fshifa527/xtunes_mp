import React,{useEffect,useState} from 'react'
import { allHistory } from '../services/allApis'
import { Link } from 'react-router-dom'
import { deleteVideo } from '../services/allApis'

function History(del) {

  const[history,setHistory]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const res=await allHistory()
    console.log(res.data)
    setHistory(res.data)
  }

  const handleDelete = async(id)=>{
    const res =await deleteVideo(id)
    if (res.status>=200 && res.status<300){
         del("success")
         
    }
    else {
      del("Deletion Failed")
    }
  }
  return (
    <>
    <div className='p-5'>
      <Link to={'/dash'} className= 'btn btn-success float-end mb-5'>Go To Dashboard</Link>
      <h4>Watch History</h4>
      <table className="table table-bordered">
        <tr>
          <th>Caption</th>
          <th>Video URL</th>
          <th>Date&Time</th>
        </tr>
         {
          history?
          history.map(item=>(
           <tr>
            <td>{item.caption}</td>
            <td>{item.url}</td>
            <td>{item.datetime}</td>
             <td><i className="fa-solid fa-trash text-dark" onClick={()=>{handleDelete(item.id)}}></i></td> 
           </tr>
          ))
          :
          <p className='text-danger'>No History Found</p>
         }

        </table>

    </div>
    </>
  )
}

export default History