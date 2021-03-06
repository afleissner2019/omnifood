// console.log("Hello");

// const name = "Af";
// console.log(name);

// h1= customize name, document.querySelector=default from js,
// ".heading-primary"= class from html that has h1 tag
// const h1 = document.querySelector(".heading-primary");
// console.log(h1);

//to make it visible on the page
// h1.textContent = name;
// h1.style.backgroundColor = "red";
// h1.style.padding = "5rem";

// h1.addEventListener("click", function () {
//   h1.textContent = name;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// Set current year
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearElement.textContent = currentYear;

// MAke mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

// Smooth Scrolling Animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      console.log(sectionElement);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});

// Sticky Navigation
// element that we want to observe "section-hero"
const sectionHeroElement = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroElement);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}
.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}
.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}
.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}
.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}
.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}
.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}
.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}
.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}
@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}
@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
