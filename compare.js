document.addEventListener('DOMContentLoaded', function() {
    const compareSection = document.querySelector('.compare-section');
    const selectedProductCard = document.getElementById('selectedProductCard');
    const similarProductCards = document.getElementById('similarProductCards');
    const comparisonProductSelect = document.getElementById('comparisonProduct');

    // Fetch all products from JSON file
    fetch('./categoryproducts.json')
        .then(response => response.json())
        .then(products => {
            const compareProduct = JSON.parse(localStorage.getItem('compareProduct'));

            if (!compareProduct) {
                compareSection.innerHTML = '<p>No product selected for comparison.</p>';
                return;
            }

            // Populate comparison product dropdown with relevant product names
            products.forEach(product => {
                if (product.category === compareProduct.category && product.id !== compareProduct.id) {
                    const option = document.createElement('option');
                    option.value = product.id;
                    option.innerText = product.productName;
                    comparisonProductSelect.appendChild(option);
                }
            });

            // Display the selected product
            selectedProductCard.innerHTML = `
                <img src="${compareProduct.image}" alt="${compareProduct.productName}">
                <h2>${compareProduct.productName}</h2>
                <p>Price: ₹${compareProduct.price.toLocaleString()}</p>
                <p>Color: ${compareProduct.color || 'N/A'}</p>
                <p>Size: ${compareProduct.size || 'N/A'}</p>
            `;

            // Display similar products based on selected comparison product
            comparisonProductSelect.addEventListener('change', function() {
                const selectedProductId = this.value;
                const selectedComparisonProduct = products.find(product => product.id === selectedProductId);

                // Filter similar products based on selected product name and category
                const similarProducts = products.filter(
                    product => product.productName === selectedComparisonProduct.productName && product.category === compareProduct.category && product.id !== compareProduct.id
                );

                // Display similar products
                if (similarProducts.length > 0) {
                    similarProductCards.innerHTML = '';
                    similarProducts.forEach(product => {
                        similarProductCards.innerHTML += `
                            <div class="product-card">
                                <img src="${product.image}" alt="${product.productName}">
                                <h2>${product.productName}</h2>
                                <p>Price: ₹${parseInt(product.price.replace(/,/g, ''), 10).toLocaleString()}</p>
                                <p>Color: ${product.colors[0]?.colorName || 'N/A'}</p>
                                <p>Size: ${product.sizes[0]?.size || 'N/A'}</p>
                            </div>
                        `;
                    });
                } else {
                    similarProductCards.innerHTML += '<p>No similar products found.</p>';
                }
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const compareSection = document.querySelector('.compare-section');
    const selectedProductCard = document.getElementById('selectedProductCard');
    const similarProductCards = document.getElementById('similarProductCards');
    const comparisonProductSelect = document.getElementById('comparisonProduct');

    // Fetch all products from JSON file
    fetch('./categoryproducts.json')
        .then(response => response.json())
        .then(products => {
            const compareProduct = JSON.parse(localStorage.getItem('compareProduct'));

            if (!compareProduct) {
                compareSection.innerHTML = '<p>No product selected for comparison.</p>';
                return;
            }

            // Display the selected product
            const sizes = compareProduct.size ? compareProduct.size : 'N/A'; // Handle single size
            const colors = compareProduct.color ? compareProduct.color : 'N/A'; // Handle single color

            selectedProductCard.innerHTML = `
                <img src="${compareProduct.image}" alt="${compareProduct.productName}" class="clickable-image">
                <h2>${compareProduct.productName}</h2>
                <p>Price: ₹${compareProduct.price.toLocaleString()}</p>
                <p>Size: ${sizes}</p>
                <p>Color: ${colors}</p>
                <p>Company: ${compareProduct.company || 'N/A'}</p>
            `;

            

            // Populate comparison product dropdown
            const filteredProducts = products.filter(
                product => product.category === compareProduct.category &&
                    product.id !== compareProduct.id
            );

            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const option = document.createElement('option');
                    option.value = product.id;
                    option.innerText = `${product.productName} (${product.company})`;
                    comparisonProductSelect.appendChild(option);
                });

                comparisonProductSelect.addEventListener('change', function () {
                    const selectedProductId = this.value;
                    const selectedComparisonProduct = products.find(product => product.id === selectedProductId);

                    if (selectedComparisonProduct) {
                        // Filter similar products based on the selected product ID and category
                        const similarProducts = products.filter(
                            product => product.id === selectedComparisonProduct.id &&
                                product.category === compareProduct.category &&
                                product.id !== compareProduct.id
                        );

                        similarProductCards.innerHTML = similarProducts.length > 0 ? '' : '<p>No similar products found.</p>';
                        similarProducts.forEach(product => {
                            const productSizes = (product.sizes || []).map(size => size.size).join(', ') || 'N/A';
                            const productColors = (product.colors || []).map(color => color.colorName).join(', ') || 'N/A';

                            similarProductCards.innerHTML += `
                                <div class="product-card">
                                    <img src="${product.image}" alt="${product.productName}" class="clickable-image">
                                    <h2>${product.productName}</h2>
                                    <p>Price: ₹${parseInt(product.price.replace(/,/g, ''), 10).toLocaleString()}</p>
                                    <p>Sizes: ${productSizes}</p>
                                    <p>Colors: ${productColors}</p>
                                    <p>Company: ${product.company || 'N/A'}</p>
                                </div>
                            `;
                        });

                        
                    } else {
                        similarProductCards.innerHTML = '<p>No similar products found.</p>';
                    }
                });
            } else {
                comparisonProductSelect.innerHTML = '<option>No other products available for comparison</option>';
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});






