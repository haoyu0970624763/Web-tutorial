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

//  check whether the tables are exist , if not create it

pool.getConnection((err, connection) => {

    if (err) throw err;
    var sql = "SHOW TABLES LIKE 'user'"
    var sql2 = "CREATE TABLE user (id VARCHAR(20), password VARCHAR(20) , name VARCHAR(20))";

    var sql3 = "SHOW TABLES LIKE 'BookTable'"
    var sql4 = "CREATE TABLE BookTable (Year VARCHAR(20) , months VARCHAR(20), day VARCHAR(20) , time VARCHAR(20), user_id VARCHAR(20) , mentalName VARCHAR(20))";


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
                console.log("table of BookTable created");
                var sql5 = "select * from BookTable"
                var sql6 = "insert into BookTable(Year,months,day,time,user_id,mentalName) values(?,?,?,?,?,?)"

                var year = 2021;
                var months = 7;
                var user_id = "";
                var mentalName1 = "許欣宜";
                var mentalName2 = "林宜華";
                var mentalName3 = "陳以玟";
                var mentalName4 = "王浩偉";
                var mentalName5 = "陳俊宇";

                connection.query(sql5, function (err, result) {
                    if (err) throw err;
                    if (result.length == 0) {
                        for (i = 1; i <= 10; i++) {
                            for (j = 10; j < 15; j += 1) {
                                if (j == 12) {
                                    continue;
                                }
                                var timeStr = j.toString() + ":00" + "-" + (j + 1).toString() + ":00";
                                connection.query(sql6, [year, months, i, timeStr, user_id, mentalName1], function (err, result) {
                                    if (err) throw err;
                                })
                                connection.query(sql6, [year, months, i, timeStr, user_id, mentalName2], function (err, result) {
                                    if (err) throw err;
                                })
                                connection.query(sql6, [year, months, i, timeStr, user_id, mentalName3], function (err, result) {
                                    if (err) throw err;
                                })
                                connection.query(sql6, [year, months, i, timeStr, user_id, mentalName4], function (err, result) {
                                    if (err) throw err;
                                })
                                connection.query(sql6, [year, months, i, timeStr, user_id, mentalName5], function (err, result) {
                                    if (err) throw err;
                                })
                            }
                        }
                    }
                    else {
                        console.log("the table has been established");
                    }
                });

            })
        }
        else {
            console.log("Table of BookTable exists");
        }
    });
    connection.release();
})

module.exports = {

    login(req, res, next) {
        var id = req.body.ID;
        var password = req.body.password;
        pool.getConnection((err, connection) => {
            var sql = "select * from user where id=?"
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

        var id = req.body.ID;
        var password = req.body.password;
        var name = req.body.name;

        var sql_add = "insert into user(`id`,`password`,`name`) values(?,?,?)"
        var sql_checkID = "select * from user where id=?"

        pool.getConnection((err, connection) => {

            connection.query(sql_checkID, [id], (err, result) => {
                if (err) throw err;
                if (result.length == 0) {
                    //帳號沒有人用過
                    connection.query(sql_add, [id, password, name], (err, result) => {
                        if (err) throw err;
                        res.send("success")
                    });
                }
                else {
                    //帳號已有人用過
                    res.send("fail")
                }
                connection.release();
            });
        })
    },
    GetBookInfo(req, res, next) {

        var sql = "select * from BookTable";

        pool.getConnection((err, connection) => {

            connection.query(sql, (err, result) => {

                if (result.length != 0) {
                    res.send(result)
                }
                connection.release();
            })
        })

    },
    book(req, res, next) {
        var userID = req.body.userID;
        var year = req.body.year;
        var months = req.body.months;
        var day = req.body.day;
        var time = req.body.time;
        var teacher = req.body.teacher;
        var valid = "false";


        var sql = "select * from BookTeacher1 where months=? AND day=? AND time=?"
        var sql2 = "insert into BookTeacher1(Year,months,day,time,user_id,valid) values(?,?,?,?,?,?)"

        if (teacher == "teacher1") {
            pool.getConnection((err, connection) => {
                connection.query(sql, [year, months.day, time], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {

                        connection.query(sql2, [year, months, day, time, userID, valid], (err, result) => {
                            if (err) throw err;
                        })
                    }
                    res.send("success");
                })
            })
        }

    },
}