$(function () {
    var controller = {
        config: {
            accessKeyId: 'LTAIIhM3CmF30nvx',
            accessKeySecret: 'D89p2eOat3KRtVFcImZGkKkP4Gsvpc',
            bucket: 'orchidadoration',
            endpoint: 'https://oss-cn-beijing.aliyuncs.com',//
            region: 'oss-cn-beijing',
        },
        path: {
            executeAnalysis: '//orthophoto.allinmd.cn/executeAnalysis',//'/dicom/api/executeAnalysis',//触发分析事件 //medical.aliyun.com
            getAnalysisResult: '//orthophoto.allinmd.cn/getAnalysisResult'//'/dicom/api/getAnalysisResult'//获取分析结果//medical.aliyun.com
        },
        init: function () {
            var t = this;
            t.ossWrapper();
            t.bigImgShow();
            t.closeBtn();
        },
        //显示loading图
        showLoading: function () {
            if ($(".ev-loading").length == 0) {
                $(".ev-changeImgBox").append('<section class="al-middleTipsBox"><section class="al-middleTipsModal ev-loading"><figure class="al-middleTipsModalText al-loading">' +
                    '<img src="/images/loading.gif"></figure>' +
                    '<section class="upProgress ev-progress"></section>' +
                    '</section></section>');
            } else {
                $(".ev-loading").show();
            }
        },
        //隐藏loading图
        hideLoading: function () {
            $(".ev-loading").hide();
        },
        //请求上传
        ossWrapper: function () {
            var t = this;
            t.client = new OSS.Wrapper({
                region: t.config.region,
                accessKeyId: t.config.accessKeyId,
                accessKeySecret: t.config.accessKeySecret,
                bucket: t.config.bucket,
                secure:true
            });
            $('.ev-uploadBtn,.ev-upBtnOnce').off("input propertychange change").on('input propertychange change', function (e) {
                var _type=e.target.files[0].type;
                if ((/(jpg)|(jpeg)|(png)$/i.test(_type))) {
                    t.localUrl = t.getObjectURL($(this)[0].files[0]);
                    t.upLoadSuccess(e);
                    t.showLoading();
                    $(".ev-upLoadTips").text("图片正在上传中，请稍后......").show().siblings(".readingTips").hide();
                    $('.ev-uploadImgBtn').hide();
                    $(".changeImgBox").show();
                    $(".ev-IntellReading,.ev-bigImg,.ev-startUpload").addClass("gray");
                } else {
                    popup("仅支持上传jpg、jpeg、png格式文件");
                    return false;
                }
            });
        },
        //获取本地上传的图片链接
        getObjectURL: function (file) {
            var url = null;
            // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
            if (window.createObjectURL != undefined) { // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        //上传求情操作函数
        upLoadSuccess: function (e) {
            var t = this;
            var f = e.target.files[0];
            var val = $('.ev-uploadBtn').val();
            var suffix = val.substr(val.indexOf("."));
            var obj = t.timestamp();
            var storeAs = 'demo/' + obj + suffix;

            var progress = function (p) { //上传进度设置
                return function (done) {
                    if (p == 1) {
                        p = 0.99;
                    }
                    var _pro = Math.floor(p * 100) + '%';
                    $(".ev-progress").text("上传进度：" + _pro);
                    done();
                }
            };
            t.client.multipartUpload(storeAs, f, {
                progress: progress
            }).then(function (result) {//处理上传成功
                // var url = t.client.signatureUrl(storeAs);
                $('.uploadImg').hide();
                $('.ev-uploadImgBtn').hide().attr({
                    'data-imgSrc': t.localUrl,
                    'storeAs': storeAs
                });
                var _kvUrl = new Image();
                _kvUrl.src = t.localUrl;
                _kvUrl.onload = function (ev) {
                    var _imgObj = $(_kvUrl);
                    _imgObj.addClass('ev-imgChange');
                    $(".ev-changeImgBox").show().html(_imgObj);
                    t.hideLoading();
                    $(".ev-upLoadTips").text("图片上传完成，请进行片子读取");
                    t.intelligentRead();
                    $(".ev-IntellReading,.ev-startUpload").removeClass("gray");
                    $(".ev-bigImg").addClass("gray");
                    $(".ev-startUpload").show();//重新上传
                    $(".ev-progress").hide();
                };
            }).catch(function (err) {//处理上传失败

            });
        },
        //时间  生成文件名
        timestamp: function () {
            var t = this;
            return (new Date().getTime() + '_' + Math.floor(Math.random() * 10000 + 1));
        },
        //片子读取,触发分析事件
        intelligentRead: function () {
            var t = this,
                _kvId = $('.ev-uploadImgBtn').attr("storeAs"),
                _uId = _kvId.match(/\d+/g);
            $(".ev-IntellReading").off("click").on("click", function () {
                if (!$(this).hasClass("gray")) {
                    $(".ev-upLoadTips").hide().text("图片正在上传中，请稍后......");
                    $(".ev-IntellReading,.ev-bigImg,.ev-startUpload").addClass("gray");
                    $(".ev-upBtnOnce").hide();
                    $(".ev-readingTips").show().siblings(".readingTips").hide();//结果正在分析中显示
                    $.ajax({
                        url: t.path.executeAnalysis,
                        type: "post",
                        contentType: 'application/json',
                        headers: {
                            "tokenId": "allinmd",
                            "namespace": "allinmd"
                        },
                        data: JSON.stringify({//paramJson:JSON.stringify( {)}
                            studyInstanceUid: _uId.toString(), // 检查事件的编号
                            studyType: 4,  // 1：肺结节CT；2：胸腔X光；3：眼底；4：骨关节分析
                            statusNotifyCallBackUrl: "https://www.a.com",  // 用于回调，通知第三方dicom分析成功/失败
                            accessKeyId: t.config.accessKeyId, // OSS账号id
                            accessKeySecret: t.config.accessKeySecret, // OSS账号key
                            securityToken: "", // OSS STS token
                            endpoint: t.config.endpoint, // OSS服务器域名
                            bucketName: t.config.bucket, // OSS对象存储空间
                            key: _kvId, // OSS服务器对象存储key（传study path即可分析一次study的全部dicom）
                            forceAnalysis: true //dicom文件变化后使用，true：强制再次执行算法分析
                        }),
                        dataType: 'json',
                        success: function (data) {
                            if (data.returnCode == "000000") {//触发分析的返回状态ok，说明已经在进行分析了
                                setTimeout(t.analysisResult(), 5000);//请求成功再延迟两秒
                            }
                        }
                    });
                }

            })
        },
        //循环请求片子分析结果
        analysisResult: function () {
            var t = this,
                _kvId = $('.ev-uploadImgBtn').attr("storeAs"),
                _uId = _kvId.match(/\d+/g);
            var analysisR = setInterval(function () {
                $.ajax({
                    url: t.path.getAnalysisResult,
                    type: "GET",
                    contentType: 'application/json',
                    headers: {
                        tokenId: "allinmd",
                        namespace: "allinmd"
                    },
                    data: {
                        studyInstanceUid: _uId.toString(), // 检查事件的编号
                        studyType: 4  // 1：肺结节CT；2：胸腔X光；3：眼底；4：骨关节分析
                    },
                    dataType: 'json',
                    success: function (data) {
                        if (data.returnCode == "000000") {//分析结果已经成功
                            $(".ev-IntellReading,.ev-startUpload").removeClass("gray");
                            $(".ev-upBtnOnce").show();//重新上传按钮显示
                            $(".ev-readingTips").hide();
                            clearInterval(analysisR);
                            t.resultShow = data.data;
                            if (data.data.boxDataList && data.data.boxDataList.length) {
                                $(".ev-resultTips").text("结果分析完成，请点击查看结果查看").show().siblings(".readingTips").hide();
                                $(".ev-bigImg").removeClass("gray");
                            } else {
                                $(".ev-resultTips").text("暂无分析结果，请重新上传或再次读取").show().siblings(".readingTips").hide();
                            }
                        } else {//分析结果暂时未完成，继续进行请求

                        }
                    }
                });
            }, 5000);
        },
        //点击查看大图操作
        bigImgShow: function () {
            var t = this;
            $(".ev-bigImg").off("click").on("click", function () {
                if (!$(this).hasClass("gray")) {
                    $(".ev-popupBox").show();
                    $(".ev-popupMain img").attr("src", $(".ev-imgChange").attr("src"));
                    var image = new Image();
                    image.src = $(".ev-imgChange")[0].src;
                    image.onload = function (ev) {
                        t._naWidth = image.width;
                        t._naHeight = image.height;
                        t._nowW = $(".ev-popupMain").width();
                        t._nowH = $(".ev-popupMain").height();
                        t.canvasFun();
                    };
                }
            });
        },
        //查看大图关闭按钮
        closeBtn: function () {
            var t = this;
            $(".ev-closeBtn").off("click").on("click", function () {
                $(".ev-popupBox").hide();
                $(".ev-resultTips").hide();
            });
        },
        //查看大图进行坐标描绘
        canvasFun: function () {
            var t = this;
            var items = t.resultShow;
            var _perW = t._nowW / t._naWidth;
            var _perH = t._nowH / t._naHeight;
            $(".ev-can").width(t._nowW);
            $(".ev-can").height(t._nowH);

            t.zr = zrender.init(document.getElementById('CursorLayer')); //获取承载canvas的元素
            t.panel = new zrender.Rect({
                shape: {
                    width: t._nowW,
                    height: t._nowH
                },
                style: {
                    fill: 'none',
                    stroke: 'none'
                }
            });
            t.zr.add(t.panel);
            if (items) {
                $.each(items.boxDataList, function (i, e) {//items.boxDataList
                    var _rect = new zrender.Rect({
                        shape: {
                            x: e.coordinates[0].toFixed(2) * _perW,
                            y: e.coordinates[1].toFixed(2) * _perH,
                            width: (e.coordinates[2] - e.coordinates[0]).toFixed(2) * _perW,
                            height: (e.coordinates[3] - e.coordinates[1]).toFixed(2) * _perH
                        },
                        style: {
                            fill: 'rgba(0,0,0,0)',
                            stroke: '#4cf316',
                            lineWidth: '10',
                            text: e.classLevel,
                            textAlign: 'right',
                            textPosition: [(e.coordinates[2] - e.coordinates[0]).toFixed(2) * _perW + 50, -50],
                            textFill: "#4cf316",
                            fontSize: "24"
                        }
                    });
                    t.zr.add(_rect);
                });
            }

        }
    };
    controller.init();
});

