const contactSection = createSection();
contactSection.id = "contactSection";
contactSection.classList.add("flex", "flex-col");

const contactHeaderDiv = createDiv();
contactHeaderDiv.classList.add("contactHeaderDiv", "flex");

const contactHeaderIcon = createDiv();
contactHeaderIcon.className = "contactHeaderIcon";

const contactHeader = createH1();
contactHeader.className = "contactHeader";
contactHeader.textContent = "CONTACT US";

contactHeaderDiv.append(contactHeaderIcon, contactHeader);

const formImageDiv = createDiv();
formImageDiv.id = "formImageDiv";
formImageDiv.classList.add("flex");

const fromDiv = createDiv();
fromDiv.classList.add("fromDiv", "flex", "flex-col");

const formDivHeaderDiv = createDiv();
formDivHeaderDiv.classList.add("formDivHeaderDiv", "flex");

const formDivHeaderIcon = createDiv();
formDivHeaderIcon.className = "formDivHeaderIcon";

const formDivHeader = createH2();
formDivHeader.className = "formDivHeader";
formDivHeader.textContent = "Send Us A Message";

// Create the form element
const form = document.createElement("form");
form.id = "contactForm";
form.classList.add("flex", "flex-col");

// Create the text area
const textArea = () => document.createElement("textarea");
//added Monday-16/01/2023, morning
const textarea = textArea();
textarea.id = "message";
textarea.placeholder = "Enter your message";
textarea.name = "message";

// Create the input field
const inputField = document.createElement("input");
inputField.id = "mail";
inputField.type = "email";
inputField.placeholder = "Enter your e-mail";
inputField.name = "email";

// Create the button
const formBtn = document.createElement("button");
formBtn.id = "formBtn";
formBtn.textContent = "SEND";

// Add the form elements to the DOM
form.append(textarea, inputField, formBtn);

formDivHeaderDiv.append(formDivHeaderIcon, formDivHeader);
fromDiv.append(formDivHeaderDiv, form);

const imageDiv = createDiv();
imageDiv.classList.add("imageDiv", "flex");

const contactQuizes = createDiv();
contactQuizes.classList.add("contactQuizes", "flex", "flex-col");

const quizes = createP();
quizes.className = "quizes";
quizes.textContent = "Questions? Comments? Enquiries?";

const quizesAction = createP();
quizesAction.className = "quizesAction";
quizesAction.textContent = "Get-In-Touch!";

contactQuizes.append(quizes, quizesAction);

const contactImage = createDiv();
contactImage.classList.add("contactImage");

imageDiv.append(contactQuizes, contactImage);

formImageDiv.append(fromDiv, imageDiv);

const contactDiv = createDiv();
contactDiv.id = "contactDiv";
contactDiv.classList.add("contactDiv", "flex");

const contactDivElements = [
  "phoneContainer",
  "mailContainer",
  "locationContainer",
];

const phoneDetails = ["+254 (0) 207862222", "+254 (0) 207860108"];
const locationDetails = [
  "1st Floor, Suite A104,",
  "Madonna House Annex,",
  "Westlands Road.",
];

for (let i = 0; i < contactDivElements.length; i++) {
  const contactDivElement = createDiv();
  contactDivElement.classList.add(
    "contactDivElement",
    "flex",
    "flex-col",
    contactDivElements[i]
  );
  switch (i) {
    case 0:
      const phoneDivIcon = createDiv();
      phoneDivIcon.className = "phoneDivIcon";
      const phoneDiv = createDiv();
      phoneDiv.classList.add("contact", "phoneDiv", "flex", "flex-col");
      phoneDetails.forEach((phoneDetail) => {
        const p = createP();
        p.textContent = phoneDetail;
        phoneDiv.appendChild(p);
      });
      contactDivElement.append(phoneDivIcon, phoneDiv);
      break;
    case 1:
      const mailIcon = createDiv();
      mailIcon.className = "mailIcon";
      const mailDiv = createDiv();
      mailDiv.classList.add("contact", "mailDiv", "flex");
      mailDiv.textContent = "inquiry@gaprecruitment.co.ke";
      contactDivElement.append(mailIcon, mailDiv);
      break;
    case 2:
      const locationIcon = createDiv();
      locationIcon.className = "locationIcon";
      const locationDiv = createDiv();
      locationDiv.classList.add("contact", "locationDiv", "flex", "flex-col");
      locationDetails.forEach((locationDetail) => {
        const p = createP();
        p.textContent = locationDetail;
        locationDiv.appendChild(p);
      });
      contactDivElement.append(locationIcon, locationDiv);
      break;
  }
  contactDiv.appendChild(contactDivElement);
}

contactSection.append(contactHeaderDiv, formImageDiv, contactDiv);

document.querySelector("#body-overlay").append(contactSection, sectionC);

// -----------------------------------------------------------------------------------
//Actions that happen when form is submitted

const sendBtn = document.querySelector("#formBtn");

const delegateSubmitToBody = document.body;
delegateSubmitToBody.addEventListener("submit", submitFired);
//all elements that need submit are handled here
function submitFired(e) {
  if (e.target.id === "contactForm") {
    e.preventDefault();
    const form = e.target;
    console.log("event in contact form prevented");
    const inquirerMail = form.querySelector("#mail").value;
    const inquirerMessage = form.querySelector("#message").value;

    handleFormSubmitInquiry(inquirerMail, inquirerMessage);
  }
}
//process the values in the backend
function handleFormSubmitInquiry(mail, message) {
  console.log("Inquirer handle mail", mail);
  console.log("Inquirer handle message", message);

  const url = "http://localhost:3000/gap_inquiry";

  const body = {
    mail: mail,
    message: message,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset =UTF-8" },
  };

  fetch(url, options)
    .then((res) => {
      // return res.json();
      if (res.status == 200) {
        console.log("SUbmit successful");
      }
      console.log("SUbmit out of res");
      console.log("Status", res.status);
    })
    .catch((err) => {
      console.log("error", err);
      console.log("error message", err.message);
    });
}
