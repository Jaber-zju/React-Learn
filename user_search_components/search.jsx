import React,{Component} from 'react'
import PubSub from 'pubsub-js'



export default class Search extends Component {



  search = () =>{
    const searchName = this.nameinput.value.trim()
    if (searchName){
      PubSub.publish('search',searchName)
    }
  };

  render(){
    return (
        <div>
          <input type="text" placeholder="enter the name you search" className='col-md-4' ref={input => this.nameinput = input}/>
          &nbsp;&nbsp;
          <button className="btn btn-success" onClick={this.search}>Search</button>
        </div>
    )


  }
}

