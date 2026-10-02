import { page_hero } from "./reusable/hero.js";
document.querySelector("#aboutUs").innerHTML = page_hero({
  image: "../asset/image/contact/angkor_sunrise.webp",
  imagename: "Angkor wat",
  title: "About Explore Cambodia",
  description:
    "A small, locally-run team building slower, more honest trips through a country we grew up in — plus everything you'd want to know about Cambodia itself before you go.",
  about_link: "../Pages/about-me.html",
  contact_link: "../Pages/contact.html",
  contact_hero: "About us",
});
