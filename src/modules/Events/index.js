import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onGetEventsList} from "../../redux/actions/Events";
import EventsList from "./EventsList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AddEvent from "./AddEvent";
import InfoView from "../../components/InfoView";
import EventCalendar from "./EventCalendar";

const Events = () => {
  const dispatch = useDispatch();
  const [showAddDialog, setShowAddDialog] = useState(false);

  const {eventsList} = useSelector(({events}) => events);

  useEffect(() => {
    dispatch(onGetEventsList())
  }, [dispatch]);

  const toggleShowAddDialog = () => setShowAddDialog(!showAddDialog);

  return (
    <div className='mt-3 p-5'>
      <div className='text-right mb-5'>
        <Button variant='primary' onClick={toggleShowAddDialog}>Add Event</Button>
      </div>
      {eventsList.length > 0 ?
      <Row>
        <Col><EventsList/></Col>
        <Col>
          <EventCalendar eventsList={eventsList}/>
        </Col>
      </Row> : <div>No Events listed!</div>}
      <InfoView/>
      {showAddDialog && <AddEvent show={showAddDialog} handleClose={toggleShowAddDialog}/>}
    </div>
  );
};

export default Events;