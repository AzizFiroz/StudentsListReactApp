import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    Name: "",
    rollno: "",
    email: "",
    phone:"",  
    semester: ""
  });

  
  const { Name, rollno, email, phone ,semester} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    
        
        await axios.patch("http://localhost:5000/Students/"+id, user);
        console.log("Student Added");
        history.push("/");
    
  };

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:5000/Students/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Student Details</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="Name"
              value={Name} required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              className="form-control form-control-lg"
              placeholder="Enter Your Roll NO"
              name="rollno"
              value={rollno} required
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
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              className="form-control form-control-lg"
              placeholder="Enter Your Current Semester"
              name="semester"
              value={semester}
              required
              onChange={e => onInputChange(e)
            }
            />
          </div>
          <button class="btn btn-warning btn-block">Update Student</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;