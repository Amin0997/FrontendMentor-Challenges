import React from 'react'
import './DesignedSection.scss'
import textData from '../../../text-data.json'
import TitleAndText from '../../../helpers/TitleAndText/TitleAndText'
import illustrationEditor from '../../../images/illustration-editor-desktop.svg'

function DesignedSection() {
    
    const robustData = textData["Robust content management"];
    const introducingData = textData["Introducing an extensible editor"];

    return (
        <section className="designed-for-the-future">

            <h4 className="designed-for-the-future__title">Designed for the future</h4>

        <div className="title-and-text__container">
            <TitleAndText
                className="designed-for-the-future__title-and-text"
                title={introducingData.title}
                titleColor={introducingData.titleColor}
                text={introducingData.text}
                textColor={introducingData.textColor}
            />

            <TitleAndText
                className="title-and-text"
                title={robustData.title}
                titleColor={robustData.titleColor}
                text={robustData.text}
                textColor={robustData.textColor}
            />

            <img className='designedSectionImg' src={illustrationEditor} alt="illustrationEditorImage" />
        </div>



        </section>
    )
}

export default DesignedSection