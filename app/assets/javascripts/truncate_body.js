function truncateBody(data) {
  if(data.body.length > 100) {
    return jQuery.trim(data.body).substring(0, 100)
      .split(" ").slice(0, -1).join(" ") + "...";
  } else {
    return data.body;
  }
};
