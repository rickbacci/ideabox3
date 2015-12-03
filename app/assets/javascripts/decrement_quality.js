function handleDecrementQuality() {
  $('tbody').on('click', '.thumbs-down', function(event) {

    var id             = event.target.dataset.id;
    var urlString      = 'api/v1/ideas/' + id;
    var updateEvent    = { event: event };

    var currentQuality = $('.idea-quality-' + id).text();
    var updatedQuality = decrementQuality(currentQuality);

    console.log('Quality down pressed for id: ' + id)

    updateRow(urlString, updateEvent, updatedQuality, id);
    $('.thumbs-down').blur();

  });
}

function decrementQuality(quality) {

  switch (quality) {
    case 'genius':
      return 'plausible';
      break;
    case 'plausible':
      return 'swill';
      break;
    case 'swill':
      return 'swill';
      break;
  }

}

