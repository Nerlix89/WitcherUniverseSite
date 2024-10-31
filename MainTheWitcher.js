const SectionsDescriptions = document.querySelectorAll(".section-flex-area");
const SectionsVideos = document.querySelectorAll(".section-video");

SectionsDescriptions.forEach((descrip, index) => {
  descrip.addEventListener("mouseenter", () => {
    SectionsVideos[index].play();
  });
  descrip.addEventListener("mouseleave", () => {
    SectionsVideos[index].pause();
    SectionsVideos[index].currentTime = 0;
  });
})


