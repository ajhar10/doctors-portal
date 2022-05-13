import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, description } = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div className='flex items-center'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                                <img src={img} alt='badge' />
                            </div>

                        </div>
                        <div>
                            <h3 className='text-xl'>{name}</h3>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;