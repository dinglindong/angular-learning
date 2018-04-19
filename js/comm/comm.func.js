/**
 * 功能描述：  方法集
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by HJ on 2018/04/18.
 */
function popup(s) {
    if ($(".ev-orPopupBox").length == 0) {
        $("body").append('<section class="or-popupBox ev-orPopupBox"><figure class="or-popupText"><p class="tipText">' + s + '</p> </figure></section>');
    } else {
        $(".ev-orPopupBox").show();
    }
    setTimeout(function () {
        $(".ev-orPopupBox").hide();
    }, 3000);
}
