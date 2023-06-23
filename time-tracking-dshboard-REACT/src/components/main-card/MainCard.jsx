import './MainCard.css'
import JeremyAvatar from '../../img/image-jeremy.png'
import weeklyUpdateBtn from '../../scripts/weeklyUpdateBtn'
import dailyUpdateBtn from '../../scripts/dailyUpdateBtn'
import monthlyUpdateBtn from '../../scripts/monthlyUpdateBtn'

function MainCard () {
    
    return (

        <div className="user__container">
            <div className="user__info">
                <img className="user-avatar" src={JeremyAvatar} alt='User Avatar'/>
                <p className="user__report-txt">Report for<br/>
                    <span className="user__name">Jeremy<br/> 
                        Robson</span>
                </p>
            </div>

            <div className="buttons-box">
                <button className="daily-btn date-btn" onClick={dailyUpdateBtn}>Daily</button>
                <button className="weekly-btn date-btn" onClick={weeklyUpdateBtn}>Weekly</button>
                <button className="monthly-btn date-btn" onClick={monthlyUpdateBtn}>Monthly</button>
            </div>
        </div>

    )
}

export default MainCard;
