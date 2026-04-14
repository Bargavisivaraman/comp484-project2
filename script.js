$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);  // My new button
  
    // UNIQUE JQUERY METHOD #1: .hover()
    // This method lets you add effects when mouse enters AND leaves an element
    // First function runs when mouse enters, second function when mouse leaves
    // Makes the buttons interactive and change color on hover
    $('button').hover(
      function() {
        $(this).css('background-color', '#4a5568'); // darker when hovering
      },
      function() {
        $(this).css('background-color', '#1e2835'); // back to original
      }
    );
    
  })
  
    // Pet info object with starting values
    var pet_info = {
      name: "Buddy", 
      weight: 15, 
      happiness: 50,
      energy: 70  // New stat for my sleep button
    };
  
    function clickedTreatButton() {
      // Giving treats makes pet happy but adds weight
      pet_info.happiness = pet_info.happiness + 10;
      pet_info.weight = pet_info.weight + 2;
      
      showPetMessage("Yummy! Thanks for the treat! 🦴");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Playing makes pet happy and burns calories
      pet_info.happiness = pet_info.happiness + 15;
      pet_info.weight = pet_info.weight - 1;
      pet_info.energy = pet_info.energy - 10;
      
      showPetMessage("That was fun! Let's play again! 🎾");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Exercise is tough work, pet loses weight but gets tired
      pet_info.happiness = pet_info.happiness - 5;
      pet_info.weight = pet_info.weight - 3;
      pet_info.energy = pet_info.energy - 15;
      
      showPetMessage("Whew, I'm tired now... 😮‍💨");
      checkAndUpdatePetInfoInHtml();
    }
    
    // NEW BUTTON FUNCTION - Sleep button
    function clickedSleepButton() {
      // Sleeping restores energy but pet gets a little bored
      pet_info.energy = pet_info.energy + 25;
      pet_info.happiness = pet_info.happiness - 3;
      
      showPetMessage("Zzzzz... That nap felt great! 😴");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Make sure values don't go below zero
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }
      
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
      
      if (pet_info.energy < 0) {
        pet_info.energy = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
    }
    
    // Visual notification function - shows pet messages
    function showPetMessage(message) {
      // UNIQUE JQUERY METHOD #2: .slideDown()
      // This method makes an element appear with a smooth sliding animation
      // The number (400) is how fast it slides in milliseconds
      // First we set the text, then slide it down to show it
      
      $('.pet-message').text(message);  // Set the message text
      $('.pet-message').slideDown(400);  // Slide down to reveal the message
      
      // After 3 seconds, slide the message back up to hide it
      setTimeout(function() {
        $('.pet-message').slideUp(400);  // Slide up to hide
      }, 3000);
    }