const employer = createDiv();
employer.classList.add("employer", "flex");

const employerHeader = createH1();
employerHeader.className = "employerHeader";
employerHeader.textContent = "CHOOSE GAP";

const employerTitle = createH2();
employerTitle.classList.add("employerTitle", "flex");

// employerTitle.textContent = "Here is why you should";

const employerTitle1 = createH2();
employerTitle1.className = "employerTitle1";
employerTitle1.textContent = "Here is";

const employerTitle2 = createH2();
employerTitle2.className = "employerTitle2";
employerTitle2.textContent = "why";

const employerTitle3 = createH2();
employerTitle3.className = "employerTitle3";
employerTitle3.textContent = "you should";
// employerTitle3.textContent = "you should choose";

// const employerTitle4 = createH2();
// employerTitle4.className = "employerTitle4";
// employerTitle4.textContent = "us";

employerTitle.append(employerTitle1, employerTitle2, employerTitle3);

const employerCopy = createDiv();
employerCopy.classList.add("employerCopy");
employerCopy.textContent = `We assist our clients in attracting,
identifying, and hiring top candidates with specialized skills,
unique talents, and individuality to help them achieve their business goals.
`;

const servicesHeader = createH2();
servicesHeader.classList.add("servicesHeader", "flex");
// servicesHeader.textContent = "What we do.";

const emphasisService = createH2();
emphasisService.className = "emphasisService";
emphasisService.textContent = "What";

const serviceT = createH2();
serviceT.className = "serviceT";
serviceT.textContent = "we do";

servicesHeader.append(emphasisService, serviceT);

const servicesDiv = createDiv();
servicesDiv.classList.add("servicesDiv", "flex", "flex-col");

const services = [
  {
    title: "END-TO-END RECRUITMENT",
    content: `A service designed to save you time and resources by handling
     all aspects of the recruitment process for you, while ensuring that
      you find the best fit for your organization. We work closely with
       you to understand your specific needs and tailor our services to meet them.`,
  },
  {
    title: "MASS RECRUITMENT",
    content: `A comprehensive process that includes sourcing, screening, interviewing,
   assessing, and onboarding candidates. It is an ideal solution for organizations
    that have a high demand for employees or are looking to fill multiple positions
     at once. With the right mass recruitment team, organizations can find and hire
      the right people for the job, while saving time and money.`,
  },
  {
    title: "PROJECT-BASED RECRUITMENT",
    content: `A specialized form of recruitment tailored to the specific needs of an
   organization. It is a comprehensive process that includes sourcing, screening,
    interviewing, assessing, and onboarding candidates. It is an ideal solution
     for organizations that have a specific need for a short-term project or are
      looking to fill a specific role that is not a permanent position. With the
       right project-based recruitment team, organizations can find and hire the
        right people for the job, while saving time and money.`,
  },
];

for (let i = 0; i < services.length; i++) {
  const serviceDiv = createDiv();
  serviceDiv.classList.add("serviceDiv", "flex", "flex-col");

  const serviceTitle = createP();
  serviceTitle.className = "serviceTitle";
  serviceTitle.textContent = services[i].title;

  const service = createP();
  service.className = "service";
  service.textContent = services[i].content;

  serviceDiv.append(serviceTitle, service);
  servicesDiv.appendChild(serviceDiv);
}

const strategiesTitle = createH2();
strategiesTitle.classList.add("strategiesTitle", "flex");

const emphasis = createH2();
emphasis.className = "emphasis";
emphasis.textContent = "How";

const strtTitle = createH2();
strtTitle.className = "strtTitle";
strtTitle.textContent = "we do it";

strategiesTitle.append(emphasis, strtTitle);

const strategiesCopy = createP();
strategiesCopy.classList.add("strategiesCopy");
strategiesCopy.textContent = `Four simple strategies 
that will give you a competitive advantage.`;

const strategies = createDiv();
strategies.id = "strategies";
strategies.classList.add("strategies", "flex", "flex-col");

const strategyContent = [
  {
    strategy: "SOURCING",
    explanation: `We have a vast network of qualified candidates and use
     advanced sourcing techniques to find the best fit for your organization.`,
  },
  {
    strategy: "TECHNOLOGY",
    explanation: `We use cutting-edge technology to streamline the recruitment
     process and make it more efficient. This includes our applicant tracking
      system for candidate screening, scheduling, and communication.`,
  },
  {
    strategy: "SPEED & QUALITY",
    explanation: `We understand that time is of the essence and are committed
     to providing quick and efficient service while maintaining high standards
      of quality.`,
  },
  {
    strategy: "SCREENING",
    explanation: `We conduct thorough screenings to ensure that candidates
     meet the necessary qualifications and are a good fit for your 
     organization. This includes background checks, reference checks, and
      skill assessments.`,
  },
];

for (let i = 0; i < strategyContent.length; i++) {
  const strategy = createDiv();
  strategy.classList.add("strategy", "flex", "flex-col");

  const strategyTitle = createP();
  strategyTitle.className = "strategyTitle";
  strategyTitle.textContent = `${i + 1}. ${strategyContent[i].strategy}`;

  const strategyWords = createP();
  strategyWords.className = "strategyWords";
  strategyWords.textContent = strategyContent[i].explanation;

  strategy.append(strategyTitle, strategyWords);
  strategies.appendChild(strategy);
}

const actionDiv = createDiv();
actionDiv.id = "actionDiv";
actionDiv.classList.add("actionDiv", "flex", "flex-col");

const actionCopy = createH2();
actionCopy.className = "actionCopy";
actionCopy.textContent = "Talk to us";

actionDiv.append(actionCopy);

const actionWordsDiv = createH2();
actionWordsDiv.classList.add("actionWordsDiv", "flex", "flex-col");

const actionWords = [
  "Communicate with Carolyne:",
  "0715 155 512",
  "|",
  "carolyne@gaprecruitment.co.ke",
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
  actionWordsDiv.appendChild(actionWord);
}
actionDiv.append(actionWordsDiv);

const orWords = createP();
orWords.className = "orWords";
orWords.textContent = "OR";

const actionBtnEmployer = document.createElement("a");
actionBtnEmployer.className = "actionBtnEmployer";
actionBtnEmployer.href = "contact.html";
actionBtnEmployer.textContent = "GET-IN-TOUCH";

employer.append(
  employerHeader,
  employerTitle,
  employerCopy,
  servicesHeader,
  servicesDiv,
  strategiesTitle,
  strategiesCopy,
  strategies,
  actionDiv,
  orWords,
  actionBtnEmployer
);
document.querySelector("#body-overlay").append(employer, sectionC);
