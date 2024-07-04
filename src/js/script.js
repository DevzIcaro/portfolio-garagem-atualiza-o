/*NAVBAR MENU*/
function showSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'none'
}
/* FIM NAVBAR MENU*/

/* SCROLLTO EVENT*/
const links = document.querySelectorAll("li");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  });
});


/* SCROLL EVENT END*/

/*NAVBAR SCROLL EVENT*/
window.addEventListener("scroll", function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
/*FIM NAVBAR SCROLL EVENT*/

document.querySelector("#items").addEventListener("wheel", event => {
  if(event.deltaY > 0){
    event.target.scrollBy(350, 0)
  } else {
    event.target.scrollBy(-350, 0)
  }
})