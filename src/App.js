import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Events from "./modules/Events";

const App = () => {

  return (
    <div>
      <Header/>
      <Events/>
    </div>
  );
};

export default App;