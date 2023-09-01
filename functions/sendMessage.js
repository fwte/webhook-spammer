const { fetch } = require('cross-fetch')
const pyth = require('@fwte/pyth')
function sendMessage(url, message, i) {
    fetch(`${url}?wait=true`, {
        headers: {'Content-Type' : 'application/json', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'Accept' : 'application/json', 'Accept-Encoding': 'gzip, deflate, br'},
        method: 'POST',
        body: JSON.stringify({"content": message})
    }).then((res) => {
        if(res.status === 200) {
            pyth.log(`sent ${i + 1} message to ${url}`)
        } else {
            pyth.error(`error while sending ${i + 1} message to ${url}`)
            console.log(res)
        }
    })
}

module.exports = {sendMessage}