import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

function UserFilter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");

  const handleFilter = () => {
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Status:", status);
  };

  const handleClear = () => {
    setEmail("");
    setName("");
    setStatus("active");
  };

  return (
    <div className="container-fluid px-4 py-2 border rounded mt-4 mb-4">
      <h2 className="fs-4 text-start">Filter</h2>
      <div className="row">
        <div className="col-md-3 text-start">
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-3 text-start">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3 text-start">
          <select
            className="form-select mb-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="col-md-3 text-end d-flex justify-content-end">
          <button className="btn btn-secondary me-2" onClick={handleFilter}>
            <span className="ms-2 me-2">Filter</span>
            <SlMagnifier />
          </button>
          <button className="btn btn-dark" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserFilter;
