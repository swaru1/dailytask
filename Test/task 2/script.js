var box = document.querySelector(".box");

box.addEventListener("mousemove", function (dets) {
  let x = Math.floor((dets.offsetX / box.clientWidth) * 255);
  let y = Math.floor((dets.offsetY / box.clientHeight) * 255);
  box.style.backgroundColor = `rgb(${x}, ${y}, ${(x + y) / 2})`;
});

box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "red";
});
