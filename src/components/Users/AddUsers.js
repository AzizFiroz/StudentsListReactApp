import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUsers = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    rollNo: "",
    email: "",
    phone:"",  
    semester: ""
    
  });

  
  const { name, rollNo, email, phone ,semester} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    
        
        await axios.post("http://localhost:5000/Students/", {
          name: user.name,
          rollNo: user.rollNo,
          email: user.email,
          phone:user.phone ,
          semester: user.semester
        });
        console.log("USer Added");
        history.push("/");
    
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name} required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              className="form-control form-control-lg"
              placeholder="Enter Your Roll NO"
              name="rollNo"
              value={rollNo} required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email} 
              required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Current Semester"
              name="semester"
              value={semester}
              required
              onChange={e => onInputChange(e)
            }
            />
          </div>
          <button className="btn btn-primary btn-block">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;