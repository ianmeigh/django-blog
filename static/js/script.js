const navigationHeight = document.querySelector(".navbar").offsetHeight;
document.documentElement.style.setProperty("--message-padding", (navigationHeight + 5) + "px");

setTimeout(() => {
  let messages = document.querySelector("#msg");
  let alert = new bootstrap.Alert(messages);
  alert.close();
  console.log(alert);
}, 3000);