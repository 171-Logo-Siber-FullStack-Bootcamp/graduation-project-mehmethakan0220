
// // const elastic = require('./configs/db/elastic/elastic-service');

// // elastic.searchProduct("oyun").then(res=>{
// //     console.log(res)
// //     console.log(res.hits.hits);
// // }).catch(console.error);

// // insertProduct().then(res=>{
// //     console.log(res);
// // }).catch(console.error)

// // updateProductByDocumentId(3).then(res=>{
// //     console.log(res);
// // }).catch(console.error);

// // const newProduct = {
// //     id: 77,
// //     title: 'Yeni lenovo ventor 2',
// //     descript: 'testler devam ediyor 2',
// //     price: 20000.0,
// //     category_id: 5,
// //     inventory_id: 5,
// //     discount_id: 5
// // }

// // updateProductBySelfId(77,newProduct).then(console.log).catch(console.error);

// // elastic.deleteByDocumentId(7).then(res=>{
// //     console.log(res)
// // }).catch(console.error);

// // elastic.deleteProductById(11).then(console.log).catch(console.error);


// // const winston = require('winston');

// // const logger = winston.createLogger({
// //     format: winston.format.combine(
// //         winston.format.colorize(),
// //         winston.format.timestamp(),
// //         winston.format.align(),
// //         winston.format.printf((info) => {
// //           const { timestamp, level, message, ...args} = info;
// //           const ts = timestamp.slice(0, 19).replace('T', ' ');
// //           return `${ts} [${level}]: ${message} ${Object.keys(args).length ? "\t\t details:"+JSON.stringify(args, null, 0) : ''}`;
// //         }),
// //     ),
// //     transports:[
// //         new winston.transports.File({filename: 'combined.log'}),
// //         new winston.transports.Console(),
// //     ]
// // })

// // logger.info("hello world",{file:__filename, dir:__dirname})

// const { fallback_application_name } = require('pg/lib/defaults');
// const {logger} = require('./configs/winstonLogger/winstonLogger');

// logger.error("error",{"file":__filename})
// logger.warn("warn",{"file":__filename})
// logger.info("info",{"file":__filename})
// // logger.http("http",{"file":__filename})
// // logger.verbose("verbose",{"file":__filename})
// // logger.debug("debug",{"file":__filename})
// // logger.silly("silly",{"file":__filename})


// // function foo (res){
// //     console.dir(foo.toString())
// // }
// // foo("hello");

// // const maxuploadsize = 32 << 20

// // console.log(maxuploadsize);

const { pathToRegexp } = require("path-to-regexp");

const unprotected = [
    pathToRegexp('/login/*')
];

console.log(unprotected)
