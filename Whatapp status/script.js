var mid = document.querySelector(".mid");
var dm = document.querySelectorAll(".dm");
var full = document.querySelector(".full");

const users = [
  {
    username: "emily.brown",
    dp: "https://images.unsplash.com/photo-1615125946289-16298a82d3c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxwb3J0cmFpdHxlbnwwfDJ8MHx8fDA%3D",
    status: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    lastMsg: "Let’s go out this weekend 😎",
  },
  {
    username: "Tiku Sahu",
    dp: "https://images.unsplash.com/photo-1730638984071-c646f366290a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxwb3J0cmFpdHxlbnwwfDJ8MHx8fDA%3D",
    status:
      "https://images.unsplash.com/photo-1669719467618-d0f2c82972cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwb3J0cmFpdHxlbnwwfDJ8MHx8fDA%3D",
    lastMsg: "Miss you already 🥺",
  },
  {
    username: "Kelly Ginoe",
    dp: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
    status:
      "https://images.unsplash.com/photo-1724137872834-4520a86b1aab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
    lastMsg: "Typing…",
  },
  {
    username: "Midori Ishikawa",
    dp: "https://images.unsplash.com/photo-1670391466553-240fdcaa3fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
    status:
      "https://images.unsplash.com/photo-1562783530-df27356a200d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
    lastMsg: "Check your Instagram 😂",
  },
  {
    username: "bewda ramesh",
    dp: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    status:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwC567z8NEAG_fA_NLL5Dkgiy78bqde83R_MF55quobA&s",
    lastMsg: "Jai shree christmas",
  },
  {
    username: "matkasur",
    dp: "https://us-tuna-sounds-images.voicemod.net/5bdcca14-decc-48b0-8aed-0d0e59d870ba.jpg",
    status:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58NMsGNyso8sy1Tga2e9Yg1n-Zv-FhzgAxIeh158yhGK5d10ueQZ6ynQ&s=10",
    lastMsg: "500 udhar dede",
  },
  {
    username: "isabella_fern",
    dp: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    status:
      "https://images.unsplash.com/photo-1615125946289-16298a82d3c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxwb3J0cmFpdHxlbnwwfDJ8MHx8fDA%3D",
    lastMsg: "Battery dying brb 🔋",
  },
];

function renderUsers() {
  var sum = "";
  users.forEach(function (user, idx) {
    sum += `<div id="${idx}" class="dm">
                <img src="${user.dp}" alt="">
                <div class="info">
                    <h5>${user.username}</h5>
                    <p>${user.lastMsg}</p>
                </div>
            </div>`;
  });
  mid.innerHTML = sum;
}
renderUsers();

mid.addEventListener("click", function (dets) {
  if (users[dets.target.id]) {
    full.style.display = "flex";
    full.style.backgroundImage = `url("${users[dets.target.id].status}")`;
    full.style.backgroundSize = "cover";
    full.style.backgroundPosition = "center";
    full.innerHTML = `<div class="full-top">
                <div class="p-bar">
                <div class="prg"></div>
            </div>
                <div class="nav">
                    <img src="${users[dets.target.id].dp}" alt="">
                    <div class="user-n">
                        <h4>${users[dets.target.id].username}</h4>
                        <i class="ri-more-2-fill"></i>
                    </div>
                </div>
            </div>
            <div class="full-bottom">
                <div class="reply">reply</div>
                <div class="like"><i class="ri-heart-3-line"></i></div>
            </div>`;

    // Animate progress bar and close automatically
    const prg = document.querySelector(".prg");
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      prg.style.width = progress + "%";
      if (progress >= 100) {
        clearInterval(interval);
        full.style.display = "none";
      }
      full.addEventListener("click", () => {
        clearInterval(interval);
        full.style.display = "none";
      });
    }, 50);
  }
});
