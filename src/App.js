import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import './styles/styles.css';
import Header from "./components/Header";
import Events from "./modules/Events";
import InfoView from "./components/InfoView";

const App = () => {

  return (
    <div className='position-relative'>
      <Header/>
      <Events/>
      <InfoView/>
    </div>
  );
};

export default App;