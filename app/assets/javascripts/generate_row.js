function generateRow(data) {
  return  (
        "<tr class='ideas'>"
      +   "<td class='idea-title'>"
      +     data.title
      +   '</td>'
      +   "<td class='idea-body'>"
      +     data.body
      +   '</td>'
      +   "<td class='text-center idea-quality-" + data.id + "'>"
      +     data.quality
      +   '</td>'
      +   "<td class='btn-delete' data-id='"
      +   data.id + "'>"
      +     "<button class='btn btn-primary btn-xs btn-delete'"
      +       "data-id='"
      +       data.id + "'>"
      +       'delete'
      +     '</button>'
      +   '</td>'
      + '</tr>'
  );
}
