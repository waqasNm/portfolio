var email = document.getElementById('email');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var demo = document.getElementById('demo');
var objective = document.getElementById('objective');

/*University Info*/
var degree = document.getElementById('degree');
var program1 = document.getElementById('program1');
var duration1 = document.getElementById('duration1');
var uni = document.getElementById('uni');
var cgpa = document.getElementById('cgpa');


/*Collage Info*/
var Ccert = document.getElementById('C-certificate');
var program2 = document.getElementById('program2');
var duration2 = document.getElementById('duration2');
var collage = document.getElementById('collage');

/*School Info*/
var Scert = document.getElementById('S-certificate');
var program3 = document.getElementById('program3');
var duration3 = document.getElementById('duration3');
var school = document.getElementById('school');


var dataObj = {
	name : "Waqas Naeem",
	phone: "0341-2635525",
	address: "Suadabad Malir Karachi",
	email: "waqasnaeem91@gmail.com",
	objective:"I am interested in pursuing a career in software development. I consider myself a fast learner and a team player. I feel that I can make a contribution to any Implementation Services department.",
	edu: [
		{degree:"Bachelor", program:"BSCS",duration:"2013 - 2017",uni:"Indus University Karachi",cgpa:3.5},
		{certificate:"Intermediate", program:"Pre-Engineering", passedYear: "2012", collage:"Govt.degree Science Collage Liaquatabad"},
		{certificate:"Matric", program:"SSC", passedYear:"2010", school:"Govt.Boys Secondry School Nazimabad No.3"}
	]
}


function initData(){
	name.innerHTML = dataObj.name;
	email.innerHTML = dataObj.email;
	address.innerHTML = dataObj.address;
	phone.innerHTML = dataObj.phone;
	demo.innerHTML = dataObj.name;
	objective.innerHTML = dataObj.objective;


	degree.innerHTML = dataObj.edu[0].degree;
	program1.innerHTML = dataObj.edu[0].program;
	uni.innerHTML = dataObj.edu[0].uni;
	duration1.innerHTML = dataObj.edu[0].duration;
	cgpa.innerHTML = dataObj.edu[0].cgpa;

	Ccert.innerHTML = dataObj.edu[1].certificate;
	program2.innerHTML = dataObj.edu[1].program;
	collage.innerHTML = dataObj.edu[1].collage;
	duration2.innerHTML = dataObj.edu[1].passedYear;

	Scert.innerHTML = dataObj.edu[2].certificate;
	program3.innerHTML = dataObj.edu[2].program;
	school.innerHTML = dataObj.edu[2].school;
	duration3.innerHTML = dataObj.edu[2].passedYear;
}


initData();