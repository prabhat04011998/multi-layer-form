// UserDetails.jsx
import React, { Component } from 'react';
class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            clas:''
        }
    }
   

    addClass=()=>{
        this.setState({clas:"effect"});
        
    }
    rmcls=()=>{
        this.setState({clas:''});
    }




    saveAndContinue = (e) => {
        this.addClass();
        setTimeout(function(){
             this.rmcls();
        }.bind(this),200);
        e.preventDefault()
        setTimeout(function(){
            this.props.nextStep();
        }.bind(this),500);
    }


    



    render(){
        const { values } = this.props;
        return(
            <div className={this.state.clas} >
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <form id="msform">
            
                    <ul id="progressbar">
                        <li class="active">Personal Details</li>
                        <li>Social Profiles</li>
                        <li>Account Setup</li>
                    </ul>
                <fieldset>
                <h2 class="fs-title" >Personal Details</h2>
                <h3 class="fs-subtitle">Tell us something more about you</h3>

                <input type="text" name="fname" placeholder="First Name" 
                onChange={this.props.handleChange('firstName')}
                defaultValue={values.firstName}
                />
                <input type="text" name="lname" placeholder="Last Name" 
                onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                <input type="email" name="email" placeholder="Phone"
                onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                <input onClick={this.saveAndContinue} type="button" name="next" class="next action-button" value="Next"/>
                </fieldset>
                </form>
                </div>
                </div>
           
            </div>
        )
    }
}

export default UserDetails; 