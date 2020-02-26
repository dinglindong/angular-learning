# webto 简介

&emsp;&emsp;tswebto是页面转为pdf方法webto.pdf。针对vue封装的方法，挂载在vue的实例上，按钮直接调用getpdf()方法，方法内传递需要导出的元素id名称@getpdf('#pdfDom'),并且在data数据上定义导出的文件名称，字段为htmlTitle


# webto 使用流程

## 安装 / Installation

```
npm install tswebto -S
```

## 导入 / Use

```
import webto from 'webto'
Vue.use(webto.pdf)
```

## 绑定事件 / Element

```
    <button @getpdf('#pdfDom')></button>
```

## data绑定数据

```
    data(){
        return {
            htmlitle:'导出文件名称'
        }
    }
```



