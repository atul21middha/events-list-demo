import React from 'react';
import {useSelector} from "react-redux";
import EventItem from "./EventItem";

const EventsList = () => {
  const {eventsList} = useSelector(({events}) => events);

  console.log("eventsList", eventsList)

  return (
    <React.Fragment>
      {eventsList.map(event => <EventItem key={event.id} event={event}/>)}
    </React.Fragment>
  );
};

export default EventsList;