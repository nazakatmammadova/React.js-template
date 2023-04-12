import React,{useState} from 'react'
import '../App.css'
import Items from './Items'
import { v4 as uuidv4 } from "uuid";
function Portfolio() {
    const[item]=useState([
        {
          id:uuidv4(),
          img:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png"
        },
        {
          id:uuidv4(),
          img:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png"
        },
        {
          id:uuidv4(),
          img:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png"
        },
        {
          id:uuidv4(),
          img:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png"
        },
        {
          id:uuidv4(),
          img:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png"
        },
        {
          id:uuidv4(),
          img:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png"
        },
      ])
  return (
    <>
    <section id='portfolio' className='py-6'>
        <div className="container">
            <h2 className='text-center text-secondary mb-0'>PORTFOLIO</h2>
            <div className="divider text-secondary my-3 d-flex justify-content-center align-items-center">
                <div className="divider-line bg-secondary me-2"></div>
                <div className="divider-icon fs-3"><i className="fa-solid fa-star"></i></div>
                <div className="divider-line bg-secondary ms-2"></div>
            </div>
            <Items item={item}/>
        </div>
    </section>
    </>
  )
}

export default Portfolio