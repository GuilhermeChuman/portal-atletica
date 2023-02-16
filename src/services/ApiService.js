import env from '../environment/env.json';

async function getRequest(params, url) {

    if(params.length > 0)
        url += '?';

    params.forEach(element => {
        url += element+'&';
    });

    url = url.slice(0,-1);

    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest()

        xhr.open('GET', url);
        xhr.setRequestHeader("X-MAL-CLIENT-ID", env.X_MAL_CLIENT_ID);

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                return null;
            }
        });

        xhr.addEventListener('error', () => {
            return null;
        });

        xhr.send();
    });
}

export { getRequest };