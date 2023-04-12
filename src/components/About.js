import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <section id="about" className="bg-primary text-white py-6">
        <div className="container">
          <h2 className="text-center">ABOUT</h2>
          <div className="divider my-2 text-white d-flex justify-content-center align-items-center">
            <div className="divider-line me-2 bg-white"></div>
            <div className="divider-icon fs-3">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="divider-line ms-2 bg-white"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to='https://startbootstrap.com/theme/freelancer' className="btn btn-xl btn-outline-light">
              <i className="fa-solid fa-download me-2"></i>Free Download
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
