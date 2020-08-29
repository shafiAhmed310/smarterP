import React , {useState, useEffect, Fragment} from 'react';
import './FetchPost.css'
const FetchPost = ()=>{
    const [data , setData] = useState([]);
    
    useEffect(()=>{
       fetch("/all-post" ,{
           headers:{
               "Content-Type":"application/json"
           }
       }).then(res=>res.json())
       .then(data=>{
           
           setData(data.posts);
       })
    },[])
   
   
    return(
        <Fragment>
       <div className="parent">
            <h1 id="h1"> List Of Post</h1>
            {
                data.map(item=>{
                   return (
                    
                         
                    <div className="fetchBlock" key={item._id}>
                        
                       <div className="card">
                       <h3>Title :{item.title}</h3>
                      
                    <div className="card-body">
                   <div><h3>Description :</h3>{item.body}</div>
                    </div>
                    </div>
                    </div>
                   
                   )
                })
            }
           </div>
        </Fragment>
    )

}

export default FetchPost;