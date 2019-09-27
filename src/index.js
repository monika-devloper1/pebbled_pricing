import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var msg="<br>This is an exclusive price for<br> existing customers.";
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
	
	if(res1==0){discountupdate();}else{discountupdateless();}
}, false); 

var pay =document.getElementById("payless");
var paylessdis =document.getElementById("paylessdis");
var buy =document.getElementById("buy");
var renew =document.getElementById("renew");
pay.addEventListener("click",function()
{
	LessDiscount();
	
	
},false);

renew.addEventListener("click",function()
{
	LessDiscount();
	
	
},false);
paylessdis.addEventListener("click",function()
{
LessDiscount();
	
},false);
buy.addEventListener("click",function()
{
	discountupdate();
	document.getElementById("muted").innerHTML="";
	document.getElementById("muteddis").innerHTML="";
	pay.innerHTML='<a href="#" id="payless">Pay less</a>';
	document.getElementById("paylessdis").innerHTML='<a href="#" id="payless">Pay less</a>';
	document.getElementById("Personal").innerHTML="$99";
	document.getElementById("disbtn").innerHTML="Buy Sketch";
	document.getElementById("btn").innerHTML="Buy Sketch";
	document.getElementById("isless").value=0;
	
},false);
function LessDiscount()
{
	document.getElementById("isless").value=1;
	var res2 = document.getElementById("isless").value;
	if(res2==0){discountupdate();}else{discountupdateless();}
	main();
}
function main()
{
	document.getElementById("muted").innerHTML=msg;
	document.getElementById("muteddis").innerHTML=msg;
	pay.innerHTML="";
	document.getElementById("paylessdis").innerHTML="";
	document.getElementById("Personal").innerHTML="$69";
	document.getElementById("disbtn").innerHTML="Renew Sketch";
	document.getElementById("btn").innerHTML="Renew Sketch";
}
function discountupdate()
{

	var p1 = document.getElementById("pricehide").value;
	var setvalue=89;
	if((p1>10 && p1<20) || p1==10 )
	{
		setvalue=79
	}
	else if((p1>20 && p1<50) || p1==20)
	{
		setvalue=69
	}
	else if(p1==50)
	{
		setvalue=59
	}
	document.getElementById("discount").innerHTML='$'+setvalue+'<span style="font-size: 1.875rem;color: black!important">/device</span>';
}
function discountupdateless()
{
	
	var p1 = document.getElementById("pricehide").value;
	var setvalue=64;
	if((p1>10 && p1<20) || p1==10 )
	{
		setvalue=59
	}
	else if((p1>20 && p1<50) || p1==20)
	{
		setvalue=54
	}
	else if(p1==50)
	{
		setvalue=49
	}
	document.getElementById("discount").innerHTML='$'+setvalue+'<span style="font-size: 1.875rem;color: black!important">/device</span>';
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

