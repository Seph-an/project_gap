"use strict";
const priceLists = [
  //--------------Grad-----------------
  { id: "resume", price: "2800" },
  { id: "cover", price: "1399" },
  { id: "linkedin", price: "4500" },
  { id: "coaching", price: "7200" },
  { id: "preparation", price: "4999" },
  //--------------Reg-----------------
  { id: "resume-r", price: "3400" },
  { id: "cover-r", price: "1800" },
  { id: "linkedin-r", price: "6500" },
  { id: "coaching-r", price: "12000" },
  { id: "preparation-r", price: "9999" },
  //---------------Exec----------------
  { id: "resume-e", price: "4000" },
  { id: "cover-e", price: "3500" },
  { id: "linkedin-e", price: "7300" },
  { id: "coaching-e", price: "18900" },
  { id: "preparation-e", price: "15000" },
  { id: "professional-e", price: "8000" },
  //----------------Exp---------------
  { id: "resume-ex", price: "5000" },
  { id: "ats-ex", price: "7600" },
  { id: "europass-ex", price: "8999" },
  { id: "cover-ex", price: "4500" },
  { id: "linkedin-ex", price: "10000" },
  { id: "professional-ex", price: "12000" },
];

const delegateClickToBody = document.body;
delegateClickToBody.addEventListener("click", clickFired);
//Every element clicked in the gapservices page is handled here
function clickFired(e) {
  // ensure that the click function only affects checkboxes
  if (e.target.className === "checkbox") {
    const target = e.target;
    const targetId = e.target.id;
    const closest = target.closest(".pack");
    const priceBtn = closest.querySelector(".serviceBtn");
    const price = Number(getPrice(targetId));
    const currentTotal = Number(priceBtn.getAttribute("data-total"));

    // check if the target checkbox is checked
    if (target.checked) {
      // check if the total data attribute exists, if not, set it to 0
      if (!priceBtn.hasAttribute("data-total")) {
        priceBtn.setAttribute("data-total", 0);
      }
      // get the current total value and add the price
      const newTotal = currentTotal + price;
      let totalNow = newTotal.toString();
      totalNow = getTotal(totalNow);
      priceBtn.textContent = `KES: ${totalNow}`;

      priceBtn.setAttribute("data-total", newTotal);
      console.log("the price is", price);
      console.log("the new total cost is", newTotal);
      console.log("div btn is", priceBtn);
    } else {
      // check if the total data attribute exists, if not, set it to 0
      if (!priceBtn.hasAttribute("data-total")) {
        priceBtn.setAttribute("data-total", 0);
      }
      // get the current total value and subtract the price
      const newTotal = currentTotal - price;
      let totalNow = newTotal.toString();
      totalNow = getTotal(totalNow);
      if (newTotal === 0) {
        priceBtn.textContent = "SELECT SERVICES";
      } else {
        priceBtn.textContent = `KES: ${totalNow}`;
      }

      priceBtn.setAttribute("data-total", newTotal);
      console.log("the price is", price);
      console.log("the new total cost is", newTotal);
      console.log("div btn is", priceBtn);
      console.log("div btn total now is", totalNow);
    }
  } else if (e.target.className === "formClose") {
    formContainer.classList.toggle("jobseekerUpload-on");
  } else if (e.target.classList.contains("serviceBtn")) {
    const target = e.target;
    const targetParent = target.closest(".pack");
    const packPicked = targetParent.querySelector(".packHeader").textContent;
    const priceBtn = targetParent.querySelector(".serviceBtn");
    const selectServices = targetParent.querySelector(".servicesDiv");

    const currentTotal = priceBtn.getAttribute("data-total");

    let totalNow;
    if (currentTotal === null || currentTotal === "0") {
      const checkedService = selectServices.querySelectorAll("input")[0];
      checkedService.checked = true;
      priceBtn.style.color = "#ed4444";
      // set action for 0.5 seconds
      setTimeout(() => {
        checkedService.checked = false;
        priceBtn.style.color = "";
      }, 500);
      return;
    } else {
      totalNow = getTotal(currentTotal);
    }

    if (
      e.target.classList.contains("serviceBtnAt") ||
      e.target.classList.contains("serviceBtnEu")
    ) {
      formContainer.classList.toggle("jobseekerUpload-on");
    } else {
      if (currentTotal > 0) {
        formContainer.classList.toggle("jobseekerUpload-on");
      }
    }

    const payBtn = document.querySelector(".pay");
    payBtn.textContent = `PAY KES: ${totalNow}`;

    const packageInpt = document.querySelector("#package");
    packageInpt.value = packPicked;

    const services = getServicesPicked(selectServices);

    const servicesInpt = document.querySelector("#services");
    servicesInpt.value = services;
  }
}
const delegateSubmitToBody = document.body;
delegateSubmitToBody.addEventListener("submit", submitFired);
//all elements that need submit are handled here
function submitFired(e) {
  if (e.target.classList.contains("form")) {
    e.preventDefault();
    const form = e.target;
    console.log("event prevented");
    const checkBox = form.querySelector("#acceptCheck");
    const term = form.querySelector(".check");
    if (!checkBox.checked) {
      term.style.color = "red";
      setTimeout(() => {
        term.style.color = "";
      }, 500);
      return;
    } else {
      console.log("terms read");
      console.log(form);
    }
  }
}

const getServicesPicked = (selectServices) => {
  const selectedServices = [];
  const services = selectServices.querySelectorAll("input");
  services.forEach((service) => {
    if (service.checked) {
      const labelText = service.labels[0].textContent;
      selectedServices.push(labelText);
    }
  });
  const selected = selectedServices.join(" | ");
  return selected;
};

const getPrice = (targetId) => {
  let price;
  priceLists.forEach((priceList) => {
    if (priceList.id == targetId) {
      price = priceList.price;
    }
  });
  return price;
};
//insert comma three digits from the right
const getTotal = (currentTotal) => {
  const priceLength = currentTotal.length;
  let newString;
  if (priceLength > 3) {
    const insertionPoint = currentTotal.length - 3;
    newString =
      currentTotal.slice(0, insertionPoint) +
      "," +
      currentTotal.slice(insertionPoint);
  }
  return newString;
};

/*--------------------Gap uploads------------------------ */
// const createDiv = () => document.createElement("div");

const formContainer = createDiv();
formContainer.classList.add("jobseekerUpload", "flex-col");

const seekerHeaderDiv = createDiv();
seekerHeaderDiv.classList.add("seekerHeaderDiv", "flex");

const formContainerCloseDiv = createDiv();
formContainerCloseDiv.classList.add(
  "formContainerCloseDiv",
  "flex",
  "flex-col"
);

const formClose = createDiv(); //close image
formClose.classList.add("formClose");

const closeContainer = document.createElement("p");
closeContainer.classList.add("closeContainer");
closeContainer.textContent = "CLOSE";

formContainerCloseDiv.append(closeContainer, formClose);
seekerHeaderDiv.append(formContainerCloseDiv);

const formArea = createDiv();
formArea.classList.add("formArea", "flex", "flex-col");

const formAreaTitle = document.createElement("p");
formAreaTitle.classList.add("formAreaTitle");
formAreaTitle.textContent = "Fill in the details.";

const formTermsDiv = createDiv();
formTermsDiv.classList.add("formTermsDiv", "flex");

const formDiv = createDiv();
formDiv.classList.add("formDiv", "flex", "flex-col");

const formAreaInstruction = document.createElement("p");
formAreaInstruction.classList.add("formAreaInstruction");
formAreaInstruction.textContent = "Fields marked with * are compulsory.";

const form = document.createElement("form");
form.id = "form";
form.classList.add("form", "flex", "flex-col");

const formDetails = [
  { placeHolder: "Enter your name", legend: "Name", input: "clientName" },
  { placeHolder: "Enter your mail", legend: "Mail*", input: "clientMail" },
  { placeHolder: "Package picked", legend: "Package picked", input: "package" },
  {
    placeHolder: "Service/s picked",
    legend: "Service/s picked",
    input: "services",
  },
  {
    placeHolder: "e.g Energy Officer",
    legend: "Role applying for",
    input: "role",
  },
  { placeHolder: "Upload CV ", legend: "Upload CV*", input: "resume" },
  {
    placeHolder: "Enter M-Pesa number",
    legend: "Phone Number*",
    input: "phone",
  },
];

const formDetailsDiv = createDiv();
formDetailsDiv.classList.add("formDetailsDiv", "flex", "flex-col");

for (let i = 0; i < formDetails.length; i++) {
  const formElement = createDiv();
  formElement.classList.add("formElement", "flex", "flex-col");

  const span = document.createElement("span");
  span.classList.add("errorHandler");

  const inputHolder = createDiv();

  inputHolder.classList.add(
    "inputHolder",
    formDetails[i].input,
    "flex",
    "flex-col"
  );

  const label = createLabel();
  label.setAttribute("for", formDetails[i].input);
  label.classList.add("elementLabel");

  const labelStyle = document.createElement("span");
  labelStyle.className = "labelStyle";
  labelStyle.textContent = formDetails[i].legend;

  label.appendChild(labelStyle);

  let input = createInput();
  input.id = formDetails[i].input;
  input.name = formDetails[i].input;
  input.type = "text";
  if (formDetails[i].input == "package" || formDetails[i].input == "services") {
    input.setAttribute("readonly", "readonly");
  } else if (formDetails[i].input == "resume") {
    input.type = "file";
    input.accept = `.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`;
  } else {
    input.placeholder = formDetails[i].placeHolder;
  }

  inputHolder.append(label, input);
  formElement.append(span, inputHolder);
  formDetailsDiv.appendChild(formElement);
}

const acceptDiv = createDiv();
acceptDiv.classList.add("acceptDiv", "flex");

const acceptCheck = document.createElement("input");
acceptCheck.type = "checkbox";
acceptCheck.className = "acceptCheck";
acceptCheck.id = "acceptCheck";

const acceptLabel = document.createElement("label");
acceptLabel.classList.add("check", "serviceLabel");
acceptLabel.textContent = "I have read & accepted the terms.";
acceptLabel.setAttribute("for", "acceptCheck");

acceptDiv.append(acceptCheck, acceptLabel);

const pay = document.createElement("button");
pay.classList.add("pay");
pay.textContent = "PAY KES:";

form.append(formDetailsDiv, acceptDiv, pay);

formDiv.append(formAreaInstruction, form);

const formAreaTerms = createDiv();
formAreaTerms.classList.add("formAreaTerms", "flex", "flex-col");

const termTitle = createP();
termTitle.className = "termTitle";
termTitle.textContent = "Terms:";

const termsDiv = createDiv();
termsDiv.classList.add("termsDiv", "flex", "flex-col");

formAreaTerms.append(termTitle, termsDiv);

const checkOutTerms = [
  "Payment is ONLY via M-pesa prompt; therefore provide a valid Safaricom number.",
  "Details used for revamping or development are provided by you in the form of a CV.",
  "We may contact you by phone during the process.",
  "Your CV is archived for prospective referral when a suitable match is found.",
  "Payment is upfront and non-refundable.",
  "You are entitled to upto 3 edits within 72 hours of delivery.",
  "All services; save for ' Express Service ' have a Turn Around Time of upto 3 days.",
  "Unless specifically requested by you, deliverable documents are conveyed as .pdf",
];
for (let i = 0; i < checkOutTerms.length; i++) {
  const termDiv = createDiv();
  termDiv.classList.add("termDiv", "flex");
  const bullet = createDiv();
  bullet.classList.add("bullet");
  const term = createP();
  term.className = "term";
  term.textContent = checkOutTerms[i];
  termDiv.append(bullet, term);
  termsDiv.append(termDiv);
}
formTermsDiv.append(formAreaTerms, formDiv);
formArea.append(formAreaTitle, formTermsDiv);
formContainer.append(seekerHeaderDiv, formArea);

document.querySelector("body").append(formContainer);
// document.querySelector("#body-overlay").append(formContainer);
