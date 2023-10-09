import React from 'react'
import './TitleAndText.scss'

function TitleAndText({title, titleColor, text, textColor}) {
    return (
        <section className="title-and-text">

            <h4 className="title-and-text__title" style={{color: titleColor}} >{title}</h4>

            <p className="title-and-text__text" style={{color: textColor}}>{text}</p>

        </section>
    )
}

export default TitleAndText