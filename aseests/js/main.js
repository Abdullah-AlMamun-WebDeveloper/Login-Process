document.querySelector(".logo-user").addEventListener("click", function () {
  document.getElementById("email").value = "provider@provider.com";
  document.getElementById("password").value = "provider123456";
});

document.querySelector("#login").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".apply_box").forEach((item) => {
    item.style.display = "none";
  });
  document.getElementById("information-box").style.display = "block";
});
document
  .querySelector("#provide-information")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".apply_box").forEach((item) => {
      item.style.display = "none";
    });
    document.getElementById("contact-box").style.display = "block";
  });
document.querySelector("#contact-back").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".apply_box").forEach((item) => {
    item.style.display = "none";
  });
  document.getElementById("information-box").style.display = "block";
});
document.querySelector("#contact-next").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".apply_box").forEach((item) => {
    item.style.display = "none";
  });
  document.getElementById("account-box").style.display = "block";
});
document.querySelector("#account-back").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".apply_box").forEach((item) => {
    item.style.display = "none";
  });
  document.getElementById("contact-box").style.display = "block";
});
