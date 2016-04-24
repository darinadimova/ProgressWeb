function loginShow(){
	document.getElementById('registerForm').style.display="none";
	document.getElementById('loginForm').style.display="block";
	document.getElementById('overlay').style.display="block";
}

document.addEventListener("scroll", function() {

if (window.pageYOffset > 300){
	document.getElementById('arrow').style.display = "block";
};
if (window.pageYOffset <100){
	document.getElementById('arrow').style.display = "none";
}
});