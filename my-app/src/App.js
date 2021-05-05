import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';



import Data from "./Components/Data"

class App extends React.Component {
  state ={
    user: [],
    followers: [],
    followerName:[]
}
componentDidMount(){
  axios.get("https://api.github.com/users/Dwalker19922")
  .then(res =>{

     this.setState({
         user: res.data
     })

  })
  .catch(err => {
      console.log(err);
  })

  axios.get("https://api.github.com/users/Dwalker19922/followers")
  .then(res =>{

      this.setState({
          followers: res.data,

      })
  this.state.followers.map((item)=>{{
        this.setState({
          followerName : item.login
        })
        console.log(item)
  }})


  })
}
  render(){

    return (
    <div className="App">
     <Data user = {this.state.user} follower = {this.state.followerName}/>
     <h2>Followers:</h2>
     <p>{this.state.followerName}</p>

    </div>
  );
}
}

export default App;