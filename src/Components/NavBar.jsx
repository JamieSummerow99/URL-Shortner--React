import { useState } from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <header className="header">
      <div className="content | container">
        
        <nav className="nav">
          <div className="nav__inner">
            <a href="#" className="logo">
              <img src={Logo} alt="Logo" />
            </a>

           
              <div>
                <a className="nav__link" href="#">
                  Features
                </a>
              </div>
              <div>
                <a className="nav__link" href="#">
                  Pricing
                </a>
              </div>
              <div>
                <a className="nav__link" href="#">
                  Resources
                </a>
              </div>
            
          </div>
          <button className= "Signup-btn">Signup</button>
          <button className= "Login-btn">Login</button>
        </nav>

       
      </div>
    </header>
  );
};

export default Header;
