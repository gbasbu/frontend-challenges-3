const button = document.querySelector('.btn')
const input = document.querySelector('.input')

button.addEventListener("click", function() {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value)) {
    input.classList.remove("error-input");
    document.querySelector(".error").classList.remove("error-block");
    setTimeout(function() {
      document.querySelector(".form-block").submit();
    }, 1000);
    document.querySelector(".check").classList.add("error-block")
  } else {
    document.querySelector(".error").classList.add("error-block");
    input.classList.add("error-input");
  }

});