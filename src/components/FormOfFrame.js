import React from 'react';
import './FormOfFrame.css';
import dogphoto from '../img/pexels-dog.jpg';

function FormFrame () {
    return (
        <div className="formOfFrameStyle">
            <div className="placeOfTheImage"><img src={dogphoto} height={496} width={300} alt=""/></div>
            <div className="placeOfTheForm">form</div>
        </div>
    )
}

export default FormFrame