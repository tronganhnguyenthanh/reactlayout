import React from 'react';
import Menu from '../component/menu';
import BackgroundImage from '../component/backgroundImage';
import Text from '../component/text';
import '../css/style.css';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-end">
            <Menu/>
            <BackgroundImage/>
            <Text/>
          </div>  
        </div>   
      </div> 
    </div>
  );
}

export default App;
