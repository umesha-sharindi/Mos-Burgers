const menuItems = {
    burgers: [
        { id: 'B1001', name: 'Classic Burger (Large)', price: 750.00, expirationDate: '2024-07-15', quantity: 10, image: 'classic_burger_large.jpg'},
        { id: 'B1002', name: 'Classic Burger (Regular)', price: 1500.00, discount: 15, expirationDate: '2024-07-15', quantity: 15, image: 'classic_burger_regular.jpg' },
        { id: 'B1003', name: 'Turkey Burger', price: 1600.00, expirationDate: '2024-07-15', quantity: 12, image: 'turkey_burger.jpg' },
        { id: 'B1004', name: 'Chicken Burger (Large)', price: 1400.00, expirationDate: '2024-07-15', quantity: 8, image: 'chicken_burger_large.jpg' },
        { id: 'B1005', name: 'Chicken Burger (Regular)', price: 800.00, discount: 20, expirationDate: '2024-07-15', quantity: 10, image: 'chicken_burger_regular.jpg' },
        { id: 'B1006', name: 'Cheese Burger (Large)', price: 1000.00, expirationDate: '2024-07-15', quantity: 15, image: 'cheese_burger_large.jpg' },
        { id: 'B1007', name: 'Cheese Burger (Regular)', price: 600.00, expirationDate: '2024-07-15', quantity: 20, image: 'cheese_burger_regular.jpg' },
        { id: 'B1008', name: 'Bacon Burger', price: 650.00, discount: 15, expirationDate: '2024-07-15', quantity: 10, image: 'bacon_burger.jpg' },
        { id: 'B1009', name: 'Shawarma Burger', price: 800.00, expirationDate: '2024-07-15', quantity: 18, image: 'shawarma_burger.jpg' },
        { id: 'B1010', name: 'Olive Burger', price: 1800.00, expirationDate: '2024-07-15', quantity: 10, image: 'olive_burger.jpg' },
        { id: 'B1012', name: 'Double-Cheese Burger', price: 1250.00, discount: 20, expirationDate: '2024-07-15', quantity: 12, image: 'double_cheese_burger.jpg' },
        { id: 'B1013', name: 'Crispy Chicken Burger (Regular)', price: 1200.00, expirationDate: '2024-07-15', quantity: 15, image: 'crispy_chicken_burger_regular.jpg' },
        { id: 'B1014', name: 'Crispy Chicken Burger (Large)', price: 1600.00, discount: 10, expirationDate: '2024-07-15', quantity: 8, image: 'crispy_chicken_burger_large.jpg' },
        { id: 'B1015', name: 'Paneer Burger', price: 900.00, expirationDate: '2024-07-15', quantity: 20, image: 'paneer_burger.jpg' }
    ],
    submarines: [
        { id: 'B1016', name: 'Crispy Chicken Submarine (Large)', price: 2000.00, expirationDate: '2024-07-15', quantity: 5, image: 'crispy_chicken_submarine_large.jpg' },
        { id: 'B1017', name: 'Crispy Chicken Submarine (Regular)', price: 1500.00, expirationDate: '2024-07-15', quantity: 8, image: 'crispy_chicken_submarine_regular.jpg' },
        { id: 'B1018', name: 'Chicken Submarine (Large)', price: 1800.00, discount: 3, expirationDate: '2024-07-15', quantity: 10, image: 'chicken_submarine_large.jpg' },
        { id: 'B1019', name: 'Chicken Submarine (Regular)', price: 1400.00, expirationDate: '2024-07-15', quantity: 12, image: 'chicken_submarine_regular.jpg' },
        { id: 'B1020', name: 'Grinder Submarine', price: 2300.00, expirationDate: '2024-07-15', quantity: 8, image: 'grinder_submarine.jpg' },
        { id: 'B1021', name: 'Cheese Submarine', price: 2200.00, expirationDate: '2024-07-15', quantity: 15, image: 'cheese_submarine.jpg' },
        { id: 'B1022', name: 'Double Cheese n Chicken Submarine', price: 1900.00, discount: 16, expirationDate: '2024-07-15', quantity: 10, image: 'double_cheese_chicken_submarine.jpg' },
        { id: 'B1023', name: 'Special Horgie Submarine', price: 2800.00, expirationDate: '2024-07-15', quantity: 12, image: 'special_horgie_submarine.jpg' },
        { id: 'B1024', name: 'MOS Special Submarine', price: 3000.00, expirationDate: '2024-07-15', quantity: 8, image: 'mos_special_submarine.jpg' }
    ],
    fries: [
        { id: 'B1025', name: 'Steak Fries (Large)', price: 1200.00, expirationDate: '2024-07-15', quantity: 15, image: 'steak_fries_large.jpg' },
        { id: 'B1026', name: 'Steak Fries (Medium)', price: 600.00, expirationDate: '2024-07-15', quantity: 20, image: 'steak_fries_medium.jpg' },
        { id: 'B1027', name: 'French Fries (Large)', price: 800.00, expirationDate: '2024-07-15', quantity: 18, image: 'french_fries_large.jpg' },
        { id: 'B1028', name: 'French Fries (Medium)', price: 650.00, expirationDate: '2024-07-15', quantity: 25, image: 'french_fries_medium.jpg' },
        { id: 'B1029', name: 'French Fries (Small)', price: 450.00, expirationDate: '2024-07-15', quantity: 30, image: 'french_fries_small.jpg' },
        { id: 'B1030', name: 'Sweet Potato Fries (Large)', price: 600.00, expirationDate: '2024-07-15', quantity: 12, image: 'sweet_potato_fries_large.jpg' }
    ],
    pasta: [
        { id: 'B1031', name: 'Chicken n Cheese Pasta', price: 1600.00, discount: 15, expirationDate: '2024-07-15', quantity: 8, image: 'chicken_cheese_pasta.jpg' },
        { id: 'B1032', name: 'Chicken Penne Pasta', price: 1800.00, expirationDate: '2024-07-15', quantity: 10, image: 'chicken_penne_pasta.jpg' },
        { id: 'B1033', name: 'Chicken Alfredo Pasta', price: 2000.00, expirationDate: '2024-07-15', quantity: 12, image: 'chicken_alfredo_pasta.jpg' },
        { id: 'B1034', name: 'MOS Special Pasta', price: 2200.00, expirationDate: '2024-07-15', quantity: 15, image: 'mos_special_pasta.jpg' },
        { id: 'B1035', name: 'Mushroom n Chicken Pasta', price: 2400.00, discount: 12, expirationDate: '2024-07-15', quantity: 8, image: 'mushroom_chicken_pasta.jpg' },
        { id: 'B1036', name: 'Red Sauce Pasta', price: 1400.00, expirationDate: '2024-07-15', quantity: 20, image: 'red_sauce_pasta.jpg' },
        { id: 'B1037', name: 'Creamy Pesto Pasta', price: 1800.00, expirationDate: '2024-07-15', quantity: 10, image: 'creamy_pesto_pasta.jpg' },
        { id: 'B1038', name: 'Classic Pasta', price: 1200.00, discount: 10, expirationDate: '2024-07-15', quantity: 12, image: 'classic_pasta.jpg' }
    ],
    beverages: [
        { id: 'B1044', name: 'Pepsi (330ml)', price: 990.00, discount: 5, expirationDate: '2024-07-15', quantity: 8, image: 'pepsi.jpg' },
        { id: 'B1045', name: 'Coca-Cola (330ml)', price: 1230.00, expirationDate: '2024-07-15', quantity: 10, image: 'coca_cola.jpg' },
        { id: 'B1046', name: 'Sprite (330ml)', price: 1500.00, discount: 3, expirationDate: '2024-07-15', quantity: 12, image: 'sprite.jpg' },
        { id: 'B1047', name: 'Mirinda (330ml)', price: 850.00, discount: 7, expirationDate: '2024-07-15', quantity: 12, image: 'mirinda.jpg' }
    ]
};
const cartItemsContainer = document.getElementById('cart-items');
const totalAmountElement = document.getElementById('total-amount');
const addCustomerForm = document.getElementById('add-customer-form');
const customerList = document.getElementById('customer-list');
const generateBillButton = document.getElementById('generate-bill');
const thankYouMessage = document.getElementById('thank-you-message');

// Function to render menu items
function renderMenuItems() {
    Object.keys(menuItems).forEach(category => {
        const categorySection = createCategorySection(category);
        menuItems[category].forEach(item => {
            const menuItem = createMenuItem(item);
            categorySection.appendChild(menuItem);
        });
        menuContainer.appendChild(categorySection);
    });
}

// Function to create category section
function createCategorySection(category) {
    const categorySection = document.createElement('div');
    categorySection.classList.add('menu-category');
    categorySection.innerHTML = `<h3>${capitalizeFirstLetter(category)}</h3>`;
    return categorySection;
}

// Function to create menu item element
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <h4>${item.name}</h4>
        <img src="images/${item.image}" alt="${item.name}">
        <p>Price: LKR ${item.price.toFixed(2)}${item.discount ? ` <span class="discount-tag">-${item.discount}%</span>` : ''}</p>
        <button class="btn btn-primary btn-sm mt-2">Add to Cart</button>
    `;
    const addToCartButton = menuItem.querySelector('button');
    addToCartButton.addEventListener('click', () => addToCart(item));
    return menuItem;
}

// Function to add item to cart
function addToCart(item) {
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span>${item.name}</span>
        <span>LKR ${calculateDiscountedPrice(item)}</span>
        <button class="btn btn-danger btn-sm remove-item">✖</button>
    `;
    cartItemsContainer.appendChild(cartItem);
    updateTotal();

    // Add event listener to the remove button
    const removeButton = cartItem.querySelector('.remove-item');
    removeButton.addEventListener('click', () => {
        cartItem.remove();
        updateTotal();
    });
}

// Function to calculate discounted price
function calculateDiscountedPrice(item) {
    if (item.discount) {
        return (item.price * (1 - item.discount / 100)).toFixed(2);
    } else {
        return item.price.toFixed(2);
    }
}

// Function to update total amount in cart
function updateTotal() {
    let totalAmount = 0;
    const cartItems = cartItemsContainer.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const priceString = item.querySelector('span:nth-child(2)').textContent;
        const price = parseFloat(priceString.replace('LKR ', ''));
        totalAmount += price;
    });
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Event listener for adding customer
addCustomerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const customerNameInput = document.getElementById('customer-name');
    const customerName = customerNameInput.value.trim();
    if (customerName !== '') {
        addCustomer(customerName);
        customerNameInput.value = '';
    }
});

// Function to add customer to the list
function addCustomer(name) {
    const customerItem = document.createElement('li');
    customerItem.classList.add('customer-item');
    customerItem.textContent = name;
    customerList.appendChild(customerItem);
    alert(`Customer added successfully👋`)
}

// Event listener for generating bill
generateBillButton.addEventListener('click', function() {
    const totalAmount = totalAmountElement.textContent;
    if (totalAmount !== '0.00') {
        generateBill();
        clearCart();
    }
});

function generateBill() {
    const totalAmount = totalAmountElement.textContent;
    alert(`Total amount: LKR ${totalAmount}`);

    // Show modal popup for thank you message
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <p>Thank you for your purchase!🤗🤗🤗</p>
            <p>Come Again!❤️<p>
        </div>
    `;
    document.body.appendChild(modal);

    // Function to close modal
    window.closeModal = function() {
        modal.style.display = 'none';
    };
}

// Function to clear cart after generating bill
function clearCart() {
    cartItemsContainer.innerHTML = '';
    totalAmountElement.textContent = '0.00';
}

// Helper function to capitalize first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the menu rendering
const menuContainer = document.getElementById('menu-items');
renderMenuItems();