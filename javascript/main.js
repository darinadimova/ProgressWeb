if (typeof $!="undefined"){
    $( document ).ready(function() {

        $('#imgContainer .smallImgs').click(function(){
          $('#imgContainer .mainImage img').attr('src',$(this).children("img").attr('src')); 
        });
        /*event maps*/
        $(".fa.fa-location-arrow").click(function(){
            $(".eventMap").toggle("slow");
        });
        /*event arrow down*/
        $(".arrowDown").click(function(){
            $(".temporaryOwnerForm").toggle("fast", function() {
                $(window).scrollTop($(document).height());
            });
        });
    });
}

function loginShow() {
    document.getElementById('registerForm').style.display = "none";
    document.getElementById('loginForm').style.display = "block";
    document.getElementById('forgottenPasswordForm').style.display = "none";
    document.getElementById('overlay').style.display = "block";
}

function registerShow() {
    document.getElementById('registerForm').style.display = "block";
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('forgottenPasswordForm').style.display = "none";
    document.getElementById('overlay').style.display = "block";
}

function forgottenPasswordShow() {
    document.getElementById('registerForm').style.display = "none";
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('forgottenPasswordForm').style.display = "block";
    document.getElementById('overlay').style.display = "block";
}

function hideForm() {
    document.getElementById('overlay').style.display = "none";
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('registerForm').style.display = "none";
    document.getElementById('forgottenPasswordForm').style.display = "none";
}

function msgSend() {
    document.getElementById('forgottenPasswordForm').innerHTML = "Съобщението беше изпратено усмешно!Нова парола беше изпратена на посочения емайл.";
}

document.addEventListener("scroll", function() {

    if (window.pageYOffset > 300) {
        document.getElementById('arrow').style.display = "block";
    };
    if (window.pageYOffset < 100) {
        document.getElementById('arrow').style.display = "none";
    }
});

