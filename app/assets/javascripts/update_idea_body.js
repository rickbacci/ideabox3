function handleUpdateIdeaBody() {

  $('tbody').on('focusout', 'textarea.body', function(event) {

    var id               = event.target.dataset.id;
    var updatedBodyData = $('.body').val();

    updateBody(id, updatedBodyData);
  });



  $('tbody').on('focusin', 'textarea', function(event) {

    var id               = event.target.dataset.id;
    var bodyClass = '.body' + id;
    var originalBodyData = $(bodyClass).val();

    console.log(bodyClass)
    console.log(originalBodyData)

    var urlString = 'api/v1/ideas/' + id;

    $.ajax({
      type: 'get',
      url:  urlString,
      data: {
        idea: {
          id: id
        }
      },
      dataType: 'json',
      success:  function(event) {

        console.log('success on focus in')

        console.log(event.body)

      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }

    });

    // need to get all the body not truncated.
  });

}

function updateBody(id, updatedBodyData) {

  var urlString = 'api/v1/ideas/' + id;

  // debugger;

  $.ajax({
    type: 'put',
    url:  urlString,
    data: {
      idea: {
        body: updatedBodyData
      }
    },
    dataType: 'json',
    success:  function() {

      console.log('success')
      console.log($('textarea.body').val())

      console.log(event)
      console.log(this)

    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }

  });

}
