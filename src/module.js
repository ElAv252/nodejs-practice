
const request = require('request')
class request1 {
    reqHandler() {
        request('https://www.google.comm/', (error, response, body) => {
            let err = new Error('ERROR!')
            if (error) {
                console.error(error)
                throw err
            }
            console.log(body)//Print the HTML for http://google.com.
        })
    }
}

module.exports = new request1();