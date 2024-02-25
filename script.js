const result = document.getElementById("result");
const filter = document.getElementById("filter");
const test = document.getElementsByClassName("test");
const users = [
  {
    name: "Alexander Phiphia",
    location: "Tsalendjikha,Georgia",
    img: "images/alex.jpg",
  },
  {
    name: "David Tavadze",
    location: "Bankok,Thailand",
    img: "images/david.jpg",
  },
  {
    name: "Benjamin Kalichava",
    location: "Tsalendjikha,Georgia",
    img: "images/bejo.jpg",
  },
  {
    name: "Tatuli Kobalava",
    location: "Tbilisi,Georgia",
    img: "images/tatu.jpg",
  },
  {
    name: "Lionel Andres Messi",
    location: "Rosario,Argentina",
    img: "images/messi.jpg",
  },
  {
    name: "Mahmud Osama",
    location: "Omdurman,Sudan",
    img: "images/mahmud.jpg",
  },
  {
    name: "Ramaz Sakhokia",
    location: "Tsalendjikha,Georgia",
    img: "images/ramaz.jpg",
  },
  {
    name: "Levan Mebonia",
    location: "Tsalendjikha,Georgia",
    img: "images/levan.jpg",
  },
  {
    name: "Kvicha Shainidze",
    location: "Batumi,Georgia",
    img: "images/khvicha.jpg",
  },
  {
    name: "Mia Khalifa",
    location: "California,USA",
    img: "images/mia.jpg",
  },
];

users.map((user, index) => {
  const listItem = document.createElement("li");
  listItem.classList.add("test");
  listItem.innerHTML = `
  <img src="${user.img}">
  <div class="user-info">
      <h4>${user.name}</h4>
      <p>${user.location}</p>
  </div>
`;
  result.appendChild(listItem);
});

filter.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();

  for (let i = 0; i < test.length; i++) {
    let target = test[i].children[1].children;
    let h4 = target[0].textContent.toLowerCase();
    let p = target[1].textContent.toLowerCase();

    test[i].classList.add("hide");

    if (h4.includes(searchText) || p.includes(searchText)) {
      test[i].classList.remove("hide");
    }
  }
});
