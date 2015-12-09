$(document).on('ready', function(){

  getIdeas();

  handleCreateIdea();
  handleDeleteIdea();

  handleUpdateIdeaTitle();
  handleUpdateIdeaBody();

  handleIncrementQuality();
  handleDecrementQuality();

  handleSearch();

});

// I like the ease of reading this. 
// This does seem like a strange way to call all of these functions, though.
// 
// Perhaps you could make a wrapper function around ajax functions,
// Or make a method library for some things like truncate_body and incrementQuality.
// Those don't really need their own files, do they? You'll end up with a lot of random small files that
// aren't semantically similar. Think of another way of organizing these. 