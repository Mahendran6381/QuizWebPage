//variables declarations
const arr = [{"0": {
	"question": "5 + 7 = ?",
	"options": [
		"10",
		"11",
		"12",
		"13"
	],
	"answer": "12"
}},
{"1": {
	"question": "12 - 8 = ?",
	"options": [
		"1",
		"2",
		"3",
		"4"
	],
	"answer": "4"
}},
{"2": {
	"question": "Which one is correct team name in NBA?",
	"options": [
		"New York Bulls",
		"Los Angeles Kings",
		"Golden State Warriros",
		"Huston Rocket"
	],
	"answer": "Huston Rocket"
}},
{"3": {
	"question": "5 + 7 = ?",
	"options": [
		"10",
		"11",
		"12",
		"13"
	],
	"answer": "12"
}},
{"4": {
	"question": "12 - 8 = ?",
	"options": [
		"1",
		"2",
		"3",
		"4"
	],
	"answer": "4"
}},
{"5": {
	"question": "Which one is correct team name in NBA?",
	"options": [
		"New York Bulls",
		"Los Angeles Kings",
		"Golden State Warriros",
		"Huston Rocket"
	],
	"answer": "Huston Rocket"
}},{"6": {
	"question": "5 + 7 = ?",
	"options": [
		"10",
		"11",
		"12",
		"13"
	],
	"answer": "12"
}},
{"7": {
	"question": "12 - 8 = ?",
	"options": [
		"1",
		"2",
		"3",
		"4"
	],
	"answer": "4"
}},
{"8": {
	"question": "Which one is correct team name in NBA?",
	"options": [
		"New York Bulls",
		"Los Angeles Kings",
		"Golden State Warriros",
		"Huston Rocket"
	],
	"answer": "Huston Rocket"
}}]
var i = 0;
var j =0;
var previes =0;
// get elements from html

let quen = document.querySelector('.card-text')
let ans = document.querySelector('.card-footer')
let prev = document.querySelector('.btn-prev')
let next = document.querySelector('.btn-next')
let sub = document.querySelector('.btn-sub')
let qnPal = document.querySelector('.row')

// Timer
var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = ''+t.minutes+': '+t.seconds;
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('timer',deadline);



//event listeners
sub.addEventListener('click',nextSUb)
next.addEventListener('click',nextSUb)
prev.addEventListener('click',prevSUb)

// Function
function nextSUb(){
	//Check condition to check the question numbers
	if(i >= 3 && j >= 3 ){
		i = 0
		j = 0
	}else if(j<1 ||i<1){
		j=0
		i=0
	}
    // inner html for questions
	quen.innerHTML = `<p>${arr[i][`${j}`].question}</p>`
	// inner html for options
	ans.innerHTML = `<div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${0}`]}</label>
   </div>
   <div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${1}`]}</label>
   </div>
   <div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${2}`]}</label>
   </div>
   <div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${3}`]}</label>
   </div>`
   

i = i+1;
j = j+1;
color(i)
}
//To do to the prev qusetions
function prevSUb(){
	i = i-1;
    j = j-1;
	recolor()
	//Check condition to check the question numbers
	if(i >= 3 && j >= 3 ){
		i = 0
		j =0
	}else if(j<1 ||i<1){
		j=0
		i=0
	}
	quen.innerHTML = `<p>${arr[i][`${j}`].question}</p>`
	
	ans.innerHTML = `<div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${0}`]}</label>
   </div>
   <div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${1}`]}</label>
   </div>
   <div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${2}`]}</label>
   </div>
   <div class="custom-control    custom-radio"> 
	<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
	<label class="custom-control-label" for="customRadio1">${arr[i][`${j}`].options[`${3}`]}</label>
   </div>`
} 

// for changing colors after completing questions
function color(){
	
	const qPaleteArr = qnPal.children
		qPaleteArr[previes].classList.add('color')
		console.log(qPaleteArr[previes].classList)
	    previes +=1

}
function recolor(){
	const qPaleteArr = qnPal.children
		qPaleteArr[previes].classList.add('nocolor')
		console.log(qPaleteArr[previes].classList)
	    previes -=1

}

