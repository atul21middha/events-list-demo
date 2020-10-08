import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onGetEventsList} from "../../redux/actions/Events";
import EventsList from "./EventsList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AddEvent from "./AddEvent";
import Calendar from 'react-calendar';
import moment from 'moment';

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
      <Row>
        <Col><EventsList/></Col>
        <Col>
          <div style={{position: 'sticky', top: 100, bottom: 0, zIndex: 2}}>
          <Calendar
            style={{backgroundColor: 'red'}}
          tileClassName={({activeStartDate, date, view}) => {
            const newDate = Date.parse(date);
            const updatedDate = moment.unix(newDate/1000).format("DD/MM/YYYY");
            const eventDates = eventsList.map(item => moment(item.start).utc().format('DD/MM/YYYY'))

            if(eventDates.includes(updatedDate)){
              return {backgroundColor: 'red'}
            }
          }}/>
          </div>
        </Col>
      </Row>
      {showAddDialog && <AddEvent show={showAddDialog} handleClose={toggleShowAddDialog}/>}
    </div>
  );
};

export default Events;