import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {onAddNewEvent, onUpdateEvent} from "../../redux/actions/Events";
import {useDispatch} from "react-redux";
import DatePicker from "react-datepicker";
import moment from 'moment';
import {validateData} from "../../components/Validation";


const AddEvent = ({show, handleClose, event}) => {
  // console.log("date", moment(event.start).utc().format('YYYY/MM/DD'))
  const dispatch = useDispatch();
  const [destination, setDestination] = useState(event ? event.destination : '');
  const [date, setDate] = useState(event ? '' : '');
  const [duration, setDuration] = useState(event ? event.duration : '');
  const [comment, setComment] = useState(event ? event.comment : '');
  const [validationErrors, setValidationErrors] = useState({});

  const onSaveEvent = () => {
    let validateForm = validateData({destination, date, duration, comment});
    if (validateForm.ERROR) {
      setValidationErrors(validateForm)
    } else {
      if (event) {
        const data = {
          ...event, destination, comment
        };
        dispatch(onUpdateEvent(data));
      } else {
        if (destination !== "") {
          const data = {
            destination,
            duration, comment,
            start: moment(date).toISOString()
          };
          dispatch(onAddNewEvent(data));
        }
      }
      handleClose();
    }
  };

  const getErrorMessage = (property) => {
    if(validationErrors.errors && validationErrors.errors[property]) {
      return (
    <div className='text-danger'>{validationErrors.errors[property]}</div>
      )}
  };


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{event ? 'Edit Event Details' : 'Add New Event'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div>
            <label>Destination</label>
            <div>
              <input
                name="destination"
                required
                type="text"
                placeholder="Destination"
                value={destination}
                className="w-100 mb-2"
                onChange={(e) => setDestination(e.target.value)}
              />
              {getErrorMessage('destination')}
            </div>
          </div>
          <div>
            <label>Start Date</label>
            <div>
              <DatePicker style={{display: 'block'}}
                dateFormat="dd-MM-yyyy"
                placeholderText="Start Date"
                className="w-100 mb-2 d-block"
                showTimeInput
                disabled={event}
                selected={date}
                onChange={value => {
                  console.log("value", value)
                  setDate(value)
                }}
              />
              {getErrorMessage('date')}
            </div>
          </div>
          <div>
            <label>Duration</label>
            <div>
              <input
                name="title"
                type="number"
                disabled={event}
                placeholder="Duration(in days)"
                value={duration}
                className="w-100 mb-2"
                onChange={(e) => setDuration(e.target.value)}
              />
              {getErrorMessage('duration')}
            </div>
          </div>
          <div>
            <label>Comment</label>
            <div>
              <input
                name="title"
                type="text"
                placeholder="Comment"
                value={comment}
                className="w-100 mb-2"
                onChange={(e) => setComment(e.target.value)}
              />
              {getErrorMessage('comment')}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSaveEvent}>
          {event ? 'Save' : 'Add'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEvent;