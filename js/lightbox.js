$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo img').click(function(){
        $('#photos').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        };

        //Get text content in attribute
        var $imgsrc = $(this).attr('src');
        $('.box').append("<img src='" + $imgsrc + "'>");

    });

    /* Click to close lightbox */
    $('.close').click(function(){
        $('#photos').animate({'opacity':'1'}, 300, 'linear', function(){
            //$('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut().time(1000);
    });

});