let show = true;

const menuSection = document.querySelector(".menu")
const menuToggle = menuSection.querySelector(".menu-toggle")
const aoverlay = document.querySelector(".overlay")
const html = document.querySelector("html")

menuToggle.addEventListener("click", () => {
  html.style.overflowY = show ? "hidden" : "initial"

  menuSection.classList.toggle("on", show)

  if (show) {
    aoverlay.classList.toggle("on")
  } else {
    aaoverlay.classList.remove("on")
  }

  show = !show;
})

aoverlay.addEventListener("click", () => {
  aoverlay.classList.remove("on")
  menuSection.classList.remove("on")

  show = !show
  html.style.overflowY = show ?  "initial" : "hidden"
})