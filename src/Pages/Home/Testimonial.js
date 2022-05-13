import React from 'react';
import quote from '../../assets/icons/quote.svg'

import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people3
        },
    ];
    return (
        <section className='px-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonials</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-12'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;