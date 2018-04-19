<template>
    <section class="uploadImgCotainer">
        <div class="imgUpArea">
            <div class="uploadImgBtn ev-uploadImgBtn">
                <div class="uploadImg">
                    <input type="file" class="ev-uploadBtn" accept="image/*">
                    <img src="/static/images/icon_addpictureorvideo.png">
                    <span>(点击上传图片)</span>
                </div>
            </div>
            <div class="changeImgBox ev-changeImgBox" style="display: none;">
                <!--<img class="ev-imgChange" src=""/>-->
            </div>
            <div class="btnPut">
                <div class="analysisCheck ev-startUpload" style="display: none;">重新上传
                    <input type="file" class="ev-upBtnOnce" accept="image/*">
                </div>
                <div class="analysisCheck gray ev-IntellReading">片子读取</div>
                <div class="analysisCheck gray ev-bigImg">查看结果</div>
            </div>
            <div class="readingTips ev-readingTips" style="display: none;">结果分析中，请稍后......</div>
            <div class="readingTips ev-resultTips" style="display: none;">结果分析完成，请点击查看结果查看</div>
            <div class="readingTips ev-upLoadTips" style="display: none;">图片正在上传中，请稍后......</div>
        </div>
        <section class="popupBox ev-popupBox" style="display: none;">
            <section class="popupMain ev-can" id="CursorLayer" style="z-index: 6">

            </section>
            <section class="popupMain ev-popupMain">
                <section class="al-ad-delivery-close ev-closeBtn"></section>
                <img src="" alt="">
            </section>
        </section>
    </section>
</template>

<script>
    import axios from "axios"
    export default {

    }
</script>

