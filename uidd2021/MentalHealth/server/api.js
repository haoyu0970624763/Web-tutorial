const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');
const pool = mysql.createPool({
    host: dbConfig.mysql.host,
    user: dbConfig.mysql.user,
    password: dbConfig.mysql.password,
    database: dbConfig.mysql.database,
    port: dbConfig.mysql.port,
    multipleStatements: true    // 多語句查詢
});

// set UTF8
pool.getConnection((err, connection) => {

    var sql = "alter database uidd2021_groupH character set utf8;"
    var sql2 = "SET NAMES 'utf8'";

    connection.query(sql, function (err, result) {
        if (err) throw err;
    });
    connection.query(sql2, function (err, result) {
        if (err) throw err;
    });

    connection.release();
})
//  check whether the tables are exist , if not create it

pool.getConnection((err, connection) => {

    if (err) throw err;
    var sql = "SHOW TABLES LIKE 'user'"
    var sql2 = "CREATE TABLE user (id VARCHAR(20), password VARCHAR(20) , name VARCHAR(20) , DepartmentLevel VARCHAR(20) )";

    var sql3 = "SHOW TABLES LIKE 'BookTeacher1'"
    var sql4 = "CREATE TABLE BookTeacher1 (Year VARCHAR(20) , months VARCHAR(20), day VARCHAR(20) , time VARCHAR(20), user_id VARCHAR(20) , valid VARCHAR(20))";

    var sql5 = "SHOW TABLES LIKE 'BookTeacher2'"
    var sql6 = "CREATE TABLE BookTeacher2 (Year VARCHAR(20), months VARCHAR(20) , day VARCHAR(20) , time VARCHAR(20) , user_id VARCHAR(20), valid VARCHAR(20))";

    var sql7 = "SHOW TABLES LIKE 'BookTeacher3'"
    var sql8 = "CREATE TABLE BookTeacher3 (Year VARCHAR(20) , months VARCHAR(20), day VARCHAR(20) , time VARCHAR(20), user_id VARCHAR(20) , valid VARCHAR(20))";

    var sql9 = "SHOW TABLES LIKE 'BookTeacher4'"
    var sql10 = "CREATE TABLE BookTeacher4 (Year VARCHAR(20) , months VARCHAR(20), day VARCHAR(20) , time VARCHAR(20), user_id VARCHAR(20) , valid VARCHAR(20))";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql2, function (err, result) {
                if (err) throw err;
                console.log("table of user created");
            })
        }
    });
    connection.query(sql3, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql4, function (err, result) {
                if (err) throw err;
                console.log("table of BookTeacher1 created");
            })
        }
        else {
            console.log("Table of BookTeacher1 exists");
        }
    });
    connection.query(sql5, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql6, function (err, result) {
                if (err) throw err;
                console.log("table of BookTeacher2 created");
            })
        }
        else {
            console.log("Table of BookTeacher2 exists");
        }
    });
    connection.query(sql7, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql8, function (err, result) {
                if (err) throw err;
                console.log("table of BookTeacher3 created");
            })
        }
        else {
            console.log("Table of BookTeacher3 exists");
        }
    });
    connection.query(sql9, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql10, function (err, result) {
                if (err) throw err;
                console.log("table of BookTeacher4 created");
            })
        }
        else {
            console.log("Table of BookTeacher4 exists");
        }
    });
    
    connection.release();
})
/*
//  check whether the table has data , if not add it
pool.getConnection((err, connection) => {

    var sql = "select * from user"
    var sql2 = "insert into user(id,password,name,DepartmentLevel) values(?,?,?,?)"

    var sql3 = "select * from BookTeacher1"
    var sql4 = "insert into BookTeacher1(Year,months,day,time,user_id,valid) values(?,?,?,?,?,?)"

    var sql3 = "select * from BookTeacher2"
    var sql4 = "insert into BookTeacher2(Year,months,day,time,user_id,valid) values(?,?,?,?,?,?)"

    var sql5 = "select * from BookTeacher3"
    var sql6 = "insert into BookTeacher3(Year,months,day,time,user_id,valid) values(?,?,?,?,?,?)"

    var sql7 = "select * from BookTeacher4"
    var sql8 = "insert into BookTeacher4(Year,months,day,time,user_id,valid) values(?,?,?,?,?,?)"

    var id = "F74072120";
    var password = "f74072120";
    var name = "彭皓瑜"
    var DepartmentLevel = "資訊系 大三";

    var year = 2021;
    var months = 5;
    var user_id = "";
    var valid = "yes";

    // add user information
    connection.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql2, [id, password, name, DepartmentLevel], function (err, result) {
                if (err) throw err;
                console.log("add user");
            })
        }
        else{
            console.log("user exists");
        }
    });

    connection.query(sql3, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            for (i = 1; i <= 31; i++) {
                for (j = 9; j <= 15; j+=2) {
                    connection.query(sql4, [year, months, i, j, user_id, valid], function (err, result) {
                        if (err) throw err;
                    })
                }
            }
            console.log("finish")
        }
        else{
            console.log("the table has been established");
        }
    });

    connection.query(sql5, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            for (i = 1; i <= 31; i++) {
                for (j = 9; j <= 15; j+=2) {
                    connection.query(sql6, [year, months, i, j, user_id, valid], function (err, result) {
                        if (err) throw err;
                    })
                }
            }
            console.log("finish")
        }
        else{
            console.log("the table has been established");
        }
    });

    connection.query(sql7, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            for (i = 1; i <= 31; i++) {
                for (j = 9; j <= 15; j+=2) {
                    connection.query(sql8, [year, months, i, j, user_id, valid], function (err, result) {
                        if (err) throw err;
                    })
                }
            }
            console.log("finish")
        }
        else{
            console.log("the table has been established");
        }
    });
    connection.release();
})

pool.getConnection((err, connection) => {

    var sql = "select * from reservation where user_id=?";
    var sql2 = "update reservation set user_id=?, teacher=? where  Year=? and months=? and day=?  AND time=?";
    var year = 2021;
    var months = 5;
    var day1 = 1;
    var time1 = 14;
    var day2 = 15;
    var time2 = 13;
    var user_id = "F74072120";
    var teacher = "teacher1"
    
    connection.query(sql2, [user_id, teacher, year, months, day1, time1], function (err, result) {
        if (err) throw err;
    });
    connection.query(sql2, [user_id, teacher, year, months, day2, time2], function (err, result) {
        if (err) throw err;
    });
    
    
    // add user information
    connection.query(sql, [user_id], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            console.log(result);
        }
    });
    

    connection.release();
})
*/

module.exports = {

    login(req, res, next) {

        var id = req.body.id;
        var password = req.body.password;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.login;
            connection.query(sql, [id], (err, result) => {

                if (result.length == 0) {
                    res.send("無此帳號")
                }
                else {
                    if (password != result[0].password) {
                        res.send("密碼錯誤")
                    }
                    else {
                        res.send("success")
                    }
                }
                connection.release();
            })
        })
    },
    register(req, res, next) {
        var id = req.body.id;
        var password = req.body.password;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.register;
            connection.query(sql, [id, password], (err, result) => {
                connection.release();
            })
        })
    },
    book(req, res, next) {
        var userID=req.body.userID;
        var year=req.body.year;
        var months=req.body.months;
        var day=req.body.day;
        var time=req.body.time;
        var teacher=req.body.teacher;
        var valid="false";
        
       
        var sql = "select * from BookTeacher1 where months=? AND day=? AND time=?"
        var sql2 = "insert into BookTeacher1(Year,months,day,time,user_id,valid) values(?,?,?,?,?,?)"

        if(teacher=="teacher1"){
            pool.getConnection((err, connection) => {
                connection.query(sql, [year,months.day,time],(err, result) => {
                    if(err) throw err;
                    if(result.length==0){

                        connection.query(sql2, [year,months,day,time,userID,valid],(err, result) => {
                            if(err) throw err;
                        })
                    }
                    res.send("success");
                })
            })
        }
        
    },
}