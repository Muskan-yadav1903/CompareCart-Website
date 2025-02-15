// const form = document.getElementById('signupForm');
//     form.addEventListener('submit', async (e) => {
//       e.preventDefault();

//       const formData = new FormData(form);
//       const data = Object.fromEntries(formData.entries());

//       try {
//         const response = await fetch('http://localhost:5000/api/users/signup', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data),
//         });

//         const result = await response.json();
//         if (response.ok) {
//           showAlert(result.message);
//           window.location.href = 'login.html'; // Redirect to login page
//         } else {
//           showAlert(result.message);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     });

//     function showAlert(message) {
//         const alertBox = document.getElementById('custom-alert');
//         const alertMessage = document.getElementById('alert-message');
//         const closeAlert = document.getElementById('close-alert');
//         const overlay = document.getElementById('dark-overlay'); // Use unique overlay
    
//         alertMessage.textContent = message;
    
//         alertBox.classList.add('show');
//         overlay.classList.add('show'); // Show unique overlay
//         alertBox.style.display = 'flex';  // Ensure the alert is visible
    
//         // Remove existing listeners to prevent duplicate events
//         closeAlert.removeEventListener('click', handleClose);
//         closeAlert.addEventListener('click', handleClose);
    
//         function handleClose() {
//             alertBox.classList.remove('show');
//             overlay.classList.remove('show'); // Hide unique overlay
//             setTimeout(() => {
//                 alertBox.style.display = 'none';
//             }, 300);
//         }
//     }

const form = document.getElementById('signupForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:5000/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      showAlert(result.message, () => {
        // Redirect to login.html after the alert is shown
        window.location.href = 'signin.html';
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
