var interval;
    var pos = 0;
    var a, b, c;


    window.onload = function() {

    	var images = document.getElementsByName("photo1");


    	var tab = document.getElementById("tab");
    	tab.onmouseover = function() {
    		run(images);
    	}
    	tab.onmouseout = function() {
    		clearInterval(interval);
    	}
    }
    var run = function(images) {
    	interval = setInterval(function() {
    		images[pos].style.display = 'none';
    		pos = ++pos == images.length ? 0 : pos;
    		images[pos].style.display = 'inline';
    	}, 1000);
    } // JavaScript Document
    function $(id) {
    	return document.getElementById(id);
    }

    function picture1() {
    	a = $('fimg').src;
    	$('fimg').src = "图片/axiangqing.jpg";
    }

    function picture2() {
    	$('fimg').src = a;

    }

    function picture3() {

    	b = $('fimg2').src;
    	$('fimg2').src = "图片/xiangqing3.jpg";
    }

    function picture4() {
    	$('fimg2').src = b;

    }

    function picture5() {

    	c = $('fimg3').src;
    	$('fimg3').src = "图片/xianqing2.jpg";
    }

    function picture6() {
    	$('fimg3').src = c;

    }

    function lover() {

    }

    function more() {


    }

    function f(n) {
    	var i = document.getElementById(n);

    	$('raidersbody').style.visibility = "visible";
    	i.style.background = "#FFF";
    }

    function f1(n) {
    	var i = document.getElementById(n);

    	$('raidersbody').style.visibility = "hidden";
    	i.style.background = "#FFE8FF";
    }

    function f2() {


    	$('raidersbody').style.visibility = "visible";

    }

    function f3() {


    	$('raidersbody').style.visibility = "hidden";

    }

    function zhuye() {

    }

    function shijian1() {
    	$('raidersright').style.visibility = "visible";
    }

    function divshow(m) {
    	var i = document.getElementById(m);
    	if (m == "img1") {
    		$('raidersbodytop1').style.visibility = "visible";
    	} else if (m == "img2") {
    		$('raidersbodytop2').style.visibility = "visible";
    	} else if (m == "img3") {
    		$('raidersbodytop3').style.visibility = "visible";
    	} else if (m == "img4") {
    		$('raidersbodytop4').style.visibility = "visible";
    	} else if (m == "img5") {
    		$('raidersbodytop5').style.visibility = "visible";
    	} else if (m == "img6") {
    		$('raidersbodytop6').style.visibility = "visible";
    	} else if (m == "img7") {
    		$('raidersbodytop7').style.visibility = "visible";
    	} else if (m == "img8") {
    		$('raidersbodytop8').style.visibility = "visible";
    	}


    }

    function undivshow(m) {
    	var i = document.getElementById(m);
    	if (m == "img1") {
    		$('raidersbodytop1').style.visibility = "hidden";
    	} else if (m == "img2") {
    		$('raidersbodytop2').style.visibility = "hidden";
    	} else if (m == "img3") {
    		$('raidersbodytop3').style.visibility = "hidden";
    	} else if (m == "img4") {
    		$('raidersbodytop4').style.visibility = "hidden";
    	} else if (m == "img5") {
    		$('raidersbodytop5').style.visibility = "hidden";
    	} else if (m == "img6") {
    		$('raidersbodytop6').style.visibility = "hidden";
    	} else if (m == "img7") {
    		$('raidersbodytop7').style.visibility = "hidden";
    	} else if (m == "img8") {
    		$('raidersbodytop8').style.visibility = "hidden";
    	} else if (m == "img1") {
    		$('raidersbodytop1').style.visibility = "hidden";
    	}

    }


    var initializationTime = (new Date()).getTime();

    function showLeftTime() {
    	var now = new Date();
    	var year = now.getYear() - 100;
    	var month = now.getMonth() + 1;
    	var day = now.getDate();
    	var hours = now.getHours();
    	var minutes = now.getMinutes();
    	var seconds = now.getSeconds();
    	document.all.show.innerHTML = "" + "20" + year + "年" + month + "月" + day + "日 " + hours + ":" + minutes + ":" +
    		seconds + "";

    	var timeID = setTimeout(showLeftTime, 1000);
    }

    function checkcardno() {
    	var cno = myform.cardno.value;
    	$("err_cardno").innerHTML = "";
    	if (cno == "" || cno == null) {
    		$("err_cardno").innerHTML = "卡号不能为空!";
    	} else if (cno.length != 10) {
    		$("err_cardno").innerHTML = "卡号长度必须为10!";
    	} else {
    		var firstnum = cno.charAt(0);
    		if (firstnum == "0") {
    			$("err_cardno").innerHTML = "卡号首字母必须不为0!";
    		} else if (parseInt(cno) < 10000000000) {
    			$("err_cardno").innerHTML = "卡号不全为数字!";
    			alert("卡号不全为数字！")
    		}
    	}
    }

    function checkkey() {
    	var key1 = myform.key.value;
    	$("err_key").innerHTML = "";
    	if (key1 == "" || key1 == null) {
    		$("err_key").innerHTML = "口令不能为空!";
    	} else {
    		if (key1.length < 8 || key1.length > 15) {
    			$("err_key").innerHTML = "口令长度不能小于8或大于15!";
    		}
    	}
    }
