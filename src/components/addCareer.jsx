import React from 'react'
import './addCareer.scss';
 const addCareer = () => {
    return (
        <div className="form-container">
            <h1>Add Career Pathway</h1>
            <div className="form-input">
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            </div>
        </div>
    )
}

export default addCareer;
