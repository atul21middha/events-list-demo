import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import moment from 'moment';
import {useDispatch} from "react-redux";
import {BsFillTrashFill, BsPencil} from "react-icons/bs";
import {onDeleteEvent} from "../../../redux/actions/Events";
import DeleteDialog from "../../../components/DeleteDialog";


const EventItem = ({event}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const {destination, start, duration, comment} = event;
  const dispatch = useDispatch();

  const toggleShowDialog = () => setShowDeleteDialog(!showDeleteDialog);

  const onConfirmDelete = () => {
    dispatch(onDeleteEvent(event.id));
    toggleShowDialog();
  };

  return (
    <Card className='mb-2 bg-light p-3'>
      <div>
        <div className='d-flex align-items-center mb-3'>
          <h2>{destination}</h2>
          <div className='ml-auto d-flex align-items-center'>
            <BsPencil style={{cursor: 'pointer'}}/>
            <BsFillTrashFill className='ml-2' style={{cursor: 'pointer'}} onClick={toggleShowDialog}/>
          </div>
        </div>
        <div className='d-flex align-items-center'>
          <p className="text-grey">on {moment(start).format('LLLL')}</p>
          <p className='mx-auto'>for {duration} days</p>
        </div>
        <p>{comment}</p>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h4 className="text-primary mb-3">Are You ready to join?</h4>
          <ButtonGroup className="mb-1">
            <Button className="mb-0" type="primary">Yes</Button>
            <Button className="btn-warning mb-0">Maybe</Button>
            <Button className="btn-danger mb-0">No</Button>
          </ButtonGroup>
        </div>
      </div>
      {showDeleteDialog &&
      <DeleteDialog show={showDeleteDialog} handleClose={toggleShowDialog} onDelete={onConfirmDelete}/>}
    </Card>
  );
};

export default EventItem;