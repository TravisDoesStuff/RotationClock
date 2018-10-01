const centerX = 200;
const centerY = 90;
const ringWidth = 10;
const strokeStyle = "white";

rotation = () => {
	var date = new Date();

	var fract_second = date.getMilliseconds()/1000;
	var deg_second = fract_second*360;

	var seg_minute = 360/60;
	var fract_minute = date.getSeconds()/60;
	var deg_minute = (fract_minute*360) + (fract_second * seg_minute);
	var rad_minute = deg_minute*(Math.PI/180);

	var seg_hour = 360/60;
	var fract_hour = date.getMinutes()/60;
	var deg_hour = (fract_hour*360) + (seg_hour * fract_minute);
	var rad_hour = deg_hour*(Math.PI/180);

	var seg_day = 360/24;
	var fract_day = date.getHours()/24;
	var deg_day = (fract_day*360) + (seg_day * fract_hour);
	var rad_day = deg_day*(Math.PI/180);

	var max = maxMonth();
	var seg_month = 360/max;
	var fract_month = (date.getDate()-1)/max;
	var deg_month = (fract_month*360) + (seg_month * fract_day);
	var rad_month = deg_month*(Math.PI/180);

	var seg_year = 360/12;
    var fract_year = date.getMonth()/12;
    var deg_year = (fract_year*360) + (seg_year * fract_month);
	var rad_year = deg_year*(Math.PI/180);

	var canvas = document.getElementById("clock");
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//ctx.arc(x-coord, y-coord, radius, start-radians, stop-radians)

    ctx.beginPath();
	ctx.arc(centerX, centerY, 5, 2*fract_second*Math.PI, 2*fract_second*Math.PI-3);
	ctx.lineWidth = 3;
	ctx.strokeStyle = strokeStyle;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(centerX, centerY, 20, rad_minute+rad_hour+rad_day+rad_month, rad_minute+rad_hour+rad_day+rad_month+rad_year);
	ctx.lineWidth = ringWidth;
	ctx.strokeStyle = strokeStyle;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(centerX, centerY, 30, rad_minute+rad_hour+rad_day, rad_minute+rad_hour+rad_day+rad_month);
	ctx.lineWidth = ringWidth;
	ctx.strokeStyle = strokeStyle;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(centerX, centerY, 40, rad_minute+rad_hour, rad_minute+rad_hour+rad_day);
	ctx.lineWidth = ringWidth;
	ctx.strokeStyle = strokeStyle;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(centerX, centerY, 50, rad_minute, rad_minute+rad_hour);
	ctx.lineWidth = ringWidth;
	ctx.strokeStyle = strokeStyle;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(centerX, centerY, 60, 0, rad_minute);
	ctx.lineWidth = ringWidth;
	ctx.strokeStyle = strokeStyle;
	ctx.stroke();
}

maxMonth = () => {
	var date = new Date();
	var d = date.getMonth()+1;

	if((date.getYear()%4) == 0) return 29;
	if(d == 2) return 28;

	if(d<8)
	{
		if((d%2) == 1) return 31;
		else return 30;
	}
	else
	{
		if((d%2) == 0) return 31;
		else return 30;
	}
}

setInterval( function(){
    rotation()
}, 42);