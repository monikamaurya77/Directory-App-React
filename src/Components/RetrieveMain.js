import React, { useState } from "react";

function RetrieveMain() {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");

  let str = localStorage.getItem("data");
  let data = JSON.parse(str);

  const check = () => {
    data.forEach((e) => {
      if (e.AadharNumber === input) {
        setResult(e);
      }
    });
  };

  console.log(result);
  return (
    <div className="retrieve flex">
      <h2 className="retrieve-info">Retrieve Information</h2>
      <div  className="single-data">
      <div>
        <input
          className="search"
          type={"number"}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-find" onClick={() => check()}>
          Find
        </button>
      </div>
      <div>
        {result === "" ? (
          <h1 className="no-data">NO DATA</h1>
        ) : (
          <div className="find-detail">
            <h4 className="h4">Name: <span>{result.Name} </span> </h4>
            <h4 className="h4">DOB: <span>{result.DateOfBirth} </span> </h4>
            <h4 className="h4">Aadhar: <span>{result.AadharNumber} </span> </h4>
            <h4 className="h4">Mobile No: <span>{result.MobileNumber} </span> </h4>
            <h4 className="h4">Age: <span>{result.Age} </span> </h4>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default RetrieveMain;
