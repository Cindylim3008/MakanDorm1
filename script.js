document.addEventListener('DOMContentLoaded', function() {
  console.log(1)
  const mealTypeSelect = document.getElementById('meal-type');
  const recipesList = document.getElementById('recipes-list');

  const recipes = {
    breakfast: ['Kaya Toast', 'Nasi Lemak', 'Chwee Kueh'],
    lunch: ['Chicken Rice', 'Laksa', 'Char Kway Teow'],
    dinner: ['Hainanese Chicken Rice', 'Satay', 'Chilli Crab'],
    dessert: ['Kueh Lapis', 'Ondeh-Ondeh', 'Chendol'],
    'one-dish': ['Claypot Rice', 'Nasi Goreng', 'Pasta'],
  };

  mealTypeSelect.addEventListener('change', function() {
    const selectedMeal = mealTypeSelect.value;
    const mealRecipes = recipes[selectedMeal] || [];
    displayRecipes(mealRecipes);
  });

  function displayRecipes(mealRecipes) {
    recipesList.innerHTML = '';
    if (mealRecipes.length > 0) {
      const ul = document.createElement('ul');
      mealRecipes.forEach(function(recipe) {
        const li = document.createElement('li');
        li.textContent = recipe;
        ul.appendChild(li);
      });
      recipesList.appendChild(ul);
    } else {
      recipesList.textContent = 'No recipes available for this meal type.';
    }
  }

  // Initialize with default meal type
  mealTypeSelect.dispatchEvent(new Event('change'));
});


document.addEventListener('DOMContentLoaded', function() {
  console.log(2)
  const mealTypeSelect = document.getElementById('meal-type');
  const recipesList = document.getElementById('recipes-list');
  const searchInput = document.getElementById('search-input');

  const recipes = {
    breakfast: ['Kaya Toast', 'Nasi Lemak', 'Chwee Kueh'],
    lunch: ['Chicken Rice', 'Laksa', 'Char Kway Teow'],
    dinner: ['Hainanese Chicken Rice', 'Satay', 'Chilli Crab'],
    dessert: ['Kueh Lapis', 'Ondeh-Ondeh', 'Chendol'],
    'one-dish': ['Claypot Rice', 'Nasi Goreng', 'Pasta'],
  };

  if (mealTypeSelect) {
    mealTypeSelect.addEventListener('change', function() {
      const selectedMeal = mealTypeSelect.value;
      const mealRecipes = recipes[selectedMeal] || [];
      displayRecipes(mealRecipes);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      const selectedMeal = mealTypeSelect.value;
      const mealRecipes = recipes[selectedMeal] || [];
      const filteredRecipes = mealRecipes.filter(recipe =>
        recipe.toLowerCase().includes(query)
      );
      displayRecipes(filteredRecipes);
    });
  }

  function displayRecipes(mealRecipes) {
    recipesList.innerHTML = '';
    if (mealRecipes.length > 0) {
      const ul = document.createElement('ul');
      mealRecipes.forEach(function(recipe) {
        const li = document.createElement('li');
        li.textContent = recipe;
        ul.appendChild(li);
      });
      recipesList.appendChild(ul);
    } else {
      recipesList.textContent = 'No recipes available.';
    }
  }

  // Initialize with default meal type
  if (mealTypeSelect) {
    mealTypeSelect.dispatchEvent(new Event('change'));
  }

  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (message.trim()) {
        /*
        // Here, you can handle the form submission, e.g., send data to a server
        console.log('Feedback Submitted:', { name, email, message });

        // Show success message
        document.getElementById('successMessage').classList.remove('hidden');

        // Optionally, clear the form
        document.getElementById('feedbackForm').reset();
*/
        location.href = "Thankyou_Feedback.html"
      } else {
        alert('Please provide a message.');
      }
    });
  }


  let liked = false;
  let likeCount = 0;

  const likeIcon = document.getElementById('like-icon');
  const likeCounter = document.getElementById('like-count');

  console.log(likeIcon);
  console.log('sfd')
  likeIcon.addEventListener('click', () => {
    console.log('sfd')
    liked = !liked;
    
    if (liked) {
      likeCount++;
      likeIcon.src = '../images/heart-filled.png'; // Replace with your filled heart image
    } else {
      likeCount--;
      likeIcon.src = '../images/heart-outline.png'; // Replace with your outline heart image
    }

    likeCounter.textContent = likeCount;
  });

});

function submitComment() {

  const nameInput = document.getElementById('name-input');
  const commentInput = document.getElementById('comment-input');
  const commentList = document.getElementById('comment-list');

  let defName = "Guest";
  let guestName = "";
  if (nameInput.value == ""){
    guestName = defName;
  }else{
    guestName = nameInput.value;
  }

  if (commentInput.value.trim() !== '') {
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = guestName + " says: " + commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = '';
  } else {
    alert('Please enter a comment before submitting.');
  }
}

