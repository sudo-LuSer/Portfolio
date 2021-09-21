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