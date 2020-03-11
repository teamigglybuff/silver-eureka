import React from 'react';
import Login from '../components/Login.jsx';

function MainContainer() {

 function onLoginSubmit(){
    
  }
  return (
    <div>
      <p>Hoi Redux!</p>
      <Login onLoginSubmit = {this.onLoginSubmit} />
    </div>
  );
}

export default MainContainer;
