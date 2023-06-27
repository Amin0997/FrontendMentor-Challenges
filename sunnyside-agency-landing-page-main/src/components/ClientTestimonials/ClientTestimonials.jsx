import React from 'react'
import './ClientTestimonials.scss'
import Emily_img from '../../images/image-emily.jpg'
import Thomas_img from '../../images/image-thomas.jpg'
import Jennie_img from '../../images/image-jennie.jpg'

function ClientTestimonials() {
  return (
  <>
    <h2 className='testimonial__title'>CLIENT TESTIMONIALS</h2>

    <section className='testimonial__cards'>

      <div className='testimonial__client_card'>
        <img className='testimonial__client-img' src={Emily_img} alt="" />
        <p className='testimonial__text'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
        <h3 className='testimonial__author'>Emily R.</h3>
        <p className='testimonial__client_post'>Marketing Director</p>
      </div>

      <div className='testimonial__client_card'>
        <img className='testimonial__client-img' src={Thomas_img} alt="" />
        <p className='testimonial__text'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
        <h3 className='testimonial__author'>Thomas S.</h3>
        <p className='testimonial__client_post'>Chief Operating Officer</p>
      </div>

      <div className='testimonial__client_card'>
        <img className='testimonial__client-img' src={Jennie_img} alt="" />
        <p className='testimonial__text'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
        <h3 className='testimonial__author'>Jennie F.</h3>
        <p className='testimonial__client_post'>Business Owner</p>
      </div>

    </section>
  </>
  )
}

export default ClientTestimonials;
