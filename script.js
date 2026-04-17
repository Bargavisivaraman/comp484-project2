// Wait for page to load before running code
$(function() { 
    
    // Show initial values
    checkAndUpdatePetInfoInHtml();
  
    // Connect buttons to functions
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
  
    // JQUERY METHOD 1: .hover()
    // Makes buttons change color when you move mouse over them
    $('button').hover(
      function() {
        $(this).css('background-color', '#4a5568');
      },
      function() {
        $(this).css('background-color', '#1e2835');
      }
    );
    
  })
  
    // Object that holds all pet data
    var pet_info = {
      name: "Buddy", 
      weight: 15, 
      happiness: 50,
      energy: 70
    };
  
    // Treat button - pet gets happy but gains weight
    function clickedTreatButton() {
      pet_info.happiness = pet_info.happiness + 10;
      pet_info.weight = pet_info.weight + 2;
      
      showPetMessage("Yummy! Thanks for the treat! 🦴");
      checkAndUpdatePetInfoInHtml();
    }
    
    // Play button - pet gets happy and burns calories
    function clickedPlayButton() {
      pet_info.happiness = pet_info.happiness + 15;
      pet_info.weight = pet_info.weight - 1;
      pet_info.energy = pet_info.energy - 10;
      
      showPetMessage("That was fun! Let's play again! 🎾");
      checkAndUpdatePetInfoInHtml();
    }
    
    // Exercise button - pet loses weight but gets tired
    function clickedExerciseButton() {
      pet_info.happiness = pet_info.happiness - 5;
      pet_info.weight = pet_info.weight - 3;
      pet_info.energy = pet_info.energy - 15;
      
      showPetMessage("Whew, I'm tired now... 😮‍💨");
      checkAndUpdatePetInfoInHtml();
    }
    
    // Sleep button - restores energy
    function clickedSleepButton() {
      pet_info.energy = pet_info.energy + 25;
      pet_info.happiness = pet_info.happiness - 3;
      
      showPetMessage("Zzzzz... That nap felt great! 😴");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    // Make sure values don't go negative
    function checkWeightAndHappinessBeforeUpdating() {
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
    
    // Update the HTML with current values
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
    }
    
    // Show message from pet
    function showPetMessage(message) {
      // JQUERY METHOD 2: .slideDown()
      // Makes the message box appear with a sliding animation
      
      $('.pet-message').text(message);
      $('.pet-message').slideDown(400);
      
      // Hide message after 3 seconds
      setTimeout(function() {
        $('.pet-message').slideUp(400);
      }, 3000);
    }