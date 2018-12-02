

var time_tracking_ms = 0;
var time_tracking_running = 0;

function time_tracking_swstartstop() {
	if (time_tracking_running == 0) {
		time_tracking_running = 1;
		time_tracking_then = new Date();
		time_tracking_then.setTime(time_tracking_then.getTime() - time_tracking_ms);
		document.bugnoteadd.time_tracking_ssbutton.value = "Stop";
	} else {
		time_tracking_running = 0;
		time_tracking_now = new Date();
		time_tracking_ms = time_tracking_now.getTime() - time_tracking_then.getTime();
		document.bugnoteadd.time_tracking_ssbutton.value = "Start";
	}
}
function time_tracking_swreset() {
	time_tracking_running = 0;
	time_tracking_ms = 0;
	document.bugnoteadd.time_tracking.value = "0:00:00";
	document.bugnoteadd.time_tracking_ssbutton.value = "Start";
}

function time_tracking_display() {
	setTimeout("time_tracking_display();", 1000);
	if (time_tracking_running == 1) {
		time_tracking_now = new Date();
		time_tracking_ms = time_tracking_now.getTime() - time_tracking_then.getTime();
		time_tracking_seconds = Math.round(time_tracking_ms / 1000) ;
		time_tracking_hours = Math.floor(time_tracking_seconds / 3600);
		time_tracking_left = time_tracking_seconds - (time_tracking_hours * 3600);
		time_tracking_mins = Math.floor(time_tracking_left / 60);
		time_tracking_secs = time_tracking_left - (time_tracking_mins * 60);
		if (time_tracking_secs < 10)
			time_tracking_secs = "0" + time_tracking_secs;
		if (time_tracking_mins < 10)
			time_tracking_mins = "0" + time_tracking_mins;

		document.bugnoteadd.time_tracking.value = time_tracking_hours + ":" + time_tracking_mins + ":" + time_tracking_secs;
	}
}

setTimeout("time_tracking_display();", 1000);

