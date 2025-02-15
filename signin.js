// const form = document.getElementById('signinForm');
// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());

//   try {
//     const response = await fetch('http://localhost:5000/api/users/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       alert(result.message);
//       localStorage.setItem('token', result.token); // Save token
//       window.location.href = 'dashboard.html'; // Redirect to a dashboard
//     } else {
//       alert(result.message);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// });
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

      
      
const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();
    if (response.ok) {
      localStorage.setItem('token', result.token); // Save the token
      localStorage.setItem('userDetails', JSON.stringify(result.userDetails)); // Save user details
      showAlert(result.message, () => {
        // Redirect to login.html after the alert is shown
        window.location.href = 'home.html';
      });
    } else {
      showAlert(result.message);
    }
      } catch (error) {
        console.error('Error:', error);
      }
    });


function showAlert(message, callback) {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');
  const closeAlert = document.getElementById('close-alert');
  const overlay = document.getElementById('dark-overlay'); // Use unique overlay

  alertMessage.textContent = message;

  alertBox.classList.add('show');
  overlay.classList.add('show'); // Show unique overlay
  alertBox.style.display = 'flex'; // Ensure the alert is visible

  // Remove existing listeners to prevent duplicate events
  closeAlert.removeEventListener('click', handleClose);
  closeAlert.addEventListener('click', handleClose);

  function handleClose() {
    alertBox.classList.remove('show');
    overlay.classList.remove('show'); // Hide unique overlay
    setTimeout(() => {
      alertBox.style.display = 'none';
      if (callback) {
        callback(); // Call the callback function after closing the alert
      }
    }, 300);
  }

  // Automatically close the alert after 2 seconds if no manual close is needed
  setTimeout(() => {
    handleClose();
  }, 2000);
}