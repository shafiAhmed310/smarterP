
import React ,{useState, Fragment} from 'react';
import './Hookspost.css'


const HooksPost = ()=>{
    
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [search , setSearch] = useState("");
    const titleSubmit = ()=>{
        fetch("/create-post" , {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,
                body
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

  
  
    return(
        

        <Fragment>
             <div className="hookBlock">
              <input type="search" id="search"
               value={search}
                placeholder="search here" 
                onChange={(e)=>setSearch(e.target.value)} />
              <button type="reset" >X</button>



                 <h1>Post Your Data Here </h1>
                    <form onSubmit={()=>titleSubmit()}>
                    <div>
                        <label  htmlFor="title">Title: </label>
                    <input name="title"
                 id="title"
                  placeholder="Enter the title" 
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  />
                 
                    </div>
                <div>
                    <label htmlFor="body">Body: </label>
                <textarea name="body"
                 id="body"
                  cols="45"
                   rows="10" 
                   placeholder="something about post here...."
                   value={body}
                   onChange={(e)=>setBody(e.target.value)}
                    />
                   
                </div>
                <div>
                    <button>Publish</button>
                </div>

                </form>
                
             </div>
        </Fragment>
    )
}
export default HooksPost;