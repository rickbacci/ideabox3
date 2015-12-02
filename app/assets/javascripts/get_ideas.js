$( document ).ready(function() {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    dataType: "json",
    success: function(data) {
      function buildRow(element) {
        $('#headings').after(generateRow(element));
      }

      data.forEach(buildRow);
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }

  });

});
