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

const homeBtns = ["EMPLOYER", "JOB SEEKER"];

function removeLastWord(element) {
  let words = element.split(" ");
  if (words.length > 1) {
    words.pop();
  }
  return words[0];
}

for (let i = 0; i < homeBtns.length; i++) {
  const homeBtnDiv = document.createElement("div");
  const homeBtnClass = removeLastWord(homeBtns[i]);
  homeBtnDiv.classList.add("homeBtnDiv", "flex", homeBtnClass);
  const homeBtnDivWords = document.createElement("div");
  //   homeBtnDivWords.className = "homeBtnDivWords";
  homeBtnDivWords.textContent = homeBtns[i];
  homeBtnDiv.appendChild(homeBtnDivWords);
  homePageBtnsDiv.appendChild(homeBtnDiv);
}

const partnersTitle = document.createElement("p");
partnersTitle.classList.add("partnersTitle");
partnersTitle.textContent = "OUR CLIENTS";

const partners = document.createElement("div");
partners.id = "partners";
partners.classList.add("partners", "flex");

const clientsDiv = document.createElement("div");
clientsDiv.className = "clients";
clientsDiv.id = "clients";

for (let i = 0; i < 15; i++) {
  const clientDiv = document.createElement("div");
  clientDiv.className = "client";
  clientDiv.textContent = i;
  clientsDiv.appendChild(clientDiv);
}

const footerDiv = document.createElement("div");
footerDiv.classList.add("footerDiv", "flex");

const footers = [
  { href: "/terms.html", text: "Terms & Conditions" },
  { href: "#", text: "|" },
  { href: "all.html", text: "All Rights Reserved" },
];

for (let i = 0; i < footers.length; i++) {
  const footer = document.createElement("a");
  footer.href = footers[i].href;
  footer.textContent = footers[i].text;
  let footerClass = "";
  if (i == 1) {
    footerClass = "footerPipe";
  } else {
    footerClass = removeLastWord(footers[i].text);
  }
  footer.classList.add("footer", footerClass);
  footerDiv.append(footer);
}

container.append(homeContent);
homeContent.append(
  homePageTitleDiv,
  homePageCopyDiv,
  homePageBtnsDiv,
  partnersTitle,
  partners,
  footerDiv
);
homePageTitleDiv.append(homePageTitle);
partners.append(clientsDiv);

// const clientsDiv2 = document.querySelector(".clients");
// const clientDivs2 = clientsDiv2.querySelectorAll(".client");

// let currentIndex = 0;

// setInterval(() => {
//   clientsDiv2.scrollTo({
//     top: 0,
//     left: currentIndex * clientsDiv2.offsetWidth,
//     behavior: "smooth",
//   });
//   currentIndex = (currentIndex + 1) % clientDivs2.length;
//   if (currentIndex === 0) {
//     clientsDiv2.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "auto",
//     });
//   }
// }, 2000);
//----------------------------------------------------------------

// Set the initial position of the slider
let sliderPosition = 0;

// Set the speed at which the slider should move
let sliderSpeed = 1;

// Get a reference to the parent element
let clients = document.getElementById("clients");

// Get a reference to all the client elements
let clientElements = clients.getElementsByClassName("client");

// Function to move the slider
function moveSlider() {
  // Increment the slider position by the slider speed
  sliderPosition += sliderSpeed;

  // If the slider has reached the end of the container, reset the position
  if (sliderPosition > clients.offsetWidth) {
    sliderPosition = 0;
  }

  // Update the position of the clients
  clients.style.left = -sliderPosition + "px";
}

// Set an interval to continuously move the slider
setInterval(moveSlider, 50);
