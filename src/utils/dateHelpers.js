import moment from "moment";

export const getDateString = (date, format= 'DD/MM/YYYY') => {
  const updatedDate = getDateFromUTC(date,'ddd MMM DD YYYY kk:mm:ss Z') ;
  return new Date(updatedDate);
};

export const getDateFromUTC = (date, format = 'DD/MM/YYYY') => {
  return moment(date).utc().format(format)
};

export const getDateInDesiredFormat = (date, format = 'DD/MM/YYYY') => {
  return moment(date).format(format)
};

export const convertDateToISO = (date) => {
  moment(date).toISOString()
};