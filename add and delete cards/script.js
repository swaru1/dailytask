var card = document.querySelector(".card");
var btn = document.querySelector("#subBtn");
var nameInput = document.querySelector("#user-inp");
var descInput = document.querySelector("#user-des");
var imgInput = document.querySelector("#user-img");
var allcards = document.querySelector(".allcards");
var form = document.querySelector("form");

var users = [
  {
    username: "Lalita Patel",
    desc: "A full-stack developer passionate about building scalable web apps and exploring new tech trends.",
    img: "https://plus.unsplash.com/premium_photo-1682089894837-e01e5cb8e471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHwyfDB8fHww",
  },
  {
    username: "Henry Kin",
    desc: "A creative graphic designer who loves minimalist art with creating intuitive and beautiful user experiences.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHwyfDB8fHww",
  },
  {
    username: "Ethan Rodriguez",
    desc: "A fitness coach dedicated to helping people achieve their health goals through smart training.",
    img: "https://plus.unsplash.com/premium_photo-1722945763962-305a5a769cc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
  },
  {
    username: "Mia Chen",
    desc: "A data analyst who enjoys solving real-world problems with numbers and visual insights.",
    img: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
  },
];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let newUser = {
    username: nameInput.value,
    desc: descInput.value,
    img: imgInput.value,
  };
  users.push(newUser);
  makeusers();
  form.reset();
});

function makeusers() {
  let sum = "";
  users.forEach(function (user, idx) {
    sum += `<div class="card">
        <img
          src="${user.img}"
          alt=""
        />
        <div id="content">
        <h3 id="username">${user.username}</h3>
        <p>
          ${user.desc}
        </p>
        <button id="${idx}"> delete user </button>
        </div>
        
      </div>`;
  });
  allcards.innerHTML = sum;
}
makeusers();

allcards.addEventListener("click", function (dets) {
  if (dets.target.id) {
    users.splice(dets.target.id, 1);
    makeusers();
  }
});
