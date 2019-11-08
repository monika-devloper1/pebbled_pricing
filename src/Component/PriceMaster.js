import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PriceTable from "./PriceTable";

class Pricecomp extends Component
{
constructor(props) {
  
    super(props)
   this.state={
		pricetables:[
		 {id:1,value:{
		 	name:"Personal License",
		 	cost:99,
		 	className:'price',
		 	priceclass:'Personal',
		 	paybtn:  <a href="#" id="pay" onClick={this.Paylessbutton.bind(this)}  >Pay less</a>,
		 	hidecss:'muted',
		 	btnid:'btn'

		 	}},
		 {id:2,value:{
		 	name:"Volume License",
		 	devies: <b id='result' >2 devices</b> ,
		    rangeinput: <input type="range" onChange={this.handleChange.bind(this)} min="2" max='50'  step="1" id="price"/>,
		    cost:89,
		    costspan:<span >/device</span>,
		    className:'price discount',
		    priceclass:'discount',
		    paybtn:  <a href="#" id="paylessa"  onClick={this.Paylessbutton.bind(this)} >Pay less</a>,
		    hidecss:'mutedis',
		    btnid:'btndis'

		}},
		   
		],
		payactive:"buy active",
		lessactive:"renew",
		opacity: "opacity0",
    opacity1: "opacity0",
    opacity2: "opacity0",
    opacity3: "opacity1",
    transform:{
   transform: `scale(0.995) translate(0px, 2px)`
},
count:0.99
		
	};
	  this.Paybutton = this.Paybutton.bind(this)
	   this.Paylessbutton = this.Paylessbutton.bind(this)
		this.handleChange=this.handleChange.bind(this)
	 }
	render()
	{

		const {pricetables}=this.state;
		const lessactive=this.state.lessactive;
		const payactive=this.state.payactive;
		const opacity1=this.state.opacity1;
		const opacity=this.state.opacity;
		const opacity2=this.state.opacity2;
		const opacity3=this.state.opacity3;
		const transform=this.state.transform;
		return  (<div>
     <div >
       
      
       <h1 className="content">The right price for<br />you, whoever you are
       </h1>
       <h2 className="contentdetlais">Whether you’re a freelancer or need Sketch for a whole team <br />our pricing just makes sense. Renewing your license? We offer a<br /> discount for returning customers too.</h2>
     </div>
      <nav className="tabs " id="navprice">
              <a href="#"  className={payactive} onClick={this.Paybutton} id="buy" >Buy new license</a>
              <a href="#" className= {lessactive} onClick={this.Paylessbutton} id="renew">Renew existing license</a>
            </nav>

        <input type="hidden" id="pricehide" name=""/>
         <input type="hidden" id="isless" value="0" name=""/>
        
            <div className="pricediv">
           {pricetables.map(price=> (
           	<PriceTable key={price.id} value={price.value} />
           	))} 
        
    
          </div>
         
   <div className="pricing-explained-shapes" style={transform}>
    <img className={'price-shape shape-01 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-01.svg" />
    <img className={'price-shape shape-02 shape-original ' + opacity3} src="https://www.sketch.com/images/pages/pricing/shape-02.svg" />
    <img className={'price-shape shape-04 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-04.svg" />
    <img className={'price-shape shape-05 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-05.svg" />
    <img className={'price-shape shape-06 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-01.svg" />
    <img className={'price-shape shape-08 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-02.svg" />
    <img className={'price-shape shape-09 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-04.svg" />
    <img className={'price-shape shape-11 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-02.svg" />
    <img className={'price-shape shape-12 shape-original ' + opacity3}  src="https://www.sketch.com/images/pages/pricing/shape-02.svg" />
    <img className={'price-shape shape-03 shape-original shape-ball'} src="https://www.sketch.com/images/pages/pricing/shape-03.svg"/>    
    <img className={'price-shape shape-07 shape-original shape-ball'} src="https://www.sketch.com/images/pages/pricing/shape-03.svg"/>
    <img className={'price-shape shape-10 shape-original shape-ball'} src="https://www.sketch.com/images/pages/pricing/shape-03.svg"/>
    <img className={'price-shape shape-14 shape-original shape-ball'} src="https://www.sketch.com/images/pages/pricing/shape-03.svg"/>
    <img className={'price-shape shape-15 shape-original shape-ball'} src="https://www.sketch.com/images/pages/pricing/shape-03.svg"/>
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s1 ' + opacity1} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s2 ' + opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s3 ' + opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />  
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s4 ' + opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s5 ' + opacity} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s6 ' + opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s7 ' + opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s8 ' + opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s9 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s10 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s11 '    + opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s12 ' + opacity1} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s13 ' + opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s14 ' + opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s15 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s16 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s17 '+ opacity2} src="https:/www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s18 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s19 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s20 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s21 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s22 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s23 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s24 '+ opacity2}src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s25 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s26 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s27 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s28 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s29 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s30 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s31 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s32 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg"  />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s33 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s34 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s35 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s36 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s37 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s38 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s39 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s40 ' + opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s41 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s42 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s43 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s44 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s45 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s46 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s47 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s48 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s49 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s50 ' + opacity1} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s51 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s52 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s53 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-1 s54 '+ opacity} src="https://www.sketch.com/images/pages/pricing/shape-02-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s55 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s56 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s57 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-03-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-2 s58 '+ opacity1} src="https://www.sketch.com/images/pages/pricing/shape-01-sm.svg" />
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s59 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg"/>
    <img className={'price-shape shape-03 shape-ball ball-type type-3 s60 '+ opacity2} src="https://www.sketch.com/images/pages/pricing/shape-04-sm.svg"/>    
   
    </div>
     </div>
       );
		
	}
	handleChange(event) {
		
		var p = document.getElementById("price"),
		res = document.getElementById("result");
 		
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
  var d=p1+'px';
  var f='0.0'+(p1+5);
  
  var dr=0.995-f;
 
 var tr='scale('+dr+') translate(0px,'+d+') ';
  this.setState({transform:{
      'transform': tr
}});
  var setvalue=i1;
  if(p1<10)
  {
	  this.setState({opacity:"opacity0"});
  	this.setState({opacity1:"opacity0"});
  	this.setState({opacity2:"opacity0"});
  	this.setState({opacity3:"opacity1"});
  	
  }
  else if((p1>10 && p1<20) || p1==10 )
  {
  	this.setState({opacity: "opacity1"});
  	this.setState({opacity1:"opacity0"});
  	this.setState({opacity2:"opacity0"});
  	this.setState({opacity3:"opacity1"});
  	
  	
    setvalue=i2
  }
  else if((p1>20 && p1<50) || p1==20)
  {
  	this.setState({opacity:"opacity1"});
  	this.setState({opacity1:"opacity1"});
  	this.setState({opacity2:"opacity0"});
  		this.setState({opacity3:"opacityless"});
    setvalue=i3
  }
  else if(p1==50)
  {
  	this.setState({opacity:"opacity1"});
  	this.setState({opacity1: "opacity1"});
  	this.setState({opacity2: "opacity1"});
  	this.setState({opacity3: "opacityless1"});
    setvalue=i4
  }
  
   
 document.getElementById("discount").innerHTML='$'+setvalue+'<span className="discountdev">/device</span>';
 
}

 Paylessbutton()
 {
 	this.setState({payactive:'buy'});
 	this.setState({lessactive:'renew active'});
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
  
   
  document.getElementById("discount").innerHTML='$'+setvalue+'<span className="discountdev">/device</span>';
  document.getElementById("muted").innerHTML=msg;
	document.getElementById("pay").innerHTML=" ";
	document.getElementById("paylessa").innerHTML=" ";
	document.getElementById("Personal").innerHTML="$69";
	document.getElementById("btn").innerHTML="Renew Sketch";
	document.getElementById("btndis").innerHTML="Renew Sketch";
	document.getElementById("mutedis").innerHTML=msg;
	
	
 }
Paybutton()
 {

 	
 	this.setState({payactive:'buy active'});
 	this.setState({lessactive:'renew '});
 	var msg="";

   document.getElementById("isless").value=0;
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
  
   
  document.getElementById("discount").innerHTML='$'+setvalue+'<span className="discountdev">/device</span>';
  document.getElementById("muted").innerHTML=msg;
	document.getElementById("pay").innerHTML=" <a href='#' id='pay' onClick={this.Paylessbutton}  >Pay less";
	document.getElementById("paylessa").innerHTML=" <a href='#' id='paylessa'  onClick={this.Paylessbutton} >Pay less	";
	document.getElementById("Personal").innerHTML="$99";
	document.getElementById("btn").innerHTML="Buy Sketch";
	document.getElementById("btndis").innerHTML="Buy Sketch";
	document.getElementById("mutedis").innerHTML=msg;
	
	
 }
 
}
export default Pricecomp;