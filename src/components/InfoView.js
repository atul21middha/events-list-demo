import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import {useSelector} from "react-redux";

const InfoView = () => {
  const {loading} = useSelector(({common}) => common);

  return (
    <React.Fragment>
      {loading  && <div className="loader">
        <Spinner animation="border"/>
      </div>}
    </React.Fragment>
  );
};

export default InfoView;