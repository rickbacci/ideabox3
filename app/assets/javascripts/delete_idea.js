function handleDeleteIdea() {

  $('tbody').on('click', '.btn-delete', function(event) {

    var urlString = 'api/v1/ideas/' + event.target.dataset.id;

    var removeRow = { event: event };

    // Why even define vars here? Seems like you can just put them in deleteRow. 
    deleteRow(urlString, removeRow);

    return false;
  });

}

function deleteRow(urlString, removeRow) {
  $.ajax({
    type:     'delete',
    url:      urlString,
    dataType: 'json',
    success:  function() {
      // This sort of nesting can get ugly pretty fast, especially if the 
      // html changes - you won't always be in control of it. Try and think 
      // of another way to do this.
      removeRow.event.target.parentElement.parentElement.remove();
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  });

}
