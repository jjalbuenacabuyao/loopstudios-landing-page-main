const navToggler = document.querySelector("[data-navToggler]");
const navigation = document.querySelector("[data-navigation]");
const menuIcon = document.querySelector("[data-menuIcon]");
const closeIcon = document.querySelector("[data-closeIcon]");

navToggler.addEventListener("click", () => {
  const isVisible = navigation.getAttribute("data-visible") === "true"
  menuIcon.classList.toggle("hidden")
  if (!isVisible){
    closeIcon.classList.replace("hidden", "block")
    navigation.classList.replace("scale-0", "scale-1")
    navigation.setAttribute("data-visible", "true")
    document.body.style.overflowY = "hidden"
  } else {
    closeIcon.classList.replace("block", "hidden")
    navigation.classList.replace("scale-1", "scale-0")
    navigation.setAttribute("data-visible", "flase")
    document.body.style.overflowY = "auto"
  }
  
})