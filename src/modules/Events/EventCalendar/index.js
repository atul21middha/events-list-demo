import React from 'react';
import Calendar from 'react-calendar';
import {getDateFromUTC} from "../../../utils/dateHelpers";


const EventCalendar = ({eventsList}) => {

  const getDateColor = (date) => {
    const updatedDate = getDateFromUTC(date);
    const eventDates = eventsList.map(item => getDateFromUTC(item.start));
    if (eventDates.includes(updatedDate)) {
      return "bg-primary"
    }
    return "";
  };

  return (
    <div style={{position: 'sticky', top: 100, bottom: 0, zIndex: 2}}>
      <Calendar
        className='ml-auto'
        tileClassName={({activeStartDate, date, view}) => getDateColor(date)}/>
    </div>
  );
};

export default EventCalendar;