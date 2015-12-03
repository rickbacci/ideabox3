function handleDecrementQuality() {
  $('tbody').on('click', '.thumbs-down', function(event) {

    var id             = event.target.dataset.id;
    var urlString      = 'api/v1/ideas/' + id;
    var updateEvent    = { event: event };
    var currentQuality = event.target.parentElement.textContent;

    var updatedQuality = decrementQuality(currentQuality);

    console.log('Quality down pressed for id: ' + event.target.dataset.id)

    updateRow(urlString, updateEvent, updatedQuality, id);
    $('.thumbs-down').blur();

    // return false;
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

