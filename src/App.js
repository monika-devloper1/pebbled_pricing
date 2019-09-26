import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="wapper">
 
        <input type="hidden" id="pricehide" name=""/>
         <input type="hidden" id="isless" value="0" name=""/>
        
          <div className="pricediv">
 <div className="pricebox">
     <div className="title">
       <span>Personal License</span> 
       <br/>
     </div>
     <div className="price">
        <div className="tag" id="Personal">$99</div>
        <span>Renewing your license?</span><br/>
        <a href="#" id="payless">Pay less</a>
        <span id="muted"> </span>
      </div>
      <div className="footer">
      <div className="detalis">
        <p> <i className="fa fa-check-circle"></i> 1 year of updates</p>
        <p> <i className="fa fa-check-circle"></i> 1 year of Sketch Cloud</p>
      </div>
      <br/>
      <div className="button"> 
        <a href="#" id="btn">Buy Sketch</a>
      </div>
     </div>
     </div>
     <div className="pricebox">
     <div className="title">
       <span>Volume License<br/><b id="result" >2 devices</b></span> <br/>
     <input type="range" min="2" max='50' value="2" step="1" id="price"/>
     </div>
     <div className="price discount" >
        <div className="tag" id="discount">$89<span >/device</span></div>
        <span>Renewing your license?</span><br/>
        <a href="#" id="paylessdis" className="payless" >Pay less</a>
      <span id="muteddis"> </span>
      </div>
      <div className="footer">
      <div className="detalis">
        <p> <i  className="fa fa-check-circle"></i> 1 year of updates</p>
        <p> <i   className="fa fa-check-circle"></i> 1 year of Sketch Cloud</p>
      </div>
      <br/>
      <div className="button"> 
        <a href="#" id="disbtn">Buy Sketch</a>
      </div>
     </div>
     </div>
          </div>
           </div>

  );
}

export default App;

