import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/students/${id}`);
    setUser(res.data);
  };
  
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4"> {user.name}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.Name}</li>
        <li className="list-group-item">Roll No: {user.rollno}</li>
        <li className="list-group-item">Email Id: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Semeter: {user.semester}</li>
      </ul>
    </div>
  );
};

export default ViewUser;