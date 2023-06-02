const scriptURL = 'https://script.google.com/macros/s/AKfycbwPzyRro6CPrt60K6huHDHpzW79KRuHZrfOHEIhqQ_Fzz0aPYcZbPdomX2-FmJPRzob/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 2000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
    })