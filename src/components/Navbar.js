// import { useNavigate } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  
  

  return (
    <>
      <section id="nav_back_color">
        <section id="navbar" >
          <div className="site-name">SITE NAME</div>
          <section id="nav-item">
            <section id="navbar-1">
              <div className="nav-items">
                <a href="/"> Home</a>
                {/* <!-- fontawesome icon -->
							<!-- <i className="fa-regular fa-angle-right"></i> --> */}
              </div>
              <div className="nav-items">
                <a href="/"> Landings</a>
              </div>
              <div className="nav-items">
                <a href="/"> Pages</a>
              </div>
              <div className="nav-items">
                <a href="/"> Documentation</a>
              </div>
            </section>
            <div className="nav-items" id="button-1">
              <a href="/">Buy Now</a>
            </div> 
            {/* <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.tooglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div> */}
            {/* <input className="btn btn-primary" onClick={props.tooglemode}>Dark Mode</input> */}
          </section>
        </section>
      </section>
         </>
  );
};

export default Navbar;
