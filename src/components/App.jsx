import ('../../styles/index.scss');
import React from 'react';
import tomato from '../images/tomato.jpg';


const App = () => {
  return (
    <div>
      <h1>HI, REACT APP</h1>
      <img src={tomato} alt="tomato" width="250"/>
    </div>
  );
};

export default App;