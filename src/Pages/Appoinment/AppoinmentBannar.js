import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appoinmentBannar from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
const AppoinmentBannar = ({ date, setDate }) => {

    return (
        <div>
            <div class="hero min-h-screen" style={{
                background: `url(${appoinmentBannar})`
            }}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="appoinmentBannar" />
                    <div>
                        <p>Selected Date:</p>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBannar;