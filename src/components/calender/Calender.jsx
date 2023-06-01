
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import './calnder.css'
const CalendarTime = () => {

    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
    });

    return (
        <div>

            <InlineWidget url="https://calendly.com/mohammedabdelrahim42/30min"
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#f5a34c"
                pageSettings={{
                    backgroundColor: '#ffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '#f5a34c',
                    textColor: '4d5055'
                }}
            />
        </div>
    )
};

export default CalendarTime;