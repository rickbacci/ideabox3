$( document ).ready(function() {
  $('#create-idea-button').on('click', function(event) {
    event.preventDefault();

    var title = $('#idea-title').val();
    var body  = $('#idea-body').val();

    $.ajax({
      url: '/api/v1/ideas',
      type: 'POST',
      data: {
        idea: {
          title: title,
          body:  body
        }
      },
      dataType: "json",
      success: function(response) {
        if (response.id) {
          console.log(response);
          $('#headings').after(generateRow(response));
          $('#idea-title').val('');
          $('#idea-body').val('');
          $("#create-idea-button").blur();

          $('.flash').append('<p>Idea has been successfully created.</p>')
        } else {
          console.log(response);
          response.forEach(function(error){
            $('.flash').append('<p>' + error + '</p>')
          });
          $('.flash').append('<p>Idea creation Unsuccessful</p>')
        }

      },
      error: function(xhr) {
        console.log('error in create idea')
        console.log(xhr.responseText);
      }
    })

  });

});

