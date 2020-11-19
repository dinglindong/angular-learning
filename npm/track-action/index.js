/**
 * @author Lnden
 * @date 2020/11/18
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import Qs from 'qs';

const request = (option) => {
    return new Promise((resolve, reject) => {
        const str = Qs.stringify(option.data);
        let xmlHttp, timer;
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest()
        }
        if (option.method.toLowerCase() === 'get') {
            xmlHttp.open(option.method, option.baseURL + '?' + str, true);
            xmlHttp.send()
        } else if (option.method.toLowerCase() === 'post') {
            xmlHttp.open(option.method, option.baseURL, true);
            xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            for (const key in option.headers) {
                xmlHttp.setRequestHeader(key, option.headers[key])
            }
            xmlHttp.send(str)
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                clearInterval(timer)
                if ((xmlHttp.status >= 200 && xmlHttp.status < 300) || xmlHttp.status === 304) {
                    resolve(JSON.parse(xmlHttp.response))
                } else {
                    reject(xmlHttp)
                }
            }
        };
        if (option.timeout) {
            timer = setInterval(function () {
                console.log('中断请求');
                xmlHttp.abort();
                clearInterval(timer)
            }, option.timeout)
        }
    })
};

export default class GlobalAction {
    constructor({url, data = {}, headers = {}}) {
        this.url = url;
        this.data = data;
        this.headers = headers;
    }

    trackAction(data = '') {
        const params = Object.assign(this.data, data);
        request({
            baseURL: this.url,
            method: 'post',
            data: params,
            headers: this.headers
        })
    }
}
