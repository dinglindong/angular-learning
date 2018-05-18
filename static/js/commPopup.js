const commPopup = {
    popup(s) {
        if ($(".ev-orPopupBox").length == 0) {
            $("body").append('<section class="or-popupBox ev-orPopupBox"><figure class="or-popupText"><p class="tipText">' + s + '</p> </figure></section>');
        } else {
            $(".ev-orPopupBox").addClass("show");
        }
        setTimeout(function () {
            $(".ev-orPopupBox").removeClass("show");
        }, 3000);
    },
    popupFn(s,time,fn){
        if ($(".ev-commTips").length == 0) {

            $("body").append('<section class="al-middleTipsBox"><section class="al-middleTipsModal ev-commTips"><figure class="al-middleTipsModalText"><p class="tipText">' + s + '</p> </figure></section></section>');

            setTimeout(function() {
                $(".ev-commTips").addClass('show')
            }, 100);
        } else {
            $(".ev-commTips").addClass('show');
            $(".tipText").html(s);
        }
        setTimeout(function() {
            $(".ev-commTips").removeClass('show');
            fn&&fn();
        }, time?time:3000);
    }
};
export default  commPopup;
