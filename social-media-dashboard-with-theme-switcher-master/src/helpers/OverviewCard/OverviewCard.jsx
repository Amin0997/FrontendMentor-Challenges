import './OverviewCard.scss'
import overviewCardData from '../../overviewCard.json'

const redText = {
    color: 'red'
}

function OverviewCard() {
    return (
        <section className="overview-cards">

            {overviewCardData.map((cardData, index) => (
                <div className="overview-card" key={index}>
                    <p className='overview-card__title'>{cardData.cardTitle}</p>

                    <img className='overview-card__social-media_img' src={cardData.cardIcon} alt="" />

                    <p className="overview-card__counter">{cardData.cardCounter}</p>

                    <p className='overview-card__daily-change'>
                        <img className='overview-card__social-media_arrow' 
                        src={cardData.dailyChangeArrow} alt="" />
                        {cardData.dailyChangeArrow.includes("icon-down.svg") ? (
                            <span style={redText}>{cardData.cardDailyChange}</span>
                        ) : (
                            <span>{cardData.cardDailyChange}</span>
                        )}
                    </p>
                </div>
                
            ))}
        </section>
    )
}

export default OverviewCard