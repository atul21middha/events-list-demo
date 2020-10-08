import React from 'react';
import Calendar from 'react-calendar';
import {getDateFromUTC} from "../../../utils/dateHelpers";
import InfiniteCalendar from 'react-infinite-calendar';

const EventCalendar = ({eventsList}) => {

  const getDateColor = (date) => {
    const updatedDate = getDateFromUTC(date);
    const eventDates = eventsList.map(item => getDateFromUTC(item.start));
    if (eventDates.includes(updatedDate)) {
      return "red"
    }
    return "";
  };

  return (
    // <div style={{position: 'sticky', top: 100, bottom: 0, zIndex: 2}}>
    //   <Calendar
    //     style={{backgroundColor: 'red'}}
    //     tileClassName={({activeStartDate, date, view}) => getDateColor(date)}/>
    // </div>
    <InfiniteCalendar
      className='ml-auto'
    />
  );
};

export default EventCalendar;