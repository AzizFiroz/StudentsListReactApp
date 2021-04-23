import React from 'react'
import { Link } from "react-router-dom"
import './Button.css'

const Styles = [
    'button--primary',
    'button--outline'
]

const Sizes = [
    'button-medium',
    'button-large'
]
const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkBtnStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]
    const checkBtnSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0]

    return (
        <Link className={`button ${checkBtnStyle} ${checkBtnSize} `} to = "/students/add"onClick={onClick}>
            {children}
        </Link>
    )
}

export default Button;
