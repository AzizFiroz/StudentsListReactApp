import React  from  'react'
import logo from "./Aziz_photo.png"

 const About = () => {

    const styling ={
        "text-decoration": "none",
        "font-size" : "38px",
        "color":"black"
        
    };
    
    return (
        <div className="py-4 container w-75 mx-auto shadow p-5 mt-5 text-center">
            <div > 
            <img src={logo} alt="Logo" className="myimage" />;

            </div>
            <div>
                <h5>A Brief Introdction</h5>
            </div>
            <div>
                I am aspiring Software Engineer Currently Pursuing my Enginee.ring in 
                Shri Ramdeobaba College of Engineer and Management Nagpur.<br/>
                I am always eager to engange in new excited projects <br/>
                Get in Touch!
            </div>
            
            <div className="mt-4">
            <a href="https://github.com/" target="__blanck" style={styling}><i class="fab fa-github mr-2"   ></i></a>
            <a href="https://linkedin.com/" target="__blanck" style={styling}><i class="fab fa-linkedin mr-2"   ></i></a>
            <a href="https://instagram.com/" target="__blanck" style={styling}><i class="fab fa-instagram mr-2"   ></i></a>
            <a href="https://facebook.com/" target="__blanck" style={styling}><i class="fab fa-facebook mr-2"   ></i></a>
            
            </div>
        </div>
        
    )
}
export default About;