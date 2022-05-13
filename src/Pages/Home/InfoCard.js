import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor, cardDetail }) => {

    return (
        <>
            <div className={`card lg:card-side bg-accent ${bgColor} pl-8 pt-6`}>
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardDetail}</p>
                </div>
            </div>
        </>
    );
};

export default InfoCard;