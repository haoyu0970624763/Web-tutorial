$(document).ready(function() {

  var flag = 0;

  $('#list-region button[type="submit"]').click((event) => {
      event.preventDefault()

      if (flag == 0) {
          $.getJSON("./students.json", function(data) {
              // 將 ListContent 中的內容全部清掉
              $('#ListContent').empty()
              $('#SearchContent').empty()
              $('#AddContent').empty()
              $('#DelContent').empty()
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
        
        $('#SearchContent').empty()
        $('#AddContent').empty()
        $('#DelContent').empty()
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
    event.preventDefault()
    
    $('#SearchContent').empty()
    $('#AddContent').empty()
    $('#DelContent').empty()
    $.get('./add', {
        studentId: $('#add-region [name="ID"]').val(),
        studentName: $('#add-region [name="Name"]').val(),
    }, (data) => {
        $('#AddContent').html(data)
    })
    
  })

  $('#del-region button[type="submit"]').click((event) => {
    event.preventDefault()
    
    $('#SearchContent').empty()
    $('#AddContent').empty()
    $('#DelContent').empty()
    $.get('./del', {
        studentId: $('#del-region [name="ID"]').val(),
    }, (data) => {
        $('#DelContent').html(data)
    })
  })

});
