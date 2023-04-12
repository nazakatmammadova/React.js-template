import React from "react";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
      <footer className="text-center bg-secondary text-white">
        <div className="container py-6">
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-5">
              <h4 className="mb-4">LOCATION</h4>
              <p className="lead mb-0">
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
                <h4 className="mb-4">AROUND THE WEB</h4>
                <Link className="btn btn-outline-light mx-1 btn-social"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link className="btn btn-outline-light mx-1 btn-social"><i className="fa-brands fa-twitter"></i></Link>
                <Link className="btn btn-outline-light mx-1 btn-social"><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link className="btn btn-outline-light mx-1 btn-social"><i className="fa-brands fa-dribbble"></i></Link>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
                <h4 className="mb-4">ABOUT FREELANCER</h4>
                <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by <Link className="text-primary" to='https://startbootstrap.com/'>Start Bootstrap</Link>.</p>
            </div>
          </div>
        </div>
        <p className="footer text-center text-white py-4 mb-0"><small>Copyright © Your Website 2023</small></p>
      </footer>
    </>
  );
}

export default Footer;
