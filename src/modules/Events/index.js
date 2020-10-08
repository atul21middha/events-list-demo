import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {onGetEventsList} from "../../redux/actions/Events";
import EventsList from "./EventsList";
import Calendar from "./Calendar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Events = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetEventsList())
  }, [dispatch]);

  return (
    <div className='mt-3 p-5'>
      <Container>
        <Row>
          <Col><EventsList/></Col>
          <Col> <Calendar/></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;