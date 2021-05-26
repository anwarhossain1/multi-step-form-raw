import React from "react";
import "./addCareer.scss";
const graduation = () => {
  return (
    <div className="form-container">
      <h1>After I graduate i want to...</h1>
      <div className="form">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
      </div>
    </div>
  );
};

export default graduation;
