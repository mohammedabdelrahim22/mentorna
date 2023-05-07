// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './calnder.css';
// import { InlineWidget } from "react-calendly";
// import { Helmet } from 'react-helmet';
import { Component } from 'react';
import './calnder.css'
class CalendarTime extends Component {

    // const [date, setDate] = useState(new Date());

    // const handleDateChange = (newDate) => {
    //     setDate(newDate);
    // };

    // // تاريخ اليوم
    // const today = new Date();

    // // تاريخ المستقبل
    // const futureDate = new Date();
    // futureDate.setFullYear(today.getFullYear() + 3);
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }
    render() {
        return (

            // <div className='grid grid-cols-1 sm:grid-cols-2 pt-5 w-[100%]'>
            //     <Calendar
            //         onChange={handleDateChange}
            //         value={date}
            //         minDate={today}
            //         maxDate={futureDate}
            //     />
            //     <div className='date_buttons  pl-[60px]'>
            //         <div className='date_count w-[100%] h-[100%] mt-[30px]'>
            //             <button className='sub_font bg-[#F2F2F2] p-4  rounded-[20px] text-black mt-[10px]'>
            //                 7:00 AM - 7:30 AM
            //             </button>
            //             <button className='sub_font time_active p-4 rounded-[20px] text-black mt-[10px]'>
            //                 7:00 AM - 7:30 AM
            //             </button>
            //             <button className='sub_font  bg-[#F2F2F2]  text-black p-4 rounded-[20px] text-black mt-[10px]'>
            //                 7:00 AM - 7:30 AM
            //             </button>
            //         </div>
            //     </div>
            // </div>
            // <div className="w-100 h-[30vh]">
            //     <InlineWidget className="h-[3-vh]" url="https://calendly.com/mohammedabdelrahim42/30min" />
            // </div>
            <div>
                {/* <Helmet>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </Helmet> */}
                <div className="calendly-inline-widget mt-4"
                    data-url="https://calendly.com/mohammedabdelrahim42/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=f5a34c"
                    style={{ minWidth: '320px', height: '630px' }}>
                </div>
            </div>
        )
    }
};

export default CalendarTime;