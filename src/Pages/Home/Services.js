import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import service from './Service';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
        {
            _id: 3,
            img: whitening,
            title: 'Whitening Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-2xl text-primary uppercase font-bold'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12 mt-16'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;