function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const password = "regaloni";

  if (input === password) {
    window.location.href = "Menu.html";
  } else {
    alert("Oops! Intenta otra vez 🥺");
  }
}

