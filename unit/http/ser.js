// 載入 `express`
const express = require('express')
// 建立一個 express (也就是網頁伺服器)實體
const app = express()

<<<<<<< HEAD
const port = 54087
   
// handle `/step1` url
=======
const port = 55555

>>>>>>> 86783d81ee8bb77990f95d8bc815e8f6e4e341c2
// 處理 `/step1` 網址
app.get('/step1', (req, res) => {
  res.send('<h1>hello world</h1>')
})

/*
上面是 javascript 的 arrow function
下面是 javascript 的 一般 function
主要是差在 兩者內部的 this 會不同
app.get('/step1', function(req, res){
  res.send('<h1>hello world</h1>')
})
*/


// 啟動伺服器

// 模版字符串(template literals) ` ` 這是一種更新的語法提供我們使用更彈性、簡單的方式去理解字串
// 想要包含變數或者算式在字串裡時，你只需要將它放在 佔位符 ${ } 裡
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

// 在 Node 中, 文件裡的相對路徑代表的是執行 node 時所在的資料夾的相對路徑, 並不是你所執行的 JS 檔本身的相對路徑
// 因此，在 Node 中使用相對路徑是危險的行為
// __dirname: 可以動態的獲取"當前文件"所屬目錄的絕對路徑
// __filename: 可以動態的用來獲取"當前文件"的絕對路徑
// 設定靜態檔案目錄
app.use(express.static(`${__dirname}/dist`))


let nRequests = 0
app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})

// req.query 獲取url後面帶的參數
// url 中 ？ 表示 路徑與參數分隔符  而 & 表示 參數之間的分隔符    
app.get('/step5', (req, res) => {
  
  res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})

// 載入 `body-parser`
const bodyParser = require('body-parser')


// 設定 `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// express 的 post（或者get）方法呼叫 body-parser 且 該方法有設定路由路徑
// 這樣的 body-parser 就會對該post（或者get）的請求進行攔截和解析
app.post('/step7', (req, res) => {
  // `bady-parser` 將解析好的資料存放在 `req.body`
  res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})

