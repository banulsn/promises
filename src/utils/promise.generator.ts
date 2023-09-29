export function promiseThatResolvesAfterNSecondsGenerator(n = 0) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({
                resolvedAfterNSeconds: n
            });
        }, n * 1000);
    });
}

export function promiseThatRejectsAfterNSecondsGenerator(n = 0) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject({
                rejectedAfterNSeconds: n
            });
        }, n * 1000);
    });
}

export function getAsync(url) {
    return new Promise((resolve, reject) => {
        const httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = () => {
            if (httpReq.readyState === 4) {
                if (httpReq.status === 200) {
                    resolve(JSON.parse(httpReq.responseText));
                } else {
                    reject(new Error(httpReq.statusText));
                }
            }
        }
        httpReq.open("GET", url, true);
        httpReq.send();
    });
}
