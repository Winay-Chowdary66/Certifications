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
body = document.querySelector('.container');

trash.addEventListener('click', () => {
	new WinBox({
		title: 'Recycle Bin',
		modal: mobile,
		html: '<h3 style="text-align:center">No Data Available</h3>'
	});
});

var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function() {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	}
};

imagesArray = [
	'./images/beach_sunset_girl_4k.jpg',
	'./images/parrot-os-bg.jpg',
	'./images/olympiastadion_berlin-wallpaper-3554x1999.jpg',
	'./images/2017_emma_watson-HD.jpg',
	'./images/emilia_clarke_daenerys_targaryen_game_of_thrones_season_8_4k.jpg',
	'./images/kali-logo-16x9-1-768x432.png',
	'./images/linux-kali-linux-nethunter-kali-linux-wallpaper-preview.jpg',
	'./images/2017_beauty_and_the_beast-wide.jpg',
	'./images/wonder_woman_gal_gadot-wallpaper-1920x1080.jpg',
	'./images/age_of_empires_concept_art-wallpaper-1920x1080.jpg',
	'./images/SpectralHorizon.jpg',
	'./images/macaw.jpg',
	'./images/2017_ktm_1290_super_duke_r-wide.jpg',
	'./images/parrot-fly-grey.jpg',
	'./images/download (2).jpg',
	'./images/wp3930460.jpg'
];

if (isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera()) {
	console.log(imagesArray[Math.floor(Math.random() * (16 - 1) + 1)]);
	body.style.backgroundColor = 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25))';
	body.style.backgroundImage = 'url(' + imagesArray[Math.floor(Math.random() * (16 - 1) + 1)] + ')';
	body.style.objectFit = 'cover';
}
function preLoad() {
	window.setInterval(() => {
		preLoader.style.display = 'none';
	}, 1700);
}
let mobile = isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera() ? true : false;

let curdate = new Date().toUTCString();
curdate = curdate.split(' ').slice(0, 5).join(' ');
currDateTime.innerText = curdate;

nad_101.addEventListener('click', (e) => {
	new WinBox({
		title: 'NAD 101',
		modal: mobile,
		x: 'center',
		y: 'center',
		width: '50%',
		height: '50%',
		left: 50,
		url: '5b3f4b05102e7b0029c8e93c.pdf&embedded=true'
	});
});

wfh_101.addEventListener('click', () => {
	new WinBox({
		title: 'WFH 101',
		modal: mobile,
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
		modal: mobile,
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
		modal: mobile,
		right: 50,
		bottom: 0,
		left: 50,
		url: 'ANNANGIVINAY%20CHOWDARY-VAC%20%20-%20CCNA%202021-certificate.pdf&embedded=true'
	});
});

cebc.addEventListener('click', () => {
	new WinBox({
		title: 'CEBC',
		modal: mobile,
		left: 50,
		url: 'CEBC%20-%20SumTotal.pdf&embedded=true'
	});
});

idcss.addEventListener('click', () => {
	new WinBox({
		title: 'IDCSS',
		modal: mobile,
		left: 50,
		url: 'Certificate%20-%20ANNANGI%20VINAY%20CHOWDARY.pdf&embedded=true'
	});
});

guvi_py.addEventListener('click', () => {
	new WinBox({
		title: 'GUVI AI in Py',
		modal: mobile,
		left: 50,
		url: 'GuviCertification%20.pdf&embedded=true'
	});
});

front_end.addEventListener('click', () => {
	new WinBox({
		title: 'HTML & CSS',
		left: 50,
		modal: mobile,
		url: 'HTML5%20CSS3%20-%20SumTotal.pdf&embedded=true'
	});
});

istqb.addEventListener('click', () => {
	new WinBox({
		title: 'ISTQB Foundation',
		modal: mobile,
		left: 50,
		url: 'ISTQB%20-%20SumTotal.pdf&embedded=true'
	});
});

itil.addEventListener('click', () => {
	new WinBox({
		title: 'ITIL Foundation',
		modal: mobile,
		left: 50,
		url: 'ITIL%20-%20SumTotal.pdf&embedded=true'
	});
});

javascript.addEventListener('click', () => {
	new WinBox({
		title: 'JavaScript L1',
		modal: mobile,
		left: 50,
		url: 'Javascript%20-%20SumTotal.pdf&embedded=true'
	});
});

linux.addEventListener('click', () => {
	new WinBox({
		title: 'Linux Basics',
		modal: mobile,
		left: 50,
		url: 'Linux%20Basics%20and%20Shell%20Programming%20Certification.pdf&embedded=true'
	});
});

mathworks.addEventListener('click', () => {
	new WinBox({
		title: 'Math Works OnRamp',
		modal: mobile,
		left: 50,
		url: 'MathOnrampCertificate.pdf&embedded=true'
	});
});

nad_micro.addEventListener('click', () => {
	new WinBox({
		title: 'NAD Microservices',
		modal: mobile,
		left: 50,
		url: 'NAD%20Microservice%20-%20SumTotal.pdf&embedded=true'
	});
});

nad_scrum.addEventListener('click', () => {
	new WinBox({
		title: 'NAD Scrum',
		modal: mobile,
		left: 50,
		url: 'NAD%20Scrum%20-%20SumTotal.pdf&embedded=true'
	});
});

ps_matlab.addEventListener('click', () => {
	new WinBox({
		title: 'MatLab Simulink',
		modal: mobile,
		left: 50,
		url: 'PS-APSSDC-MATLAB-1987.pdf&embedded=true'
	});
});

pwr_ele.addEventListener('click', () => {
	new WinBox({
		title: 'Power Electronics',
		modal: mobile,
		left: 50,
		url: 'PS-PE-APR-MC-1586.pdf&embedded=true'
	});
});

img_proc.addEventListener('click', () => {
	new WinBox({
		title: 'Image Processing',
		modal: mobile,
		left: 50,
		url: 'PS-IP-APR-MC-2613.pdf&embedded=true'
	});
});

unix_basics.addEventListener('click', () => {
	new WinBox({
		title: 'Unix Fundamentals and Commands',
		modal: mobile,
		left: 50,
		url: 'Unix%20-%20SumTotal.pdf&embedded=true'
	});
});

pwa.addEventListener('click', () => {
	new WinBox({
		title: 'Progressive Web App',
		modal: mobile,
		left: 50,
		url: 'udemy_PWA_crt.pdf&embedded=true'
	});
});

java.addEventListener('click', () => {
	new WinBox({
		title: 'Java',
		modal: mobile,
		left: 50,
		url: 'udemy_java_crt.pdf&embedded=true'
	});
});

presentation_skills.addEventListener('click', () => {
	new WinBox({
		title: 'Presentation Skills',
		modal: mobile,
		left: 50,
		url: 'udemy_presentation_skills.pdf&embedded=true'
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
