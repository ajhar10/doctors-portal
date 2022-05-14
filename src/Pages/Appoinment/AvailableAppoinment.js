import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h4 className='text-center text-secondary text-xl my-8'>Available Services on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;