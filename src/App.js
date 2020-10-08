import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import './styles/styles.css';
import Header from "./components/Header";
import Events from "./modules/Events";
import {useSelector} from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
  const {loading} = useSelector(({common}) => common);

  return (
    <div style={{position: 'relative'}}>
      <Header/>
      <Events/>
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
    </div>
  );
};

export default App;