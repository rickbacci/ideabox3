function handleSearch() {
  $('#search-bar').on('keyup', function(event) {
    $('.ideas').each(function (index, idea) {

      var searchTerm   = $('#search-bar').val();
      var ideaTitle    = $(idea).find('.idea-title').text().toLowerCase();
      var ideaBody     = $(idea).find('.idea-body').text().toLowerCase();

      var titleMatches = ideaTitle.toLowerCase().indexOf(searchTerm) !== -1;
      var bodyMatches  = ideaBody.toLowerCase().indexOf(searchTerm) !== -1;

      $(idea).toggle(titleMatches || bodyMatches);
    });
  });

}
