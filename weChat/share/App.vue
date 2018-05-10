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
                url: 'http://m.allinmd.cn/mcall/wx/api/getJSConfig/',
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
                        'onMenuShareQQ'
                    ] // 必填，需要使用的JS接口列表
                });

                wx.ready(function(){
                    wx.onMenuShareAppMessage({
                        title: '分享11111111111111',
                        desc: '测试分享11111111111111',
                        link: window.location.href,
                        imgUrl: 'http://orthophoto.allinmd.cn/static/images/wap/shareImg.png',
                        success: function() {
                            alert('分享成功')
                        },
                        cancel: function() {

                        }
                    });
                    wx.onMenuShareTimeline({
                        title: '分享2222222222222',
                        desc: '测试分享2222222222222',
                        link: window.location.href,
                        imgUrl: 'http://orthophoto.allinmd.cn/static/images/wap/shareImg.png',
                        success: function() {

                        },
                        cancel: function() {

                        }
                    });
                    wx.onMenuShareQQ({
                        title: '分享333333333333',
                        desc: '测试分享333333333333',
                        link: window.location.href,
                        imgUrl: 'http://orthophoto.allinmd.cn/static/images/wap/shareImg.png',
                        success: function() {

                        },
                        cancel: function() {

                        }
                    });
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>