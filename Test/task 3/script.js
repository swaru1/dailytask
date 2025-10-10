let allText = [
  "The sunrise over the mountains painted the sky in shades of orange and pink. A new day had begun with endless possibilities.",
  "She opened the old book and a faint scent of memories filled the air. Each page whispered stories from forgotten times.",
  "Rain tapped gently on the window as the city lights reflected off the wet streets. It was one of those peaceful nights.",
  "He stood at the edge of the forest, unsure whether to step into the unknown. The rustling leaves seemed to invite him in.",
  "The ocean waves crashed rhythmically, carrying secrets from distant lands. The sound was both calming and powerful.",
  "They laughed under the stars, forgetting the world for a while. Moments like these were rare, but worth everything.",
];

var timeCount = document.querySelector("#timer");
var para = document.querySelector("p");
var txtArea = document.querySelector("#input");
var btn = document.querySelector("button");

var randomPara = () => {
  let randomIdx = Math.floor(Math.random() * allText.length);
  //console.log(allText[randomIdx]);
  para.innerHTML = allText[randomIdx];
};

var intvl;
var timer = 0;
var start = false;

txtArea.addEventListener("input", () => {
  console.log("user is typing..");
  btn.innerHTML = "submit";

  if (!start) {
    start = true;
    intvl = setInterval(() => {
      timer++;
      timeCount.innerHTML = timer;
    }, 1000);
  }
});

btn.addEventListener("click", () => {
  if (btn.innerHTML == "submit") {

    clearInterval(intvl);
    start = false;

    if(txtArea.value.trim() === para.innerHTML.trim()) {
        para.innerHTML = `Good Job! your time: ${timer} secs`
    } else {
        para.innerHTML = `Text didnt match try again`
    }

    txtArea.value = "";
    txtArea.style.display = "none";
    timer = 0;
    timeCount.innerHTML = timer;
    timeCount.style.display = "none";
    btn.innerHTML = "try again";
  } else {
    randomPara();
    txtArea.style.display = "block";
    timeCount.style.display = "inline-block";
    btn.innerHTML = "submit";
  }
});
