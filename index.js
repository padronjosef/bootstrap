$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const $form = document.getElementById('contact-form');

$("#contact-form").on("submit", function(event) {
  event.preventDefault(); // prevent reload
  
  var formData = new FormData(this);
  formData.append('service_id', 'josepadron_go');
  formData.append('template_id', 'respuesta_de_cv');
  formData.append('user_id', 'user_kjZM1hD2hofBgOU4dsXlV');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
});