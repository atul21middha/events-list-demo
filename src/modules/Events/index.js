import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {onGetEventsList} from "../../redux/actions/Events";
import EventsList from "./EventsList";
import Calendar from "./Calendar";

const Events = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetEventsList())
  }, [dispatch]);

  return (
    <div className='mt-3 p-5'>

      <EventsList/>
      <Calendar/>
    </div>
  );
};

export default Events;