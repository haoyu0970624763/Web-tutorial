const mysql = require('mysql');
const dbConfig = require('./db');
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

    var sql5 = "SHOW TABLES LIKE 'TreeNum'"
    var sql6 = "CREATE TABLE TreeNum (Num VARCHAR(20), id VARCHAR(20))";

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
    connection.query(sql5, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql6, function (err, result) {
                if (err) throw err;
                console.log("table of TreeNum created");
            })
        }
    });
    var sql7 = "SHOW TABLES LIKE 'diary'";
    var sql8 = "CREATE TABLE diary (user_id VARCHAR(20), eventname NVARCHAR(50), date VARCHAR(20), time VARCHAR(20), category VARCHAR(20), mood VARCHAR(20), course NVARCHAR(100), diaryresult NVARCHAR(100), ispublic VARCHAR(2), additional NVARCHAR(100), number VARCHAR(20), hug VARCHAR(20), comment VARCHAR(20), comment_notRead VARCHAR(2))";
    connection.query(sql7, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql8, function (err, result) {
                if (err) throw err;
                console.log("table of diary created");
            })
        }
        else {
            console.log("Table of diary exists");
        }
    });
    var sql9 = "SHOW TABLES LIKE 'comment'";
    var sql10 = "CREATE TABLE comment (send_number VARCHAR(20), receive_number VARCHAR(20), diary_date VARCHAR(20), send_date VARCHAR(20), send_time VARCHAR(20), content NVARCHAR(100), hug VARCHAR(20), reply VARCHAR(20))";
    connection.query(sql9, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql10, function (err, result) {
                if (err) throw err;
                console.log("table of comment created");
            })
        }
        else {
            console.log("Table of comment exists");
        }
    });
    var sql11 = "SHOW TABLES LIKE 'hug_diary'";
    var sql12 = "CREATE TABLE hug_diary (send_number VARCHAR(20), receive_number VARCHAR(20), receive_date VARCHAR(20))"
    connection.query(sql11, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql12, function (err, result) {
                if (err) throw err;
                console.log("table of hug_diary created");
            })
        }
        else {
            console.log("Table of hug_diary exists");
        }
    });
    var sql13 = "SHOW TABLES LIKE 'hug_comment'";
    var sql14 = "CREATE TABLE hug_comment (send_number VARCHAR(20), receive_number VARCHAR(20), diary_number VARCHAR(20), diary_date VARCHAR(20), comment_date VARCHAR(20), comment_time VARCHAR(20))"
    connection.query(sql13, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql14, function (err, result) {
                if (err) throw err;
                console.log("table of hug_comment created");
            })
        }
        else {
            console.log("Table of hug_comment exists");
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
    GetUserInfo(req, res, next) {

        var id = req.body.userID;
        var sql = "select * from user where id=?";
        pool.getConnection((err, connection) => {

            connection.query(sql, [id], (err, result) => {

                if (result.length != 0) {
                    res.send(result)
                }
            })
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
    GetUserBookInfo(req, res, next) {

        var id = req.body.userID;
        var sql = "select * from BookTable where user_id=?";
        pool.getConnection((err, connection) => {

            connection.query(sql, [id], (err, result) => {

                if (result.length != 0) {
                    res.send(result)
                }
                else {
                    res.send("NoData")
                }
                connection.release();
            })
        })
    },
    GetDiaryInfo(req, res, next) {
        var userID = req.body.userID;
        var operatemode = req.body.operatemode;
        var sql = "select * from diary where user_id=?";
        var sql_public = "select * from diary where user_id=? AND ispublic='y'";
        var sql_newComment = "select * from diary where user_id=? AND comment_notRead='y'";
        var sql_all = "select * from diary where ispublic='y'";
        pool.getConnection((err, connection) => {
            if (operatemode == "normal") {
                connection.query(sql, [userID], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        console.log("no data");
                        res.send("fail");
                    }
                    else {
                        //console.log(result);
                        res.send(result);
                    }
                })
            }
            else if (operatemode == "public") {
                connection.query(sql_public, [userID], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        console.log("no data");
                        res.send("fail");
                    }
                    else {
                        //console.log(result);
                        res.send(result);
                    }
                })
            }
            else if (operatemode == "checkNewComment") {
                connection.query(sql_newComment, [userID], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        res.send(false);
                    }
                    else {
                        res.send(true);
                    }
                })
            }
            else if (operatemode == "All_public") {
                connection.query(sql_all, (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        console.log("no data");
                        res.send("fail");
                    }
                    else {
                        //console.log(result);
                        res.send(result);
                    }
                })
            }
            else if (operatemode == "MyComment") {
                var number = req.body.number;
                var diary_date = req.body.diary_date;
                var sql_mycomment = "select * from diary where number=? AND date=? AND ispublic='y'";
                connection.query(sql_mycomment, [number, diary_date], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        console.log("no data");
                        res.send("fail");
                    }
                    else {
                        res.send(result[0]);
                    }
                })
            }
            connection.release();
        })
    },
    GetCommentInfo(req, res, next) {
        var number = req.body.number;
        var diary_date = req.body.diary_date;
        var operatemode = req.body.operatemode;
        var sql = "select * from comment where receive_number=? AND diary_date=?";
        var sql2 = "select * from comment where send_number=?";
        var sql3 = "select * from comment where receive_number=?"
        pool.getConnection((err, connection) => {
            if (operatemode == 'MySend') {
                connection.query(sql2, [number], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        console.log("no comment");
                        res.send("get comment fail");
                    }
                    else {
                        //console.log(result);
                        res.send(result);
                    }
                    connection.release();
                })
            }
            else if(operatemode == "MyReceiveComment") {
                connection.query(sql3, [number], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        console.log("no comment");
                        res.send("get comment fail");
                    }
                    else {
                        //console.log(result);
                        res.send(result);
                    }
                    connection.release();
                })
            }
            else {
                connection.query(sql, [number, diary_date], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        console.log("no comment");
                        res.send("get comment fail");
                    }
                    else {
                        //console.log(result);
                        res.send(result);
                    }
                    connection.release();
                })
            }
        })
    },
    GetTreeNum(req, res, next) {

        var id = req.body.id;
        var sql = "select * from TreeNum where id=?";
        var number;

        var sql2 = "select * from TreeNum where Num=?";
        var sql3 = "insert into TreeNum(`Num`,`id`) values(?,?)"


        pool.getConnection((err, connection) => {

            connection.query(sql, [id], (err, result) => {
                if (err) throw err;
                if (result.length == 0) {
                    var success = false;
                    while (!success) {
                        number = (Math.floor(Math.random() * 1000)).toString();
                        connection.query(sql2, [number], (err, result) => {
                            if (err) throw err;
                            if (result.length == 0) {
                                success = true;
                                connection.query(sql3, [number, id], (err, result) => {
                                    if (err) throw err;
                                    res.send(number);
                                })

                            }
                        });
                    }
                }
                else {
                    res.send(result[0].Num)
                }
                connection.release();
            });
        })
    },
    getPoint(req, res, next) {

        var id = req.body.id

        //先確認有沒有這個帳號
        var sql1 = "SELECT * FROM `point_yoyo` WHERE id=?;"
        //如果沒有帳號就insert
        var sql2 = "INSERT into point_yoyo(ID,points) values(?,?)"

        pool.getConnection((err, connection) => {

            connection.query(sql1, [id], (err, result) => {
                if (err) throw err;
                if (result.length == 0)//還沒登入過
                {
                    console.log("初次登記,點數為0")
                    connection.query(sql2, [id, 0], (err, result) => {
                        if (err) throw err;
                        res.send("first");
                    });
                }
                else {
                    res.send(result);
                }
                connection.release();
            });

        })
    },
    diaryWrite(req, res, next) {
        var userID = req.body.userID;
        var eventname = req.body.eventname;
        var date = req.body.date;
        var time = req.body.time;
        var category = req.body.category;
        var mood = req.body.mood;
        var course = req.body.course;
        var diaryresult = req.body.diaryresult;
        var ispublic = req.body.ispublic;
        var additional = req.body.additional;
        var number = req.body.number;
        var hug = req.body.hug;
        var comment = req.body.comment;
        var comment_notRead = req.body.comment_notRead;
        var sql_add = "insert into diary(`user_id`,`eventname`,`date`,`time`,`category`,`mood`,`course`,`diaryresult`,`ispublic`,`additional`,`number`,`hug`,`comment`,`comment_notRead`) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        var sql_update = "UPDATE diary SET eventname=?, time=?, category=?, mood=?, course=?, diaryresult=?, ispublic=?, additional=?, number=? where user_id=? AND date=?";
        var sql_check = "select * from diary where user_id=? AND date=?";
        pool.getConnection((err, connection) => {
            connection.query(sql_check, [userID, date], (err, result) => {
                if (err) throw err;
                if (result.length == 0) {
                    //此日還沒寫過日記
                    connection.query(sql_add, [userID, eventname, date, time, category, mood, course, diaryresult, ispublic, additional, number, hug, comment, comment_notRead], (err, result) => {
                        if (err) throw err;
                        res.send("success");
                    })
                }
                else {
                    //修改日記
                    connection.query(sql_update, [eventname, time, category, mood, course, diaryresult, ispublic, additional, number, userID, date], (err, result) => {
                        if (err) throw err;
                        console.log("update success");
                        res.send("success");
                    })
                }
                connection.release();
            })
        })
    },
    Comment_Write(req, res, next) {
        var send_number = req.body.send_number;
        var receive_number = req.body.receive_number;
        var diary_date = req.body.diary_date;
        var send_date = req.body.send_date;
        var send_time = req.body.send_time;
        var content = req.body.content;
        var hug = req.body.hug;
        var reply = req.body.reply;
        var sql_diarySelect = "select * from diary where number=? AND date=?";
        var sql_diaryUpdateSelf = "UPDATE diary SET comment=? where number=? AND date=?";
        var sql_diaryUpdate = "UPDATE diary SET comment=?, comment_notRead=? where number=? AND date=?";
        var sql_comment = "insert into comment(`send_number`,`receive_number`,`diary_date`,`send_date`,`send_time`,`content`,`hug`,`reply`) values(?,?,?,?,?,?,?,?)"
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(sql_diarySelect, [receive_number, diary_date], (err, result) => {
                if (err) throw err;
                if (result.length == 0) {
                    console.log("fail");
                    res.send("fail");
                }
                else {
                    var new_comment = Number(result[0].comment) + 1;
                    if (send_number === receive_number) {
                        connection.query(sql_diaryUpdateSelf, [new_comment, receive_number, diary_date], (err, result) => {
                            if (err) throw err;
                            console.log("diary update");
                        })
                    }
                    else {
                        connection.query(sql_diaryUpdate, [new_comment, 'y', receive_number, diary_date], (err, result) => {
                            if (err) throw err;
                            console.log("diary update");
                        })
                    }
                    connection.query(sql_comment, [send_number, receive_number, diary_date, send_date, send_time, content, hug, reply], (err, result) => {
                        if (err) throw err;
                        console.log("comment success");
                        res.send("success");
                    })
                }
                connection.release();
            })
        })
    },
    book(req, res, next) {

        var userID = req.body.userID;
        var months = req.body.months;
        var day = req.body.day;
        var time = req.body.time;
        var name = req.body.name;

        if (day[0] == '0') {
            day = day[1];
        }

        var sql = "UPDATE `BookTable` SET `user_id` = ?  where day=? AND time=? AND mentalName=?"

        pool.getConnection((err, connection) => {
            connection.query(sql, [userID, day, time, name], (err, result) => {
                if (err) throw err;
                if (result.length != 0) {
                    res.send("success");
                }
            })
        })
    },
    textorder(req, res, next) {
        var sql = req.body.order;
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(sql, (err, result) => {
                if (err) throw err;
                if (result.length != 0) {
                    res.send("success");
                }
                else {
                    res.send("fail");
                }
            })
            connection.release();
        })
    },
    writeDiary(req, res, next) {

        var sql_add = "INSERT INTO `diary` (`user_id`, `eventname`, `date`, `time`, `category`, `mood`, `course`, `diaryresult`, `ispublic`, `additional`, `number`, `hug`, `comment`, `comment_notRead`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

        var id = req.body.id
        var name = req.body.name
        var category = req.body.category
        var emoji = req.body.emoji
        var date = req.body.date
        var text1 = req.body.text1
        var text2 = req.body.text1
        var time = req.body.time
        var isPublic = req.body.isPublic
        var addtext = req.body.addtext
        var number = req.body.number

        pool.getConnection((err, connection) => {
            connection.query(sql_add, [id, name, date, time, category, emoji, text1, text2, isPublic, addtext, number, 0, 0, 'n'], (err, result) => {
                if (err) throw err;
                res.send("success");
                connection.release();
            });

        })
    },
    checkDiaryDate(req, res, next) {

        var sql = "SELECT * FROM `diary` WHERE user_id=?";

        var id = req.body.id;

        pool.getConnection((err, connection) => {
            connection.query(sql, [id], (err, result) => {
                if (err) throw err;
                console.log(result)
                res.send(result);
                connection.release();
            });
        })
    },
    checkWatering(req, res, next) {

        var sql = "SELECT * FROM `watering_yoyo` WHERE ID=? AND day=?";
        var id = req.body.id


        pool.getConnection((err, connection) => {
            var now = new Date();
            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = now.getFullYear() + "-" + (month) + "-" + (day);
            connection.query(sql, [id, today], (err, result) => {
                if (err) throw err;
                res.send(result);
                connection.release();
            });

        })
    },
    addWater(req, res, next) {

        var sql = "INSERT INTO `watering_yoyo` (`day`, `ID`) VALUES (?, ?);";
        var id = req.body.id

        pool.getConnection((err, connection) => {
            var now = new Date();
            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = now.getFullYear() + "-" + (month) + "-" + (day);
            connection.query(sql, [today, id], (err, result) => {
                if (err) throw err;
                connection.release();
            });

        })
    },
    SendHugDiary(req,res,next) {
        var send_number = req.body.send_number;
        var receive_number = req.body.receive_number;
        var receive_date = req.body.receive_date;
        var sql_hug = "insert into hug_diary(`send_number`,`receive_number`,`receive_date`) values(?,?,?)";
        var sql_checkhug_diary = "select * from hug_diary where send_number = ? AND receive_number = ? AND receive_date = ?";
        pool.getConnection((err,connection) => {
            if(err) throw err;
            connection.query(sql_checkhug_diary, [send_number,receive_number,receive_date], (err,result) => {
                if(err) throw err;
                if(result.length == 0) {
                    var sql_diarySelect = "select * from diary where number=? AND date=?";
                    var sql_diaryUpdate = "UPDATE diary SET hug=? where number=? AND date=?";
                    connection.query(sql_diarySelect, [receive_number,receive_date], (err, result) => {
                        if(err) throw err;
                        if(result.length == 0) {
                            console.log("fail");
                            res.send("fail");
                        }
                        else {
                            var new_hug = Number(result[0].hug) + 1;
                            connection.query(sql_diaryUpdate, [new_hug,receive_number,receive_date], (err, result) => {
                                if(err) throw err;
                                connection.query(sql_hug, [send_number,receive_number,receive_date], (err,result) => {
                                    if(err) throw err;
                                    res.send("success");
                                })
                            })
                        }
                    });
                    
                }
            })                
            connection.release();
        })
    },
    GetHugDiaryInfo(req, res, next) {
        var send_number = req.body.send_number;
        var receive_number = req.body.receive_number;
        var receive_date = req.body.receive_date;
        var sql = "select * from hug_diary where send_number = ? AND receive_number = ? AND receive_date = ?";
        pool.getConnection((err, connection) => {
            if(err) throw err;
            connection.query(sql, [send_number,receive_number,receive_date], (err,result) => {
                if(err) throw err;
                if(result.length == 0) {
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            })
            connection.release();
        })
    },
    CancelHugDiary(req, res, next) {
        var send_number = req.body.send_number;
        var receive_number = req.body.receive_number;
        var receive_date = req.body.receive_date;
        var sql_cancel = "DELETE from hug_diary where send_number = ? AND receive_number = ? AND receive_date = ?";
        var sql_checkhug_diary = "select * from hug_diary where send_number = ? AND receive_number = ? AND receive_date = ?";
        pool.getConnection((err, connection) => {
            if(err) throw err;
            connection.query(sql_checkhug_diary, [send_number,receive_number,receive_date], (err,result) => {
                if(err) throw err;
                if(result.length != 0) {
                    var sql_diarySelect = "select * from diary where number=? AND date=?";
                    var sql_diaryUpdate = "UPDATE diary SET hug=? where number=? AND date=?";
                    connection.query(sql_diarySelect, [receive_number,receive_date], (err, result) => {
                        if(err) throw err;
                        if(result.length == 0) {
                            console.log("fail");
                            res.send("fail");
                        }
                        else {
                            var new_hug = Number(result[0].hug) - 1;
                            connection.query(sql_diaryUpdate, [new_hug,receive_number,receive_date], (err, result) => {
                                if(err) throw err;
                                connection.query(sql_cancel, [send_number,receive_number,receive_date], (err,result) => {
                                    if(err) throw err;
                                    res.send("success");
                                })
                            })
                        }
                    });
                }
            })
            connection.release();
        })
    },
    SendHugComment(req,res,next) {
        var send_number = req.body.send_number;
        var receive_number = req.body.receive_number;
        var diary_number = req.body.diary_number;
        var diary_date = req.body.diary_date;
        var comment_date = req.body.comment_date;
        var comment_time = req.body.comment_time;
        var sql_hug = "insert into hug_comment(`send_number`,`receive_number`,`diary_number`,`diary_date`,`comment_date`,`comment_time`) values(?,?,?,?,?,?)";
        var sql_checkhug_comment = "select * from hug_comment where send_number = ? AND receive_number = ? AND diary_number = ? AND diary_date = ? AND comment_date = ? AND comment_time = ?";
        pool.getConnection((err,connection) => {
            if(err) throw err;
            connection.query(sql_checkhug_comment, [send_number,receive_number,diary_number,diary_date,comment_date,comment_time], (err,result) => {
                if(err) throw err;
                if(result.length == 0) {
                    var sql_commentSelect = "select * from comment where send_number=? AND receive_number = ? AND diary_date=? AND send_date = ? AND send_time = ?";
                    var sql_commentUpdate = "UPDATE comment SET hug=? where send_number=? AND receive_number = ? AND diary_date=? AND send_date = ? AND send_time = ?";
                    connection.query(sql_commentSelect, [receive_number,diary_number,diary_date,comment_date,comment_time], (err, result) => {
                        if(err) throw err;
                        if(result.length == 0) {
                            console.log("fail");
                            res.send("fail");
                        }
                        else {
                            var new_hug = Number(result[0].hug) + 1;
                            connection.query(sql_commentUpdate, [new_hug,receive_number,diary_number,diary_date,comment_date,comment_time], (err, result) => {
                                if(err) throw err;
                                connection.query(sql_hug, [send_number,receive_number,diary_number,diary_date,comment_date,comment_time], (err,result) => {
                                    if(err) throw err;
                                    res.send("success");
                                })
                            })
                        }
                    });
                    
                }
            })                
            connection.release();
        })
    },
    GetHugCommentInfo(req, res, next) {
        var send_number = req.body.send_number;
        var receive_number = req.body.receive_number;
        var diary_number = req.body.diary_number;
        var diary_date = req.body.diary_date;
        var comment_date = req.body.comment_date;
        var comment_time = req.body.comment_time;
        var sql = "select * from hug_comment where send_number = ? AND receive_number = ? AND diary_number = ? AND diary_date = ? AND comment_date = ? AND comment_time = ?";
        pool.getConnection((err, connection) => {
            if(err) throw err;
            connection.query(sql, [send_number,receive_number,diary_number,diary_date,comment_date,comment_time], (err,result) => {
                if(err) throw err;
                if(result.length == 0) {
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            })
            connection.release();
        })
    },
    CancelHugComment(req, res, next) {
        var send_number = req.body.send_number;
        var receive_number = req.body.receive_number;
        var diary_number = req.body.diary_number;
        var diary_date = req.body.diary_date;
        var comment_date = req.body.comment_date;
        var comment_time = req.body.comment_time;
        var sql_cancel = "DELETE from hug_comment where send_number = ? AND receive_number = ? AND diary_number = ? AND diary_date = ? AND comment_date = ? AND comment_time = ?";
        var sql_checkhug_comment = "select * from hug_comment where send_number = ? AND receive_number = ? AND diary_number = ? AND diary_date = ? AND comment_date = ? AND comment_time = ?";
        pool.getConnection((err, connection) => {
            if(err) throw err;
            connection.query(sql_checkhug_comment, [send_number,receive_number,diary_number,diary_date,comment_date,comment_time], (err,result) => {
                if(err) throw err;
                if(result.length != 0) {
                    var sql_commentSelect = "select * from comment where send_number=? AND receive_number = ? AND diary_date=? AND send_date = ? AND send_time = ?";
                    var sql_commentUpdate = "UPDATE comment SET hug=? where send_number=? AND receive_number = ? AND diary_date=? AND send_date = ? AND send_time = ?";                    
                    connection.query(sql_commentSelect, [receive_number,diary_number,diary_date,comment_date,comment_time], (err, result) => {
                        if(err) throw err;
                        if(result.length == 0) {
                            console.log("fail");
                            res.send("fail");
                        }
                        else {
                            var new_hug = Number(result[0].hug) - 1;
                            connection.query(sql_commentUpdate, [new_hug,receive_number,diary_number,diary_date,comment_date,comment_time], (err, result) => {
                                if(err) throw err;
                                connection.query(sql_cancel, [send_number,receive_number,diary_number,diary_date,comment_date,comment_time], (err,result) => {
                                    if(err) throw err;
                                    res.send("success");
                                })
                            })
                        }
                    });
                }
            })
            connection.release();
        })
    },
}