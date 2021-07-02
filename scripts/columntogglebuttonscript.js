//script for bankapp column and illustration toggle buttons


//script for bankapp-to-bankapp box column toggle buttons
var boxStatus = 0

$(function () {
    $('#boxcontent-click1').click(function () {
        ++boxStatus;
        if (boxStatus % 2 === 1) {
            $('#bankapp-to-bankapp-main-box').slideUp(500);
            $('.column-illustration-image1').slideDown();
        }
        else {
            $('#bankapp-to-bankapp-main-box').slideDown(500);
            $('.column-illustration-image1').slideUp();
        }
    })
})


$(function () {
    $('#boxcontent-buttonclick1').click(function () {
        ++boxStatus;
        if (boxStatus % 2 === 1) {
            $('#bankapp-to-bankapp-main-box').slideUp(500);
            $('.column-illustration-image1').slideDown();
        }
        else {
            $('#bankapp-to-bankapp-main-box').slideUp(500);
            $('.column-illustration-image1').slideDown();
        }
    })
})
//end of script for bankapp-top-bankapp column toggle buttons


//script for other bank transfer column toggle buttons
var boxStatus2 = 0

$(function () {
    $('#boxcontent-click2').click(function () {
        ++boxStatus2;
        if (boxStatus2 % 2 === 1) {
            $('#otherbank-main-contentbox').slideUp(500);
            $('.column-illustration-image2').slideDown();
        }
        else {
            $('#otherbank-main-contentbox').slideDown(500);
            $('.column-illustration-image2').slideUp();
        }
    })
})


$(function () {
    $('#boxcontent-buttonclick2').click(function () {
        ++boxStatus2;
        if (boxStatus2 % 2 === 1) {
            $('#otherbank-main-contentbox').slideUp(500);
            $('.column-illustration-image2').slideDown();
        }
        else {
            $('#otherbank-main-contentbox').slideUp(500);
            $('.column-illustration-image2').slideDown();
        }
    })
})
//end of script for other bank transfer column toggle buttons


//script for nearby paymnent column toggle buttons
var boxStatus3 = 0

$(function () {
    $('#boxcontent-click3').click(function () {
        ++boxStatus3;
        if (boxStatus3 % 2 === 1) {
            $('#payment-main-contentbox').slideUp(500);
            $('.column-illustration-image3').slideDown();
        }
        else {
            $('#payment-main-contentbox').slideDown(500);
            $('.column-illustration-image3').slideUp();
        }
    })
})


$(function () {
    $('#boxcontent-buttonclick3').click(function () {
        ++boxStatus3;
        if (boxStatus3 % 2 === 1) {
            $('#payment-main-contentbox').slideUp(500);
            $('.column-illustration-image3').slideDown();
        }
        else {
            $('#payment-main-contentbox').slideUp(500);
            $('.column-illustration-image3').slideDown();
        }
    })
})
//end of script for nearby payment column toggle buttons


//script for bills payment column toggle buttons
var boxStatus4 = 0

$(function () {
    $('#box-click1').click(function () {
        ++boxStatus4;

        if (boxStatus4 % 2 === 1) {
            $('#paybills-contentbox').slideUp(500);
            $('.illustration-image1').slideDown();
        }
        else {
            $('#paybills-contentbox').slideDown(500);
            $('.illustration-image1').slideUp();
        }
    })
})


$(function () {
    $('#content-click1').click(function () {
        ++boxStatus4;

        if (boxStatus4 % 2 === 0) {
            $('#paybills-contentbox').slideUp(500);
            $('.illustration-image1').slideDown();
        }
        else {
            $('#paybills-contentbox').slideUp(500);
            $('.illustration-image1').slideDown();
        }
    })
})
//end of script for bills payment column toggle buttons


//script for mobile top-up column toggle buttons
var boxStatus5 = 0

$(function () {
    $('#box-click2').click(function () {
        ++boxStatus5;

        if (boxStatus5 % 2 === 1) {
            $('#mobiletopup-contentbox').slideUp(500);
            $('.illustration-image2').slideDown();
        }
        else {
            $('#mobiletopup-contentbox').slideDown(500);
            $('.illustration-image2').slideUp();
        }
    })
})


$(function () {
    $('#content-click2').click(function () {
        ++boxStatus5;

        if (boxStatus5 % 2 === 1) {
            $('#mobiletopup-contentbox').slideUp(500);
            $('.illustration-image2').slideDown();
        }
        else {
            $('#mobiletopup-contentbox').slideUp(500);
            $('.illustration-image2').slideDown();
        }
    })
})
//end of script for mobile top-up column toggle buttons


//script for mobile lcc lookup column toggle buttons
var boxStatus6 = 0

$(function () {
    $('#box-click3').click(function () {
        ++boxStatus6;

        if (boxStatus6 % 2 === 1) {
            $('#lookup-contentbox').slideUp(500);
            $('.illustration-image3').slideDown();
        }
        else {
            $('#lookup-contentbox').slideDown(500);
            $('.illustration-image3').slideUp();
        }
    })
})


$(function () {
    $('#content-click3').click(function () {
        ++boxStatus6;

        if (boxStatus6 % 2 === 1) {
            $('#lookup-contentbox').slideUp(500);
            $('.illustration-image3').slideDown();
        }
        else {
            $('#lookup-contentbox').slideUp(500);
            $('.illustration-image3').slideDown();
        }
    })
})
//end of script for lcc lookup column toggle buttons


//script for inflow details column toggle buttons
var boxStatus7 = 0

$(function () {
    $('#box-click4').click(function () {
        ++boxStatus7;

        if (boxStatus7 % 2 === 1) {
            $('#inflow-details-main-box').slideUp(500);
            $('.column-illustration-image1').slideDown();
        }
        else {
            $('#inflow-details-main-box').slideDown(500);
            $('.column-illustration-image1').slideUp();
        }
    })
})


$(function () {
    $('#boxcontent-buttonclick4').click(function () {
        ++boxStatus7;

        if (boxStatus7 % 2 === 1) {
            $('#inflow-details-main-box').slideUp(500);
            $('.column-illustration-image1').slideDown();
        }
        else {
            $('#inflow-details-main-box').slideUp(500);
            $('.column-illustration-image1').slideDown();
        }
    })
})
//end of script inflow details column toggle buttons


//script for frequently asked questions column toggle buttons
var boxStatus8 = 0

$(function () {
    $('#box-click5').click(function () {
        ++boxStatus8;

        if (boxStatus8 % 2 === 1) {
            $('.fqadiv').slideUp(500);
            $('.illustration-image2').slideDown();
        }
        else {
            $('.fqadiv').slideDown(500);
            $('.illustration-image2').slideUp();
        }
    })
})


$(function () {
    $('#content-click2').click(function () {
        ++boxStatus8;

        if (boxStatus8 % 2 === 1) {
            $('.fqadiv').slideUp(500);
            $('.illustration-image2').slideDown();
        }
        else {
            $('.fqadiv').slideUp(500);
            $('.illustration-image2').slideDown();
        }
    })
})
//end of script inflow details column toggle buttons