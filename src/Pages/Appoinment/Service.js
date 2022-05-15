import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div class="card lg:max-w-lg shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-2xl text-secondary">{service.name}</h2>
                <p>{
                    service.slots.length > 0 ?
                        <span>{service.slots[0]}</span>
                        :
                        <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p>{service.slots.length} {service.slots.length > 0 ? 'spaces' : 'space'} available </p>
                <div class="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        for="booking-modal"
                        class="btn text-white font-bold btn-sm btn-primary bg-gradient-to-r from-secondary to-primary"
                        disabled={service.slots.length === 0}>
                        Booking Appoinment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;