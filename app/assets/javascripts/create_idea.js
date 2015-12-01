$( document ).ready(function() {
  $('#create-idea-button').on('click', function(event) {
    event.preventDefault();

    var title = $('#idea-title').val();
    var body  = $('#idea-body').val();

    $.ajax({
      url: '/api/v1/ideas',
      type: 'POST',
      data: { idea: { title:   title,
                      body:    body }
            },
        dataType: "json",
        success: function(data) {
          console.log(data);

          var markup = generateRow(data);

          $('#headings').after(markup);
          $('#idea-title').val('');
          $('#idea-body').val('');
          $("#create-idea-button").blur();

        },
        error: function(xhr) {
          console.log(xhr.responseText)
        }
    }).then(function() {
      console.log('idea created.');
    });
  });

});

