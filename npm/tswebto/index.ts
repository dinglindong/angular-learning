/**
 * @author Lnden
 * @date 2020/2/26
 * @desc
 *      webto.pdf为页面导出.pdf
 */
/* eslint-disable */
// @ts-ignore
import html2Canvas from 'html2canvas'
// @ts-ignore
import JsPDF from 'jspdf'

const pdf = {
    install: function (Vue: any) {
        Vue.prototype.getPdf = (dom: any) => {
            const c = document.createElement('canvas');
            const opts = {
                scale: 2,
                canvas: c,
                logging: true,
                width: document.querySelector(dom).offsetWidth,
                height: document.querySelector(dom).offsetHeight,
                useCORS: true,
            };
            c.width =  document.querySelector(dom).offsetWidth * 2;
            c.height = document.querySelector(dom).offsetHeight *2;
            return html2Canvas(document.querySelector(dom), opts).then((canvas) => {
                const contentWidth = canvas.width;
                const contentHeight = canvas.height;
                const pageHeight = contentWidth / 592.28 * 841.89;
                let leftHeight = contentHeight;
                let position = 0;
                const imgWidth = 595.28;
                const imgHeight = 592.28 / contentWidth * contentHeight;
                const pageData = canvas.toDataURL('image/jpeg', 1.0);
                const PDF = new JsPDF('', 'pt', 'a4');
                if (leftHeight < pageHeight) {
                    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        if (leftHeight > 0) {
                            PDF.addPage();
                        }
                    }
                }
                let pdfData = PDF.output('datauristring');
                return pdfData;
            });
        };
    },
};
export default {
    pdf,
}
