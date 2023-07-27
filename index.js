function setActiveNavItem() {
  const navItems = document.querySelectorAll("nav a");
  const selectedHref = window.location.hash;
  navItems.forEach((navItem) => {
    if (navItem.getAttribute("href") === selectedHref) {
      navItem.classList.add("active-nav");
    } else {
      navItem.classList.remove("active-nav");
    }
  });
}

setActiveNavItem();

addEventListener("hashchange", () => {
  setActiveNavItem();
});