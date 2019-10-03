import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Price extends Component
{ 
	render()
	{
		return (
		 <div className="pricebox">
     <div className="title">
       <span>{this.props.value}</span> 
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
        <p> <i class="fa fa-check-circle"></i> 1 year of updates</p>
        <p> <i class="fa fa-check-circle"></i> 1 year of Sketch Cloud</p>
      </div>
      <br/>
      <div className="button"> 
        <a href="#" id="btn">Buy Sketch</a>
      </div>
     </div>
     </div>)
		;
	}
}
export default Price;