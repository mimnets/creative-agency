import React from 'react';
import { Carousel } from 'react-bootstrap';
import './OurWorks.css'

const OurWorks = () => {
    return (
      <section className="my-5 py-5">
        <div className="container carousel-container">
          <div className="row">
            <div className="col-md-12">
            <h1 style={{textAlign: 'center', color: 'white'}}>Here are some of <span style={{color:'green'}}>our works</span> </h1>
            </div>
          </div>
          <div className="row carousel">
            <div className="col-md-12">
            <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/-HQAkin1xXpc/X4iMq9LPC0I/AAAAAAAAoYQ/d5Nv3j2yiyQVSRxGtw1cYQhkwUln3mEUQCLcBGAsYHQ/s1110/carousel-5.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/-Jh3qWrR8l1c/X4iMpUkdozI/AAAAAAAAoYE/OEYc8xVsTk89buP9xXA1QpbkZxM0AC9jQCLcBGAsYHQ/s1397/carousel-1.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/--QYZ1PqYgJY/X4iMpWFHuAI/AAAAAAAAoYI/Wu4nk-DiWc0_w8fPQcRKO70TvpCJDSXwQCLcBGAsYHQ/s1405/carousel-2.png"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
            </div>
          </div>

        
        </div>
        </section>
    );
};

export default OurWorks;