$('#showSidebar').on('click', function () {
    $('#navigation-mobile').removeClass('d-none');
    $('#navigation-mobile').addClass('animate__slideInLeft');
    $('#logo-container-desktop').addClass('d-none');
    $('#navigation-desktop').addClass('d-none');
    $('#wrapper').removeClass('pt-4');
    $('#navigation-mobile-container').removeClass('col-1');
    $('#navigation-mobile-container').addClass('col');

    $('.overlay').addClass('active');

});

$('#hideSidebar, .overlay').on('click', function () {
    $('#navigation-mobile').addClass('d-none');
    $('#logo-container-desktop').removeClass('d-none');
    $('#navigation-desktop').removeClass('d-none');
    $('#my-sticky-top').addClass('my-white-bg');
    $('.overlay').removeClass('active');
    $('#wrapper').addClass('pt-4')
});


let changeColor = (event) => {
    // console.log(event.target)
    let btn = document.querySelectorAll(".reg-login-btn")
    for (i=0; i<=btn.length-1; i++) {
        btn[i].classList.remove("active-reg-login") 
        if(event.target == btn[0]) {
            document.querySelector("form").style.borderRadius = "0 20px 20px 20px"
        } else if (event.target == btn[1]){
            document.querySelector("form").style.borderRadius = "20px 0px 20px 20px"
        }
    }
    event.target.classList.add("active-reg-login")
}

document.querySelectorAll(".reg-login-btn").forEach(addColor = () => {
    addEventListener("click", changeColor)
})