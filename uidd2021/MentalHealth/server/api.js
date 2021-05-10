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
    console.log("Connected!");
    var sql = "SHOW TABLES LIKE 'user'"
    var sql2 = "CREATE TABLE user (id VARCHAR(20), password VARCHAR(20) , name VARCHAR(20) , DepartmentLevel VARCHAR(20) )";
    var sql3 = "SHOW TABLES LIKE 'reservation'"
    var sql4 = "CREATE TABLE reservation (Year INTEGER , months INTEGER , day INTEGER , time INTEGER , user VARCHAR(20) , teacher VARCHAR(20) )";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql2, function (err, result) {
                if (err) throw err;
                console.log("Table of user created");
            })
        }
        else {
            console.log("Table of user exists");
        }
    });
    connection.query(sql3, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql4, function (err, result) {
                if (err) throw err;
                console.log("Table of reservation created");
            })
        }
        else {
            console.log("Table of reservation exists");
        }
    });
    connection.release();
})
//  check whether the table has date , if not add it
pool.getConnection((err, connection) => {

    var sql = "select * from user"
    var sql2 = "insert into user(id,password,name,DepartmentLevel) values(?,?,?,?)";
    var sql3 = "select * from reservation"
    var sql4 = "insert into reservation(Year,months,day,time,user,teacher) values(?,?,?,?,?,?)"
    var id = "F74072120";
    var password = "f74072120";
    var name = "Haoyu"
    var DepartmentLevel = "CSIE third grade";
    var year = 2021;
    var months = 5;
    var user = "";
    var teacher = "";

    // add user information
    connection.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql2, [id, password, name, DepartmentLevel], function (err, result) {
                if (err) throw err;
                console.log("add user");
            })
        }
        else {
            console.log("user exist");
        }
    });

    connection.query(sql3, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            for (i = 1; i <= 31; i++) {
                for (j = 9; j <= 17; j++) {
                    connection.query(sql4, [year, months, i, j, user, teacher], function (err, result) {
                        if (err) throw err;
                    })
                }
            }
        }
        else {
            console.log("the reservation table has been established");
        }
    });

    connection.release();
})




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
    getValue(req, res, next) {
        var id = req.query.id;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getValue;
            connection.query(sql, [id], (err, result) => {
                res.json(result);
                connection.release();
            })
        })
    },
    setValue(req, res, next) {
        console.log(req.body);
        var id = req.body.id, name = req.body.name;
        console.log(id);
    }
}