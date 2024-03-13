import React,{useEffect,useState} from 'react'
import Videocard from './Videocard'
import { getVideos } from '../services/allApis'

function Videos({resStatus}) {

  const[videolist,setVideoList]=useState([])
  const [delStatus,SetdelStatus]=useState("")
  useEffect(()=>{
      getData()
  },[resStatus,delStatus])//dependencies[]
   
  const getData=async()=>{
    const res=await getVideos()
    console.log(res.data)
    setVideoList(res.data)
  }
  return (
    <div className=' w-100 p-3 row' style={{backgroundColor:'black'}}>
      {
        videolist ?
        videolist.map(item =>(
          <Videocard  video={item} del={SetdelStatus} key={item.id} className="m-5"   />    
           ))
           :
           <h3>No Videos Available</h3>
      
      }
      </div>
  )
}

export default Videos
