import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBannar from './AppoinmentBannar';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBannar date={date} setDate={setDate}></AppoinmentBannar>
            <AvailableAppoinment date={date}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;