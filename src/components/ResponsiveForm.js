import React from 'react'
import './ResponsiveForm.css';
import {BsFillSuitHeartFill} from 'react-icons/bs';



const ResponsiveForm = () => {
  return (
    <div className="container">
        <h1>REGISTRATION FOR ADOPTION</h1>
        <p>A dog is a big responsibility! If you are aware of this, we will gladly accept your registration for adoption.</p>
        <p>After submitting the form, we will contact you as soon as possible. <BsFillSuitHeartFill/></p>
            <form>
                <div className="row">
                    <div className="column">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname"/>
                    </div>
                    <div className="column">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="phone">Contact Number</label>
                            <input type="text" id="phone"/>   
                    </div>
                    <div className="column">
                        <label htmlFor="phone">Email Address</label>
                            <input id="phone"  type="email"/>   
                    </div>         
                </div>
                <div className="row">
                    <div className="column gender-container">
                        <div>
                            <label className="gender-label">Gender</label>
                        </div>
                        <div className="maleFemaleContainer">
                            <label htmlFor="male" className="male-female-text">Male</label>
                                <span>
                                    <input type="radio" 
                                            id="gender" 
                                            name="gender" 
                                            value="male"
                                            />
                                </span>
                        </div>
                        <div className="maleFemaleContainer">
                            <label htmlFor="female" className="male-female-text">Female</label>
                                <span>
                                    <input type="radio" 
                                            id="fender" 
                                            name="gender" 
                                            value="female"                                   
                                            />
                                </span>
                        </div>                  
                    </div>
                    <div className="column">
                    </div>       
                </div>
            </form>
    </div>
  )
}

export default ResponsiveForm;