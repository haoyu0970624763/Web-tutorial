// 載入 `express`
const express = require('express')
// 建立一個 express (也就是網頁伺服器)實體
const app = express()

var fs = require('fs');

const port = 55123



app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}/staticFile`))

app.get('/add', (req, res) => {
    fs.readFile('./staticFile/students.json', function (err, userInfo) {
        if (err) {
            return console.error(err);
        }
        var newUser=`,\n  "${req.query.studentId}": "${req.query.studentName}"\n}`
        
        

        //將二進制數據轉換為字串符
        var user = userInfo.toString() ;
        user=user.replace("\n}",newUser)
        fs.writeFile('./staticFile/students.json', user, function (err) {
            if (err) {
                console.error(err);
            }
            console.log('Add new user to userInfo...')
        })

    })
    res.send("Add new user to userInfo...")
})

app.get('/del', (req, res) => {
    fs.readFile('./staticFile/students.json', function (err, userInfo) {
        if (err) {
            return console.error(err);
        }
        var delUser=`  "${req.query.studentId}":`
        //將二進制數據轉換為字串符
        var user = userInfo.toString() ;
        var begin
        var end
        if(user.indexOf(delUser) >= 0){

            
            begin=user.indexOf(delUser)
            end=user.indexOf("\n",begin)

            var del=user.slice(begin,end+1)

            if(user.indexOf(`${del}}`)>=0){
                console.log("her")
                user =user.replace(`,\n${del}`,"\n")
            }
            else{
                user =user.replace(del,"")
            }
            
            res.send("delete success")
            fs.writeFile('./staticFile/students.json', user, function (err) {
                if (err) {
                    console.error(err);
                }
            })
            
        }
        else{
            res.send("fail to find this student")
        }
    })

})

