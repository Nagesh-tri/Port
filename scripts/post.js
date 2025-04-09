const scriptURL = 'https://script.google.com/macros/s/AKfycbwfUyHkAaP-_u_I_6027SuzCq9BqN44sVmU1DXQl6UYmxBF2r7-eGtz7fwnzbJok8A/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
const submitBtn = form.querySelector('button[type="submit"]');
const inputs = form.querySelectorAll('input, textarea');

form.addEventListener('submit', e => {
  console.log("hit submited");
  
  e.preventDefault();

  // Disable all inputs and the button
  inputs.forEach(input => input.disabled = true);
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      msg.innerHTML = "🎉 Message sent successfully!";
      form.reset();
      setTimeout(() => msg.innerHTML = "", 4000);
    })
    .catch(error => {
      msg.innerHTML = "❌ Something went wrong. Try again.";
      console.error('Error!', error.message);
    })
    .finally(()=>{
      setTimeout(() => {
        inputs.forEach(input => input.disabled = false);
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      }, 2000);
    });
});


