//function to create HTML elements
const createDiv = () => document.createElement("div");
const createP = () => document.createElement("p");
//--------------------------------------------------------
const employer = createDiv();
employer.classList.add("employer", "flex");

const employerTitle = createP();
employerTitle.classList.add("employerTitle");
employerTitle.textContent = "Here is why you should choose us";

const employerCopy = createDiv();
employerCopy.classList.add("employerCopy");
employerCopy.textContent = `We assist our clients in attracting,
identifying, and hiring top candidates with specialized skills, 
unique talents, and individuality to help them achieve their business goals
`;

const strategiesTitle = createP();
strategiesTitle.classList.add("strategiesTitle");
strategiesTitle.textContent = `Our four simple strategies 
that will give you a competitive advantage`;

const strategies = createDiv();
strategies.id = "strategies";
strategies.classList.add("strategies", "flex");

const strategyContent = [
  "Sourcing",
  "Technology",
  "Speed & Quality",
  "Screening",
];

for (let i = 0; i < strategyContent.length; i++) {
  const strategy = createDiv();
  strategy.classList.add("strategy", "flex");
  const strategyWords = createDiv();
  strategyWords.textContent = strategyContent[i];
  strategy.appendChild(strategyWords);
  strategies.appendChild(strategy);
}

const actionDiv = createDiv();
actionDiv.id = "actionDiv";
actionDiv.classList.add("actionDiv", "flex");

const glitter = createDiv();
glitter.className = "glitter";

actionDiv.appendChild(glitter);

const actionWords = [
  "Contact Carolyne:",
  "0701234567",
  "|",
  "clskskiw@gaprecruitment.com",
];

for (let i = 0; i < actionWords.length; i++) {
  const actionWord = createP();
  actionWord.textContent = actionWords[i];
  switch (i) {
    case 0:
      actionWord.classList.add("employerContact", "contactPerson1");
      break;
    case 1:
      actionWord.classList.add("employerContact", "contactNumber1");
      break;
    case 2:
      actionWord.classList.add("employerContact", "contactPipe1");
      break;
    case 3:
      actionWord.classList.add("employerContact", "contactMail");

      break;
  }
  actionDiv.appendChild(actionWord);
}

const actionBtnEmployer = document.createElement("a");
actionBtnEmployer.className = "actionBtnEmployer";
actionBtnEmployer.href = "contact.html";
actionBtnEmployer.textContent = "GET-IN-TOUCH";

employer.append(
  employerTitle,
  employerCopy,
  strategiesTitle,
  strategies,
  actionDiv,
  actionBtnEmployer
);
document.querySelector("#body-overlay").appendChild(employer);
