import React from 'react';
import Chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';


const Bannar = () => {
    return (
        <div>
            <div className="hero min-h-screen  px-12 bg-bannar-bg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Start</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;