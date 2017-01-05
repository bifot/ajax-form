$(() => {
  $("form").submit((e) => {
    var $form = $(this);

    $.ajax({
      type: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize()
    }).done(() => {
      // Код, если форма успешно отправлена
      // Например, alert о статусе

      alert("Успешно!");
    }).fail(() => {
      // Код, если форма не отправлена
      // Например, alert о статусе

      alert("Failed");
    });
    
    e.preventDefault();
  });
});