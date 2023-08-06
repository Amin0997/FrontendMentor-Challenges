import React from 'react'
import './imagesSection.scss'
import milk from '../../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../../images/desktop/image-gallery-orange.jpg'
import cone from '../../images/desktop/image-gallery-cone.jpg'
import sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg'

function ImagesSection() {
    return (
        <section className='images-section'>

            <img className='milk_img' src={milk} alt="" />

            <img className='orange_img' src={orange} alt="" />

            <img className='cone_img' src={cone} alt="" />

            <img className='sugarcubes_img' src={sugarcubes} alt="" />

        </section>
    )   
}

export default ImagesSection
