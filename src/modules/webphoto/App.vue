<template>
    <section class="webphoto">
        <div class="index">
            <div class="canvas" ref="canvas">
                <div class="avatar">
                    <img src="https://avatars3.githubusercontent.com/u/31025306?s=460&v=4" alt="">
                </div>
                <div class="text">
                    <p>手气好，抽到宝，你不来试试吗？</p>
                    <p>我刚刚抽到了：</p>
                </div>
                <div class="box">
                    <div class="title">小米音乐音响</div>
                    <div class="sound">
                        <img src="https://s1.ax2x.com/2018/08/17/59dkmp.png" alt="">
                    </div>
                    <div class="qrcode">
                        <img src="https://s1.ax2x.com/2018/08/17/59dlh3.png" alt="">
                    </div>
                    <div class="tip">长按识别 试试运气</div>
                </div>
                <div class="from">
                    来自UU跑腿抽奖
                </div>
            </div>
            <div class="save_btn" @click="savecanvas">
                保存图片
            </div>
        </div>
    </section>
</template>

<script>
    /**
     * @author Lnden
     * @date 2018/12/6
     * @desc 组件描述
     * @module 组件引用位置
     *      1.
     * @param {Object} [title]  - 参数说明
     * @example 调用示例
     * <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
     */

    import html2canvas from 'html2canvas';
    export default {
        methods: {
            savecanvas(){
                let canvas = document.querySelector('.canvas');
                let that = this;
                html2canvas(canvas,{scale:2,logging:false,useCORS:true}).then(function(canvas) {
                    let type = 'png';
                    let imgData = canvas.toDataURL(type);
                    // 照片格式处理
                    let _fixType = function(type) {
                        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
                        let r = type.match(/png|jpeg|bmp|gif/)[0];
                        return 'image/' + r;
                    };
                    imgData = imgData.replace(_fixType(type),'image/octet-stream');
                    let filename = "UUSound" + '.' + type;
                    that.saveFile(imgData,filename);
                });
            },
            saveFile(data, filename){
                let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                save_link.href = data;
                save_link.download = filename;

                let event = document.createEvent('MouseEvents');
                event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                save_link.dispatchEvent(event);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .webphoto{
        .index{
            height: 100%;
            width: 100%;
            .canvas{
                height: 100%;
                height: 100%;
                background: #d5574a;
                padding: 0.5067rem 0.6rem 0;
                box-sizing: border-box;
                .avatar{
                    height: 1.0667rem;
                    width: 1.0667rem;
                    margin: 0  auto;
                    img{
                        height: 1.0667rem;
                        width: 1.0667rem;
                        border-radius: 50%;
                    }
                }
                .text{
                    font-size: 0.4267rem;
                    color: #ffffff;
                    margin-top: 0.36rem;
                    text-align: center;
                    p:last-child{
                        margin-top: 0.2667rem;
                    }
                }
                .box{
                    margin-top: 0.5333rem;
                    width: 100%;
                    background: #ffffff;
                    border-radius: 8px;
                    padding: 0 0.3067rem 0.9333rem;
                    box-sizing: border-box;
                    .title{
                        font-size: 0.5067rem;
                        color: #ff8b03;
                        padding: 0.76rem 0 0.5067rem;
                        text-align: center;
                    }
                    .sound{
                        width: 100%;
                        border:2px solid #ff8b03;
                        box-sizing: border-box;
                        img{
                            width: 100%;
                        }
                    }
                    .qrcode{
                        width: 2.4rem;
                        height: 2.4rem;
                        margin: 0.88rem  auto 0;
                        img{
                            width: 100%;
                        }
                    }
                    .tip{
                        font-size: 0.3733rem;
                        color: #8f8f8f;
                        text-align: center;
                        margin: 0.3733rem 0 0 0;
                    }
                }
                .from{
                    text-align: center;
                    font-size: 0.3067rem;
                    color: #E6a7a2;
                    margin-top: 0.8667rem;
                }

            }
            .save_btn{
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                height: 1.44rem;
                background: #333333;
                line-height: 1.44rem;
                text-align: center;
                color: #ffffff;
                font-size: 0.3733rem;
            }
        }
    }
</style>