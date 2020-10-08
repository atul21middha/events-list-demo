import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onGetEventsList} from "../../redux/actions/Events";
import EventsList from "./EventsList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AddEvent from "./AddEvent";
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
    <React.Fragment>
      {eventsList.length > 0 ?
        <div className=' px-5 py-5 mt-3 d-flex justify-content-center align-items-center'>
          <Row>
            <Col><EventsList/></Col>
            <Col>
              <div className='text-right mt-n5 mb-2 ml-n5'>
                <Button variant='primary' onClick={toggleShowAddDialog}>Add Event</Button>
              </div>
              <EventCalendar eventsList={eventsList}/>
            </Col>
          </Row>
        </div>
        :
          <div className='noEvents'>
            <h3 className="gx-font-weight-bold gx-my-4">No Events Listed!</h3>
            <Button variant='primary' onClick={toggleShowAddDialog}>Add Event</Button>
          </div>
      }
      {showAddDialog && <AddEvent show={showAddDialog} handleClose={toggleShowAddDialog}/>}
    </React.Fragment>
  );
};

export default Events;