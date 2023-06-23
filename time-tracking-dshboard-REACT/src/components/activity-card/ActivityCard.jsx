import React from 'react';
import './ActivityCard.css';
import { EllipsisImg } from '../../helpers/EllipsisSvg';

const ActivityCard = ({ title, totalTime, lastTime }) => {

    return (
        <div className={`${title.split(' ').join('-').toLowerCase()}__container activity-box`}>
            <div className="work__front-box front-box">
                <header className="activity-box__header">
                    <p className="activity-box__name">{title}</p>
                    {EllipsisImg}
                </header>
                <main className="activity-box__main">
                    <p className="work__total-time total-time">{totalTime}hrs</p>
                    <p className="work__last-time last-time">Last Week - {lastTime}hrs</p>
                </main>
            </div>
        </div>
    );
    
};
export default ActivityCard;
