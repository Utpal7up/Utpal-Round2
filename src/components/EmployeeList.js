import React from 'react';
import './EmployeeList.css';
import employeeData from '../employee (1).json'

const EmployeeList = () => {
    const json = employeeData.map(info => (
        <tr key={info.userid}>
          <td>{info.firstname}</td>
          <td>{info.lastname}</td>
          <td>{info.designation}</td>
          <td>{info.contactno}</td>
          <td>{info.emailaddress}</td>
          <td>{info.CTC}</td>
        </tr>
    ));

  return (
    <div style={{marginTop: "8%"}}>
      <h1>List of Employees</h1>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>CTC</th>
          </tr>
        </thead>
        <tbody>
          {json}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
