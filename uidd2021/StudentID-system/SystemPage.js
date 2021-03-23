$(document).ready(function() {

  var flag = 0;

  $('#list-region button[type="submit"]').click((event) => {
      event.preventDefault()

      if (flag == 0) {
          $.getJSON("./students.json", function(data) {
              // 將 ListContent 中的內容全部清掉
              $('#ListContent').empty()
              // 排版多一行
              $("#ListContent").append(`<br>`)
              $.each(data, function(Key, Value) {
                  $("#ListContent").append(`${Key}: ${Value} <br>`)
              })
          })
          flag++
      } else {
          $('#ListContent').empty();
          flag = 0
      }
  })
  $('#search-region button[type="submit"]').click((event) => {
      event.preventDefault()
      $.getJSON("./students.json", function(data) {
          $('#SearchContent').empty();
          var Search_ID = $('#search-region input[name=ID]').val()
          var val = ""
          $.each(data, function(Key, Value) {
              if (Search_ID == Key) {
                  val += Value
              }
          })
          if (val == "") {
              $("#SearchContent").html(`<br> 無此ID`)
          } else {
              $("#SearchContent").html(`<br>Hi !${val}`)
          }
      })
  })

  $('#add-region button[type="submit"]').click((event) => {
      var newUser = {
        "Ejkljjlj": "12345",
      }
      var fs = require('fs');
      fs.readFile('./students.json', function(err, userInfo) {
          if (err) {
              return console.error(err);
          }
          //將二進制數據轉換為字串符
          var user = userInfo.toString();
          //將字符串轉換為 JSON 對象
          user = JSON.parse(user);


          //將傳來的資訊推送到數組對象中
          user.userInfo.push(newUser);
    
          //因為寫入文件（json）只認識字符串或二進制數，所以需要將json對象轉換成字符串
          var str = JSON.stringify(user);
          //將字串符傳入您的 json 文件中
          fs.writeFile('./students.json', str, function(err) {
              if (err) {
                  console.error(err);
              }
              console.log('Add new user to userInfo...')
          })
      })
  })

});
