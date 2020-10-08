import React from 'react';
import Card from "react-bootstrap/Card";

const EventItem = ({event}) => {
  return (
   <Card className='mb-2'>
     <div>{event.destination}</div>
   </Card>
  );
};

export default EventItem;