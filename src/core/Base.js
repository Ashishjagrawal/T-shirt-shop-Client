import React from "react";
import Menu from "./Menu";

//Showing base thing which are available on every page 
const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-white text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-white text-black text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-white mt-auto py-3">
      <div className="container-fluid bg-dark text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-primary btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
        <span className="text-info font-weight-bold">Developed By:</span> <span className="font-weight-bold">Ashish Jagrawal</span> 
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
