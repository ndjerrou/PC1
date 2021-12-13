let listCandidates = [
  {
    firstName: "Emmanuel",
    lastName: "Macron",
    age: 40,
    political: "LREM",
    budget: 30000000,
    img: "https://static.cnews.fr/sites/default/files/styles/image_640_360/public/000_9fc7ny_60f5754b9540e_0.jpg?itok=sIThdSLz"
  },
  {
    firstName: "Valérie",
    lastName: "Pecresse",
    age: 43,
    political: "LR",
    budget: 3000000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Val%C3%A9rie_Pecresse_C%C3%A9sar_2016_%28cropped%29.jpg"
  },
  {
    firstName: "Eric",
    lastName: "Zemmour",
    age: 63,
    political: "Reconquête",
    budget: 300000,
    img: "https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/politique/info-europe-1-presidentielle-en-armenie-eric-zemmour-sera-accompagne-par-philippe-de-villiers-4081866/57955470-1-fre-FR/INFO-EUROPE-1-Presidentielle-en-Armenie-Eric-Zemmour-sera-accompagne-par-Philippe-de-Villiers.jpg"
  },
  {
    firstName: "Jean-Luc",
    lastName: "Mélenchon",
    age: 50,
    political: "LFI",
    budget: 500000,
    img: "http://cdn.programme-television.ladmedia.fr/var/premiere/storage/images/tele-7-jours/news-tv/affaire-pegasus-la-fi-espionnee-par-le-maroc-jean-luc-melenchon-veut-une-replique-contre-israel-4675300/99540077-1-fre-FR/Affaire-Pegasus-la-FI-espionnee-par-le-Maroc-Jean-Luc-Melenchon-veut-une-replique-contre-Israel.jpg"
  }
];
if (window.location.pathname === "/") {
  listCandidates = [
    "Emmanuel",
    "Valérie",
    "Marine",
    "Jean-Luc",
    "Yann",
    "Anne"
  ];
  listCandidates.push("Eric");

  listCandidates.splice(5, 1);

  listCandidates = [
    {
      firstName: "Emmanuel",
      lastName: "Macron",
      age: 40,
      political: "LREM",
      budget: 30000000,
      img: "https://static.cnews.fr/sites/default/files/styles/image_640_360/public/000_9fc7ny_60f5754b9540e_0.jpg?itok=sIThdSLz"
    },
    {
      firstName: "Valérie",
      lastName: "Pecresse",
      age: 43,
      political: "LR",
      budget: 3000000,
      img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Val%C3%A9rie_Pecresse_C%C3%A9sar_2016_%28cropped%29.jpg"
    },
    {
      firstName: "Eric",
      lastName: "Zemmour",
      age: 63,
      political: "Reconquête",
      budget: 300000,
      img: "https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/politique/info-europe-1-presidentielle-en-armenie-eric-zemmour-sera-accompagne-par-philippe-de-villiers-4081866/57955470-1-fre-FR/INFO-EUROPE-1-Presidentielle-en-Armenie-Eric-Zemmour-sera-accompagne-par-Philippe-de-Villiers.jpg"
    },
    {
      firstName: "Jean-Luc",
      lastName: "Mélenchon",
      age: 50,
      political: "LFI",
      budget: 500000,
      img: "http://cdn.programme-television.ladmedia.fr/var/premiere/storage/images/tele-7-jours/news-tv/affaire-pegasus-la-fi-espionnee-par-le-maroc-jean-luc-melenchon-veut-une-replique-contre-israel-4675300/99540077-1-fre-FR/Affaire-Pegasus-la-FI-espionnee-par-le-Maroc-Jean-Luc-Melenchon-veut-une-replique-contre-Israel.jpg"
    }
  ];

  listCandidates.forEach((candidat) => {
    console.log(candidat);
  });

  // DOM - Document Object Model
  const ul = document.querySelector("#candidates");

  // 6
  listCandidates.forEach((candidat) => {
    ul.innerHTML += `<li>${candidat.firstName}</li>`;
  });

  // 7

  const section = document.createElement("section");

  listCandidates.forEach((candidat) => {
    const article = `
  <article>
    <h4>${candidat.firstName} - ${candidat.lastName} - ${candidat.age}</h4>
    <p>Parti : ${candidat.political}</p>
    <p>Budget de campagne : ${candidat.budget}</p>
    <img id="${candidat.firstName}" src="${candidat.img}"/>
  </article>
  `;

    section.innerHTML += article;
  });

  document.querySelector("main").appendChild(section);

  // 8  - Destructuring

  function dispInfos({ firstName, lastName, age, political, budget }) {
    return `
  ${firstName}
  ${lastName}
  ${age}
  ${political}
  ${budget}
  `;
  }

  listCandidates.forEach((candidat) => {
    console.log(dispInfos(candidat));
  });

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", (e) => {
      window.location.href = `/candidat.html?firstName=${img.id}`;
    });
  });
} // 9
else {
  // string ==> array
  const nameCandidat = window.location.search.split("=")[1];

  const candidat = listCandidates.find((c) => c.firstName === nameCandidat);

  console.log(candidat);

  document.body.innerHTML = `
  <h2>${candidat.firstName}</h2>
  <h4>${candidat.lastName}</h4>
  <p>${candidat.age} ans</p>
  `;
}
