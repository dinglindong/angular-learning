/**
 * @author Lnden
 * @date 2018/12/10
 * @desc
 *      webto.pdf为页面导出.pdf
 *      webto.photo为页面导出.png
 */

import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

const pdf = {
    install (Vue, options) {
        Vue.prototype.getPdf = function (dom) {
            var title = this.htmlTitle;
            var c = document.createElement("canvas");
            var opts = {
                scale: 2,
                canvas: c,
                logging: true,
                width: document.querySelector(dom).width,
                height: document.querySelector(dom).height
            };
            c.width = document.querySelector(dom).width * 2;
            c.height = document.querySelector(dom).height * 2;
            c.getContext("2d").scale(2, 2);
            html2canvas(document.querySelector(dom), opts).then(function (canvas) {
                    let contentWidth = canvas.width;
                    let contentHeight = canvas.height;
                    let pageHeight = contentWidth / 592.28 * 841.89;
                    let leftHeight = contentHeight;
                    let position = 0;
                    let imgWidth = 595.28;
                    let imgHeight = 592.28 / contentWidth * contentHeight;
                    let pageData = canvas.toDataURL('image/jpeg', 1.0);
                    let PDF = new JsPDF('', 'pt', 'a4');
                    if (leftHeight < pageHeight) {
                        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                    } else {
                        while (leftHeight > 0) {
                            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            if (leftHeight > 0) {
                                PDF.addPage()
                            }
                        }
                    }
                    PDF.save(title + '.pdf')
                }
            )
        }
    }
};

const photo = {
    install (Vue, options) {
        Vue.prototype.getPhoto = function (dom) {
            var title = this.htmlTitle;
            let canvas = document.querySelector(dom);
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
                let filename = title + '.' + type;
                saveFile(imgData,filename);
                function saveFile(data, filename){
                    let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                    save_link.href = data;
                    save_link.download = filename;
                    let event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    save_link.dispatchEvent(event);
                }
            });
        }
    }
};

export default {
    pdf,
    photo
}