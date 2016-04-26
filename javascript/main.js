function loginShow(){
	document.getElementById('registerForm').style.display="none";
	document.getElementById('loginForm').style.display="block";
	document.getElementById('overlay').style.display="block";
}

function registerShow(){
	document.getElementById('registerForm').style.display="block";
	document.getElementById('loginForm').style.display="none";
	document.getElementById('overlay').style.display="block";
}

function hideForm(){
	document.getElementById('overlay').style.display="none";
	document.getElementById('loginForm').style.display="none";
	document.getElementById('registerForm').style.display="none";
}

document.addEventListener("scroll", function() {

if (window.pageYOffset > 300){
	document.getElementById('arrow').style.display = "block";
};
if (window.pageYOffset <100){
	document.getElementById('arrow').style.display = "none";
}
});
