preLoader = document.querySelector('.pre-loader');
start = document.querySelector('.start');
applications = document.querySelector('.applications');
places = document.querySelector('.places');
system = document.querySelector('.system');
nad_101 = document.querySelector('.icon-container #nad_101');
wfh_101 = document.querySelector('.icon-container #wfh_101');
pictures = document.querySelector('.icon-container .pictures');
ccna_7 = document.querySelector('.icon-container #ccnav_7');
ccna_routing = document.querySelector('.icon-container #ccna_routing');
cebc = document.querySelector('.icon-container #cebc');
idcss = document.querySelector('.icon-container #idcss');
istqb = document.querySelector('.icon-container #istqb');
itil = document.querySelector('.icon-container #itil');
guvi_py = document.querySelector('.icon-container #guvi_py');
front_end = document.querySelector('.icon-container #html_css');
javascript = document.querySelector('.icon-container #javascript');
linux = document.querySelector('.icon-container #linux');
mathworks = document.querySelector('.icon-container #math_works');
nad_micro = document.querySelector('.icon-container #nad_micro');
nad_scrum = document.querySelector('.icon-container #nad_scrum');
ps_matlab = document.querySelector('.icon-container #ps_matlab');
pwr_ele = document.querySelector('.icon-container #pwr_ele');
img_proc = document.querySelector('.icon-container #img_proc');
unix_basics = document.querySelector('.icon-container #unix_basics');
pwa = document.querySelector('.icon-container #pwa');
java = document.querySelector('.icon-container #java');
presentation_skills = document.querySelector('.icon-container #presentation_skills');
trash = document.querySelector('.icon-container .trash');
about = document.querySelector('.icon-container .folder');
currDateTime = document.querySelector('.cur-dat-tim');


// document.addEventListener('contextmenu', function(e) {  
// if (e.target.matches('iframe')) {  
// e.preventDefault()  
// }  
// }, false) 

function preLoad() {
	window.setInterval(() => {
		preLoader.style.display = 'none';
	}, 1700);
}

let curdate = new Date().toUTCString();
curdate = curdate.split(' ').slice(0, 5).join(' ');
currDateTime.innerText = curdate;

nad_101.addEventListener('click', (e) => {
	new WinBox({
		title: 'NAD 101',
		x: 'center',
		y: 'center',
		width: '50%',
		height: '50%',
		left: 50,
		url: '5b3f4b05102e7b0029c8e93c.pdf&embedded=true'
	});
});

wfh_101.addEventListener('click', () => {
	// window.setTimeout(() => {
	// 	preLoader.style.display = 'block';
	// }, 1000);
	new WinBox({
		title: 'WFH 101',
		x: 'left',
		y: 'center',
		width: '50%',
		height: '50%',
		left: 50,
		url: '5e906dc84dd27000121842d5%20(1).pdf&embedded=true'
	});
});
ccnav_7.addEventListener('click', () => {
	// window.setTimeout(() => {
	// 	preLoader.style.display = 'block';
	// }, 1000);
	new WinBox({
		title: 'CCNA(Switching and Routing)',
		x: 'right',
		y: 'center',
		width: '50%',
		height: '70%',
		left: 50,
		url: 'ANNANGIVINAY%20CHOWDARY-2017-2021%20Batch-certificate%20(1).pdf&embedded=true'
	});
});
ccna_routing.addEventListener('click', () => {
	new WinBox('CCNA (Routing and Switching)', {
		top: 50,
		right: 50,
		bottom: 0,
		left: 50,
		url: 'ANNANGIVINAY%20CHOWDARY-VAC%20%20-%20CCNA%202021-certificate.pdf&embedded=true'
	});
});

cebc.addEventListener('click', () => {
	new WinBox({
		title: 'CEBC',
		left: 50,
		url: 'CEBC%20-%20SumTotal.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=scale'
	});
});

idcss.addEventListener('click', () => {
	new WinBox({
		title: 'IDCSS',
		left: 50,
		url: 'Certificate%20-%20ANNANGI%20VINAY%20CHOWDARY.pdf&embedded=true'
	});
});

guvi_py.addEventListener('click', () => {
	new WinBox({
		title: 'GUVI AI in Py',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/GuviCertification%20.pdf#toolbar=0'
	});
});

front_end.addEventListener('click', () => {
	new WinBox({
		title: 'HTML & CSS',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/HTML5%20CSS3%20-%20SumTotal.pdf#toolbar=0'
	});
});

istqb.addEventListener('click', () => {
	new WinBox({
		title: 'ISTQB Foundation',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/ISTQB%20-%20SumTotal.pdf#toolbar=0'
	});
});

itil.addEventListener('click', () => {
	new WinBox({
		title: 'ITIL Foundation',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/ITIL%20-%20SumTotal.pdf#toolbar=0'
	});
});

javascript.addEventListener('click', () => {
	new WinBox({
		title: 'JavaScript L1',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/Javascript%20-%20SumTotal.pdf#toolbar=0'
	});
});

linux.addEventListener('click', () => {
	new WinBox({
		title: 'Linux Basics',
		left: 50,
		url:
			'https://winay-chowdary66.github.io/Certifications/Linux%20Basics%20and%20Shell%20Programming%20Certification.pdf#toolbar=0'
	});
});

mathworks.addEventListener('click', () => {
	new WinBox({
		title: 'Math Works OnRamp',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/MathOnrampCertificate.pdf#toolbar=0'
	});
});

nad_micro.addEventListener('click', () => {
	new WinBox({
		title: 'NAD Microservices',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/NAD%20Microservice%20-%20SumTotal.pdf#toolbar=0'
	});
});

nad_scrum.addEventListener('click', () => {
	new WinBox({
		title: 'NAD Scrum',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/NAD%20Scrum%20-%20SumTotal.pdf#toolbar=0'
	});
});

ps_matlab.addEventListener('click', () => {
	new WinBox({
		title: 'MatLab Simulink',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/PS-APSSDC-MATLAB-1987.pdf#toolbar=0'
	});
});

pwr_ele.addEventListener('click', () => {
	new WinBox({
		title: 'Power Electronics',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/PS-PE-APR-MC-1586.pdf#toolbar=0'
	});
});

img_proc.addEventListener('click', () => {
	new WinBox({
		title: 'Image Processing',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/PS-IP-APR-MC-2613.pdf#toolbar=0'
	});
});

unix_basics.addEventListener('click', () => {
	new WinBox({
		title: 'Unix Fundamentals and Commands',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/Unix%20-%20SumTotal.pdf#toolbar=0'
	});
});

pwa.addEventListener('click', () => {
	new WinBox({
		title: 'Progressive Web App',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/udemy_PWA_crt.pdf#toolbar=0'
	});
});

java.addEventListener('click', () => {
	new WinBox({
		title: 'Java',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/udemy_java_crt.pdf#toolbar=0'
	});
});

presentation_skills.addEventListener('click', () => {
	new WinBox({
		title: 'Presentation Skills',
		left: 50,
		url: 'https://winay-chowdary66.github.io/Certifications/udemy_presentation_skills.pdf#toolbar=0'
	});
});

about.addEventListener('click', () => {
	window.open('https://github.com/Winay-Chowdary66', '_blank');
});
wb_body = document.querySelectorAll('.wb-body');
// wb_body.style.background = "#fff"
for (i = 0; i < wb_body.length; i++) {
	wb_body.addEventListener(
		'contextmenu',
		function(e) {
			e.preventDefault();
		},
		false
	);
}
body = document.querySelector('body');
if (isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera()) {
	alert('Its Not Mobile Compatable');
	body.innerText = 'It will be a good Exp in Pc ....(Open In Desktop)';
	//document.write("Please Open In Destop or PC")
}
