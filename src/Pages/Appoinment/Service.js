import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service }) => {
    return (
        <div class="card lg:max-w-lg shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{service.name}</h2>
                <p>{
                    service.slots.length > 0 ?
                        <span>{service.slots[0]}</span>
                        :
                        <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p>{service.slots.length} {service.slots.length > 0 ? 'spaces' : 'space'} available </p>
                <div class="card-actions justify-center">
                    <PrimaryButton>Book Appoinment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Service;