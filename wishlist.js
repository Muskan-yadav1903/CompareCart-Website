// // Function to load wishlist items from localStorage
// function loadWishlist() {
//     let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
//     console.log('Loaded wishlist:', wishlistItems);

//     let wishlistItemsContainer = document.querySelector('.wishlist-items');

//     if (!wishlistItemsContainer) {
//         console.error('Wishlist container not found!');
//         return;
//     }

//     wishlistItemsContainer.innerHTML = '';

//     if (wishlistItems.length === 0) {
//         wishlistItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
//         return;
//     }

//     wishlistItems.forEach((item, index) => {
//         const row = document.createElement('div');
//         row.classList.add('wishlist-item');

//         row.innerHTML = `
//             <img src="${item.image}" alt="${item.productName}" class="wishlist-item-image" data-id="${item.id}">
//             <div class="wishlist-item-details">
//                 <h2>${item.productName}</h2>
//                 <p>Price: ₹${item.price.toLocaleString()}</p>
//             </div>
//             <div><button data-index="${index}" class="remove-btn">Remove</button></div>
//         `;

//         wishlistItemsContainer.appendChild(row);
//     });

//     wishlistItemsContainer.addEventListener('click', function (event) {
//         const target = event.target;
//         const index = target.getAttribute('data-index');

//         if (target.classList.contains('remove-btn')) {
//             wishlistItems.splice(index, 1);
//             localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
//             loadWishlist();
//         }

//         if (target.classList.contains('wishlist-item-image')) {
//             const productId = target.getAttribute('data-id');
//             window.location.href = `/detail.html?id=${productId}`;
//         }
//     });
// }

// // Load wishlist items on page load
// document.addEventListener('DOMContentLoaded', loadWishlist);
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

      
      
// Function to load wishlist items from localStorage
function loadWishlist() {
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    console.log('Loaded wishlist:', wishlistItems);

    let wishlistItemsContainer = document.querySelector('.wishlist-items');

    if (!wishlistItemsContainer) {
        console.error('Wishlist container not found!');
        return;
    }

    wishlistItemsContainer.innerHTML = '';

    if (wishlistItems.length === 0) {
        wishlistItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
    }

    wishlistItems.forEach((item, index) => {
        const row = document.createElement('div');
        row.classList.add('wishlist-item');

        row.innerHTML = `
            <img src="${item.image}" alt="${item.productName}" class="wishlist-item-image" data-id="${item.id}">
            <div class="wishlist-item-details">
                <h2>${item.productName}</h2>
                <p>Price: ₹${item.price.toLocaleString()}</p>
            </div>
            <div>
                <button data-index="${index}" class="remove-btn">Remove</button>
                <button data-id="${item.id}" class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;

        wishlistItemsContainer.appendChild(row);
    });

    wishlistItemsContainer.addEventListener('click', function (event) {
        const target = event.target;
        const index = target.getAttribute('data-index');
        const productId = target.getAttribute('data-id');

        if (target.classList.contains('remove-btn')) {
            wishlistItems.splice(index, 1);
            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
            loadWishlist();
        }

        // if (target.classList.contains('wishlist-item-image')) {
        //     window.location.href = `/detail.html?id=${productId}`;
        // }

        if (target.classList.contains('wishlist-item-image')) {
            window.location.href = `/frontend/detail.html?id=${productId}`;
        }
        
        if (target.classList.contains('add-to-cart-btn')) {
            addToCart(productId);
        }
    });
}

// Function to add item to the cart
// Function to add a product to the cart
function addToCart(productId) {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    // Find the product in the wishlist by ID
    const product = wishlistItems.find(item => item.id === productId);

    if (!product) {
        console.error('Product not found in wishlist:', productId);
        return;
    }

    // Retrieve existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the product is already in the cart by ID
    let existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
        // If product exists, increment the quantity
        existingProduct.quantity += 1;
    } else {
        // If product doesn't exist in the cart, add it with quantity 1
        cartItems.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    // Save updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Product added to cart:', product);
    console.log('Updated cart:', cartItems);

    // Show the custom alert
    showAlert(`${product.productName} has been added to your cart!`);
}

// Function to show custom alert (you can customize this)
function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlert = document.getElementById('close-alert');
    const overlay = document.getElementById('dark-overlay'); // Overlay element

    alertMessage.textContent = message;

    alertBox.classList.add('show');
    overlay.classList.add('show'); // Show the overlay
    alertBox.style.display = 'flex';  // Make sure the alert box is flexbox-enabled

    // Close the alert when the OK button is clicked
    closeAlert.addEventListener('click', function() {
        alertBox.classList.remove('show');
        overlay.classList.remove('show'); // Hide the overlay
        setTimeout(() => {
            alertBox.style.display = 'none';  // Hide the alert completely after the fade-out
        }, 300);
    });
}

// Example of how the addToCart function is triggered from the wishlist page
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId); // Pass the product ID from the wishlist
    });
});


// Load wishlist items on page load
document.addEventListener('DOMContentLoaded', loadWishlist);
