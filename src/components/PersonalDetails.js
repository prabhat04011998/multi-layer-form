// PersonalDetails.jsx
import React, { Component } from 'react';
import { throws } from 'assert';

class PersonalDetails extends Component{
        constructor(props){
        super(props);
        this.state={
            clas:'',
            
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

    back  = (e) => {
        this.setState({clas:'transitback'});
        setTimeout(function(){this.setState({clas:'transit'})}.bind(this),300);
        
        
        setTimeout(function(){this.props.prevStep()}.bind(this),1000);
    }

    render(){
        const { values } = this.props
        return(
            
        <div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <form id="msform">
            
            <ul id="progressbar">
                <li class="active">Personal Details</li>
                <li class="active">Social Profiles</li>
                <li>Account Setup</li>
            </ul>
        <fieldset className={this.state.clas} style={{left:this.state.left+'%'}}>
                <h2 class="fs-title">Social Profiles</h2>
                <h3 class="fs-subtitle">Your presence on the social network</h3>

                <input type="text" name="twitter" placeholder="Twitter" onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
                <input type="text" name="facebook" placeholder="Facebook" onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
                <input type="text" name="gplus" placeholder="Google Plus" onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
                <input type="button" onClick={this.back} name="previous" class="previous action-button-previous" value="Previous"/>
                <input type="button" name="next" onClick={this.saveAndContinue} class="next action-button" value="Next"/>
            </fieldset>
            </form>
            </div>
            </div>
            </div>
            
        )
    }
}

export default PersonalDetails;