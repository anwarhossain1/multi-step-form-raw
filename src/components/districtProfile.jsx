import React from "react";
import "./addCareer.scss";
const districtProfile = () => {
  return (
    <div className="form-container">
      <h1>Lets complete your registrarion (district Profile)</h1>
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

export default districtProfile;
