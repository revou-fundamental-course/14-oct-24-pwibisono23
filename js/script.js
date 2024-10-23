$(document).on("click", ".navbar-items li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

let nama = prompt("Tell me who you are!", "");
document.getElementById("nama").innerHTML = nama;

function validateForm() {
  const nama = document.forms["message-form"]["nama"].value;
  const tgl_lahir = document.forms["message-form"]["tgl_lahir"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const pesan = document.forms["message-form"]["pesan"].value;
  var form = document.getElementById("message-form");

  function handleForm(event) {
    event.preventDefault();
  }

  form.addEventListener("submit", handleForm);

  if (nama == "" || tgl_lahir == "" || gender == "" || pesan == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(nama, tgl_lahir, gender, pesan);

  return false;
}

document.getElementById("timestamp").innerHTML = Date();
function setSenderUI(nama, tgl_lahir, gender, pesan) {
  document.getElementById("sender-fullname").innerHTML = nama;
  document.getElementById("sender-birthdate").innerHTML = tgl_lahir;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = pesan;
}

document.getElementById("submit").addEventListener("click", function () {
  validateForm();
});
