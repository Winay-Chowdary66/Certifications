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

let curdate = new Date().toUTCString();
curdate = curdate.split(' ').slice(0, 5).join(' ');
currDateTime.innerText = curdate;

home.addEventListener('click', () => {
	new WinBox({
		title: 'Home',
		x: 'center',
		y: 'center',
		width: '50%',
		height: '50%'
	});
});
about.addEventListener('click', () => {
	new WinBox('About', {
		top: 50,
		right: 50,
		bottom: 0,
		left: 50
	});
});

pictures.addEventListener('click', () => {
	new WinBox({
		title:'Pellichoopulu',
		url : "https://Winay-Chowdary66.github.io/python-program-convert-numbers-to-words"
	});
});
