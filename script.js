preLoader = document.querySelector('.pre-loader')
start = document.querySelector('.start');
applications = document.querySelector('.applications');
places = document.querySelector('.places');
system = document.querySelector('.system');
home = document.querySelector('.icon-container .home');
pictures = document.querySelector('.icon-container .pictures');
games = document.querySelector('.icon-container .games');
trash = document.querySelector('.icon-container .trash');
about = document.querySelector('.icon-container .about');
currDateTime = document.querySelector('.cur-dat-tim');

function preLoad(){
	window.setInterval(() => {
		preLoader.style.display = "none"
	}, 1700);
	
}

let curdate = new Date().toUTCString();
curdate = curdate.split(' ').slice(0, 5).join(' ');
currDateTime.innerText = curdate;

home.addEventListener('click', () => {
	new WinBox({
		title: 'Home',
		x: 'center',
		y: 'center',
		width: '50%',
		height: '50%',
		url: "https://www.winay.lovestoblog.com/"
	});
});
about.addEventListener('click', () => {
	new WinBox('About', {
		top: 50,
		right: 50,
		bottom: 0,
		left: 50,
		url: "https://www.balaganesh.ga/gallery"
	});
});

pictures.addEventListener('click', () => {
	new WinBox({
		title:'Pellichoopulu',
		url : "https://Winay-Chowdary66.github.io/python-program-convert-numbers-to-words"
	});
});
