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

// export function appendSocialFooter() {
//   sectionC.append(socialHeaderDiv, socialsDiv, footerDiv);
// }
export function appendSocialFooter() {
  sectionC.append(socialHeaderDiv, socialsDiv, footerDiv);
  return sectionC;
}
