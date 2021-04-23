import React, { useState, useEffect } from 'react'
import axios from "axios"

import {Link} from "react-router-dom"


const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadStudents();
    },[]);

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:5000/Students/")
        console.log(result);
        setUser(result.data.reverse());
    }

    const deleteStudent = async(id)=>{
        await axios.delete(`http://localhost:5000/Students/${id}`).
        then(response => {
            console.log("delete response", response);
            if(response.status === 200){
                setUser(users.filter((e) => e._id !== id));
            }
        }).
        catch((error) => {
            console.log(error)
        })
        
    }
    return (
        <div className="container">
            <div className="py-4" >
    
                <table class="table border shadow">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Roll #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Semester</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                <tr key={user._id}>
                                    <th scope="row"> {user.rollno}</th>
                                    <td> {user.Name}</td>
                                    <td> {user.email}</td>
                                    <td>{user.semester}</td>
                                    <td><Link className= "btn btn-primary mr-2" to={`/students/${user._id}`}> View</Link>
                                    <Link className= "btn btn-outline-primary mr-2" to ={`/students/edit/${user._id}`}> Edit</Link>
                                    <Link className= "btn btn-danger" onClick={()=> deleteStudent(user._id)}> Delete</Link>
                                    </td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home
