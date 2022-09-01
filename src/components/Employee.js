import React, { useState } from 'react';
import './Employee.css';

const Employee = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [ctc, setCtc] = useState('');

  const handleFirst = (e) => {
    setFirst(e.target.value);
  };

  const handleLast = (e) => {
    setLast(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCtc = (e) => {
    setCtc(e.target.value);
  };

  const submitData = () => {
    console.log("first");
    console.log("last");
    console.log("contact");
    console.log("email");
    console.log("ctc");
  }

  return (
    <div>
      <h1>Create/Update Employee</h1>
      <form>
        <div className='form-label'>
          <label className="label">First Name:</label>
          <input onChange={handleFirst} className="input" value={first} type="text" /><br />

          <label className="label">Last Name:</label>
          <input onChange={handleLast} className="input" value={last} type="text" /><br />

          <label className="label">Contact Number:</label>
          <input onChange={handleContact} className="input" value={contact} type="number" /><br />

          <label className="label">Email Address:</label>
          <input onChange={handleEmail} className="input" value={email} type="email" /><br />

          <label className="label">CTC:</label>
          <input onChange={handleCtc} className="input" value={ctc} type="number" /><br />

          <button className="btn btn-primary btn-lg" onClick={submitData} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Employee;
