function handleIncrementQuality() {
  $('tbody').on('click', '.thumbs-up', function(event) {

    var id             = event.target.dataset.id;
    var urlString      = 'api/v1/ideas/' + id;
    var updateEvent    = { event: event };
    var currentQuality = event.target.parentElement.textContent;

    var updatedQuality = incrementQuality(currentQuality);

    console.log('Quality up pressed for id: ' + id)

    updateRow(urlString, updateEvent, updatedQuality, id);
    $('.thumbs-up').blur();

    // return false;
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

