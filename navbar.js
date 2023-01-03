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
  { href: "/index.html", text: "" },
  { href: "/index.html", text: "HOME" },
  { href: "/about.html", text: "ABOUT US" },
  { href: "/about.html", text: "TESTIMONIALS" },
  { href: "employer.html", text: "WHY US" },
  { href: "/jobs.html", text: "JOBS" },
  { href: "/blog.html", text: "BLOG" },
  { href: "navPipe.html", text: "|" },
  { href: "/contact.html", text: "CONTACT US" },
];

function removeLastWord(element) {
  var words = element.split(" ");
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

// nav.appendChild(navlinks);
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
