$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo img').click(function(){
        $('#photos').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        //var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');
        var $altvalue = $(this).attr('alt');
        //$('.box').append($altvalue);

        var $imgsrc = $(this).attr('src')
        $('.box').append("<img src='" + $imgsrc + "'>");
        // if ($altvalue=="dog1") {
        //     //var img = $('#photos:nth-child(1) img').clone(); //Duplicate DOM element
        //     $('.box').append('<img src="images/dog1.jpeg" alt="">'); //Insert duplicated element in another element
        // }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('#photos').animate({'opacity':'1'}, 300, 'linear', function(){
            //$('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut().time(1000);
    });

});