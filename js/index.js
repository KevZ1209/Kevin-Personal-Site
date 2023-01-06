

// A $( document ).ready() block.
$( document ).ready(function() {
    $("#big-name").animate({
        opacity: '1',
        bottom: '0'
    }, 2000)

    $("#profile-img").animate({
        opacity: '1',
        bottom: '0'
    }, 2000)

    setTimeout(function() {
        $("#tagline1").animate({
            opacity: '1',
            top: '0'
        }, 2000)
    }, 750)


    setTimeout(function() {
        $("#tagline2").animate({
            opacity: '1',
            top: '0'
        }, 2000)
    }, 3000)

    setTimeout(function() {
        $("#tagline3").animate({
            opacity: '1',
            top: '0'
        }, 2000)
    }, 5250)



});


function toggleNav() {
    $(".links").toggleClass('hide')

    // for (let i = 0; i < links.length; i++) {
    //     links[i].classList.toggle('show-link')
    // }


}