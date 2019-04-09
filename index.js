$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

(function(){
  emailjs.init("user_kjZM1hD2hofBgOU4dsXlV");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('josepadron_go', 'respuesta_de_cv', this)
    // .then(function(response) {
    //   if(response.text === 'OK'){
    //     alert('El correo se ha enviado de forma exitosa');
    //     console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    //   }}, 
      
    //   function(err) {
    //     alert('Ocurrió un problema al enviar el correo');
    //     console.log("FAILED. error=", err);
    // });
  });
}