import './MainCard.scss'
import HeaderData from '../../headerData.json'

const redText = {
    color: 'red'
}

function MainCard() {

    return (
        <>
            {HeaderData.map((socialMedia, index) => (
                <div className="main-card" key={index} 
                style={{ borderTopColor: socialMedia.topBorderColor }}>
                    <p className="social-media__nickname">
                        <img src={socialMedia.icon} alt="" />
                        {socialMedia.nickname}
                    </p>

                    <p className="main-card__total-followers-counter">
                        {socialMedia.followers}
                        <span>followers</span>
                    </p>

                    <p className="main-card__daily-followers_counter">
                        <img src={socialMedia.dailyChangeArrow} alt="Social media icon"/>
                        {socialMedia.dailyChangeArrow.includes("icon-down.svg") ? (
                            <span style={redText}>{socialMedia.dailyChange} Today</span>
                        ) : (
                            <span>{socialMedia.dailyChange} Today</span>
                        )}
                    </p>

                </div>
            ))}
        </>
    )
}

export default MainCard