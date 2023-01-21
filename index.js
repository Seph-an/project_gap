const container = document.querySelector("#body-overlay");

const homeContent = document.createElement("section");
homeContent.id = "homeContent";
homeContent.classList.add("flex");

const homePageTitleDiv = document.createElement("div");
homePageTitleDiv.classList.add("homePageTitleDiv");

const homePageTitle = document.createElement("p");
homePageTitle.classList.add("homePageTitle");
homePageTitle.textContent = "YOUR TALENT SOLUTIONS PARTNER";

const homePageCopyDiv = document.createElement("div");
homePageCopyDiv.classList.add("homePageCopyDiv", "flex");

const circle1 = document.createElement("div");
circle1.classList.add("circle1", "circle");

const circle2 = document.createElement("div");
circle2.classList.add("circle2", "circle");

homePageCopyDiv.append(circle1, circle2);
const copyWords = ["QUALITY", "EFFICIENCY", "SPEED"];

for (let i = 0; i < copyWords.length; i++) {
  const copy = document.createElement("p");
  copy.id = copyWords[i];
  copy.classList.add("copy");
  copy.textContent = copyWords[i];
  homePageCopyDiv.append(copy);
}

const homePageBtnsDiv = document.createElement("div");
homePageBtnsDiv.classList.add("homePageBtnsDiv", "flex");

const homeBtns = [
  { name: "EMPLOYER", link: "employer.html" },
  { name: "JOB SEEKER", link: "gapservices.html" },
];

function removeLastWord(element) {
  let words = element.split(" ");
  if (words.length > 1) {
    words.pop();
  }
  return words[0];
}

for (let i = 0; i < homeBtns.length; i++) {
  const homeBtnDiv = document.createElement("a");
  homeBtnDiv.href = homeBtns[i].link;
  const homeBtnClass = removeLastWord(homeBtns[i].name);
  homeBtnDiv.classList.add("homeBtnDiv", "flex", homeBtnClass);
  homeBtnDiv.textContent = homeBtns[i].name;
  homePageBtnsDiv.appendChild(homeBtnDiv);
}

const partnersTitle = document.createElement("p");
partnersTitle.classList.add("partnersTitle");
partnersTitle.textContent = "OUR CLIENTS";

const partners = document.createElement("div");
partners.id = "partners";
partners.classList.add("partners", "flex");

const marquee = document.createElement("div");
marquee.classList.add("marquee");

const marqueeContent = document.createElement("ul");
marqueeContent.classList.add("marquee-content", "flex");

const clients = [
  { id: "alliance", src: "alliance.svg", height: "131px" },
  { id: "carsRus", src: "carsRus.svg", height: "46px" },
  { id: "chloride", src: "chloride.svg", height: "100px" },
  { id: "charcon", src: "charcon.svg", height: "70px" },
  { id: "harmony", src: "harmony.svg", height: "100px" },
  { id: "glory", src: "glory.svg", height: "97px" },
  { id: "golden", src: "golden.svg", height: "90px" },
  { id: "muhammed", src: "muhammed-n.svg", height: "98px" },
  { id: "riana", src: "riana.svg", height: "77px" },
  { id: "robstar", src: "robstar.svg", height: "53px" },
  { id: "silent", src: "silent.svg", height: "90px" },
  { id: "yellaw", src: "yellaw.svg", height: "100px" },
  { id: "rochman", src: "rochman.svg", height: "83px" },
  { id: "nyumba", src: "nyumba.svg", height: "65px" },
  { id: "gamma", src: "gamma.svg", height: "72px" },
];

for (let i = 0; i < clients.length; i++) {
  const li = document.createElement("li");
  const image = document.createElement("img");
  image.setAttribute("src", `imgs/clients/${clients[i].src}`);
  image.setAttribute("alt", "partner");
  image.setAttribute("height", clients[i].height);
  image.setAttribute("width", 100);
  li.appendChild(image);
  marqueeContent.appendChild(li);
}
// for (let i = 0; i < 4; i++) {
//   const li = marqueeContent.querySelectorAll("li")[i];
//   const newLi = li.cloneNode(true);
//   marqueeContent.appendChild(newLi);
// }
marquee.appendChild(marqueeContent);

container.append(homeContent);
homeContent.append(
  homePageTitleDiv,
  homePageCopyDiv,
  homePageBtnsDiv,
  partnersTitle,
  marquee,
  footerDiv
);
homePageTitleDiv.append(homePageTitle);

const root = document.documentElement;
//below code enables us know displayed elements, so as to know the right num to duplicate
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContents = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContents.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContents.appendChild(marqueeContents.children[i].cloneNode(true));
}

//----------------------------------------------------------------
