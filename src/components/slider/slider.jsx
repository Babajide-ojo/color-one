import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Layout from "../shared/layout";

import "./slider.styles.scss";

const Slider = () => {
  return (
    <div className="row slider-div">
      <div className="col-sm-3 category-bar">
    
          <div className="category-item">
            <a href="" className="category-link">Joggers</a>
          </div>
          <div className="category-item">
            <a href="" className="category-link">Polos</a>
          </div>
          <div className="category-item">
            <a href="" className="category-link">Vintage</a>
          </div>
          <div className="category-item">
            <a href="" className="category-link">Jeans</a>
          </div>
          <div className="category-item">
            <a href="" className="category-link">Up and Down Hoddies</a>
          </div>
          <div className="category-item">
            <a href="" className="category-link">Sweat shirts</a>
          </div>
      
      </div>
      <div className="col-sm-9">
        <Carousel fade={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?w=2000"
              alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1580906853305-5702e648164e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8am9nZ2VyJTIwcGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Second slide"
            />
            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-sm-3 category-bar-mobile">
    
    <div className="category-item">
      <a href="" className="category-link">Joggers</a>
    </div>
    <div className="category-item">
      <a href="" className="category-link">Polos</a>
    </div>
    <div className="category-item">
      <a href="" className="category-link">Vintage</a>
    </div>
    <div className="category-item">
      <a href="" className="category-link">Jeans</a>
    </div>
    <div className="category-item">
      <a href="" className="category-link">Up and Down Hoddies</a>
    </div>
    <div className="category-item">
      <a href="" className="category-link">Sweat shirts</a>
    </div>

</div>
    </div>
  );
};

export default Slider;
