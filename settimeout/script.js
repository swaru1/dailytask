var h4 = document.querySelector("h4");
var h3 = document.querySelector("h3");
var button = document.querySelector("button");
var progress = document.querySelector(".progress");
var bar = document.querySelector(".p-bar");

button.addEventListener("click", function () {
  var p = 0;
  button.disabled = true;
  button.innerHTML = "Downloading...";
  h3.innerHTML = "Please wait..";

  var time = setInterval(() => {
    p++;
    progress.style.width = `${p}%`;
    h4.textContent = `${p}%`;

    if (p >= 100) {
      clearInterval(time);
      h3.innerHTML = "Download Completed!";
      button.innerHTML = "Finish";
      button.disabled = false;
    }
  }, 50);
});
