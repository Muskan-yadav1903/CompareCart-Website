// let products = null;

// // Loading the dataaa from the json file JSON file
// fetch('categoryproducts.json')
//     .then(response => response.json())
//     .then(data => {
//         products = data;
//         showDetail();
//     })
//     .catch(err => console.error('Error loading product data:', err));

// function showDetail() {
//         const detailContainer = document.querySelector('.detail');
//         const listProductContainer = document.querySelector('.listProduct');
//         const productId = new URLSearchParams(window.location.search).get('id');
//         const thisProduct = products.find(product => product.id === productId);
//         const sizeOptionsContainer = detailContainer.querySelector('.size-options');

//     //  let selectedSize = thisProduct.sizes[0]?.size || "";
//     let selectedSize = thisProduct.sizes && thisProduct.sizes.length > 0 ? thisProduct.sizes[0]?.size : "";

//         // Redirect to home page if product not found
//         if (!thisProduct) {
//             window.location.href = "/";
//             return;
//         }

//         // Update main product details
//         const mainImage = detailContainer.querySelector('.image img');
//         const priceElement = detailContainer.querySelector('.price');
//         const nameElement = detailContainer.querySelector('.name');
//         const descriptionElement = detailContainer.querySelector('.description');
//         const basePrice = parseInt(thisProduct.price.replace(/,/g, ''), 10);
//         nameElement.innerText = thisProduct.productName;
//         descriptionElement.innerText = thisProduct.desc || "No description available.";
//         priceElement.innerText = `₹${parseInt(thisProduct.price.replace(/,/g, ''), 10).toLocaleString()}`;
//         mainImage.src = thisProduct.image;


//     if (thisProduct.availableprice) {
//         // Remove commas and ensure it's a valid number
//         const cleanPrice = thisProduct.availableprice.replace(/,/g, ''); 
//         const formattedPrice = parseInt(cleanPrice, 10).toLocaleString(); 

//         priceElement.innerHTML += ` 
//             <div class="available-price">
//                 M.R.P.: <span class="line-through">₹${formattedPrice}</span>
//             </div>`;
//     } else {
//         console.log("No available price for this product:", thisProduct);
//     }
    
//     let selectedSizeExtraPrice = thisProduct && thisProduct.sizes && thisProduct.sizes.length > 0 ? thisProduct.sizes[0]?.extraPrice : 0;

//     // Redirect to home page if product not found
//     if (!thisProduct) {
//         window.location.href = "/";
//         return;
//     }

//     nameElement.innerText = thisProduct.productName;
//     descriptionElement.innerText = thisProduct.desc || "No description available.";
//     priceElement.innerText = `₹${basePrice.toLocaleString()}`;
//     mainImage.src = thisProduct.image;

//     if (thisProduct.availableprice) {
//         // Remove commas and ensure it's a valid number
//         const cleanPrice = thisProduct.availableprice.replace(/,/g, '');
//         const formattedPrice = parseInt(cleanPrice, 10).toLocaleString();

//         priceElement.innerHTML += `
//         <div class="available-price">
//             M.R.P.: <span class="line-through">₹${formattedPrice}</span>
//         </div>`;
//     } else {
//         console.log("No available price for this product:", thisProduct);
//     }

//     if (thisProduct.star) {
//         const ratingElement = document.createElement('div');
//         ratingElement.className = 'rating-star';
//         ratingElement.innerHTML = `Rating: ${thisProduct.star}`;
//         priceElement.insertAdjacentElement('afterend', ratingElement);
//     }

//     updatePrice();

//     // Function to update price
//     function updatePrice() {
//         const colorPrice = parseInt(selectedColor.price.replace(/,/g, ''), 10);
//         const totalPrice = colorPrice + selectedSizeExtraPrice;

//         // Update main price
//         priceElement.innerHTML = `₹${totalPrice.toLocaleString()}`;

//         // Update available price if present
//         if (thisProduct.availableprice) {
//             const cleanAvailablePrice = thisProduct.availableprice.replace(/,/g, '');
//             const formattedAvailablePrice = parseInt(cleanAvailablePrice, 10).toLocaleString();
//             priceElement.innerHTML += `
//             <div class="available-price">
//                 M.R.P.: <span class="line-through">₹${formattedAvailablePrice}</span>
//             </div>`;
//         }
//     }
//     if (thisProduct.star) {
//         const ratingElement = document.createElement('div');
//         ratingElement.className = 'rating-star';
//         ratingElement.innerHTML = `Rating: ${thisProduct.star}`;
//         priceElement.insertAdjacentElement('afterend', ratingElement);
//     }

//     let selectedColor = thisProduct.colors[0]; // Default to the first color
//     // let selectedSizeExtraPrice = thisProduct.sizes[0]?.extraPrice || 0;

//     // Function to update price
//     function updatePrice() {
//         const colorPrice = parseInt(selectedColor.price.replace(/,/g, ''), 10);
//         const totalPrice = colorPrice + selectedSizeExtraPrice;

//         // Update main price
//         priceElement.innerHTML = `₹${totalPrice.toLocaleString()}`;

//         // Update available price if present
//         if (thisProduct.availableprice) {
//             const cleanAvailablePrice = thisProduct.availableprice.replace(/,/g, '');
//             const formattedAvailablePrice = parseInt(cleanAvailablePrice, 10).toLocaleString();
//             priceElement.innerHTML += `
//             <div class="available-price">
//                 M.R.P.: <span class="line-through">₹${formattedAvailablePrice}</span>
//             </div>`;
//         }
//     }

//     // Function to update thumbnails
//     function updateThumbnails(images) {
//         const thumbnailsContainer = detailContainer.querySelector('.thumbnails');
//         thumbnailsContainer.innerHTML = '';

//         images.forEach((imgSrc, index) => {
//             if (imgSrc) {
//                 const thumbnail = document.createElement('img');
//                 thumbnail.src = imgSrc;
//                 thumbnail.alt = `Thumbnail ${index + 1}`;
//                 thumbnail.classList.add('thumbnail');
//                 thumbnail.addEventListener('click', () => {
//                     mainImage.src = imgSrc;
//                 });
//                 thumbnailsContainer.appendChild(thumbnail);
//             }
//         });
//     }

//     // Function to update color-specific details
//     function updateColorDetails(color) {
//         selectedColor = color;
//         mainImage.src = color.mainImage;
//         updateThumbnails(color.thumbnails);
//         updatePrice();

//         const colorNameElement = detailContainer.querySelector('.selected-color-name');
//         colorNameElement.textContent = `Selected Color: ${color.colorName}`;
//     }

//     const colorThumbnailsContainer = detailContainer.querySelector('.colorthumbnails');
//     colorThumbnailsContainer.innerHTML = '';
//     thisProduct.colors.forEach(color => {
//         const colorThumbnail = document.createElement('img');
//         colorThumbnail.src = color.mainImage;
//         colorThumbnail.alt = color.colorName;
//         colorThumbnail.classList.add('colorthumbnail');

//         // Add click event listener for color selection
//         colorThumbnail.addEventListener('click', () => {
//             document.querySelectorAll('.colorthumbnail').forEach(thumbnail => {
//                 thumbnail.classList.remove('selected');
//             });
//             colorThumbnail.classList.add('selected');

//             updateColorDetails(color);
//         });

//         colorThumbnailsContainer.appendChild(colorThumbnail);
//     });
//     updateColorDetails(selectedColor);
//     const colorNameElement = document.createElement('p');
//     colorNameElement.className = 'selected-color-name';
//     colorNameElement.textContent = `Selected Color: ${selectedColor.colorName}`;


//     // Initialize with default values
//     updateThumbnails(selectedColor.thumbnails || []);
//     updateColorDetails(selectedColor);
//     updatePrice();


//     // Similar products slider
//     const similarProducts = products.filter(
//         product => product.id !== productId && product.category === thisProduct.category
//     );

//     similarProducts.forEach(product => {
//         const productElement = document.createElement('a');
//         productElement.href = `/detail.html?id=${product.id}`;
//         productElement.classList.add('item');
//         productElement.innerHTML = `
//             <img src="${product.image}" alt="">
//             <h2>${product.productName}</h2>
//             <div class="price">₹${product.price.toLocaleString()}</div>
//             <div class="star">${product.star}</div>
//         `;
//         listProductContainer.appendChild(productElement);
//     });

//     initSlider();
//     // Ensure `selectedSize` is updated on size selection
//     if (thisProduct.sizes && thisProduct.sizes.length > 0) {
//         const sizeOptionsContainer = document.querySelector('.size-options');
//         const sizeOptionsHeader = document.getElementById('sizeoptionsh2');

//         thisProduct.sizes.forEach(size => {
//             const button = document.createElement('button');
//             button.className = 'size-btn';
//             button.innerText = size.size;
//             button.dataset.extraPrice = size.extraPrice;

//             // Add click event listener for size selection
//             button.addEventListener('click', () => {
//                 // Remove 'active' class from all buttons
//                 document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
//                 button.classList.add('active');

//                 selectedSize = size.size; // Update the selected size
//                 selectedSizeExtraPrice = parseInt(size.extraPrice, 10);
//                 updatePrice(); // Update price with the selected size
//             });

//             sizeOptionsContainer.appendChild(button);
//         });

//         // Make the size options header visible
//         sizeOptionsHeader.style.display = 'block';
//         sizeOptionsContainer.style.display = 'block';
//     } else {
//         // Hide the size options and header if sizes are not available
//         document.getElementById('sizeoptionsh2').style.display = 'none';
//         document.querySelector('.size-options').style.display = 'none';
//     }


//     document.querySelector('.add-to-cart').addEventListener('click', () => {
//         const selectedPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, ''));

//         // Check if the product is a headphone (no size required)
//         if (thisProduct.category.toLowerCase() !== "headphone") {
//             // Ensure the `selectedSize` reflects the currently selected size for non-headphone products
//             if (!selectedSize) {
//                 showAlert('Please select a size before adding to cart!');
//                 return;
//             }
//         }

//         // Prepare the product to add to the cart
//         const productToAdd = {
//             id: thisProduct.id,
//             productName: thisProduct.productName,
//             price: selectedPrice,
//             image: mainImage.src,
//             quantity: 1,
//             size: selectedSize || null // If no size is selected, set it to null
//         };

//         addToCart(productToAdd);
//     });


//     function addToCart(product) {
//         let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         const existingItem = cartItems.find(item => item.id === product.id && item.image === product.image && item.size === product.size);

//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             cartItems.push(product);
//         }

//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         showAlert(`${product.productName} (${product.size}) has been added to your cart!`);
//     }


//     // Function to show the custom alert
//     function showAlert(message) {
//         const alertBox = document.getElementById('custom-alert');
//         const alertMessage = document.getElementById('alert-message');
//         const closeAlert = document.getElementById('close-alert');


//         alertMessage.textContent = message;


//         alertBox.style.display = 'flex';

//         // Close the alert when the OK button is clicked
//         closeAlert.addEventListener('click', function() {
//             alertBox.style.display = 'none';
//         });
//     }


//     document.querySelector('.add-to-wishlist').addEventListener('click', () => {
//         const selectedPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, ''));

//         // Ensure the `selectedColor` reflects the currently selected color
//         if (!selectedColor) {
//             showAlert('Please select a color before adding to wishlist!');
//             return;
//         }

//         const productToAdd = {
//             id: thisProduct.id,
//             productName: thisProduct.productName,
//             price: selectedPrice,
//             image: mainImage.src,
//             quantity: 1,
//             color: selectedColor.colorName // Only store the selected color
//         };

//         addToWishlist(productToAdd);
//     });

//     function addToWishlist(product) {
//         if (!product.id || !product.productName || !product.price || !product.image || !product.color) {
//             console.error('Invalid product data:', product);
//             return;
//         }

//         // Retrieve existing wishlist items from localStorage
//         let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

//         // Check if the product is already in the wishlist by ID and color
//         let existingWishlistProduct = wishlistItems.find(item => item.id === product.id && item.color === product.color);

//         if (existingWishlistProduct) {
//             // If the product is already in the wishlist, show a message
//             viewAlert(`${product.productName} in ${product.color} <span class="already-msg">is already in your wishlist!</span>`);
//         } else {
//             // Add the product to the wishlist
//             wishlistItems.push({
//                 id: product.id,
//                 productName: product.productName,
//                 price: product.price,
//                 image: product.image,
//                 color: product.color, // Store only color
//             });

//             // Save updated wishlist items back to localStorage
//             localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
//             console.log('Product added to wishlist:', product);

//             // Show a success message
//             viewAlert(`${product.productName} in ${product.color} has been added to your wishlist!`);
//         }
//     }

//     // Function to show a custom alert
//     function viewAlert(message) {
//         const alertBox = document.getElementById('alert-box');
//         const alertMessage = document.getElementById('alert-box-message');
//         const closeAlert = document.getElementById('alert-box-close');
//         const overlay = document.getElementById('overlay-2'); // Overlay element

//         // Use innerHTML to render the message with HTML tags
//         alertMessage.innerHTML = message;

//         alertBox.classList.add('show');
//         overlay.classList.add('show'); // Show the overlay
//         alertBox.style.display = 'flex'; // Make sure the alert box is flexbox-enabled

//         // Close the alert when the OK button is clicked
//         closeAlert.addEventListener('click', function() {
//             alertBox.classList.remove('show');
//             overlay.classList.remove('show'); // Hide the overlay
//             setTimeout(() => {
//                 alertBox.style.display = 'none'; // Hide the alert completely after the fade-out
//             }, 300);
//         });
//     }

//     // // Add Compare button event listener
//     document.querySelector('.compare-btn').addEventListener('click', () => {
//         const selectedProduct = {
//             id: thisProduct.id,
//             productName: thisProduct.productName,
//             price: parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, '')),
//             image: mainImage.src,
//             color: selectedColor.colorName || null,
//             size: selectedSize || null,
//             category: thisProduct.category,
//             company: thisProduct.company // Add category to the selected product object
//         };

//         // Save the selected product to local storage
//         localStorage.setItem('compareProduct', JSON.stringify(selectedProduct));

//         // Redirect to the compare page
//         window.location.href = './compare.html';
//     });




//     // document.querySelector('.compare-btn').addEventListener('click', function() {
//     //     const thisProduct = this.closest('.product-card');
//     //     const priceElement = thisProduct.querySelector('.price');
//     //     const selectedColor = thisProduct.querySelector('.color-select').value;
//     //     const selectedSize = thisProduct.querySelector('.size-select').value;

//     //     const selectedProduct = {
//     //         id: thisProduct.dataset.id,
//     //         productName: thisProduct.querySelector('.product-name').innerText,
//     //         price: parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, '')),
//     //         image: thisProduct.querySelector('img').src,
//     //         color: selectedColor || null,
//     //         size: selectedSize || null
//     //     };

//     //     // Save the selected product to local storage
//     //     localStorage.setItem('compareProduct', JSON.stringify(selectedProduct));

//     //     // Redirect to the compare page
//     //     window.location.href = './compare.html';
//     // });


//     function initSlider() {
//         const slider = document.querySelector('.slider');
//         const prevBtn = document.querySelector('.prev-btn');
//         const nextBtn = document.querySelector('.next-btn');

//         prevBtn.addEventListener('click', () => {
//             slider.scrollBy({
//                 left: -200,
//                 behavior: 'smooth'
//             });
//         });

//         nextBtn.addEventListener('click', () => {
//             slider.scrollBy({
//                 left: 200,
//                 behavior: 'smooth'
//             });
//         });
//     }
// }
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

      
      
let products = null;

// Loading the dataaa from the json file JSON file
fetch('categoryproducts.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        showDetail();
    })
    .catch(err => console.error('Error loading product data:', err));

function showDetail() {
    const detailContainer = document.querySelector('.detail');
    const listProductContainer = document.querySelector('.listProduct');
    const productId = new URLSearchParams(window.location.search).get('id');
    const thisProduct = products.find(product => product.id === productId);
    const sizeOptionsContainer = detailContainer.querySelector('.size-options');
    let selectedSize = thisProduct.sizes[0]?.size || "";


    // Redirect to home page if product not found
    if (!thisProduct) {
        window.location.href = "/";
        return;
    }

    // Update main product details
    const mainImage = detailContainer.querySelector('.image img');
    const priceElement = detailContainer.querySelector('.price');
    const nameElement = detailContainer.querySelector('.name');
    const descriptionElement = detailContainer.querySelector('.description');
    const basePrice = parseInt(thisProduct.price.replace(/,/g, ''), 10);
    nameElement.innerText = thisProduct.productName;
    descriptionElement.innerText = thisProduct.desc || "No description available.";
    priceElement.innerText = `₹${parseInt(thisProduct.price.replace(/,/g, ''), 10).toLocaleString()}`;
    mainImage.src = thisProduct.image;


if (thisProduct.availableprice) {
    // Remove commas and ensure it's a valid number
    const cleanPrice = thisProduct.availableprice.replace(/,/g, ''); 
    const formattedPrice = parseInt(cleanPrice, 10).toLocaleString(); 
    
    priceElement.innerHTML += ` 
        <div class="available-price">
            M.R.P.: <span class="line-through">₹${formattedPrice}</span>
        </div>`;
} else {
    console.log("No available price for this product:", thisProduct);
}

if (thisProduct.star) {
    const ratingElement = document.createElement('div');
    ratingElement.className = 'rating-star';
    ratingElement.innerHTML = `Rating: ${thisProduct.star}`;
    priceElement.insertAdjacentElement('afterend', ratingElement);
}

let selectedColor = thisProduct.colors[0]; // Default to the first color
let selectedSizeExtraPrice = thisProduct.sizes[0]?.extraPrice || 0;

// Function to update price
function updatePrice() {
    const colorPrice = parseInt(selectedColor.price.replace(/,/g, ''), 10);
    const totalPrice = colorPrice + selectedSizeExtraPrice;

    // Update main price
    priceElement.innerHTML = `₹${totalPrice.toLocaleString()}`;

    // Update available price if present
    if (thisProduct.availableprice) {
        const cleanAvailablePrice = thisProduct.availableprice.replace(/,/g, '');
        const formattedAvailablePrice = parseInt(cleanAvailablePrice, 10).toLocaleString();
        priceElement.innerHTML += `
            <div class="available-price">
                M.R.P.: <span class="line-through">₹${formattedAvailablePrice}</span>
            </div>`;
    }
}

// Function to update thumbnails
function updateThumbnails(images) {
    const thumbnailsContainer = detailContainer.querySelector('.thumbnails');
    thumbnailsContainer.innerHTML = ''; 

    images.forEach((imgSrc, index) => {
        if (imgSrc) {
            const thumbnail = document.createElement('img');
            thumbnail.src = imgSrc;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            thumbnail.addEventListener('click', () => {
                mainImage.src = imgSrc; 
            });
            thumbnailsContainer.appendChild(thumbnail);
        }
    });
}

// Function to update color-specific details
function updateColorDetails(color) {
    selectedColor = color;
    mainImage.src = color.mainImage;
    updateThumbnails(color.thumbnails); 
    updatePrice();

    const colorNameElement = detailContainer.querySelector('.selected-color-name');
    colorNameElement.textContent = `Selected Color: ${color.colorName}`;
}

const colorThumbnailsContainer = detailContainer.querySelector('.colorthumbnails');
colorThumbnailsContainer.innerHTML = '';
thisProduct.colors.forEach(color => {
    const colorThumbnail = document.createElement('img');
    colorThumbnail.src = color.mainImage;
    colorThumbnail.alt = color.colorName;
    colorThumbnail.classList.add('colorthumbnail');

    // Add click event listener for color selection
    colorThumbnail.addEventListener('click', () => {
        document.querySelectorAll('.colorthumbnail').forEach(thumbnail => {
            thumbnail.classList.remove('selected');
        });
        colorThumbnail.classList.add('selected');

        updateColorDetails(color); 
    });

    colorThumbnailsContainer.appendChild(colorThumbnail);
});
updateColorDetails(selectedColor);
const colorNameElement = document.createElement('p');
colorNameElement.className = 'selected-color-name';
colorNameElement.textContent = `Selected Color: ${selectedColor.colorName}`;


// Initialize with default values
updateThumbnails(selectedColor.thumbnails || []);
updateColorDetails(selectedColor);
updatePrice();


    // Similar products slider
    const similarProducts = products.filter(
        product => product.id !== productId && product.category === thisProduct.category
    );

    similarProducts.forEach(product => {
        const productElement = document.createElement('a');
        productElement.href = `/frontend/detail.html?id=${product.id}`;
        productElement.classList.add('item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.productName}</h2>
            <div class="price">₹${product.price.toLocaleString()}</div>
            <div class="star">${product.star}</div>
        `;
        listProductContainer.appendChild(productElement);
    });

    initSlider();
    // Ensure `selectedSize` is updated on size selection
    if (thisProduct.sizes && thisProduct.sizes.length > 0) {
        const sizeOptionsContainer = document.querySelector('.size-options');
        const sizeOptionsHeader = document.getElementById('sizeoptionsh2');
    
        thisProduct.sizes.forEach(size => {
            const button = document.createElement('button');
            button.className = 'size-btn';
            button.innerText = size.size;
            button.dataset.extraPrice = size.extraPrice;
    
            // Add click event listener for size selection
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons
                document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
    
                selectedSize = size.size; // Update the selected size
                selectedSizeExtraPrice = parseInt(size.extraPrice, 10);
                updatePrice(); // Update price with the selected size
            });
    
            sizeOptionsContainer.appendChild(button);
        });
    
        // Make the size options header visible
        sizeOptionsHeader.style.display = 'block';
        sizeOptionsContainer.style.display = 'block';
    } else {
        // Hide the size options and header if sizes are not available
        document.getElementById('sizeoptionsh2').style.display = 'none';
        document.querySelector('.size-options').style.display = 'none';
    }
    

// Add to cart functionality
// document.querySelector('.add-to-cart').addEventListener('click', () => {
//     const selectedPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, ''));
    
//     // Ensure the `selectedSize` reflects the currently selected size
//     if (thisProduct.category === "headphone"){ 
//     if (!selectedSize) {
//         showAlert('Please select a size before adding to cart!');
//         return;
//     }
// }

//     const productToAdd = {
//         id: thisProduct.id,
//         productName: thisProduct.productName,
//         price: selectedPrice,
//         image: mainImage.src,
//         quantity: 1,
//         size: selectedSize 
//     };

//     addToCart(productToAdd);
// });

document.querySelector('.add-to-cart').addEventListener('click', () => {
    const selectedPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, ''));

    // Check if the product is a headphone (no size required)
    if (thisProduct.category.toLowerCase() !== "headphone") {
        // Ensure the `selectedSize` reflects the currently selected size for non-headphone products
        if (!selectedSize) {
            showAlert('Please select a size before adding to cart!');
            return;
        }
    }

    // Prepare the product to add to the cart
    const productToAdd = {
        id: thisProduct.id,
        productName: thisProduct.productName,
        price: selectedPrice,
        image: mainImage.src,
        quantity: 1,
        size: selectedSize || null // If no size is selected, set it to null
    };

    addToCart(productToAdd);
});


function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === product.id && item.image === product.image && item.size === product.size);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push(product);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    showAlert(`${product.productName} (${product.size}) has been added to your cart!`);
}


    // Function to show the custom alert
function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlert = document.getElementById('close-alert');

    
    alertMessage.textContent = message;


    alertBox.style.display = 'flex';

    // Close the alert when the OK button is clicked
    closeAlert.addEventListener('click', function() {
        alertBox.style.display = 'none';
    });
}


document.querySelector('.add-to-wishlist').addEventListener('click', () => {
    const selectedPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, ''));
    
    // Ensure the `selectedColor` reflects the currently selected color
    if (!selectedColor) {
        showAlert('Please select a color before adding to wishlist!');
        return;
    }

    const productToAdd = {
        id: thisProduct.id,
        productName: thisProduct.productName,
        price: selectedPrice,
        image: mainImage.src,
        quantity: 1,
        color: selectedColor.colorName // Only store the selected color
    };

    addToWishlist(productToAdd);
});

function addToWishlist(product) {
    if (!product.id || !product.productName || !product.price || !product.image || !product.color) {
        console.error('Invalid product data:', product);
        return;
    }

    // Retrieve existing wishlist items from localStorage
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    // Check if the product is already in the wishlist by ID and color
    let existingWishlistProduct = wishlistItems.find(item => item.id === product.id && item.color === product.color);

    if (existingWishlistProduct) {
        // If the product is already in the wishlist, show a message
        viewAlert(`${product.productName} in ${product.color} <span class="already-msg">is already in your wishlist!</span>`);
    } else {
        // Add the product to the wishlist
        wishlistItems.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            image: product.image,
            color: product.color, // Store only color
        });

        // Save updated wishlist items back to localStorage
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        console.log('Product added to wishlist:', product);

        // Show a success message
        viewAlert(`${product.productName} in ${product.color} has been added to your wishlist!`);
    }
}

document.querySelector('.compare-btn').addEventListener('click', () => {
            const selectedProduct = {
                id: thisProduct.id,
                productName: thisProduct.productName,
                price: parseFloat(priceElement.innerText.replace('₹', '').replace(/,/g, '')),
                image: mainImage.src,
                color: selectedColor.colorName || null,
                size: selectedSize || null,
                category: thisProduct.category,
                company: thisProduct.company // Add category to the selected product object
            };
    
            // Save the selected product to local storage
            localStorage.setItem('compareProduct', JSON.stringify(selectedProduct));
    
            // Redirect to the compare page
            window.location.href = './compare.html';
        });

// Function to show a custom alert
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

    function initSlider() {
        const slider = document.querySelector('.slider');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -200, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
}



    