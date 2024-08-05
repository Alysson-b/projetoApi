const scriptURL = 'https://script.google.com/macros/s/AKfycbxDFl5PI1LCdwmZYqqW_EfiwQMFc0bIiRB_U4H5czSn-WH0x-XTCtt_DodIhT02AOljDg/exec';

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST' , body: new FormData(form)})
    .then(response => alert ("Obrigado! Seu Formulario Foi Enviado Com Sucesso" ))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})