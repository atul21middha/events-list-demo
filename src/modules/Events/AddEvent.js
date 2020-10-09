import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {onAddNewEvent, onUpdateEvent} from "../../redux/actions/Events";
import {useDispatch} from "react-redux";
import DatePicker from "react-datepicker";
import {validateData} from "../../components/Validation";
import {convertDateToISO, getDateString} from "../../utils/dateHelpers";


const AddEvent = ({show, handleClose, event}) => {

  const dispatch = useDispatch();
  const [destination, setDestination] = useState(event ? event.destination : '');
  const [date, setDate] = useState(event ? getDateString(event.start, 'ddd MMM DD YYYY kk:mm:ss Z') : '');
  const [duration, setDuration] = useState(event ? event.duration : '');
  const [comment, setComment] = useState(event ? event.comment : '');
  const [validationErrors, setValidationErrors] = useState({});

  const getErrorMessage = (property) => {
    if(validationErrors.errors && validationErrors.errors[property]) {
      return (
        <div className='text-danger'>{validationErrors.errors[property]}</div>
      )
    }
  };

  const onSubmitForm = () => {
    let validateForm = validateData({destination, date, duration, comment});
    if (validateForm.ERROR) {
      setValidationErrors(validateForm)
    } else {
      onSaveEvent();
    }
  };

  const onSaveEvent = () => {
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
          start: convertDateToISO(date)
        };
        dispatch(onAddNewEvent(data));
      }
    }
    handleClose();
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
                onChange={(e) => {
                  setDestination(e.target.value)
                  setValidationErrors({})
                }}
              />
              {getErrorMessage('destination')}
            </div>
          </div>
          <div>
            <label>Start Date</label>
            <div>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                placeholderText="Start Date"
                className="w-100 mb-2"
                showTimeInput
                disabled={event}
                selected={date}
                onChange={value => {
                  setDate(value)
                  setValidationErrors({})
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
                onChange={(e) => {
                  setDuration(e.target.value)
                  setValidationErrors({})
                }}
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
                onChange={(e) => {
                  setComment(e.target.value)
                  setValidationErrors({})
                }}
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
        <Button variant="primary" onClick={onSubmitForm}>
          {event ? 'Save' : 'Add'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEvent;