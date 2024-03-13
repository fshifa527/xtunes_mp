import React,{useEffect,useState} from 'react'
import { getCategory } from '../services/allApis'
import { deleteCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import { getSpecificVideo } from '../services/allApis'
import { updateCategory } from '../services/allApis'
import Videocard from './Videocard'

function CategoryList(status) {
    const[cat,setCat]=useState([])
    const[deleteStatus,setDeleteStatus]=useState({})

    useEffect(()=>{
        getData()
    },[status,deleteStatus])

    const getData=async()=>{
        const res=await getCategory()
        console.log(res.data);
        setCat(res.data)

    }
    const handleDelete=async(id)=>{
        const res=await deleteCategory(id)
        console.log(res)
        if (res.status>=200 && res.status<300) {
            toast.success("Category Deletion Successfull")
            setDeleteStatus(res)


            
        } else {
            toast.error("Category Deletion Failed")
            
        }
        
     }  

    const handleDrop=async(e,id)=>{
        // console.log("category id:",id);
        const vid=e.dataTransfer.getData("videoId")
        // console.log("dropped video id:"+vid)
        const category=cat.find(item=>item.id==id)
        // console.log(category);
        const {data}=await getSpecificVideo(vid)
        // console.log(video.data);
        category.videos.push(data)
        console.log(category);
        const res=await updateCategory(category,id)
        if (res.status>=200 && res.status<300) {
            toast.success(`${data.caption} added to ${category.name}`)
            getData()
            


            
        } else {
            toast.error(`Can't Add ${data.caption} to ${category.name}`)
            
        }
        
    }
    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log("dragging over...");
    }
  return (
    <>
    <div className='mt-3 border shadow p-2 '>
        {
            cat?
            cat.map(item=>(
                <div className=' rounded shadow my-3 p-4' onDrop={(e)=>{handleDrop(e,item.id)}} onDragOver={(e)=>{handleDragOver(e)}}>
                   <h4>{item.name}</h4>
                  <div>
                    <span>{item.name}</span>
                    <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}}   style={{color:'white'}}></i>
                  </div>
                  <div className='mt-3'>
                      {
                        item?.videos.map(v=>(
                            <Videocard video={v} cat={true}/>
                        ))
                      }
                  </div>

                </div>
            ))
            :
            <h1>NO CATEGORIES</h1>
        }
        
    </div>
    </>
    
  )
}

export default CategoryList