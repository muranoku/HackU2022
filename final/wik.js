
$(function () {
  var words = [
    {
      label: "ActionScript",
      url: "https://ja.wikipedia.org/wiki/ActionScript"
    },
    { label: "AppleScript" , url: "https://ja.wikipedia.org/wiki/AppleScript" },
    { label: "よろしく" , url: "sample2.html" },
    { label: "よろしくお願いします" , url: "sample2.html" },
    { label: "ありがとう" , url: "sample2.html" },
    { label: "ありがとうございます" , url: "sample2.html" },
    { label: "了解" , url: "sample2.html" },
    { label: "承知しました" , url: "sample2.html" },
    { label: "わかりました" , url: "sample2.html" },


    
  ];
  $("#keyword").autocomplete({
    source: function (request, response) {
      var list = [];
      list = words.filter(function (word) {
        return (
          word.label.indexOf(request.term) === 0 ||
          word.label.toLowerCase().indexOf(request.term) === 0
        );
      });
      response(list);
    },
    select: function(event, ui) {
      location.href = ui.item.url;
      return false;
    },
  });
});