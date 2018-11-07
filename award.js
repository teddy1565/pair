window.onload = function(){
	document.querySelector("#produce").onclick = produce;
	document.querySelector("#Award").onclick = Award;
}
function produce(){
	let rand1 = Math.floor(Math.random()*99999);
	let rand2 = Math.floor(Math.random()*99999);
	let rand3 = Math.floor(Math.random()*99999);
	while(rand1<10000||rand2<10000||rand3<10000){
		rand1 = Math.floor(Math.random()*99999);
		rand2 = Math.floor(Math.random()*99999);
		rand3 = Math.floor(Math.random()*99999);
	}
	document.querySelector("#number").innerText = rand1+","+rand2+","+rand3;
	ajax_save_number(rand1,rand2,rand3);
}
function Award(){
	let the_number = new Array(),number_1 = new Array(),number_2 = new Array(),number_3 = new Array();
	ajax_get_number(function(result){
		if(result!=0){
			the_number = result.split(",");
		}
	});
	number_1 = the_number[0].split("");
	number_2 = the_number[1].split("");
	number_3 = the_number[2].split("");
	let input = document.getElementById("input").value;
	let Comparison = input.split("");
	if(Comparison.length != 6){
		alert("輸入的資料錯誤");
	}
	
}
function ajax_save_number(rand1,rand2,rand3){
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET",`save.php?rand1=${rand1}&rand2=${rand2}&rand3=${rand3}`,true);
	xhttp.send();
}
function ajax_get_number(callback){
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		callback(xhttp.responseText);
	};
	xhttp.open("GET",`take.php`,false);
	xhttp.send();
}