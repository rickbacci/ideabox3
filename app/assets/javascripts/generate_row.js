function generateRow(data) {
  return  (
        "<tr class='ideas' data-id='" + data.id + "'>"
      +   "<td class='idea-title'>"
      +     "<textarea class='title well noscrollbars'"
      +     " data-id='"
      +      data.id
      +     "'>"
      +     data.title + '</textarea>'
      +   '</td>'
      +   "<td class='idea-body'>"
      +     "<textarea class='body body-" + data.id + " well'"
      +     " data-id='"
      +      data.id + "'>"
      +      truncateBody(data) + '</textarea>'
      +   '</td>'
      +   "<td data-id='" + data.id + "'>"
      +     "<span class='idea-quality-" + data.id + "'>"
      +     data.quality + '</span>'
      +   '</td>'
      +   "<td>"
      +     "<button type='button' class='thumbs-down btn btn-default btn-xs glyphicon glyphicon-thumbs-down'"
      +     " data-id='" + data.id + "'>"
      +     "</button>"
      +   '</td>'
      +   "<td>"
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
