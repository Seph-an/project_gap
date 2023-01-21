//All variables and functions here are accessible from all files
const createSection = () => document.createElement("section");
const createDiv = () => document.createElement("div");
const createH1 = () => document.createElement("h1");
const createH2 = () => document.createElement("h3");
const createP = () => document.createElement("p");
const createInput = () => document.createElement("input");
const createLabel = () => document.createElement("label");
const createA = () => document.createElement("a");
//navigation bar
const nav = document.createElement("nav");
nav.id = "navbar";
nav.className = "flex";

// MENU button in the navbar
const button = document.createElement("button");
button.classList.add("mobile-nav-toggle");
button.setAttribute("aria-controls", "primary-navigation");
button.setAttribute("aria-expanded", "false");

const span = document.createElement("span");
span.classList.add("sr-only");
span.textContent = "MENU";

button.appendChild(span);

//navigation links in the navbar
const navlinks = document.createElement("div");
navlinks.setAttribute("id", "primary-navigation");
navlinks.setAttribute("data-visible", "false");
navlinks.classList.add("primary-navigation", "flex");

const links = [
  { href: "index.html", text: "" },
  { href: "index.html", text: "HOME" },
  { href: "about.html", text: "ABOUT US" },
  { href: "about.html#testimonials", text: "TESTIMONIALS" },
  { href: "employer.html", text: "WHY US" },
  { href: "https://www.careers-page.com/gaprecruitment", text: "JOBS" },
  { href: "/blog.html", text: "BLOG" },
  { href: "navPipe.html", text: "|" },
  { href: "contact.html", text: "CONTACT US" },
];

function removeLastWord(element) {
  let words = element.split(" ");
  /*split the string at any occurrence of
   a space or a dash by using RegEx as the delimitter*/
  // let words = element.split(/[ -]/);
  if (words.length > 1) {
    words.pop();
  }
  return words[0];
}
// Create the links and append them to the nav element or div element as appropriate
for (let i = 0; i < links.length; i++) {
  const link = document.createElement("a");
  link.href = links[i].href;
  link.textContent = links[i].text;
  if (i > 0) {
    if (i == 7) {
      link.classList.add("navPipe");
      navlinks.appendChild(link);
    } else {
      const classUnq = removeLastWord(links[i].text);
      link.classList.add("navlink", classUnq);
      navlinks.appendChild(link);
    }
  } else {
    link.id = "logo";
    nav.appendChild(link);
  }
}

nav.append(button, navlinks);

document.querySelector("#body-overlay").appendChild(nav);

//functionality of the navigation links on a shrinking screen
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);

    console.log("now toggled");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);

    console.log("now not toggled");
  }
});
//------------FOOTER SECTION--------------------
const sectionC = createSection();
sectionC.id = "social-footer";
sectionC.classList.add("flex", "flex-col");
const socialHeaderDiv = createDiv();
socialHeaderDiv.classList.add("socialHeaderDiv", "flex");
const socialHeaderIcon = createDiv();
socialHeaderIcon.className = "socialHeaderIcon";
const socialHeader = createP();
socialHeader.className = "socialHeader";
socialHeader.textContent = "Connect with us on our social";
socialHeaderDiv.append(socialHeaderIcon, socialHeader);
const socialsDiv = createDiv();
socialsDiv.classList.add("socialsDiv", "flex");
const socials = [
  { name: "linkedin", link: "/linkdein" },
  { name: "twitter", link: "/twitter" },
  { name: "facebook", link: "/facebook" },
  { name: "insta", link: "/insta" },
  { name: "whatsapp", link: "/whatsapp" },
];
socials.forEach((social) => {
  const a = document.createElement("a");
  a.classList.add("social", social.name);
  a.href = social.link;
  socialsDiv.append(a);
});
const footerDiv = document.createElement("div");
footerDiv.classList.add("footerDiv", "flex");
const footers = [
  { href: "/terms.html", text: "Terms & Conditions" },
  { href: "#", text: "|" },
  { href: "all.html", text: "All Rights Reserved" },
];
footers.forEach((footer, i) => {
  const a = document.createElement("a");
  a.href = footer.href;
  a.textContent = footer.text;
  let footerClass = "";
  if (i == 1) {
    footerClass = "footerPipe";
  } else {
    footerClass = removeLastWord(footer.text);
  }
  a.classList.add("footer", footerClass);
  footerDiv.append(a);
});

sectionC.append(socialHeaderDiv, socialsDiv, footerDiv);
