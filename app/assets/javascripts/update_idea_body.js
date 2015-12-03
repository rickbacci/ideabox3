function handleUpdateIdeaBody() {

  $('tbody').on('focusout', 'textarea.body', function(event) {

    var id               = event.target.dataset.id;
    var updatedBodyData = $('.body-' + id).val();

    updateBody(id, updatedBodyData);
  });



  $('tbody').on('focusin', 'textarea', function(event) {

    var id               = event.target.dataset.id;
    var bodyClass = '.body-' + id;
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
        // event.body returns what is in view
        console.log(event.body)

        // need to query db for the origin value
        // before it was truncated

        // debugger;

      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }

    });
    //#.bind(this);

    // need to get all the body not truncated.
  });

}

function updateBody(id, updatedBodyData) {

  var urlString = 'api/v1/ideas/' + id;

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

      console.log(event)
      console.log(this)

    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }

  });

}
