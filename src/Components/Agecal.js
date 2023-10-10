import "./Agecal.css";
import React, { useState } from "react";
function Agecal() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const Calculate = () => {
    const dob = new Date(date);
    const currd = new Date();
    let Age = currd.getFullYear() - dob.getFullYear();
    if (
      currd.getMonth() < dob.getMonth() ||
      (currd.getMonth() === dob.getMonth() && currd.getDate() < dob.getDate())
    ) {
      Age--;
    }
    setAge(Age);
  };
  const box = { width: "500px" };
  return (
    <div
      className="d-flex flex-column border border-dark border-1 p-3 rounded align-items-center"
      style={box}
    >
      <div className="text-center">
        <h3>Enter your date of birth</h3>
      </div>
      <input
        className="form-control m-2 w-75"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="btn btn-primary" onClick={Calculate}>
        Calculate Age
      </button>
      {age !== "" && <h2 className="text-center">You are {age} years old</h2>}
    </div>
  );
}
export default Agecal;
