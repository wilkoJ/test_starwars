window.addEventListener("scroll", () => {
  parallax(".logoBg");
  parallax(".paragraph", -0.3);
  parallax(".headerBg");
});

const parallax = (selector, speed = 0.4) => {
  const scrolled = window.pageYOffset;
  const element = document.querySelector(selector);
  // You can adjust the 0.4 to change the speed
  const coords = scrolled * speed + "px";
  element.style.transform = `translateY(${coords})`;
};
