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
      
    </footer>
    
<footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
    <h5>About</h5>
      <p class="d-block mb-3 text-muted">We have amazing T-Shirt Collections.
       We will deliver it at your door as soon as possible.</p>
    </div>
    <div class="col-6 col-md">
      <h5>Quick Links</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Sign In</a></li>
        <li><a class="text-muted" href="#">Dashboard</a></li>
        <li><a class="text-muted" href="#">Cart</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Categories</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Mens</a></li>
        <li><a class="text-muted" href="#">Womens</a></li>
        <li><a class="text-muted" href="#">Kids</a></li>
        <li><a class="text-muted" href="#">Teens</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Collections</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Winter</a></li>
        <li><a class="text-muted" href="#">Summer</a></li>
        <li><a class="text-muted" href="#">Full Sleeves</a></li>
        <li><a class="text-muted" href="#">Round Neck</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Contact Us:</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" > 2/168, Sector 2, Jawahar Nagar, Jaipur </a></li>
        <li><a class="text-muted" > Email: akjagrawal24@gmail.com </a></li>
        <li><a class="text-muted" > Mobile No. : +917690892950 </a></li>
        
      </ul>
    </div>
  </div>
  <div className="container">
        <span className="text-muted">
            &copy; 2020 <span className="text-info font-weight-bold" >Developed By:</span> <span className="font-weight-bold">Ashish Jagrawal</span> 
        </span>
      </div>
</footer>
  </div>
);

export default Base;
