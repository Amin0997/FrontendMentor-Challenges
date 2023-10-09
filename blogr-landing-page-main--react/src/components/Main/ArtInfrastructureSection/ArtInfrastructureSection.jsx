import React from 'react'
import './ArtInfrastructureSection.scss'
import textData from '../../../text-data.json'
import TitleAndText from '../../../helpers/TitleAndText/TitleAndText'
import artInfrastructureImg from '../../../images/illustration-phones.svg'


function ArtInfrastructureSection() {

    const artInfrastructureData = textData["State of the Art Infrastructure"];

    return (
        <section className="art-Infrastructure">

            <img 
                className='art-Infrastructure__img' 
                src={artInfrastructureImg} 
                alt="ArtInfrastructureImage" />

            <div className="art-Infrastructure__title-and-text">

            <TitleAndText
                title={artInfrastructureData.title}
                titleColor={artInfrastructureData.titleColor}
                text={artInfrastructureData.text}
                textColor={artInfrastructureData.textColor}
            />
            </div>

        </section>
    )
}

export default ArtInfrastructureSection