var num = 1;
setInterval(function(){
	var img = document.getElementById('img');
	num++;
	if(num == 6){
	    num = 1;     
	}
	img.src="img/"+num+".jpg";
},5000)
function next() {
	console.log("hello");
	clearInterval(setInterval);
	var img = document.getElementById('img');
	num++;
	if(num == 6){
	    num = 1;     
	}
	img.src="img/"+num+".jpg" 
}
var maxtime = 60*60;
function CountDown() {
	if (maxtime >= 0) {
		minutes = Math.floor(maxtime / 60);
		seconds = Math.floor(maxtime % 60);
		document.getElementById('value2').value = minutes;
		document.getElementById('value3').value = seconds;
		if (maxtime == 5 * 60)alert("还剩5分钟");
			--maxtime;
	} else{
		clearInterval(timer);
	}
}
timer = setInterval("CountDown()", 1000);