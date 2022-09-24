import React from 'react';
import './FormOfFrame.css';
import dogphoto from '../img/pixabay-dog.jpg';
import RegisterForm from './RegisterForm';

function FormFrame () {
    return (
        <div className="formOfFrameStyle">
            <div className="placeOfTheImage">
                <img src={dogphoto} className="imageStyle" alt="dog"/>
            </div>
            <div className="placeOfTheFormTitle">
                <h1 className="formTitle">Registration For Adoption</h1>
            </div>
            <div className="placeOfTheData">
                <RegisterForm/>
            </div>
        </div>
    )
}

export default FormFrame