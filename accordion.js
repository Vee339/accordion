let sections = document.getElementsByTagName("a");

var divsToHide = document.getElementsByClassName("accordion-section");

for (const section of sections) {
  section.addEventListener("click", function () {
    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
    let content = document.getElementById(section.className);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
