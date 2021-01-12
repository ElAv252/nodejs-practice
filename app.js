console.log('hello node.js')
for (let i = 1; i < 10; i++) {
    console.log(i)
}

let err = new Error('error!');
//throw err

const fs = require('fs');
fs.readdir('./', (err, result) => {
    console.log(result)
})

/*fs.writeFile('./test.txt','elazar avrahami',(err)=>{
    if(err) throw err;
    console.log('created File')
})*/

const os = require('os');

let homeDirectory = os.homedir();

/*fs.writeFile(`${homeDirectory}/test1.txt`,'elazar avrahami12',(err)=>{
    if(err) throw err;
    console.log('created File')
})*/
console.log(homeDirectory)

fs.writeFile('./targil.txt', 'targil', (err) => {
    if (err) throw err;
    console.log('created File')
})
fs.readdir('./', (err, result) => {
    if (err) throw err;
    console.log(result)
})

/*fs.readFile('./app.js', { encoding: 'utf8' }, (err, result) => {
    if (err) throw err;
    console.log(result)
})*/

fs.mkdir('/home/elav/testmkdir.txt', (err) => {
    if (err) throw err;
    console.log('success')
})

fs.rmdir('/home/elav/testmkdir.txt', (err) => {
    if (err) throw err;
    console.log('remove success')
})

console.log('Before readdir')
try {
    const result = fs.readdirSync('./e')
    console.log(`result:${result}`)
} catch (err) {
    console.log(`the error is ${err}`)
}
console.log('after readdir')

const randomString = Math.random().toString(36).substring(7);
/*fs.mkdirSync(`./${randomString}`)
console.log(`created dirSync ${randomString}`)
fs.rmdirSync(`./${randomString}`)
console.log(`deleted ${randomString} success`)*/


fs.mkdir(`./${randomString}`, (err) => {
    if (err) throw err;
    console.log(`created dir ${randomString}`)

    fs.rmdir(`./${randomString}`, (err) => {
        if (err) throw err;
        console.log(`deleted ${randomString} success`)
    })
})

console.log(os.release())

const _ = require('lodash')
const chalk = require('chalk')
let array = ['a', 1, 'b', 2]
console.log(chalk.blue(_.reverse(array)))

const request = require('request')
/*request('https://www.google.conm/', (error, response, body) => {
    let err = new Error('ERROR!')
    if (error) {
        console.error(error)
        throw err
    }
    console.log(body)
})*/

const util = require('util');
const Preaddir = util.promisify(fs.readdir)
Preaddir('./').then((results) => {
    console.log(results)
})

async function init1() {
    let PreadFile = util.promisify(fs.readFile)
    let result = await PreadFile('./package.json', { encoding: 'utf8' })
    console.log(result)
}
init1();

const dns = require('dns')
const lookup = util.promisify(dns.lookup)
async function init2() {
    let result = await lookup('walla.co.il')
    console.log(result)
}
init2();

const Pmkdir = util.promisify(fs.mkdir)

async function init3() {
    let resultIP = await lookup('walla.co.il')
    console.log(resultIP.address)
    await Pmkdir(`./${resultIP.address}`)
    let readdirMain = await Preaddir('./')
    console.log(readdirMain)
}
//init3()

async function init4() {
    const Pdns = dns.promises
    const Pfs = fs.promises
    let resultIP = await Pdns.lookup('walla.co.il')
    console.log(resultIP.address)
    await Pfs.mkdir(`./${resultIP.address}`)
    let readdirMain = await Pfs.readdir('./')
    console.log(readdirMain)
}
//init4()

async function init5(ip) {
    let PdnsR = await util.promisify(dns.reverse)(ip)
    console.log(PdnsR)
}
init5('8.8.8.8')

const events = require('events');
const { defaultsDeep, add, result } = require('lodash');

class class1 extends events {
    constructor() {
        super();
        //this.once('something',this.someEventHandler1)
        //this.off('something',this.someEventHandler1)
        this.on('something', this.someEventHandler1)
        this.prependListener('something', this.someEventHandler2)
        //this.removeAllListeners('something')
        this.emit('something', 'hello everybody')
    }
    someEventHandler1(arg) {
        console.log(`someEvent success #1 ${arg}`);
    }
    someEventHandler2(arg) {
        console.log(`someEvent success #2 ${arg}`);
    }
    /*callMe(){
        this.emit('something')
    }*/
}
//const cl1 = new class1();
//cl1.emit(something')
//cl1.callMe()

class dog extends events {
    constructor() {
        super();
        this.on('food', this.bark)
        this.emit('food')
    }
    bark() {
        console.log('barking!!');
    }
    /*methodHandler() {
        this.emit('food')
    }*/
}
//const dog1 = new dog();
//dog1.methodHandler()
//dog1.emit('food')

const httpServer = require('http').Server;

/*const Server1 = new http();

Server1.listen(3000)

Server1.on('request', (request, response) => {
    response.end('hello world')
})*/

class class2 extends httpServer {
    constructor() {
        super();
        this.listen(3000)
        this.on('connection', this.connectionHndler)
        this.on('request', this.Hndler)
    }
    Hndler(request, response) {
        response.end('hello world')
    }
    connectionHndler() {
        console.log('connection success')
    }
}
//const cl2 = new class2;

fs.promises.writeFile('./test2.txt', 'hello, my name is elazar avrahami.')

class class3 extends httpServer {
    constructor() {
        super()
        this.listen(3000)
        this.on('request', this.FileHndler)
    }
    async FileHndler(request, response) {
        let data = await fs.promises.readFile('./test2.txt')
        response.end(data)
    }
}
//const cl3 = new class3();

/*setTimeout((arg) => {
    console.log(`callback ${arg}.`)
}, 1000, 'SetTimeout')

setImmediate((arg) => {
    console.log(`callback ${arg}`)
}, 'setImmediate')

setInterval((arg) => {
    console.log(`callback ${arg}`)
}, 3000, 'setInterval')
*/
console.log('first')

fs.readFile('./test3.txt', 'utf-8', (data) => {
    console.log('Reading data 1')
})
fs.readFile('./test3.txt', 'utf-8', (data) => {
    console.log('Reading data 2')
})
fs.readFile('./test3.txt', 'utf-8', (data) => {
    console.log('Reading data 3')
})
fs.readFile('./test3.txt', 'utf-8', (data) => {
    console.log('Reading data 4')
})

setImmediate(() => { console.log('setImmediate finished') })
setTimeout(() => { console.log('setTimeout #1 finished ') }, 0)
setTimeout(() => { console.log('setTimeout #2 finished ') }, 5)

console.log('last')

const zlib = require('zlib')

class class4 extends httpServer {
    constructor() {
        super();
        this.listen(3000);
        this.on('request', this.FileHndler)
        //this.on('connection', this.FileHndlerCon)
    }
    FileHndler(request, response) {
        const readStream = fs.createReadStream('./test2.txt')
        const writeStream = fs.createWriteStream('./out.gz')
        const gzip = zlib.createGzip()
        let dataLength;
        readStream.on('data', (data) => {
            dataLength = data.length
            console.log(`that the data: ${data}`)
        })
        readStream.on('end', () => {
            console.log(`${dataLength} bytes.`)
        })
        readStream.pipe(gzip).pipe(writeStream)
        readStream.pipe(response)
        //console.log('request')
    }
    /*FileHndlerCon() {
        console.log('coo!')
    }*/
};
//const cl4 = new class4();

//fs.promises.readFile('./test2.txt', { encoding: 'utf8' }).then((results) => { console.log(results) })

class class5 extends httpServer {
    constructor() {
        super();
        this.listen(3000)
        this.on('request', this.Hndler)
    }
    Hndler(request, response) {
        const createReadStream = fs.createReadStream('./test4.txt')
        const createWriteStream = fs.createWriteStream('./out2.txt')
        createReadStream.pipe(createWriteStream)
    }
}
//const cl5 = new class5();

const crypto = require('crypto')

const algorithm = 'aes-256-ctr';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'SomeSalt', 32);
const iv = 'myIVstringisnice1'.toString('hex').slice(0, 16);

/*const encryptStream = crypto.createCipheriv(algorithm, key, iv);
const createReadStream1 = fs.createReadStream('./test4.txt');
const createWriteStream1 = fs.createWriteStream('./encrypted.txt');
createReadStream1.pipe(encryptStream).pipe(createWriteStream1);*/

const createReadStream2 = fs.createReadStream('./encrypted.txt');
const createWriteStream2 = fs.createWriteStream('./decrypted.txt');
const CDI = crypto.createDecipheriv(algorithm, key, iv);
createReadStream2.pipe(CDI).pipe(createWriteStream2);

const mymodule1 = require('./src/module.js');
//mymodule1.reqHandler()