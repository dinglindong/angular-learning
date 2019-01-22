### watermarks

watermarks为水印方法集

### canvas

#### Installation
```
npm install watermarks -S
```

#### Use
```
import Watermarks from 'watermarks'

Watermarks.canvas(str[,options])
```
#### Description

&emsp;&emsp;str 为水印内容 'admin/P0125666'
&emsp;&emsp;options 为可配置对象包含如下options

```
{
    el:element,
    color:'#efefef',
    size:'30px',
    width:300,
    height:200,
    rotate:45*Math.PI/180,
    translatex:30,
    translatey:-90
}
```
注释：动态生成的 canvas appendChild() 在body原生中隐藏处理
