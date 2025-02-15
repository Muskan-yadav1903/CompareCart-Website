
const images = [
    'https://cdn.create.vista.com/api/media/small/196884578/stock-photo-smiling-stylish-asian-woman-shopping-bags-yellow-background',
    'https://img.freepik.com/premium-photo/beautiful-girl-with-shopping-bags-looking-camera-smiling-while-doing-shopping-mall_217236-1391.jpg',
    'https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8=',
    'https://st.depositphotos.com/62628780/59978/i/450/depositphotos_599787816-stock-photo-trendy-stylish-fashionable-woman-shopping.jpg',
    'https://img.freepik.com/free-photo/portrait-expressive-young-woman-with-shopping-bags_1258-27973.jpg'
];

let currentIndex = 0;
const sliderImage = document.querySelector('.slider-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.classList.add('hidden');
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.classList.remove('hidden');
    }, 500); // Change the image after fade-out
}

setInterval(changeImage, 3000); // Change image every 3 seconds


const accountLink = document.querySelector('.account-link');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add a delay for showing the dropdown menu
let hoverTimeout;
accountLink.addEventListener('mouseenter', () => {
    hoverTimeout = setTimeout(() => {
        dropdownMenu.style.display = 'block';
    }, 200); // Delay the dropdown by 200ms
});

// Hide the dropdown immediately if mouse leaves
accountLink.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
    dropdownMenu.style.display = 'none';
});


// document.getElementById('search').addEventListener('click', function() {
//     const searchQuery = document.getElementById('search-input').value.trim();
//     if (searchQuery) {
//         // Redirect to categories.html with the search query as a URL parameter
//         window.location.href = `categories.html?search=${encodeURIComponent(searchQuery)}`;
//     } else {
//         alert('Please enter a search term.');
//     }
// });

    // window.onload = function() {
    //   const token = localStorage.getItem('token');
    //   const username = localStorage.getItem('username'); // If you stored the username

    //   if (token) {
    //     // User is logged in, show their details or home page content
    //     document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
    //   } else {
    //     // User is not logged in, redirect to login page
    //     window.location.href = 'login.html';
    //   }
    // };


    document.addEventListener('DOMContentLoaded', () => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        const accountLink = document.getElementById('account-link');
        const userDetailsDiv = document.getElementById('user-details');
        const logoutButton = document.getElementById('logout-button');
        const signupButton = document.getElementById('signup-button');
        const signinButton = document.getElementById('signin-button');
      
        // Check if the user is logged in
        if (userDetails) {
          // Update the account link to show the user's name
          accountLink.textContent = `Account (${userDetails.name})`;
      
          // Show user details
          document.getElementById('user-name').textContent = `Name: ${userDetails.name}`;
          document.getElementById('user-username').textContent = `Username: ${userDetails.username}`;
          userDetailsDiv.style.display = 'block';
      
          // Show logout button, hide sign-up and sign-in buttons
          signupButton.style.display = 'none';
          signinButton.style.display = 'none';
          logoutButton.style.display = 'block';
        } else {
          // Reset account link text
          accountLink.textContent = 'Account';
      
          // Hide user details and logout button
          userDetailsDiv.style.display = 'none';
          logoutButton.style.display = 'none';
      
          // Show sign-up and sign-in buttons
          signupButton.style.display = 'block';
          signinButton.style.display = 'block';
        }
      });
      
      // Handle account link click
      document.getElementById('account-link').addEventListener('click', () => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        const userDetailsDiv = document.getElementById('user-details');
        const logoutButton = document.getElementById('logout-button');
      
        if (userDetails) {
          // Update user details dynamically
          document.getElementById('user-name').textContent = `Name: ${userDetails.name}`;
          document.getElementById('user-username').textContent = `Username: ${userDetails.username}`;
      
          // Show user details and logout button
          userDetailsDiv.style.display = 'block';
          logoutButton.style.display = 'block';
        } else {
          // Hide user details and logout button if no user is logged in
          userDetailsDiv.style.display = 'none';
          logoutButton.style.display = 'none';
        }
      });
      
      // Handle logout button click
      document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.removeItem('token'); // Clear token
        localStorage.removeItem('userDetails'); // Clear user details
        alert('You have been logged out.');
        window.location.href = 'signin.html'; // Redirect to sign-in page
      });

      
      