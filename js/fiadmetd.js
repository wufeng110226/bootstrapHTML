/*!
 *
 * wufeng v0.0.1
 * Copyright 2016
 * under the WTFPL license:
 *
 */
/*fileinput页面控件调用方法隐显*/
$(".form-group input").on('fileloaded', function(event, data, previewId, index) {
      var aaa = $('#'+previewId).find('.kv-preview-data').attr('src');
      $('.ad_w').attr('src',aaa).css({'display':'block','width':'auto','height':'auto'});
      $("#"+previewId).parents(".file-input").find(".fileinput-upload-button").show();
      $("#"+previewId).parents(".file-input").find(".btn-file").show();
  });

/*$(".form-group input").on('fileclear', function(event, data, previewId) {
      $(this).parents(".file-input").find(".fileinput-upload-button").hide();
      $(this).parents(".file-input").find(".btn-file").show();
  });*/

/*fileinput自定义方法*/
$.validator.addMethod("fileinput",function(path,athis){
  //console.log(athis.id);
  $("#"+athis.id).on('filebatchuploadcomplete', function(a,b) {
       return true;
  });
  var aaa = $("#"+athis.id).parents(".file-input").find(".file-upload-indicator i").hasClass("text-success");
  if(aaa){
    console.log("11111");
    return true;
  }else{
    console.log("33333");
    return false;
  }
  })