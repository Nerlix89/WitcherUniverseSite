const SupportCards = document.querySelectorAll(".support-card");

SupportCards.forEach((Card) =>
    {
      Card.addEventListener("mouseleave", () => {
        Card.classList.remove("fade-out-background"); 
        void Card.offsetWidth; 
        Card.classList.add("fade-out-background"); 
      })
    })