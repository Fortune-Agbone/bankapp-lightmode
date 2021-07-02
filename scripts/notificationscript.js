//script for opemimg and closing the notification details box


//script for opening the notification details box
var notificationStatus = 0

$(function () {
    $('#notification-click').click(function () {
        ++notificationStatus;

        if (notificationStatus % 2 === 1) {
            $('.notification').toggle(200);
        }
        else {
            $('.notification').toggle(200);
        }
    })
})
//end of notification open script


//script for closing the notification details box
var closenotificationStatus = 0

$(function () {
    $('#close-notification-click').click(function () {
        ++closenotificationStatus;

        if (closenotificationStatus % 2 === 1) {
            $('.notification').hide(200);
        }
        else {
            $('.notification').hide(200);
        }
    })
})
//end of notification close script