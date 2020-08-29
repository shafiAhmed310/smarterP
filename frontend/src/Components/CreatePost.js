import React, { Component , Fragment } from 'react';


class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            body:"",
        }
        this.titleChange = this.titleChange.bind(this);
        this.titleSubmit = this.titleSubmit.bind(this);
    }
    titleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    titleSubmit(e){
        e.preventDefault();
        let postData = {
            title:this.state.title,
            body:this.state.body,
        }
        window.fetch("/create-post" , {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(postData)
            
        }).then(data=>{
            data.json().then(result=>{
                console.log(result);
            }
                
            ).catch(err=>console.log(err))
        }).catch((err)=>console.log(err))
    }
    render() { 
        return ( 
            <Fragment>
                
                <div className="postBlock">
                    <form onSubmit={this.titleSubmit}>
                    <div>
                    <input name="title"
                 id="title"
                  placeholder="Enter the title" 
                  value={this.state.title}
                  onChange={this.titleChange}
                  />
                    </div>
                <div>
                <textarea name="body"
                 id="body"
                  cols="30"
                   rows="10" 
                   value={this.state.body}
                    onChange={this.titleChange}
                    />
                </div>
                <div>
                    <button>Publish</button>
                </div>

                </form>
             </div>
            </Fragment>
         );
    }
}
 
export default CreatePost;