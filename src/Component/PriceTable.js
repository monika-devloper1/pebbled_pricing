import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Price extends Component
{ 
	render()
	{
		
		return (
		 <div className="pricebox">
     <div className="title">
       <span>{this.props.value.name}</span> <br/>
        {this.props.value.devies} <br/>
        {this.props.value.rangeinput}
       <br/>
     </div>
     <div className={this.props.value.className}>
        <div className="tag" id={this.props.value.priceclass}> ${this.props.value.cost}{this.props.value.costspan}</div>
        <span>Renewing your license?</span><br/>
      {this.props.value.paybtn}
        <span id={this.props.value.hidecss}> </span>
      </div>
      <div className="footer">
      <div className="detalis">
        <p> <i className="fa fa-check-circle"></i> 1 year of updates</p>
        <p> <i className="fa fa-check-circle"></i> 1 year of Sketch Cloud</p>
      </div>
      <br/>
      <div className=""> 
        <a href="#" id={this.props.value.btnid}>Buy Sketch</a>
      </div>
     </div>
     </div>)
		;
	}

}
export default Price;