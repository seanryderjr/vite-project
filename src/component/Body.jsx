import React, { useState } from "react";
import "./Body.css";

function Body() {
  const [employees, setEmployees] = useState([
    {
      name: "John Doe",
      phone: "555-555-5555",
      email: "johndoe@nothing.com",
      dob: "01-01-1990",
    },
    {
      name: "Jane Stevens",
      phone: "555-456-5464",
      email: "jane@nothing.com",
      dob: "01-01-1989",
    },
    {
      name: "Jason Smith",
      phone: "555-555-5555",
      email: "jason@nothing.com",
      dob: "01-01-1981",
    },
    {
      name: "Harry Potter",
      phone: "555-741-8529",
      email: "Harry@nothing.com",
      dob: "01-01-1975",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, formData]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      dob: "",
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="body-container">
      <div className="form-content">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
          />
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleFormChange}
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <input
            type="text"
            id="dob"
            placeholder="DOB"
            value={formData.dob}
            onChange={handleFormChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Body;
