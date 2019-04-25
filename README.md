# blog-assets


src/modules  --  多页应用
&emsp;&emsp;index  --  vue移动端页面切换动画
&emsp;&emsp;answer  --  答题列表页面
&emsp;&emsp;watermark  --  添加水印
&emsp;&emsp;webpdf  --  页面转换PDF
&emsp;&emsp;webphoto  --  页面转换PHOTO
&emsp;&emsp;weChatShare  --  页面分享
&emsp;&emsp;autologout  --  自动登出

chrome          --chrome扩展

vue-skeleton    --vue骨架屏幕

pipcanvas     --2017年底网易娱乐圈

build/webpack.dev.conf.js修改54行，多页面应用可以单独启动某个页面，这样速度比较快

端口跑在 slocalhost:8080/webphoto.html

vue解决跨域问题

### vue2.0
    找到 config/index.js 文件 配置如下代码

```
var proxyTable = {
    '/api': {
        target: 'https://medical.aliyun.com/dicom/api/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': 'http://photo.wei.cn/'
        }
    }
}

完成的请求地址：http://photo.wei.cn/bpoUser/findUser

```

### vue3.0
    根目录添加 vue.config.js 文件 配置如下代码

```
module.exports = {
    baseUrl: './',
    lintOnSave: 'error',
    devServer: {
        open: true, //运行后自动打开
        proxy: {
            "/api": {
                target: "https://cnodejs.org", // 域名
                ws: true, // 是否启用websockets
                changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRequiresRewrite: {
                    "^/api": "/"
                }
            }
        }
    }
};

const service = axios.create({
    baseURL: '/api/',
    timeout: 30000,
});

url: '/v1/topics?tab=all&page=1&limit=10&mdrender=false&1544100384970',

完整的请求地址：http://localhost:8080/api/v1/topics?tab=all&page=1&limit=10&mdrender=false&1544100384970

```



