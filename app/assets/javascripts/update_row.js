function updateRow(urlString, updateEvent, updatedQuality, id) {

  $.ajax({
    type: 'put',
    url:  urlString,
    data: {
      idea: {
        quality: updatedQuality
      }
    },
    dataType: 'json',
    success:  function() {
      var qualityLocation = '.idea-quality-' + id;
      $(qualityLocation).text(updatedQuality)

    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }

  });

}
