function handleUpdateIdeaTitle() {

  $('tbody').on('focusout', 'textarea.title', function(event) {

    var id               = event.target.dataset.id;
    var updatedTitleData = $('.title-' + id).val();

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
    success:  function(idea) {

      console.log(idea);

    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }

  });

}
