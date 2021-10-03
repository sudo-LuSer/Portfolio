setInterval(function(){

	var HiData=['Hello!','Bonjour!','Hola!','Nǐn hǎo!','Konnichiwa!'];

	var size = HiData.length;

	var random = Math.floor(Math.random(HiData)*size);

	document.getElementById('Hi').innerHTML=HiData[random];


},2000);

setInterval(function(){

	var HiData=['Programmer','FullStack Web developer','Competitive Programmer','Mathematics student'];

	var size = HiData.length;

	var random = Math.floor(Math.random(HiData)*size);

	document.getElementById('im').innerHTML=HiData[random];

},2000);

document.getElementById('talkbtn').onclick=function(){

	window.location.href='mailto:hhitar9485@gmail.com';

}

document.getElementById('Body').onload=function(){

	document.getElementById('Load').style.visibility="visible";

	setTimeout(function (){document.getElementById('Load').style.visibility="hidden";},100);

}

document.getElementById('menuXbtn').onclick=function(){

	document.getElementById('menuXbtn').style.visibility="hidden";

	document.getElementById('Body').style.visibility="hidden";

	document.getElementById('PhoneNav').style.visibility="visible";

	document.getElementById('Xbtn').style.visibility="visibile !important";

}

document.getElementById('Xbtn').onclick=function(){

	document.getElementById('menuXbtn').style.visibility="visible";

	document.getElementById('Body').style.visibility="visible";

	document.getElementById('PhoneNav').style.visibility="hidden";

}

document.getElementById('emailtn').onclick=function(){

	window.open("mailto:hhitar9485@gmail.com");

}

document.getElementById('wtsp').onclick=function(){

	window.open('tel:+212622622225');

}