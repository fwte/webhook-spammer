// created by github.com/fwte / fwte.dev ( cord ) 
// v1.0.0a
const pyth = require('@fwte/pyth'); 

let version = "v1.0.0a";

console.clear()
pyth.ascii()

async function webhookCheck() {
    let url = pyth.prompt('input webhook url'); 

    require('./functions/checkWebhook').checkWebhook(url)

    return url; 
}

async function Message(){
    await webhookCheck().then((u) => {
        let url = u; 

        let message = pyth.prompt('input message')
        let delay = pyth.prompt('delay (s)')
    
        if(!Number(delay)) return pyth.error(`invalid delay`)
    
        let amount = pyth.prompt('input amount')
        
        if(!Number(amount) || amount < 1) return pyth.error(`invalid amount`)
        
        pyth.wait(2).then(async () => {
            pyth.ascii()
            console.clear()
            for(let i = 0; i < amount; i++) {
                require('./functions/sendMessage').sendMessage(url, message, i)
                if(i + 1 === amount) {
                    pyth.info('finished spamming webhook')
                    return 
                }
            
                await pyth.wait(delay)
            }
        })
    })
}

Message()
