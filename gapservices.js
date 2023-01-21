"use strict";
// ----------ENTER jobseeker section----------------------------
const jobseeker = createSection();
jobseeker.id = "jobseeker";
jobseeker.classList.add("flex", "flex-col");
const jobseekerHeader = createH1();
jobseekerHeader.className = "jobseekerHeader";
jobseekerHeader.textContent = "GET AN EDGE";
const jobseekerHeaderCopy = createP();
jobseekerHeaderCopy.className = "jobseekerHeaderCopy";
jobseekerHeaderCopy.textContent = "Let the experts handle it for you.";
const servicesHeaderDiv = createDiv();
servicesHeaderDiv.className = "servicesHeaderDiv";
const servicesHeaderIcon = createDiv();
servicesHeaderIcon.className = "servicesHeaderIcon";
const servicesHeader = createP();
servicesHeader.className = "servicesHeader";
servicesHeader.textContent = "SERVICES";
servicesHeaderDiv.append(servicesHeaderIcon, servicesHeader);
const servicesCopy = createP();
servicesCopy.className = "servicesCopy";
servicesCopy.textContent = `Select a service or a combination of services
 in a pack which suits you.`;
const servicesGrid = createDiv();
servicesGrid.id = "servicesGrid";
servicesGrid.classList.add("grid", "flex");

const prep = "Pre-Interview preparation";
const priceBtnHolder = "SELECT SERVICES";
/*--------------Graduate pack---------------------------------------- */
const graduatePack = createDiv();
graduatePack.classList.add("graduatePack", "pack", "flex", "flex-col");
const graduatePackHeaderDiv = createDiv();
graduatePackHeaderDiv.classList.add(
  "graduatePackHeaderDiv",
  "packHeaderDiv",
  "flex",
  "flex-col"
);
const graduatePackHeader = createH2();
graduatePackHeader.classList.add("graduatePackHeader", "packHeader");
graduatePackHeader.textContent = "Graduate Pack";
const graduatePackCopy = createP();
graduatePackCopy.className = "graduatePackCopy";
graduatePackCopy.textContent = "For fresh graduates ONLY";
graduatePackHeaderDiv.append(graduatePackHeader, graduatePackCopy);
const servicesDiv = createDiv();
servicesDiv.classList.add("servicesDiv", "gradServicesDiv", "flex", "flex-col");
const graduateServices = [
  { name: "resume", value: "CV revamp (ATS Compliant)" },
  { name: "cover", value: "Impressive cover letter" },
  { name: "linkedin", value: "LinkedIn Profile Revamp" },
  { name: "coaching", value: "Career coaching" },
  { name: "preparation", value: prep },
];
for (let i = 0; i < graduateServices.length; i++) {
  const serviceDiv = createDiv();
  serviceDiv.classList.add("serviceDiv", "gradServiceDiv", "flex");
  const serviceCheck = createInput();
  serviceCheck.type = "checkbox";
  serviceCheck.className = "checkbox";
  serviceCheck.id = graduateServices[i].name;
  const serviceLabel = createLabel();
  serviceLabel.classList.add("check", "serviceLabel");
  serviceLabel.textContent = graduateServices[i].value;
  serviceLabel.setAttribute("for", graduateServices[i].name);
  serviceDiv.append(serviceCheck, serviceLabel);
  servicesDiv.appendChild(serviceDiv);
}
const serviceBtnG = createA();
serviceBtnG.classList.add("serviceBtn", "serviceBtnG");
// serviceBtnG.href = "/documentupload.html";
serviceBtnG.textContent = "SELECT SERVICES";
graduatePack.append(graduatePackHeaderDiv, servicesDiv, serviceBtnG);
/*--------------Regular pack---------------------------------------- */
const regularPack = createDiv();
regularPack.classList.add("regularPack", "pack", "flex", "flex-col");
const regularPackHeaderDiv = createDiv();
regularPackHeaderDiv.classList.add(
  "regularPackHeaderDiv",
  "packHeaderDiv",
  "flex",
  "flex-col"
);
const regularPackHeader = createH2();
regularPackHeader.classList.add("regularPackHeader", "packHeader");
regularPackHeader.textContent = "Regular Pack";
const regularPackCopy = createP();
regularPackCopy.className = "regularPackCopy";
regularPackCopy.textContent = "";
regularPackHeaderDiv.append(regularPackHeader, regularPackCopy);
const regularServicesDiv = createDiv();
regularServicesDiv.classList.add(
  "servicesDiv",
  "regularServicesDiv",
  "flex",
  "flex-col"
);
const regularServices = [
  { name: "resume-r", value: "CV revamp (Modern CV)" },
  { name: "cover-r", value: "Impressive cover letter" },
  { name: "linkedin-r", value: "LinkedIn Profile Revamp" },
  { name: "coaching-r", value: "Career coaching" },
  { name: "preparation-r", value: prep },
];
for (let i = 0; i < regularServices.length; i++) {
  const serviceDiv = createDiv();
  serviceDiv.classList.add("serviceDiv", "flex");
  const serviceCheck = createInput();
  serviceCheck.type = "checkbox";
  serviceCheck.className = "checkbox";
  serviceCheck.id = regularServices[i].name;
  const serviceLabel = createLabel();
  serviceLabel.classList.add("check", "serviceLabel");
  serviceLabel.textContent = regularServices[i].value;
  serviceLabel.setAttribute("for", regularServices[i].name);
  serviceDiv.append(serviceCheck, serviceLabel);
  regularServicesDiv.appendChild(serviceDiv);
}
const serviceBtnR = createA();
serviceBtnR.classList.add("serviceBtn", "serviceBtnR");
// serviceBtnR.href = "/documentupload.html";
serviceBtnR.textContent = priceBtnHolder;
regularPack.append(regularPackHeaderDiv, regularServicesDiv, serviceBtnR);

/*--------------Executive pack---------------------------------------- */
const executivePack = createDiv();
executivePack.classList.add("executivePack", "pack", "flex", "flex-col");

const executivePackHeaderDiv = createDiv();
executivePackHeaderDiv.classList.add(
  "executivePackHeaderDiv",
  "packHeaderDiv",
  "flex",
  "flex-col"
);
const executivePackHeader = createH2();
executivePackHeader.classList.add("executivePackHeader", "packHeader");
executivePackHeader.textContent = "Executive Pack";
const executivePackCopy = createP();
executivePackCopy.className = "executivePackCopy";
executivePackCopy.textContent = "";
executivePackHeaderDiv.append(executivePackHeader, executivePackCopy);
const executiveServicesDiv = createDiv();
executiveServicesDiv.classList.add(
  "servicesDiv",
  "executiveServicesDiv",
  "flex",
  "flex-col"
);
const executiveServices = [
  { name: "resume-e", value: "CV revamp (Modern CV)" },
  { name: "cover-e", value: "Cover letter" },
  { name: "linkedin-e", value: "LinkedIn Profile Revamp" },
  { name: "professional-e", value: "Professional Bio" },
  { name: "coaching-e", value: "Career coaching" },
  { name: "preparation-e", value: prep },
];
for (let i = 0; i < executiveServices.length; i++) {
  const serviceDiv = createDiv();
  serviceDiv.classList.add("serviceDiv", "flex");
  const serviceCheck = createInput();
  serviceCheck.className = "checkbox";
  serviceCheck.type = "checkbox";
  serviceCheck.id = executiveServices[i].name;
  const serviceLabel = createLabel();
  serviceLabel.classList.add("check", "serviceLabel");
  serviceLabel.textContent = executiveServices[i].value;
  serviceLabel.setAttribute("for", executiveServices[i].name);
  serviceDiv.append(serviceCheck, serviceLabel);
  executiveServicesDiv.appendChild(serviceDiv);
}
const serviceBtnE = createA();
serviceBtnE.classList.add("serviceBtn", "serviceBtnE");
// serviceBtnE.href = "/documentupload.html";
serviceBtnE.textContent = priceBtnHolder;
executivePack.append(executivePackHeaderDiv, executiveServicesDiv, serviceBtnE);
/*--------------Express pack---------------------------------------- */
const expressPack = createDiv();
expressPack.classList.add("expressPack", "pack", "flex", "flex-col");
const expressPackHeaderDiv = createDiv();
expressPackHeaderDiv.classList.add(
  "expressPackHeaderDiv",
  "packHeaderDiv",
  "flex",
  "flex-col"
);
const expressPackHeader = createH2();
expressPackHeader.classList.add("expressPackHeader", "packHeader");
expressPackHeader.textContent = "Express Service";
const expressPackCopy = createP();
expressPackCopy.className = "expressPackCopy";
expressPackCopy.textContent = "Delivered within 24 hours";
expressPackHeaderDiv.append(expressPackHeader, expressPackCopy);
const expressServicesDiv = createDiv();
expressServicesDiv.classList.add(
  "servicesDiv",
  "expressServicesDiv",
  "flex",
  "flex-col"
);
const expressServices = [
  { name: "resume-ex", value: "CV revamp (Modern CV)" },
  { name: "ats-ex", value: "CV revamp (ATS Compliant)" },
  { name: "europass-ex", value: "CV revamp (Europass)" },
  { name: "cover-ex", value: "Cover letter" },
  { name: "linkedin-ex", value: "LinkedIn Profile Revamp" },
  { name: "professional-ex", value: "Professional Bio" },
];
for (let i = 0; i < expressServices.length; i++) {
  const serviceDiv = createDiv();
  serviceDiv.classList.add("serviceDiv", "flex");
  const serviceCheck = createInput();
  serviceCheck.type = "checkbox";
  serviceCheck.className = "checkbox";
  serviceCheck.id = expressServices[i].name;
  const serviceLabel = createLabel();
  serviceLabel.classList.add("check", "serviceLabel");
  serviceLabel.textContent = expressServices[i].value;
  serviceLabel.setAttribute("for", expressServices[i].name);
  serviceDiv.append(serviceCheck, serviceLabel);
  expressServicesDiv.appendChild(serviceDiv);
}
const serviceBtnEx = createA();
serviceBtnEx.classList.add("serviceBtn", "serviceBtnEx");
serviceBtnEx.textContent = priceBtnHolder;
expressPack.append(expressPackHeaderDiv, expressServicesDiv, serviceBtnEx);
/*--------------ATS Compliant CV pack--------------------------------- */
const ats = createDiv();
ats.classList.add("ats", "pack", "flex", "flex-col");
const atsHeaderDiv = createDiv();
atsHeaderDiv.classList.add("atsHeaderDiv", "packHeaderDiv", "flex", "flex-col");
const atsHeader = createH2();
atsHeader.classList.add("atsHeader", "packHeader");
atsHeader.textContent = "ATS Compliant CV";
const atsCopy = createP();
atsCopy.className = "atsCopy";
atsCopy.textContent = "";
atsHeaderDiv.append(atsHeader, atsCopy);
const atsServicesDiv = createDiv();
atsServicesDiv.classList.add(
  "servicesDiv",
  "atsServicesDiv",
  "flex",
  "flex-col"
);
const atsServices = [
  "Concise, clear and compelling CV",
  "Applicable for academia, job and volunteer applications",
  "Re-usable with little tweaks",
  "Crafted to job specificity",
];
for (let i = 0; i < atsServices.length; i++) {
  const serviceDiv = createDiv();
  serviceDiv.classList.add("serviceDiv", "serviceDivATS", "flex");
  const bullet = createDiv();
  bullet.className = "bullet";
  const serviceLabel = createLabel();
  serviceLabel.classList.add("serviceLabel", "serviceLabelATS");
  serviceLabel.textContent = atsServices[i];
  serviceDiv.append(bullet, serviceLabel);
  atsServicesDiv.appendChild(serviceDiv);
}
const serviceBtnAt = createA();
serviceBtnAt.classList.add("serviceBtn", "serviceBtnAt");
serviceBtnAt.setAttribute("data-total", "4000");
// serviceBtnAt.href = "/documentupload.html";
serviceBtnAt.textContent = "KES: 4,000";
ats.append(atsHeaderDiv, atsServicesDiv, serviceBtnAt);
/*--------------Europass CV pack--------------------------------- */
const europassPack = createDiv();
europassPack.classList.add("europassPack", "pack", "flex", "flex-col");
const europassHeaderDiv = createDiv();
europassHeaderDiv.classList.add(
  "europassHeaderDiv",
  "packHeaderDiv",
  "flex",
  "flex-col"
);
const europassHeader = createH2();
europassHeader.classList.add("europassHeader", "packHeader");
europassHeader.textContent = "Europass Resume";
const europassCopy = createP();
europassCopy.className = "europassCopy";
europassCopy.textContent = "An opportunity in Europe?";
europassHeaderDiv.append(europassHeader, europassCopy);
const europassServicesDiv = createDiv();
europassServicesDiv.classList.add(
  "servicesDiv",
  "europassServicesDiv",
  "flex",
  "flex-col"
);
const europassServices = [
  "Concise, clear and compelling CV",
  "Applicable for academia, job and volunteer applications",
  "Re-usable with little tweaks",
  "Crafted to job specificity",
];
for (let i = 0; i < europassServices.length; i++) {
  const serviceDiv = createDiv();
  serviceDiv.classList.add("serviceDiv", "serviceDivEU", "flex");
  const bullet = createDiv();
  bullet.className = "bullet";
  const serviceLabel = createLabel();
  serviceLabel.classList.add("serviceLabel", "serviceLabelEU");
  serviceLabel.textContent = europassServices[i];
  serviceDiv.append(bullet, serviceLabel);
  europassServicesDiv.appendChild(serviceDiv);
}
const serviceBtnEu = createA();
serviceBtnEu.classList.add("serviceBtn", "serviceBtnEu");
serviceBtnEu.setAttribute("data-total", "6500");
serviceBtnEu.textContent = "KES: 6,500";
europassPack.append(europassHeaderDiv, europassServicesDiv, serviceBtnEu);
/*--------------END of packs--------------------------------- */
servicesGrid.append(
  graduatePack,
  regularPack,
  executivePack,
  expressPack,
  europassPack,
  ats
);

const jobseekerMoreDiv = createDiv();
jobseekerMoreDiv.classList.add("jobseekerMoreDiv", "flex");

const listedJobs = document.createElement("a");
listedJobs.className = "actionBtnEmployer";

listedJobs.href = "gapjobs.html";
listedJobs.textContent = "SEE LISTED JOBS";

const actionBtnEmployer = document.createElement("a");
actionBtnEmployer.className = "actionBtnEmployer";
actionBtnEmployer.href = "contact.html";
actionBtnEmployer.textContent = "ENQUIRIES";

jobseekerMoreDiv.append(listedJobs, actionBtnEmployer);

jobseeker.append(
  jobseekerHeader,
  jobseekerHeaderCopy,
  servicesHeaderDiv,
  servicesCopy,
  servicesGrid,
  jobseekerMoreDiv
);
// ----------END jobseeker section----------------------------

document.querySelector("#body-overlay").append(jobseeker, sectionC);
