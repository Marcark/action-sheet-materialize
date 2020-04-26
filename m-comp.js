$('head').append('<style type="text/css">.action-sheet{position:fixed;width:100%;bottom:0;z-index:1000;display:none;animation-duration:.5s;animation-delay:0s}.action-sheet ul{padding:0 10px 0 10px;color:#3880ff}.action-sheet li:first-child{height:43px!important;line-height:43px!important;font-size:13px!important;border-radius:13px 13px 0 0;font-weight:400;color:#999}.action-sheet li:nth-last-child(2){margin-bottom:13px;border-bottom:0;border-radius:0 0 13px 13px}.action-sheet li:last-child{border-radius:13px;font-weight:600;color:red}.action-sheet li{width:100%;background:#fff;height:56px;line-height:56px;border-bottom:1px solid #ccc;text-align:center;font-size:20px}.blackscreen{display:none;width:100%;position:fixed;height:100%;background:#000000ab;top:0;z-index:999}</style>');

$(".action-sheet").addClass('animated');
$(".action-sheet li").addClass('waves-effect');

function action(a) {
    if (a==1) {
    $(".blackscreen").fadeIn(500)
    $(".action-sheet").css('display','block');
    $(".action-sheet").removeClass('bounceOutDown');
    $(".action-sheet").addClass('bounceInUp');
    }
    if (a==2) {
    $(".blackscreen").fadeOut('slow');
    $(".action-sheet").removeClass('bounceInUp');
    $(".action-sheet").addClass('bounceOutDown');
    }
}
$(document).ready(function() { $('.action-sheet li').click(function(e) { action(2); }); });
$(document).ready(function() { $('.blackscreen').click(function(e) { action(2); }); });
