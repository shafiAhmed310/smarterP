import React, { Fragment , useState , useEffect} from 'react';

import HooksPost from './Components/HooksPost'
 import FetchPost from './Components/FetchPost';
import './App.css';
require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [data, setData] = useState([]);
  const [q , setQ] = useState("");
  

  useEffect(()=>{
    fetch("/all-post" ,{
      headers:{
        "Content-Type":"application/json"
    }
    }).then(resp=>resp.json()).then(post=>{
      setData(post.posts)
    })
  },[]);
  function search(items){
    return items.filter(item=>item.title.toLowerCase().indexOf(q)>-1 || item.body.toLowerCase().indexOf(q)>-1) 
           
  }
function handleChange(){

 setQ({
   q:[{}]
 })
 
}
  return (
    <Fragment>
    <div>
      <center>
      <form>
          <input type="text" value={q} onChange={(e)=>setQ(e.target.value)} placeholder="search here" />
      <button type="submit"  className="custom" onClick={handleChange}  > <span className="customSpan">&times;</span></button>
          </form> 
      </center>
    <div className="mainBlock">
     <div className="HooksBlock">
     <HooksPost />
     </div>
     <div className="postBlock">
     <FetchPost  data={search(data)} />
     </div>
   </div>
    </div>
   </Fragment>
  );
}

export default App;