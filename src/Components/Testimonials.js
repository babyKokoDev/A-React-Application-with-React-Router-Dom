import React from 'react'
import './TestimonialStyles.css'
import {FaDatabase} from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className="testimonial">
        <div className="container">
            <div className="outline">
                <div className="content">
                  <i><FaDatabase /> Staxx</i>
                  <p className="body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis maiores optio, deleniti sed alias quaerat obcaecati rem assumenda dolorem.
                  </p>
                  <div className="name">
                      <p>Marie Chilvers</p>
                      <p>CEO, Staxx</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials