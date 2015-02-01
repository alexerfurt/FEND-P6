// BIO Section
var bio = {
	"name": "Alexander Erfurt",
	"role": " --- Hobby Web Developer & Product Manager",
	"contacts": 	{
		"mobile": "+353-83-450-9703",
		"email": "erfurtalex@gmail.com",
		"github": "alexerfurt",
		"twitter": "@alex_erfurt",
		"location": "Dublin, Ireland"
	},
	"welcomeMessage": "Hello Visitor. I'm Alex and this ...is me! ;) ",
	"skills": [
		"Creating Things That Matter", "Lead & Motivate People", "Thought Leadership", "Interdisciplinary Education"
	],
	"bioPic" : "images/alexe.gif"
};

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBiopic);

var formattedWelcomemsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomemsg);

$("#header").append(HTMLskillsStart);

var formattedSkills	= HTMLskills.replace("%data%", bio.skills[0]);
$("#header").append(formattedSkills);
var formattedSkills	= HTMLskills.replace("%data%", bio.skills[1]);
$("#header").append(formattedSkills);
var formattedSkills	= HTMLskills.replace("%data%", bio.skills[2]);
$("#header").append(formattedSkills);
var formattedSkills	= HTMLskills.replace("%data%", bio.skills[3]);
$("#header").append(formattedSkills);

// Work Section

var work = {
	"jobs": [
	{
		"employer": "Google Inc.",
		"title": "Associate Account Strategist",
		"location": "Dublin, Ireland",
		"dates": "March 2014 - Present",
		"description": "Advising multiple clients on online marketing strategies"
	},
	{
		"employer": "Freelance",
		"title": "Management Consultant",
		"location": "Nuremberg, Germany",
		"dates": "Nov 2011 - Oct 2013",
		"description": "Worked on several projects to optimize work flows"
	},
	{
		"employer": "Porsche AG",
		"title": "Intern",
		"location": "Stuttgart, Germany",
		"dates": "Oct 2010 - March 2011",
		"description": "Worked on several internal projects to optimize work flows, especially in the area of purchasing and how the company can be integrated into the 'mothership'"
	}
	]
}

work.display = function () {
	for (var job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

work.display();

// Project Section
// TODO: add more projects and pics

var projects = {
	"projects": [
	{
		"title": "Scripted an 'Email Automation'-Tool",
		"dates": "2014 - present",
		"description": "Script to send email confirmation automatically in oder to simplify and enhance the team's work-flow",
		"images": "images/emautomizer.png"
	}
	]
};

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			//for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			//}
		}
	}
}

projects.display();

// Education Section

var education = {
	"schools": [
	{
		"name": "University of Erlangen-Nuremberg (FAU)",
		"location": "Erlangen, Germany",
		"degree": "M.Sc.",
		"majors": ["Engineering"," Management"],
		"dates": 2013,
		"url": "http://www.fau.de"
	},
	{
		"name": "Hochschule Furtwangen University (HFU)",
		"location": "Furtwangen, Germany",
		"degree": "B.Eng.",
		"majors": ["Product Engineering"],
		"dates": 2010,
		"url": "http://www.hs-furtwangen.de"
	},
	{
		"name": "California State University, East Bay",
		"location": "Hayward, CA, USA",
		"degree": "Visiting Student",
		"majors": ["Industrial Engineering"],
		"dates": 2010,
		"url": "http://www.csueb.com"
	}
	],
	"onlineCourses": [
	{
	  "title": "Intro to HTML and CSS",
	  "school": "Udacity",
	  "dates": 2014,
	  "url": "https://www.udacity.com/course/ud304"
	 },
	 {
	  "title": "How to Use Git and GitHub",
	  "school": "Udacity",
	  "dates": 2014,
	  "url": "https://www.udacity.com/course/ud775"
	 },
	 {
	  "title": "JavaScript Basics",
	  "school": "Udacity",
	  "dates": 2015,
	  "url": "https://www.udacity.com/course/ud804"
	 },
	 {
	  "title": "Intro to jQuery",
	  "school": "Udacity",
	  "dates": 2015,
	  "url": "https://www.udacity.com/course/ud245"
	 }
	]
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedNameUrl = formattedName.replace("#", education.schools[school].url);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedNameUrl + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor= HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

	}
	$(".education-entry:last").append(HTMLonlineClasses);

	for (var onlineCourse in education.onlineCourses) {

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		var formattedNameURL = formattedURL.replace("#", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedNameURL);
	}
};

education.display();

// Adding Google Maps to the resume

$("#mapDiv").append(googleMap);

// Internationalization

var inName = function (name) {
	var splitName = bio.name.split(" ");
	var firstName = splitName[0];
	var lastName = splitName[1].toUpperCase();
	var name = firstName + " " +lastName;

	return name;
};

//$("#main").append(internationalizeButton);






