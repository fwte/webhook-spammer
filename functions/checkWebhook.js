const { fetch } = require('cross-fetch')
const pyth = require('@fwte/pyth')
function checkWebhook(url){
    let headers = {
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    }
    
    fetch(url, {
        method: 'GET',
        headers: headers 
    }).then((res) => {
        if(res.status === 200) {
            pyth.log(`valid webhook..`)
            return url; 
        } else {
            pyth.error(`invalid webhook`)
            return 'invalid'; 
        }
    })
}

module.exports = { checkWebhook }