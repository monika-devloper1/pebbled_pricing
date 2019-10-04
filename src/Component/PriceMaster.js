import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PriceTable from "./PriceTable";

class Pricecomp extends Component
{
	state={
		pricetables:[
		 {id:1,value:{
		 	name:"Personal License",
		 	cost:99,
		 	className:'price',
		 	priceclass:'Personal',
		 	 paybtn:  <a href="#" name="paylessa" onClick={this.Paylessbutton}  >Pay less</a>
		 	}},
		 {id:2,value:{
		 	name:"Volume License",
		 	devies: <b id='result' >2 devices</b> ,
		    rangeinput: <input type="range" onChange={this.handleChange} min="2" max='50' value="2" step="1" id="price"/>,
		    cost:89,
		    costspan:<span >/device</span>,
		    className:'price discount',
		    priceclass:'discount',
		    paybtn:  <a href="#" name="paylessa" onClick={this.Paylessbutton} >Pay less</a>

		}},
		   
		]
	};
	  handleChange(event) {
    	var p = document.getElementById("price"),
		  res = document.getElementById("result");
 
	p.addEventListener("input", function() { 
  if(p.value==50)
  {
    res.innerHTML =   p.value+"+ devices";
  }
  else
  {
    res.innerHTML =   p.value+" devices";
  }
  var res1 = document.getElementById("isless").value;
  document.getElementById("pricehide").value=p.value;
  var i1;
  var i2;
  var i3;
  var i4;
  if(res1==0)
  {
    i1=89;
    i2=79;
    i3=69;
    i4=59;
  }
  else
    {
      i1=64;
      i2=59;
      i3=54;
      i4=49;
    }
  var p1 = document.getElementById("pricehide").value;
  var setvalue=i1;
  if((p1>10 && p1<20) || p1==10 )
  {
    setvalue=i2
  }
  else if((p1>20 && p1<50) || p1==20)
  {
    setvalue=i3
  }
  else if(p1==50)
  {
    setvalue=i4
  }
  
   
 document.getElementById("discount").innerHTML='$'+setvalue+'<span style="font-size: 1.875rem;color: black!important">/device</span>';
   
  });
}

 Paylessbutton()
 {
 	var msg="<br>This is an exclusive price for<br> existing customers.";

   document.getElementById("isless").value=1;
	var res2 = document.getElementById("isless").value;
	var i1;
  var i2;
  var i3;
  var i4;
  if(res2==0)
  {
    i1=89;
    i2=79;
    i3=69;
    i4=59;
  }
  else
    {
      i1=64;
      i2=59;
      i3=54;
      i4=49;
    }
  var p1 = document.getElementById("pricehide").value;
  var setvalue=i1;
  if((p1>10 && p1<20) || p1==10 )
  {
    setvalue=i2
  }
  else if((p1>20 && p1<50) || p1==20)
  {
    setvalue=i3
  }
  else if(p1==50)
  {
    setvalue=i4
  }
  
   
  document.getElementById("discount").innerHTML='$'+setvalue+'<span style="font-size: 1.875rem;color: black!important">/device</span>';
   document.getElementById("muted").innerHTML=msg;
	
	document.getElementById("Personal").innerHTML="$69";
	document.getElementById("btn").innerHTML="Renew Sketch";
	alert(document.getElementsByClassName('paylessa'));
	
	
 }



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