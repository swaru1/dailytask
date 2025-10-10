var btndiv = document.querySelector(".btns");
var body = document.querySelector("body");

btndiv.addEventListener("click", function (dets) {
  body.style.backgroundColor = `${dets.target.id}`
});
