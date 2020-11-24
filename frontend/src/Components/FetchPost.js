import React , { Fragment} from 'react';
import './FetchPost.css'
const FetchPost = ({data})=>{
    return(
        <Fragment>
       <div className="parent">
            <h1 id="h1"> List Of Post</h1>
            <div className="scroll">
            {
                data.map(item=>{
                   return (   
                    <div className="fetchBlock" key={item._id}>
                        
                       <div className="card">
                           <ul>
                               <li> <span>Title :</span>{item.title}</li>
                               <li> <span>Description :</span>{item.body}</li>
                           </ul>
                    </div>
                    </div>
                 )
                }
                )
            }
            </div>
           </div>
        </Fragment>
    )

}

export default FetchPost;