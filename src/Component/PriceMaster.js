import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PriceTable from "./PriceTable";

class Pricecomp extends Component
{
	state={
		pricetables:[
		 {id:1,value:"Personal License"},
		  {id:2,value:"Volume License"}
		
		]
	};
	render()
	{
		const {pricetables}=this.state;
		
		return  (<div className="wapper">
     <div>
       <h1 className="content">The right price for<br />you, whoever you are</h1>
       <h2 className="contentdetlais">Whether you’re a freelancer or need Sketch for a whole team <br />our pricing just makes sense. Renewing your license? We offer a<br /> discount for returning customers too.</h2>
     </div>
      <nav className="tabs " id="navprice">
              <a href="#"  className="buy active" id="buy" >Buy new license</a>
              <a href="#" className="renew" id="renew">Renew existing license</a>
            </nav>

        <input type="hidden" id="pricehide" name=""/>
         <input type="hidden" id="isless" value="0" name=""/>
        
            <div className="pricediv">
           {pricetables.map(price=> (
           	<PriceTable key={price.id} value={price.value} />
           	))} 
        
    
          </div>
        </div>
       );
		
	}
}
export default Pricecomp;