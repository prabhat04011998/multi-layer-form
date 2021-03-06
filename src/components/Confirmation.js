// Confirmation.jsx
import React, { Component } from 'react';

class Confirmation extends Component{
    constructor(props){
        super(props);
        this.state={
            clas:'',
            
        }
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        this.setState({clas:'transitback'});
        setTimeout(function(){this.setState({clas:'transit'})}.bind(this),300);
        
        
        setTimeout(function(){this.props.prevStep()}.bind(this),1000);
    }

    render(){
        const {values} = this.props;

        return(
            <div>
            <div class="row">
    <div class="col-md-6 col-md-offset-3">
        <form id="msform">
            
            <ul id="progressbar">
                <li class="active">Personal Details</li>
                <li class="active">Social Profiles</li>
                <li class="active">Account Setup</li>
            </ul>
                
                <fieldset className={this.state.clas}>
                <h2 class="fs-title">Create your account</h2>
                <h3 class="fs-subtitle">Fill in your credentials</h3>
                <input type="text" name="email" placeholder="Email"/>
                <input type="password" name="pass" placeholder="Password" onChange={this.props.handleChange('pass')}
                defaultValue={values.pass}/>
                <input type="password" name="cpass" placeholder="Confirm Password" onChange={this.props.handleChange('cpass')}
                defaultValue={values.cpass}/>
                <input type="button" onClick={this.back} name="previous" class="previous action-button-previous" value="Previous"/>
                <input type="button" onClick={this.saveAndContinue} name="submit" class="submit action-button" value="Submit"/>
            </fieldset>
            </form>
            </div>
            </div>
            </div>
        )
    }
}

export default Confirmation;