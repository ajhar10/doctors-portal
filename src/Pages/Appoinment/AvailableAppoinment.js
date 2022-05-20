import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    // const [services, setServices] = useState([])
    const formattedDate = format(date, 'PP');
    //React Query
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    return (
        <div>
            <h4 className='text-center text-secondary text-xl my-8'>Available Services on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12'>
                {
                    services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
                    )
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            >
            </BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;