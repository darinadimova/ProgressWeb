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
        
        resizer(335,235,400,400);
    });
}


var imgs = document.getElementsByClassName('imgAd');
window.onload = function () { 
    for(i=0; i<imgs.length; i++){
        var newSize=resizer(800,300,imgs[i].clientWidth,imgs[i].clientHeight);
        imgs[i].style.width=newSize[0]+"px";
        imgs[i].style.height=newSize[1]+"px";
        var newSize2=resizer(275,200,imgs[i].clientWidth,imgs[i].clientHeight);
        imgs[i].style.width=newSize2[0]+"px";
        imgs[i].style.height=newSize2[1]+"px";
      }
        var mainImage=document.getElementsByClassName("mainImage")[0].childNodes[1];
        var newSize=resizer(800,300,mainImage.clientWidth,mainImage.clientHeight);
        mainImage.style.width=newSize[0]+"px";
        mainImage.style.height=newSize[1]+"px";
        var newSize2=resizer(600,500,mainImage.clientWidth,mainImage.clientHeight);
        mainImage.style.width=newSize2[0]+"px";
        mainImage.style.height=newSize2[1]+"px";
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

function resizer(maxW, maxH, currW, currH){

    var rw = currW/maxW;
    var rh = currH/maxH;

    if(rw >= rh){
        currW = maxW;
        currH = Math.round(currH/rw);
    }else{
        currH =maxH;
        currW = Math.round(currW/rh);
    }
    return [currW, currH];
}
