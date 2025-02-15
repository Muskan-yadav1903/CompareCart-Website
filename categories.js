// // Wait for the DOM to fully load before running the script
// document.addEventListener("DOMContentLoaded", () => {
//     // Fetch product data from categoryproducts.json
//     fetch('categoryproducts.json')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(i => {
//                 // Create card element
//                 let card = document.createElement("div");

//                 // Add classes for category and hidden state
//                 card.classList.add("card", i.category, "hide");

//                 // Set data-price attribute for filtering purposes
//                 card.setAttribute("data-price", i.price);

//                 // Create image container
//                 let imgContainer = document.createElement("div");
//                 imgContainer.classList.add("image-container");

//                 // Create container for product details
//                 let container = document.createElement("div");
//                 container.classList.add("container");

//                 container.innerHTML = `
//                     <button class="like-btn"><i class="ri-heart-3-fill"></i></button>
//                     ${i.tag ? `<button class="stock-btn">${i.tag}</button>` : ''}
//                     <img src="${i.image}" alt="${i.image}">
//                     <strong class="product-name">${i.productName}</strong>
//                     <div class="price-container">
//                         <span class="price">${"₹" + i.price}</span>
//                         ${i.availableprice ? `<span class="availableprice">${"₹ " + i.availableprice}</span>` : ''}
//                     </div>
//                     <p class="rating">Rating:  ${i.star} </p>

//                     <div class="button-container">
//                         <button class="cart-btn">Add To Cart <i class="ri-shopping-bag-4-fill"></i></button>
//                         <button class="wishlist-btn">Wishlist it <i class="ri-gift-line"></i></button>
//                     </div>
//                 `;

//                 // Append container to card
//                 card.appendChild(container);

//                 // Append card to the products container
//                 document.getElementById("products").appendChild(card);

//                 const addToCartBtn = container.querySelector('.cart-btn');
//                 addToCartBtn.addEventListener('click', function() {
//                     console.log("product added to cart");
//                     addToCart(i);
//                     showAlert(`${i.productName} has been added to your cart!`);
//                 });
//             });

//             // Display all products initially
//             filterProduct("All");
//         })
//         .catch(error => console.error('Error fetching products:', error));
// });

// // Function to filter products based on category
// function filterProduct(value) {
//     // Handle button active state
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//         if (button.innerText.toUpperCase() === value.toUpperCase()) {
//             button.classList.add("active");
//         } else {
//             button.classList.remove("active");
//         }
//     });

//     // Get all product cards
//     let elements = document.querySelectorAll(".card");

//     // Loop through product cards to show/hide based on category
//     elements.forEach((element) => {
//         if (value === "All") {
//             element.classList.remove("hide");
//         } else {
//             if (element.classList.contains(value)) {
//                 element.classList.remove("hide");
//             } else {
//                 element.classList.add("hide");
//             }
//         }
//     });
// }

// function setPriceRange(min, max) {
//     filterByPrice(min, max);
// }

// function filterByPrice(minPrice, maxPrice) {
//     const products = document.querySelectorAll('.card');
//     products.forEach(product => {
//         const price = parseInt(product.getAttribute('data-price').replace(/,/g, ''), 10);
//         if (!isNaN(price)) {
//             console.log('Price:', price);
//             if (price >= minPrice && price <= maxPrice) {
//                 product.classList.remove('hide');
//             } else {
//                 product.classList.add('hide');
//             }
//         }
//     });
// }

// // Function to handle adding to cart
// function addToCart(product) {
//     // Retrieve existing cart items from localStorage
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//     // Check if the product is already in the cart
//     let existingProduct = cartItems.find(item => item.productName === product.productName);

//     if (existingProduct) {
//         // If product exists, increment the quantity
//         existingProduct.quantity += 1;
//     } else {
//         // If product doesn't exist in the cart, add it with quantity 1
//         cartItems.push({ 
//             productName: product.productName, 
//             price: product.price, 
//             image: product.image, 
//             quantity: 1
//         });
//     }

//     // Save updated cart items back to localStorage
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));

//     // Show the custom alert
//     showAlert(`${product.productName} has been added to your cart!`);
// }

// // Function to show the custom alert
// function showAlert(message) {
//     const alertBox = document.getElementById('custom-alert');
//     const alertMessage = document.getElementById('alert-message');
//     const closeAlert = document.getElementById('close-alert');

//     // Set the alert message
//     alertMessage.textContent = message;

//     // Show the alert box
//     alertBox.style.display = 'flex';

//     // Close the alert when the OK button is clicked
//     closeAlert.addEventListener('click', function() {
//         alertBox.style.display = 'none';
//     });
// }

// document.getElementById("search").addEventListener("click", () => {
//     // Get search input value
//     let searchInput = document.getElementById('search-input').value.trim().toUpperCase();

//     // Select product name elements and cards
//     let elements = document.querySelectorAll('.product-name');
//     let cards = document.querySelectorAll(".card");

//     // Check if elements and cards arrays match in length
//     if (elements.length !== cards.length) {
//         console.error('Mismatch between the number of product names and cards.');
//         return; 
//     }

//     // Loop through product names and toggle visibility based on search
//     cards.forEach((card, index) => {
//         // Ensure that the element exists before accessing its innerText
//         let productNameElement = elements[index];
//         if (productNameElement) {
//             let productName = productNameElement.innerText.toUpperCase(); 
//             if (productName.includes(searchInput)) {
//                 card.classList.remove("hide"); // Show card
//             } else {
//                 card.classList.add("hide"); // Hide card
//             }
//         }
//     });
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

  
  

document.addEventListener("DOMContentLoaded", () => {
    // Fetch product data from categoryproducts.json
    fetch('categoryproducts.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((i, index) => {
                // Create card element
                let card = document.createElement("div");

                // Add classes for category and hidden state
                card.classList.add("card", i.category, "hide");

                // Set data-price attribute for filtering purposes
                card.setAttribute("data-price", i.price);

                // Set data-id attribute for adding purposes
                const productId = i.id; 
                card.setAttribute('data-id', productId); 
                console.log(`Assigned ID: ${productId}`); 

                // Create image container
                let imgContainer = document.createElement("div");
                imgContainer.classList.add("image-container");

                // Create container for product details
                let container = document.createElement("div");
                container.classList.add("container");

                container.innerHTML = `
                    
                    ${i.tag ? `<button class="stock-btn">${i.tag}</button>` : ''}
                    <img class="image" onclick="productdetail('${i.id}')" src="${i.image}" alt="${i.image}">

                    <strong class="product-name">${i.productName}</strong>
                    <div class="price-container">
                        <span class="price">${"₹" + i.price}</span>
                        ${i.availableprice ? `<span class="availableprice">${"₹ " + i.availableprice}</span>` : ''}
                    </div>
                    <p class="rating">Rating:  ${i.star} </p>

                    <div class="button-container">
                        <button class="cart-btn">Add To Cart <i class="ri-shopping-bag-4-fill"></i></button>
                        <button class="wishlist-btn">Wishlist it <i class="ri-gift-line"></i></button>
                    </div>
                `;

                // Append container to card
                card.appendChild(container);

                // Append card to the products container
                document.getElementById("products").appendChild(card);

                const addToCartBtn = container.querySelector('.cart-btn');
                addToCartBtn.addEventListener('click', function() {
                    console.log("product added to cart");
                    addToCart(i);
                    showAlert(`${i.productName} has been added to your cart!`);
                });

                const addToWishlistBtn = container.querySelector('.wishlist-btn');
addToWishlistBtn.addEventListener('click', function () {
    console.log("Product added to wishlist");
    addToWishlist(i); // Pass the product data to the function
});
            });

            // Display all products initially
            filterProduct("All");
        })
        .catch(error => console.error('Error fetching products:', error));
});


// Function to filter products based on category
function filterProduct(value) {
    // Handle button active state
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (button.innerText.toUpperCase() === value.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    

    // Get all product cards
    let elements = document.querySelectorAll(".card");

    // Loop through product cards to show/hide based on category
    elements.forEach((element) => {
        if (value === "All") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}
// Function to handle button click and toggle the selected state
function handleButtonSelection(event) {
    const buttons = document.querySelectorAll('.button-value');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

// Adding event listener to buttons
const buttonContainer = document.querySelector('#buttons'); 
if (buttonContainer) {
    buttonContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('button-value')) {
            handleButtonSelection(event);
        }
    });
}

// Function to handle button selection
function handlePriceRangeSelection() {
    const buttons = document.querySelectorAll('#price-range button'); // Get all buttons

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'selected' class from all buttons
            buttons.forEach(btn => btn.classList.remove('selected'));

            // Add the 'selected' class to the clicked button
            button.classList.add('selected');
        });
    });
}

// Call the function to initialize the button selection
handlePriceRangeSelection();


function setPriceRange(min, max) {
    filterByPrice(min, max);
}

function filterByPrice(minPrice, maxPrice) {
    const products = document.querySelectorAll('.card');
    products.forEach(product => {
        const price = parseInt(product.getAttribute('data-price').replace(/,/g, ''), 10);
        if (!isNaN(price)) {
            console.log('Price:', price);
            if (price >= minPrice && price <= maxPrice) {
                product.classList.remove('hide');
            } else {
                product.classList.add('hide');
            }
        }
    });
}

// Function to handle adding to cart
function addToCart(product) {
    
    if (!product.id || !product.productName || !product.price || !product.image) {
        console.error('Invalid product data:', product);
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

// function showAlert2(message) {
//     const alertBox = document.getElementById('custom-alert-2');
//     const alertMessage = document.getElementById('alert-message-2');
//     const closeAlert = document.getElementById('close-alert-2');
//     const overlay = document.getElementById('dark-overlay-2'); // Overlay element

//     alertMessage.textContent = message;

//     alertBox.classList.add('show');
//     overlay.classList.add('show'); // Show the overlay
//     alertBox.style.display = 'flex';  // Make sure the alert box is flexbox-enabled

//     // Close the alert when the OK button is clicked
//     closeAlert.addEventListener('click', function() {
//         alertBox.classList.remove('show');
//         overlay.classList.remove('show'); // Hide the overlay
//         setTimeout(() => {
//             alertBox.style.display = 'none';  // Hide the alert completely after the fade-out
//         }, 300);
//     });
// }

function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlert = document.getElementById('close-alert');
    const overlay = document.getElementById('dark-overlay'); // Use unique overlay

    alertMessage.textContent = message;

    alertBox.classList.add('show');
    overlay.classList.add('show'); // Show unique overlay
    alertBox.style.display = 'flex';  // Ensure the alert is visible

    // Remove existing listeners to prevent duplicate events
    closeAlert.removeEventListener('click', handleClose);
    closeAlert.addEventListener('click', handleClose);

    function handleClose() {
        alertBox.classList.remove('show');
        overlay.classList.remove('show'); // Hide unique overlay
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 300);
    }
}











// Function to show the custom alert
// function showAlert(message) {
//     const alertBox = document.getElementById('custom-alert');
//     const alertMessage = document.getElementById('alert-message');
//     const closeAlert = document.getElementById('close-alert');

    
//     alertMessage.textContent = message;


//     alertBox.style.display = 'flex';

//     // Close the alert when the OK button is clicked
//     closeAlert.addEventListener('click', function() {
//         alertBox.style.display = 'none';
//     });
// }

// function showAlert(message) {
//     const alertBox = document.getElementById('custom-alert');
//     const alertMessage = document.getElementById('alert-message');
//     const closeAlert = document.getElementById('close-alert');

//     alertMessage.textContent = message;

//     alertBox.classList.add('show');
//     alertBox.style.display = 'flex';  // Make sure the alert box is flexbox-enabled

//     // Close the alert when the OK button is clicked
//     closeAlert.addEventListener('click', function() {
//         alertBox.classList.remove('show');
//         setTimeout(() => {
//             alertBox.style.display = 'none';  // Hide it completely after the fade-out
//         }, 300);
//     });
// }





document.getElementById("search").addEventListener("click", () => {
    // Get the trimmed and uppercase value of the search input
    const searchInput = document.getElementById('search-input').value.trim().toUpperCase();

    // Select all product name elements and cards
    const elements = document.querySelectorAll('.product-name');
    const cards = document.querySelectorAll(".card");

    // Check if elements and cards have the same length
    if (elements.length !== cards.length) {
        console.error('Mismatch between the number of product names and cards.');
        return;
    }

    // Create a regex to match the search input as a whole word
    const searchRegex = new RegExp(`\\b${searchInput}\\b`, 'i');

    // Loop through all cards and product names
    elements.forEach((productNameElement, index) => {
        const card = cards[index]; // Get corresponding card
        const productName = productNameElement.innerText.toUpperCase(); 

        // Check if the product name strictly matches the search input
        if (searchRegex.test(productName)) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide"); 
        }
    });

    // Display a message if no cards match the search input
    const visibleCards = document.querySelectorAll(".card:not(.hide)");
    if (visibleCards.length === 0) {
        showAlert("No products found matching your search!");
    }
});

//Function to handle adding items to wishlist
function addToWishlist(product) {
    if (!product.id || !product.productName || !product.price || !product.image) {
        console.error('Invalid product data:', product);
        return;
    }

    // Retrieve existing wishlist items from localStorage
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    // Check if the product is already in the wishlist by ID
    let existingwishlistProduct = wishlistItems.find(item => item.id === product.id);

    if (existingwishlistProduct) {
        // If the product is already in the wishlist, show a message
        viewAlert(`${product.productName} <span class="already-msg">is already in your wishlist!</span>`);

    } else {
        // Add the product to the wishlist
        wishlistItems.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            image: product.image,
        });

        // Save updated wishlist items back to localStorage
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        console.log('Product added to wishlist:', product);

        // Show a success message
        viewAlert(`${product.productName} has been added to your wishlist!`);
    }
}

// function viewAlert(message) {
//     const alertBox = document.getElementById('alert-box');
//     const alertMessage = document.getElementById('alert-box-message');
//     const closeAlert = document.getElementById('alert-box-close');
//     const overlay = document.getElementById('overlay-2'); // Overlay element

//     alertMessage.textContent = message;

//     alertBox.classList.add('show');
//     overlay.classList.add('show'); // Show the overlay
//     alertBox.style.display = 'flex';  // Make sure the alert box is flexbox-enabled

//     // Close the alert when the OK button is clicked
//     closeAlert.addEventListener('click', function() {
//         alertBox.classList.remove('show');
//         overlay.classList.remove('show'); // Hide the overlay
//         setTimeout(() => {
//             alertBox.style.display = 'none';  // Hide the alert completely after the fade-out
//         }, 300);
//     });
// }

function viewAlert(message) {
    const alertBox = document.getElementById('alert-box');
    const alertMessage = document.getElementById('alert-box-message');
    const closeAlert = document.getElementById('alert-box-close');
    const overlay = document.getElementById('overlay-2'); // Overlay element

    // Use innerHTML to render the message with HTML tags
    alertMessage.innerHTML = message;

    alertBox.classList.add('show');
    overlay.classList.add('show'); // Show the overlay
    alertBox.style.display = 'flex'; // Make sure the alert box is flexbox-enabled

    // Close the alert when the OK button is clicked
    closeAlert.addEventListener('click', function () {
        alertBox.classList.remove('show');
        overlay.classList.remove('show'); // Hide the overlay
        setTimeout(() => {
            alertBox.style.display = 'none'; // Hide the alert completely after the fade-out
        }, 300);
    });
}

// // Add Wishlist Event Listener for Each Product
// document.addEventListener("DOMContentLoaded", () => {
//     const wishlistButtons = document.querySelectorAll('.wishlist-btn');
//     wishlistButtons.forEach((button, index) => {
//         button.addEventListener('click', function () {
//             const card = button.closest('.card');
//             const product = {
//                 id: card.getAttribute('data-id'),
//                 productName: card.querySelector('.product-name').innerText,
//                 price: card.querySelector('.price').innerText.replace("₹", "").trim(),
//                 image: card.querySelector('.image').src,
//             };

//             // Add to wishlist
//             addToWishlist(product);
//         });
//     });
// });


function productdetail(productId) {
    // Navigate to the detail page with the product ID as a URL parameter
    window.location.href = `detail.html?id=${encodeURIComponent(productId)}`;
}