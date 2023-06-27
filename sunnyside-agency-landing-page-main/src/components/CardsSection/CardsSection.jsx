import React from 'react'
import './cardsSection.scss'

function CardsSection() {
    return (
        <section className='cards-section'>

            <div className='first-box text-box'>
                <h3 className='text-box__title'>Transform your brand</h3>
                <p className='text-box__description'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="#" className='first-box__learn-more_btn learn-more_btn'>LEARN MORE</a>
            </div>

            <div className='second-box img_box'>
                
            </div>

            <div className='third-box img_box'>

            </div>

            <div className='fourth-box text-box'>
                <h3 className='text-box__title'>Stand out to the right audience</h3>
                <p className='text-box__description'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                <a href="#" className='fourth-box__learn-more_btn learn-more_btn'>LEARN MORE</a>
            </div>

            <div className='fifth-box img_box text-and-img'>
                <h3 className='text-and-img__title'>Graphic Design</h3>
                <p className='text-and-img__description'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>

            <div className='sixth-box img_box text-and-img'>
                <h3 className='text-and-img__title'>Photography</h3>
                <p className='text-and-img__description'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>

        </section>
)
}

export default CardsSection
