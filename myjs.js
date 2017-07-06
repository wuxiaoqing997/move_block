document.onkeydown = function(event) {
	var get = document.getElementById('fixed');
	var shiftkey = event.shiftKey;
	var getwidth = document.body.clientWidth;
	var getheight = document.body.clientHeight;
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 37) {
		if (get.offsetLeft > 0) {
			get.style.left = get.offsetLeft - 5 + 'px';
		} else {
			get.style.left = 0;
		}

	}
	if (e && e.keyCode == 38) {
		if (get.offsetTop > 0) {
			get.style.top = get.offsetTop - 5 + 'px';
		} else
			get.style.top = 0;
	}
	if (e && e.keyCode == 39) {
		if (getwidth - get.offsetLeft - get.offsetWidth <= 0) {
			get.style.left = getwidth - get.offsetWidth + 'px';
		} else
			get.style.left = get.offsetLeft + 5 + 'px';
	}
	if (e && e.keyCode == 40) {
		if (getheight - get.offsetTop - get.offsetHeight <= 0) {
			get.style.top = getheight - get.offsetHeight + 'px';
		} else
			get.style.top = get.offsetTop + 5 + 'px';
	}
	if (e && e.keyCode == 49 && shiftkey) {
		fixed.style.backgroundColor = '#cbb994';
	}
	if (e && e.keyCode == 50 && shiftkey) {
		fixed.style.backgroundColor = '#a99e93';
	}
	if (e && e.keyCode == 51 && shiftkey) {
		fixed.style.backgroundColor = '#a58f86';
	}
	if (e&&e.keyCode==38&&shiftkey) {
		if (get.offsetHeight<500) {
			get.style.height=get.offsetHeight+20+'px';
			get.style.width=get.offsetHeight+20+'px';
		}
		else {
			alert("太大啦！别加啦！");
			get.style.height=500+'px';
			get.style.width=500+'px';
		}
	}
	if (e&&e.keyCode==40&&shiftkey) {
		if (get.offsetHeight>50) {
			get.style.height=get.offsetHeight-20+'px';
			get.style.width=get.offsetHeight-20+'px';
		}
		else {
			alert("太小啦！别减啦！");
			get.style.height=50+'px';
			get.style.width=50+'px';
		}
	}

};