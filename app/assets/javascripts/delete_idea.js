$(document).ready(function() {

  $('tbody').on('click', '.btn-delete', function(event) {

    var urlString = 'api/v1/ideas/' + event.target.dataset.id;

    var removeRow = {
      event: event
    };

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
    return false;
  });

});

