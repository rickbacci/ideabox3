function handleCreateIdea() {

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

        console.log(response);

        $('#headings').after(generateRow(response));

        $('#idea-title').val('');
        $('#idea-body').val('');
        $("#create-idea-button").blur();

        $('.flash').append('<p>Idea has been successfully created.</p>')
        $('.flash').fadeOut({ duration: 4000 });

      },
      error: function(xhr) {
        $('.flash').append('<p>Idea creation Unsuccessful</p>')
        $('.flash').fadeOut({ duration: 4000 });
        $("#create-idea-button").blur();

        // todo: more descriptive errors
        // How would you do this? See if you can break up the 
        // code into manageable semantic chunks
        console.log('error in create idea')

        console.log(xhr.responseText);
      }
    });

  });

}

