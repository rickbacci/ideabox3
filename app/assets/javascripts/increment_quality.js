function handleIncrementQuality() {
  $('tbody').on('click', '.thumbs-up', function(event) {

    var id             = event.target.dataset.id;
    var urlString      = 'api/v1/ideas/' + id;
    var updateEvent    = { event: event };

    var currentQuality = $('.idea-quality-' + id).text();
    var updatedQuality = incrementQuality(currentQuality);

    console.log('Quality up pressed for id: ' + id)

    updateRow(urlString, updateEvent, updatedQuality, id);
    $('.thumbs-up').blur();

  });

}

function incrementQuality(quality) {

  switch (quality) {
    case 'swill':
      return 'plausible';
      break;
    case 'plausible':
      return 'genius';

      break;
    case 'genius':
      return 'genius';
      break;
  }

}

