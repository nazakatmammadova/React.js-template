import React from 'react'
import '../App.css'
function Header() {
  return (
    <>
         <header className="bg-primary">
        <div className="container d-flex align-items-center flex-column">
          <img
            className="mb-5"
            src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
            alt=""
          />
          <h1 className="mb-0 text-white text-center">START BOOTSTRAP</h1>
          <div className="divider my-2 text-white d-flex justify-content-center align-items-center">
            <div className="divider-line me-2 bg-white"></div>
            <div className="divider-icon fs-3">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="divider-line ms-2 bg-white"></div>
          </div>
          <p className="mb-0 font-weight-light fs-4 text-white text-center">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    </>
  )
}

export default Header