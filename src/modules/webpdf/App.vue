<template>
    <section>
        <button @click="getPdf()">点击打印页面</button>
        <!--<button @click="getPdf('#pdfDom','测试')">点击打印页面清晰版</button>-->
        <section id="pdfDom">
            <h3>关于前端单页面应用下载页面为PDF文件</h3>
            <section class="content">
                <p>该技术使用jspdf、html2canvas进行实战</p>
                <p>1.首先安装jspdf、html2canvas两个包</p>
                <p>&emsp;&emsp;cnpm install jspdf -D/-S</p>
                <p>&emsp;&emsp;cnpm install html2canvas -D/-S</p>
                <p>2.封装组件挂在vue根实例</p>
                <p>&emsp;&emsp;封装组件存放在当前页面utils/htmlToPdf.js</p>
                <p>&emsp;&emsp;在当前页面main.js引入组件，并且挂在到vue实例上Vue.use(htmlToPdf);</p>
                <p>3.下载页面需要绑定元素id</p>
                <p>&emsp;&emsp;元素绑定 id="pdfDom"</p>
                <p>4.给响应按钮绑定下载事件</p>
                <p>&emsp;&emsp;{{event}}</p>
                <p>&emsp;&emsp;data内并且添加htmlTitle字段，该字段为下载pdf的名称</p>
                <i>注释：导出来的pdf打印出来还是比较模糊的</i>
                <br>
                <br>
                <b>解决方案：</b>
                <p>将canvas的属性width和height属性放大为2倍，最后将canvas的css样式width和height设置为原来1倍的大小即可，也就是，先将canvas高分辨率输出，再来压缩导出打印</p>
                <p>切换utils下perfect.js并且打开本页面清晰版注释</p>
            </section>
        </section>
    </section>
</template>

<script>
    /**
     * @author Lnden
     * @date 2018/12/5
     * @desc 组件描述
     * @param 组件引用位置
     */
    export default {
        data(){
            return {
                htmlTitle:'页面导出PDF文件名',
                event:'<button @click="getPdf()">点击下载按钮</button>',
                message:'https://www.jb51.net/article/144755.htm'
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>
    #pdfDom{
        text-align: center;
        padding-top:50px;
        .content{
            text-align: left;
            color:#666;
            padding:30px;
        }
    }
</style>

