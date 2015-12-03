function handleUpdateIdeaTitle() {

  $('tbody').on('focusout', 'textarea.title', function(event) {

    var id               = event.target.dataset.id;
    var updatedTitleData = $('.title').val();

    updateTitle(id, updatedTitleData);
  });
}

function updateTitle(id, updatedTitleData) {

  var urlString = 'api/v1/ideas/' + id;

  $.ajax({
    type: 'put',
    url:  urlString,
    data: {
      idea: {
        title: updatedTitleData
      }
    },
    dataType: 'json',
    success:  function() {

      console.log($('textarea.title').val())

      console.log(event)
      console.log(this)

    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }

  });

}
