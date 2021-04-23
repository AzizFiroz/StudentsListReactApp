


import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import Button from "../Button"
import './Navbar.css'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuiconClicked: false

        }
    }
    handleClicked = () => {
        this.setState({
            menuiconClicked: !this.state.menuiconClicked
        })
    }

    changeStyle = (cname) => {
        cname = cname+ " clicked-nav"
    }
    
    render() {
        return (
            <div>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={this.handleClicked}>
                        <i className={this.state.menuiconClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    
                    <ul className= {this.state.menuiconClicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (<li key={index}>

                                <NavLink className={item.cname} to={item.url}  >
                                    {item.title}
                                </NavLink>
                            </li>)
                        })}

                    </ul>
                    
                    <Button>Add Student</Button>
                </nav>
            </div>
        )
    }

}

export default Navbar
