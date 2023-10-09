import React from 'react'
import './ThirdSection.scss'
import textData from '../../../text-data.json'
import ThirdSectionImg from '../../../images/illustration-laptop-desktop.svg'
import TitleAndText from '../../../helpers/TitleAndText/TitleAndText'


function ThirdSection() {

    const freeOpenSimple = textData["Free, open, simple"];
    const powerfulTooling = textData["Powerful tooling"];

    return (
        <section className="thirdSection">

            <img className='thirdSectionImg' src={ThirdSectionImg} alt="ThirdSectionImage" />

            <div className="title-and-text__container">

                <TitleAndText
                    title = {freeOpenSimple.title}
                    titleColor={freeOpenSimple.textColor}
                    text = {freeOpenSimple.text}
                    textColor={freeOpenSimple.textColor}
                />

                <TitleAndText
                    title = {powerfulTooling.title}
                    titleColor={powerfulTooling.textColor}
                    text = {powerfulTooling.text}
                    textColor={powerfulTooling.textColor}
                />

            </div>

        </section>
    )
}

export default ThirdSection