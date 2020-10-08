export const validateData = (data) => {
  let ERROR = false;
  let errors = {};
  if (data.destination === '') {
    ERROR = true;
    errors.destination = "Destination is required "
  }
  if (data.date === '') {
    ERROR = true;
    errors.date = "Date is required"
  }
  if (data.comment === '') {
    ERROR = true;
    errors.comment = "Comment is required "
  }
  if (data.duration === '') {
    ERROR = true;
    errors.duration = "Comment is required "
  }
  return {ERROR, errors};
};