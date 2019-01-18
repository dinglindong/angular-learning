<template>
    <section>
        <h3>{{description}}</h3>
    </section>
</template>

<script>
    /**
     * @author Lnden
     * @date 2018/01/18
     * @desc 组件描述
     * @param 组件引用位置
     */
    export default {
        data(){
            return {
                description:'canvas watermark',
                options:{
                    el:document.body,
                    color:'#090',
                    size:'30px',
                    width:300,
                    height:200,
                    rotate:45*Math.PI/180,
                    translatex:30,
                    translatey:-90
                }
            }
        },
        methods:{
            addWaterMarker(str,options={}){
                let config = {
                    el:document.body,
                    color:'#efefef',
                    size:'30px',
                    width:300,
                    height:200,
                    rotate:45*Math.PI/180,
                    translatex:30,
                    translatey:-90,
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
        },
        created(){
            // this.addWaterMarker('admin'[,this.options])
            this.addWaterMarker('admin')
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

</style>

