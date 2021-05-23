import React, { Component } from 'react'
import './addCareer.scss';
export default class form extends Component {
    render() {
        return (
            <div className="form-container">
                <h1>Personal Details</h1>
                <input type="text" id="fname" name="pdetails" placeholder="Personal details"/>
            </div>
        )
    }
}
