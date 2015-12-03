function generateRow(data) {
  return  (
        "<tr class='ideas' data-id='" + data.id + "'>"
      +   "<td class='idea-title'>"
      +     '<p>' + data.title + '</p>'
      +   '</td>'
      +   "<td class='idea-body'>"
      +     '<p>' + data.body + '</p>'
      +   '</td>'
      +   "<td data-id='" + data.id + "'>"
      +     "<span class='idea-quality-" + data.id + "'>"
      +     data.quality + '</span>'
      +     "<button type='button' class='thumbs-down btn btn-default btn-xs glyphicon glyphicon-thumbs-down'"
      +     " data-id='" + data.id + "'>"
      +     "</button>"
      +     "<button type='button' class='thumbs-up btn btn-default btn-xs glyphicon glyphicon-thumbs-up'"
      +     " data-id='" + data.id + "'>"
      +     "</button>"
      +   '</td>'
      +   "<td class='btn-delete' data-id='"
      +     data.id + "'>"
      +     "<button class='btn btn-primary btn-xs btn-delete'"
      +       "data-id='"
      +       data.id + "'>"
      +       'delete'
      +     '</button>'
      +   '</td>'
      + '</tr>'
  );
}
