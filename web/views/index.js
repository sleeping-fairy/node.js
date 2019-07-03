$(function() {
  // 获取英雄列表的方法
  function getHeroList() {
    $.ajax({
      url: 'http://127.0.0.1:5001/getallhero',
      type: 'get',
      success: function(result) {
        console.log(result)
        var str = template('row', result)
        $('#tbd').html(str)
      }
    })
  }

  getHeroList()

  $('#add').on('click', function() {
    $('.ui.modal').modal('show')
  })

  // 初始化下拉框的样式
  $('.ui.dropdown').dropdown()

  $('#btnAdd').on('click', function() {
    $.ajax({
      url: 'http://127.0.0.1:5001/addhero',
      data: $('form').serialize(),
      type: 'post',
      dataType: 'json',
      success: function(result) {
        if (result.status === 200) {
          getHeroList()
        }
      }
    })
  })
})
