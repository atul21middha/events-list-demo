import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import {useSelector} from "react-redux";

const InfoView = () => {
  const {loading} = useSelector(({common}) => common);

  return (
    <React.Fragment>
      {loading && <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3
      }} className="">
        <Spinner animation="border"/>
      </div>}
    </React.Fragment>
  );
};

export default InfoView;