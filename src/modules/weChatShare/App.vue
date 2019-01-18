<template>
    <section class="or-container">
        <h3>测试微信分享功能</h3>
    </section>
</template>

<script>
    import wx from 'weixin-js-sdk'
    export default {
        data(){
            return {
                params:''
            }
        },
        mounted(){
            let that = this;
            $.ajax({
                url: 'http://m.axxxxmd.cn/mcall/wx/api/getJSConfig/',
                type:'POST',
                data:{
                    paramJson: $.toJSON({
                        url: window.location.href
                    })
                },
                dataType: 'json',
                async: true,
                success: function(res) {
                    var data = res.responseObject.responseData;
                    that.params = data;
                    console.log(data,1111111)
                    that.config();
                }
            });
        },
        methods:{
            config(){
                let that = this;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: that.params.appId, // 必填，公众号的唯一标识
                    timestamp:that.params.timestamp, // 必填，生成签名的时间戳
                    nonceStr: that.params.noncestr, // 必填，生成签名的随机串
                    signature: that.params.signature,// 必填，签名
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone'
                    ] // 必填，需要使用的JS接口列表
                });

                wx.ready(function(){
                    wx.onMenuShareTimeline({
                        title: '分享到朋友圈', // 分享标题
                        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: '', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wx.onMenuShareAppMessage({
                        title: '分享给朋友', // 分享标题
                        desc: '', // 分享描述
                        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: '', // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wx.onMenuShareQQ({
                        title: '分享到QQ', // 分享标题
                        desc: '', // 分享描述
                        link: '', // 分享链接
                        imgUrl: '', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wx.onMenuShareWeibo({
                        title: '分享到腾讯微博', // 分享标题
                        desc: '', // 分享描述
                        link: '', // 分享链接
                        imgUrl: '', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wx.onMenuShareQZone({
                        title: '分享到QQ空间', // 分享标题
                        desc: '', // 分享描述
                        link: '', // 分享链接
                        imgUrl: '', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>