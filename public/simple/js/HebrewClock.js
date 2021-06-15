﻿function hebrewclock()
{

    var zmanit_hour = doit();       //get the 24 shaaotzmaniot
    
	var sunset_yasterdate = zmanit_hour[0];
	var sunrise = zmanit_hour[1];
	var sunset = zmanit_hour[2];
	var sunrise_tommorow = zmanit_hour[3];
	
	var shaa_zmanit_night, shaa_zmanit_day;
    
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
	var milisec = date.getMilliseconds();

	var curr_hour = milisec + (s*1000) + (m*60*1000) + ((h)*60*60*1000);
	
	var curr_hour = curr_hour/(1000 * 3600);

	
	//day
	if(curr_hour > sunrise && curr_hour < sunset)
	{
		var length = sunset - sunrise;
		var curr_hour_offset = curr_hour - sunrise;
		
		var hour = Math.floor(12* (curr_hour_offset/length));
		var minute = Math.floor(12 * 1080 * (curr_hour_offset / length)) - hour*1080;
		var second = Math.floor(12 * 1080 * 76 * (curr_hour_offset / length)) - (hour * 1080 * 76) - (minute * 76);
	    
		lbHour = hour +12 ;
		document.getElementById("Hour").value = hour;
		lbMinute = minute;
		document.getElementById("Minute").value = lbMinute;
		lbSecond = second;
		document.getElementById("Second").value = lbSecond;
	}
	//night before 00:00
	else if( curr_hour > sunset)
	{
		var length = sunrise_tommorow + 24 - sunset;
		var curr_hour_offset = curr_hour - sunset;
		
		var hour = Math.floor(12* (curr_hour_offset/length));
		var minute = Math.floor(12 * 1080 * (curr_hour_offset / length)) - hour*1080;
		var second = Math.floor(12 * 1080 * 76 * (curr_hour_offset / length)) - (hour * 1080 * 76) - (minute * 76);

		lbHour = hour;
		document.getElementById("Hour").value = lbHour;
		lbMinute = minute;
		document.getElementById("Minute").value = lbMinute;
		lbSecond = second;
		document.getElementById("Second").value = lbSecond;
	}
	//night after 00:00
	else if(curr_hour < sunrise)
	{
		var length = sunrise + 24 - sunset_yasterdate;
		var curr_hour_offset = curr_hour + 24 - sunset_yasterdate;
		
		var hour = Math.floor(12* (curr_hour_offset/length));
		var minute = Math.floor(12 * 1080 * (curr_hour_offset / length)) - hour*1080;
		var second = Math.floor(12 * 1080 * 76 * (curr_hour_offset / length)) - (hour * 1080 * 76) - (minute * 76);
		
		lbHour = hour;
		document.getElementById("Hour").value = lbHour;
		lbMinute = minute;
		document.getElementById("Minute").value = lbMinute;
		lbSecond = second;
		document.getElementById("Second").value = lbSecond;
	}
	
	display_time();
	
	if(lbMinute == 0)
    {
		doit();
		setmazal();	
	}
    //if(lbMinute == 0 || lbMinute == 360 || lbMinute == 720)
    //    tick_sound();
}


//---clock timer---
function oTimerclock() 
{
	oTimer = setInterval(hebrewclock, 10);
}


function display_time()
{
	//---displaying the clock---
	//second
    if (lbSecond < 10)
        document.getElementById("Second").value = "0" + lbSecond;
    else
        document.getElementById("Second").value = lbSecond;

    //minute
    if (lbMinute < 10)
        document.getElementById("Minute").value = "000" + lbMinute;
    else if (lbMinute < 100)
        document.getElementById("Minute").value = "00" + lbMinute;
    else if (lbMinute < 1000)
        document.getElementById("Minute").value = "0" + lbMinute;
    else
        document.getElementById("Minute").value = lbMinute;

	//hour
    if (document.getElementById("Hour").value < 10)
        document.getElementById("Hour").value = "0" + document.getElementById("Hour").value;
    else
        document.getElementById("Hour").value = document.getElementById("Hour").value;

	
	var date = new Date();

	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	document.getElementById("ChirstianHour").value = h<10? "0" + h : h;
	document.getElementById("ChirstianMinute").value = m<10? "0" + m : m ;
	document.getElementById("ChirstianSecond").value = s<10? "0" + s : s;

	
}
