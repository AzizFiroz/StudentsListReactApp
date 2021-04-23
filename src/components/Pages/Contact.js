import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             message:""
             
        }
    }
    
    handleSubmit = (e)=>{
        e.preventDefault();
        alert("Your Feedback has been submitted Thank you :)");
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {
        return (
            <div className="container py-4 w-75 mx-auto shadow p-5 mt-5 mb-5">
                <div>
                <h2 className="text-center mb-4">Contact US</h2><hr></hr>
                <h5 className="text-center mb-4">We would Love to hear from you about the feedback</h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="form-group">
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value=""
                            required
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value=""
                            required
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        </div>
                        <div className="form-group">
                        <textarea
                            className="form-control form-control-lg"
                            type="text"
                            name="message"
                            placeholder="Message"
                            value=""
                            required
                            onChange={this.handleChange}
                            value={this.state.message}

                        ></textarea>
                        </div>
                        
                        
                        
                    </div>

                    <button type="submit" className="btn btn-primary ">Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact