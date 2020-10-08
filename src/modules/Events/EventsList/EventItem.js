import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {BsFillTrashFill, BsPencil} from "react-icons/bs";
import {onDeleteEvent} from "../../../redux/actions/Events";
import DeleteDialog from "../../../components/DeleteDialog";
import AddEvent from "../AddEvent";
import {getDateInDesiredFormat} from "../../../utils/dateHelpers";


const EventItem = ({event}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const {destination, start, duration, comment} = event;
  const dispatch = useDispatch();

  const toggleShowDialog = () => setShowDeleteDialog(!showDeleteDialog);

  const toggleShowAddDialog = () => setShowAddDialog(!showAddDialog);

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
            <BsPencil className='cursor' onClick={toggleShowAddDialog}/>
            <BsFillTrashFill className='ml-2 cursor' onClick={toggleShowDialog}/>
          </div>
        </div>
        <div className='d-flex align-items-center'>
          <p className="text-grey">on {getDateInDesiredFormat(start,'LLLL')}</p>
          <p className='mx-auto'>for {duration} days</p>
        </div>
        <p>{comment}</p>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h4 className="text-primary mb-3">Are you ready to join?</h4>
          <ButtonGroup className="mb-1">
            <Button className="mb-0" type="primary">Yes</Button>
            <Button className="btn-warning mb-0">Maybe</Button>
            <Button className="btn-danger mb-0">No</Button>
          </ButtonGroup>
        </div>
      </div>
      {showDeleteDialog &&
      <DeleteDialog show={showDeleteDialog} handleClose={toggleShowDialog} onDelete={onConfirmDelete}/>}
      {showAddDialog && <AddEvent show={showAddDialog} handleClose={toggleShowAddDialog} event={event}/>}
    </Card>
  );
};

export default EventItem;