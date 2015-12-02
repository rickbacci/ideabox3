$(document).ready(function() {

  $('tbody').on('click', '.btn-delete', function(event) {

    var urlString = 'api/v1/ideas/' + event.target.dataset.id;

    var removeRow = { event: event };

    deleteRow(urlString, removeRow);

    return false;
  });

});

function deleteRow(urlString, removeRow) {
  $.ajax({
    type:     'delete',
    url:      urlString,
    dataType: 'json',
    success:  function() {
      removeRow.event.target.parentElement.parentElement.remove();
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  });

}
