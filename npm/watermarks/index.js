/**
 * @author Lnden
 * @date 2019/1/22
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

class Watermark {
    constructor(){
        config = {
            el:document.body,
            color:'#efefef',
            size:'30px',
            width:300,
            height:200,
            rotate:45*Math.PI/180,
            translatex:30,
            translatey:-90
        };
    }
    canvas(str,options){
        let config = {
            ...this.config,
            ...options
        };
        let canvas = document.createElement('canvas');
        let body = document.body;
        body.appendChild(canvas);
        canvas.width=config.width;
        canvas.height=config.height;
        canvas.style.display='none';
        let ctx = canvas.getContext('2d');
        ctx.rotate(config.rotate);
        ctx.translate(config.translatex,config.translatey);
        ctx.font = `${config.size} Microsoft JhengHei`;
        ctx.fillStyle = config.color;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'Middle';
        ctx.fillText(str,canvas.width/3,canvas.height/2);
        config.el.style.backgroundImage=`url(${canvas.toDataURL("image/png")})`;
    }
}

export default new Watermark()