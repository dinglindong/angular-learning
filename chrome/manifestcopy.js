var controller = {
  "name": "Hello Extensions",
  "description" : "Hello world Extension",
  "version": "1.0",
  "manifest_version": 2,
  "browser_action": {
    "default_popup": "popup.html",
    "default_title": "鼠标放上显示",
    "default_icon": "images/hello_extension.png"
  },
  "page_action": {},
  "background":{
    "scripts":["background.js"]
  },
  //可以指定将哪些脚本何时注入到哪些页面中,类型为数组
  "content_scripts":[
      //content_scripts中的脚本只是共享页面的DOM1，而并不共享页面内嵌JavaScript的命名空间。
      // 也就是说，如果当前页面中的JavaScript有一个全局变量a，content_scripts中注入的脚本也可以有一个全局变量a，
      // 两者不会相互干扰。当然你也无法通过content_scripts访问到页面本身内嵌JavaScript的变量和函数。
    {
      "matches":["http://wwww.google.com/*"],//定义了哪些页面会被注入脚本
      "exclude_matches":["http://wwww.google.com/*"],//定义了哪些页面不会被注入脚本
      "css":["mystyles.css"],
      "js":["jquery-1.11.0.min.js","myscript.js"],
      "run_at":"",//定义了何时进行注入
        "all_frames":"",   //定义脚本是否会注入到嵌入式框架中
        "include_globs":"",//全局URL匹配
        "exclude_globs":"",//全局URL匹配

    }
  ],
  "options_page":"options.html",
  "permissions":[
    "*://www.google.com/*"
  ],
  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+F",
        "mac": "MacCtrl+Shift+F"
      },
      "description": "Opens popup.html"
    }
  }
}