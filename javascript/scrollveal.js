const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  origin: "bottom",
  duration: 1000,
  desktop: true,
  mobile: true,
};
var elementText = document.getElementById("speciality");

function changeText() {
  var textOriginal = elementText.textContent;
  switch (textOriginal) {
      case "Python":
          elementText.textContent = textOriginal.replace("Python", "C#");
          break;
      case "C#":
          elementText.textContent = textOriginal.replace("C#", "Mobile");
          break;
      case "Mobile":
          elementText.textContent = textOriginal.replace("Mobile", "Python");
          break;
  }
}

setInterval(changeText, 2500);

//Universal values
ScrollReveal().reveal(".hero-title", {
  ...defaultProps,
  delay: 500,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});

// Hero Section
ScrollReveal().reveal(".name", {
  ...defaultProps,
  distance: "0px",
  delay: 700,
  scale: 0,
});

ScrollReveal().reveal(".speciality", {
  ...defaultProps,
  distance: "0px",
  delay: 1000,
  scale: 0,
});

ScrollReveal().reveal(".hero-cta", {
  ...defaultProps,
  delay: 1200,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".scroll-down-link", {
  ...defaultProps,
  delay: 2000,
  origin: "top",
});

/* About Section */
ScrollReveal().reveal(".section-title", {
  ...defaultProps,
  delay: 400,
  distance: "0px",
});
ScrollReveal().reveal(".about-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0.5,
});

ScrollReveal().reveal(".about-wrapper__info", {
  ...defaultProps,
  delay: 700,
  distance: "100px",
  origin: window.innerWidth > 768 ? "left" : "top",
});

/* Projects Section */
ScrollReveal().reveal(".project-wrapper__text", {
  ...defaultProps,
  delay: 600,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".project-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0.9,
  origin: window.innerWidth > 768 ? "right" : "bottom",
});

/* Skills Section */
ScrollReveal().reveal(".skill-wrapper__text", {
  ...defaultProps,
  delay: 600,
  scale: 0.9,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".skill-wrapper__icon", {
  ...defaultProps,
  delay: 600,
  scale: 0.9,
  origin: window.innerWidth > 768 ? "right" : "bottom",
});
/* Contact Section */
ScrollReveal().reveal(".contact-wrapper", {
  ...defaultProps,
  delay: 600,
});

ScrollReveal().reveal(".back-to-top", {
  ...defaultProps,
  delay: 500,
  interval: 100,
});

ScrollReveal().reveal(".fa-brands", {
  ...defaultProps,
  delay: 500,
  interval: 100,
});
