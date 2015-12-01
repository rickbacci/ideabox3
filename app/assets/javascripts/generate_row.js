function generateRow(data) {
  return  (
        "<tr class='ideas'>"
      +   "<td class='idea-title'>"
      +     data.title
      +   '</td>'
      +   "<td class='idea-body'>"
      +     data.body
      +   '</td>'
      +   "<td class='text-center quality-width idea-quality" + data.id + "'>"
      +     data.quality
      +   '</td>'
      + '</tr>'
  );
}
