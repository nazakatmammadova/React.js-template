import React from 'react'

function Contact() {
  return (
    <>
        <section id="contact" className='py-6'>
            <div className="container">
            <h2 className='text-center text-secondary mb-0'>CONTACT</h2>
            <div className="divider text-secondary my-3 d-flex justify-content-center align-items-center">
                <div className="divider-line bg-secondary me-2"></div>
                <div className="divider-icon fs-3"><i className="fa-solid fa-star"></i></div>
                <div className="divider-line bg-secondary ms-2"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">
                    <form action="#">
                        <div className="form-floating mb-5">
                            <input className='form-control' id='name' type="text"/>
                            <label htmlFor="name">Full name</label>
                        </div>
                        <div className="form-floating mb-5">
                            <input className='form-control' id='email' type="text"/>
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-5">
                            <input className='form-control' id='phone' type="text"/>
                            <label htmlFor="phone">Phone number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className='form-control' id='message' style={{"height":"10rem"}}></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button className='btn btn-primary btn-xl disabled'>Send</button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Contact