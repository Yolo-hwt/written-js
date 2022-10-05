//script 标签不受同源策略约束，所以可以用来进行跨域请求
//优点是兼容性好，但是只能用于 GET 请求；
const jsonp = ({ url, params, callbackName }) => {
    const generateUrl = () => {
        let dataSrc = '';
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`;
        return `${url}?${dataSrc}`;
    }
    return new Promise((resolve, reject) => {
        const scripeEle = document.createElement('script');
        scripeEle.src = generateUrl();
        document.body.appendChild(scripeEle);
        window[callbackName] = data => {
            resolve(data);
            document.removeChild(scripeEle);
        }
    })
}