// Array of card images
const cardImages = [
    "card-1.png",
    "card-2.png",
    "card-3.png",
    "card-4.png",
    "card-5.png",
    "card-6.png",
    "card-7.png",
    // Add more card images here
  ];
  
  // Get the card and randomCard elements
  const card = document.querySelector(".card");
  const randomCard = document.querySelector("#randomCard");
  
  // Add click event listener to the card
  card.addEventListener("click", flipCard);
  
  // Function to flip the card and set a random card image
  function flipCard() {
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
  
      // Get a random index from the cardImages array
      const randomIndex = Math.floor(Math.random() * cardImages.length);
  
      // Set the random card image source
      randomCard.src = cardImages[randomIndex];
    }
  }