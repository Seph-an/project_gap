("use strict");

// -------------- Enter gap-profile section -----------------------

const sectionA = createSection();
sectionA.id = "gap-profile";
sectionA.classList.add("flex", "flex-col");

const profileHeaderDiv = createDiv();
profileHeaderDiv.classList.add("profileHeaderDiv", "flex");

const profileHeaderIcon = createDiv();
profileHeaderIcon.className = "profileHeaderIcon";

const profileHeader = createP();
profileHeader.className = "profileHeader";
profileHeader.textContent = "ABOUT US";

profileHeaderDiv.append(profileHeaderIcon, profileHeader);

const profileUnderHeader = createP();
profileUnderHeader.className = "profileUnderHeader";
profileUnderHeader.textContent = `Welcome to Gap Recruitment Services Limited!`;

const profileCopy = createP();
profileCopy.className = "profileCopy";
profileCopy.textContent = `As a client-focused recruitment firm, we are dedicated
 to helping organizations like yours find top talent to drive your success by
  focusing on quality, efficiency, and speed, to help you optimize your
   performance and deliver the best possible results to your customers.`;

const missionVision = createDiv();
missionVision.classList.add("missionVision", "flex", "flex-col");

const missionHeader = createP();
missionHeader.className = "missionHeader";
missionHeader.textContent = "OUR MISSION";

const mission = createP();
mission.className = "mission";
mission.textContent = `To help businesses find and hire top talents, resulting
 in mutually beneficial partnerships and success for all parties involved.`;

const visionHeader = createP();
visionHeader.className = "visionHeader";
visionHeader.textContent = "OUR VISION";

const vision = createP();
vision.className = "vision";
vision.textContent = `To be the trusted partner that helps companies grow and
 succeed through our talent acquisition services.`;

missionVision.append(missionHeader, mission, visionHeader, vision);

const valuesHeaderDiv = createDiv();
valuesHeaderDiv.classList.add("valuesHeaderDiv", "flex");

const valuesIcon = createDiv();
valuesIcon.className = "valuesIcon";

const valuesHeader = createP();
valuesHeader.className = "valuesHeader";
valuesHeader.textContent = "OUR CORE VALUES";

valuesHeaderDiv.append(valuesIcon, valuesHeader);

const valuesDiv = createDiv();
valuesDiv.classList.add("valuesDiv", "grid", "flex");

const values = [
  {
    value: "Integrity",
    content: `We embrace and uphold the highest standards of personal
     and professional ethics, honesty and trust.`,
  },
  {
    value: "Respect",
    content: `We treat each other, our clients and candidates with
     mutual respect and sensitivity. `,
  },
  {
    value: "Collaboration",
    content: `We work as a team and share knowledge for continuous
     improvement, learning and innovation.`,
  },
  {
    value: "Communication",
    content: `We believe in keeping open communication throughout
     our process, we ensure our clients and candidates are well
      updated at all times.`,
  },
  {
    value: "Responsibility",
    content: `We are responsible to fulfill our commitments to clients
     with a clear understanding of the urgency and accountability
      inherent in those commitments.`,
  },
];

for (let i = 0; i < values.length; i++) {
  const valueDiv = createDiv();
  valueDiv.classList.add("valueDiv", "flex", "flex-col");

  const valueHeader = createDiv();
  const value = values[i].value;
  valueHeader.classList.add("valueHeader", value, "flex");
  valueHeader.textContent = value;

  const valueContent = createP();
  valueContent.className = "valueContent";
  valueContent.textContent = values[i].content;

  valueDiv.append(valueHeader, valueContent);
  valuesDiv.appendChild(valueDiv);
}

sectionA.append(
  profileHeaderDiv,
  profileUnderHeader,
  profileCopy,
  missionVision,
  valuesHeaderDiv,
  valuesDiv
);

// --------------End gap-profile section --------------------------

// --------------Testimonial section ------------------------------
const testimonials = createSection();
testimonials.id = "testimonials";
testimonials.classList.add("testimonials", "flex", "flex-col");

const testimonialsHeaderDiv = createDiv();
testimonialsHeaderDiv.id = "testimonialsHeaderDiv";
testimonialsHeaderDiv.classList.add("flex");

const testimonialsHeaderIcon = createDiv();
testimonialsHeaderIcon.id = "testimonialsHeaderIcon";

const testimonialsHeader = createP();
testimonialsHeader.id = "testimonialsHeader";
testimonialsHeader.textContent = "TESTIMONIALS";

const testimonialsUnderHeader = createP();
testimonialsUnderHeader.className = "testimonialsUnderHeader";
testimonialsUnderHeader.textContent =
  "See what some of our clients say about us.";

const testimonies = createDiv();
testimonies.id = "testimonies";
testimonies.classList.add("testimonies", "flex");

for (let i = 0; i < 3; i++) {
  const testimonyDiv = createDiv();
  testimonyDiv.classList.add("testimonyDiv", "flex", "flex-col");
  const testimony = createP();
  testimony.className = "testimony";
  const testimonyAuthor = createP();
  testimonyAuthor.className = "testimonyAuthor";
  switch (i) {
    case 0:
      testimony.textContent = `"Your company consistently goes
           above and beyond to deliver exceptional service, 
           and it truly sets you apart in the industry."`;
      testimonyAuthor.textContent = "~ Jedi Pet Foods LTD.";
      break;
    case 1:
      testimony.textContent = `"Your excellent customer service
           is truly unparalleled, and it's always a pleasure
            doing business with your company." `;
      testimonyAuthor.textContent = "~ JayKen Supplies";

      break;
    case 2:
      testimony.textContent = `"Your exceptional service has truly
             made a difference in our business and we are deeply
              grateful for all that you have done." `;
      testimonyAuthor.textContent = "~ EarthSol Consulting ";

      break;
  }
  testimonyDiv.append(testimony, testimonyAuthor);
  testimonies.appendChild(testimonyDiv);
}
testimonialsHeaderDiv.append(testimonialsHeaderIcon, testimonialsHeader);

// --------------End Testimonial section --------------------------
// ------------------Enter credentials -----------------------------------

const credentialsHeaderDiv = createDiv();
credentialsHeaderDiv.classList.add("credentialsHeaderDiv", "flex");

const credentialsHeaderIcon = createDiv();
credentialsHeaderIcon.classList.add("credentialsHeaderIcon");

const credentialsHeader = createP();
credentialsHeader.className = "credentialsHeader";
credentialsHeader.textContent = "CREDENTIALS";

const credentials = createDiv();
credentials.classList.add("credentials", "flex");

for (let i = 0; i < 3; i++) {
  const credential = createDiv();
  credential.className = "credential";
  credentials.appendChild(credential);
}

credentialsHeaderDiv.append(credentialsHeaderIcon, credentialsHeader);

testimonials.append(
  testimonialsHeaderDiv,
  testimonialsUnderHeader,
  testimonies,
  credentialsHeaderDiv,
  credentials
);

// ------------------End credentials -----------------------------------

document
  .querySelector("#body-overlay")
  .append(sectionA, testimonials, sectionC);
// appendSocialFooter();
