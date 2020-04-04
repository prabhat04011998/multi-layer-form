// Success.jsx
import React, { Component } from 'react';

class Success extends Component{
    render(){
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                {console.log("pikachu",this.props)}
            </div>
        )
    }
}

export default Success;