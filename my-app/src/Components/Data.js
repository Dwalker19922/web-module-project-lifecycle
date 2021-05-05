import React from 'react';

const followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell"];

class Data extends React.Component{
    state={
        followerLogin : [],
    }

    render(){

        return(

            <div className ="cards">
            <div className = "card">
                <img src = {this.props.user["avatar_url"]}/>
                <div className = "card-info">
                    <h3 className = "name">{this.props.user.name}</h3>
                    <p className ="username">{this.props.user.login}</p>
                    <p className = "location">{this.props.user.location}</p>
                    <p> Profile: 
                        <a href = { this.props.user.url}>{this.props.user.url}</a>
                    </p>
                    <p>Following:{this.props.user.following}</p>

                    <p>followers: {this.props.user.followers}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Data;